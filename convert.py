import re
import os

with open('codigo.txt', 'r', encoding='utf-8') as f:
    html = f.read()

# Extract body content roughly
body_match = re.search(r'<body>(.*?)</body>', html, re.DOTALL | re.IGNORECASE)
if body_match:
    html = body_match.group(1)

# Remove proprietary wrappers
html = re.sub(r'<x-dc>', '', html)
html = re.sub(r'</x-dc>', '', html)
html = re.sub(r'<helmet>.*?</helmet>', '', html, flags=re.DOTALL | re.IGNORECASE)

# Handle basic react conversions
html = html.replace('class=', 'className=')
html = html.replace('style-hover=', 'data-hover=') 
html = html.replace('style-focus=', 'data-focus=') 
html = html.replace('hint-placeholder-val=', 'data-hint-val=')
html = html.replace('hint-placeholder-count=', 'data-hint-count=')

# Function to convert css string to react style object
def style_to_react(match):
    style_str = match.group(1)
    rules = style_str.split(';')
    react_style = []
    for rule in rules:
        rule = rule.strip()
        if not rule:
            continue
        parts = rule.split(':', 1)
        if len(parts) == 2:
            key = parts[0].strip()
            val = parts[1].strip()
            # camelCase key
            key_parts = key.split('-')
            if key.startswith('-webkit-'):
                key_camel = 'Webkit' + ''.join(word.title() for word in key_parts[2:])
            else:
                key_camel = key_parts[0] + ''.join(word.title() for word in key_parts[1:])
            
            # wrap val in quotes if not already
            if '{{' in val:
                val = val.replace('{{', '${').replace('}}', '}')
                react_style.append(f"{key_camel}: `{val}`")
            else:
                val = val.replace("'", "\\'")
                react_style.append(f"{key_camel}: '{val}'")
    return 'style={{ ' + ', '.join(react_style) + ' }}'

html = re.sub(r'style=\"(.*?)\"', style_to_react, html)

# Fix onClick='{{ ... }}' to onClick={...}
html = re.sub(r'onClick=\"\{\{\s*(.*?)\s*\}\}\"', r'onClick={\1}', html)
html = re.sub(r'onChange=\"\{\{\s*(.*?)\s*\}\}\"', r'onChange={\1}', html)

# Fix <sc-if>
html = re.sub(r'<sc-if value=\"\{\{\s*(.*?)\s*\}\}\"[^>]*>', r'{\1 && (<>', html)
html = re.sub(r'</sc-if>', r'</>)}', html)

# Fix <sc-for>
html = re.sub(r'<sc-for list=\"\{\{\s*(.*?)\s*\}\}\" as=\"(.*?)\"[^>]*>', r'{\1?.map(\2 => (<React.Fragment key={Math.random()}>', html)
html = re.sub(r'</sc-for>', r'</React.Fragment>))}', html)

# Fix text interpolation {{ var }} to {var}
html = re.sub(r'\{\{\s*(.*?)\s*\}\}', r'{\1}', html)

# Fix self closing tags
html = re.sub(r'<(img|input|br|hr)([^>]*?)(?<!/)>', r'<\1\2 />', html)

# Remove comments
html = re.sub(r'<!--(.*?)-->', '', html)

# Replace all class= with className= (again just in case)
html = html.replace('class=', 'className=')

# Provide placeholder variables
react_code = f'''import React, {{ useState }} from "react";
import {{ createFileRoute }} from "@tanstack/react-router";

export const Route = createFileRoute("/")({{
  component: LandingPage,
}});

function LandingPage() {{
  const [isHome, setIsHome] = useState(true);
  const [isBrowse, setIsBrowse] = useState(false);
  const [isCommunity, setIsCommunity] = useState(false);
  const [isPart, setIsPart] = useState(false);
  const [showContribute, setShowContribute] = useState(false);
  
  const navHomeActive = isHome;
  const navBrowseActive = isBrowse || isPart;
  const navCommActive = isCommunity;

  const goHome = () => {{ setIsHome(true); setIsBrowse(false); setIsCommunity(false); setIsPart(false); }};
  const goBrowse = () => {{ setIsHome(false); setIsBrowse(true); setIsCommunity(false); setIsPart(false); }};
  const goCommunity = () => {{ setIsHome(false); setIsBrowse(false); setIsCommunity(true); setIsPart(false); }};
  
  const openContribute = () => setShowContribute(true);
  const closeContribute = () => setShowContribute(false);
  const stopProp = (e: any) => e.stopPropagation();

  // Mock data
  const typeTabs = [{{label: 'Carros', active: true, onClick: () => {{}} }}, {{label: 'Motos', active: false, onClick: () => {{}} }}];
  const marcas = [{{nome: 'Chevrolet', modelosCount: 42, active: true, onPick: () => {{}} }}];
  const modelos = [{{nome: 'Onix', active: true, onPick: () => {{}} }}];
  const anos = [{{label: '2016-2019 (G1)', active: true, onPick: () => {{}} }}];
  const heroChips = [{{label: 'Corrente de comando Onix', onClick: () => {{}} }}];
  const popular = [{{marca: 'Chevrolet', modelo: 'Onix', anos: '2013-2019', manuais: 142, tipo: 'Carro', label: 'Onix', onSelect: goBrowse}}];
  const recentPosts = [{{categoria: 'Diagnóstico', titulo: 'Barulho na suspensão', autor: 'João', papel: 'Mecânico', tempo: '2h', votos: 12, initials: 'J', avatarColor: '#1f8a5b', catColor: '#d2232a', onVote: () => {{}}, voteBg: '#fff', voteBorder: '#e6e8ec', voteColor: '#14213d', veiculo: 'Onix 1.4', corpo: 'Dica rápida...', comentarios: 3}}];
  
  const showHowItWorks = true;
  const showModelos = true;
  const showAnos = true;
  const showParts = true;
  const marcaSel = 'Chevrolet';
  const modeloSel = 'Onix';
  const selVehicleLabel = 'Chevrolet Onix';
  const catTabs = [{{label: 'Motor', active: true, onClick: () => {{}} }}];
  const partsList = [{{nome: 'Corrente de Comando', resumo: 'Kit distribuição', categoria: 'Motor', iniciais: 'MO', catColor: '#1f8a5b', problemasCount: 2, codigoOEM: '55230255', precoMin: '380', precoMax: '760', onOpen: () => setIsPart(true)}}];
  
  const stat1 = '4.2k'; const stat2 = '12k'; const stat3 = '8.5k'; const stat4 = '15k';

  // Part data mock
  const hasPart = true;
  const partVehicleLabel = 'Chevrolet Onix';
  const part = {{
    nome: 'Corrente de Comando',
    resumo: 'Kit distribuição completo',
    iniciais: 'MO',
    categoria: 'Motor',
    catColor: '#1f8a5b',
    fotos: ['Foto 1'],
    problemas: [{{sintoma: 'Ruído', freqColor: '#d2232a', freq: 'Alta', difColor: '#d2232a', dificuldade: 'Difícil', causa: 'Desgaste', solucao: 'Trocar'}}],
    codigoOEM: '55230255',
    codigosAlt: ['123456'],
    precoMin: '380',
    precoMax: '760',
    especificacoes: [{{l: 'Material', v: 'Aço'}}],
    compatibilidade: [{{v: 'Onix 1.4', anos: '2013-2019'}}]
  }};

  const commChips = [{{label: 'Todos', active: true, onClick: () => {{}} }}];
  const posts = recentPosts;
  
  // Forms
  const formVeiculo = "";
  const onFormVeiculo = () => {{}};
  const formCats = [{{label: 'Motor', active: true, onClick: () => {{}} }}];
  const formTitulo = "";
  const onFormTitulo = () => {{}};

  return (
    <div className="min-h-screen">
      {html}
    </div>
  );
}}
'''

with open('src/routes/index.tsx', 'w', encoding='utf-8') as f:
    f.write(react_code)

print('Conversion complete!')
