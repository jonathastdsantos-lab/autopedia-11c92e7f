const fs = require('fs');

let html = fs.readFileSync('codigo.txt', 'utf-8');

// Extract body content roughly
const bodyMatch = html.match(/<body>([\s\S]*?)<\/body>/i);
if (bodyMatch) {
    html = bodyMatch[1];
}

// Remove proprietary wrappers
html = html.replace(/<x-dc>/gi, '');
html = html.replace(/<\/x-dc>/gi, '');
html = html.replace(/<helmet>[\s\S]*?<\/helmet>/gi, '');

// Handle basic react conversions
html = html.replace(/class=/g, 'className=');
html = html.replace(/style-hover=/g, 'data-hover=');
html = html.replace(/style-focus=/g, 'data-focus=');
html = html.replace(/hint-placeholder-val=/g, 'data-hint-val=');
html = html.replace(/hint-placeholder-count=/g, 'data-hint-count=');

// Function to convert css string to react style object
html = html.replace(/style="([^"]*?)"/g, (match, styleStr) => {
    const rules = styleStr.split(';');
    const reactStyle = [];
    for (let rule of rules) {
        rule = rule.trim();
        if (!rule) continue;
        const parts = rule.split(':');
        if (parts.length >= 2) {
            const key = parts[0].trim();
            const val = parts.slice(1).join(':').trim();
            
            // camelCase key
            const keyParts = key.split('-');
            let keyCamel = '';
            if (key.startsWith('-webkit-')) {
                keyCamel = 'Webkit' + keyParts.slice(2).map(w => w.charAt(0).toUpperCase() + w.slice(1)).join('');
            } else {
                keyCamel = keyParts[0] + keyParts.slice(1).map(w => w.charAt(0).toUpperCase() + w.slice(1)).join('');
            }
            
            // wrap val in quotes if not already
            if (val.includes('{{')) {
                let formattedVal = val.replace(/\{\{/g, '${').replace(/\}\}/g, '}');
                reactStyle.push(`${keyCamel}: \`${formattedVal}\``);
            } else {
                let formattedVal = val.replace(/'/g, "\\'");
                reactStyle.push(`${keyCamel}: '${formattedVal}'`);
            }
        }
    }
    return `style={{ ${reactStyle.join(', ')} }}`;
});

// Fix onClick='{{ ... }}' to onClick={...}
html = html.replace(/onClick="\{\{\s*(.*?)\s*\}\}"/g, 'onClick={$1}');
html = html.replace(/onChange="\{\{\s*(.*?)\s*\}\}"/g, 'onChange={$1}');

// Fix <sc-if>
html = html.replace(/<sc-if value="\{\{\s*(.*?)\s*\}\}"[^>]*>/g, '{$1 && (<>');
html = html.replace(/<\/sc-if>/g, '</>)}');

// Fix <sc-for>
html = html.replace(/<sc-for list="\{\{\s*(.*?)\s*\}\}" as="(.*?)"[^>]*>/g, '{$1?.map($2 => (<React.Fragment key={Math.random()}>');
html = html.replace(/<\/sc-for>/g, '</React.Fragment>))}');

// Fix text interpolation {{ var }} to {var}
html = html.replace(/\{\{\s*(.*?)\s*\}\}/g, '{$1}');

// Fix self closing tags
html = html.replace(/<(img|input|br|hr)([^>]*?)(?<!\/)>/g, '<$1$2 />');

// Remove comments
html = html.replace(/<!--[\s\S]*?-->/g, '');

// Replace all class= with className= (again just in case)
html = html.replace(/class=/g, 'className=');

// Provide placeholder variables
const reactCode = `import React, { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: LandingPage,
});

function LandingPage() {
  const [isHome, setIsHome] = useState(true);
  const [isBrowse, setIsBrowse] = useState(false);
  const [isCommunity, setIsCommunity] = useState(false);
  const [isPart, setIsPart] = useState(false);
  const [showContribute, setShowContribute] = useState(false);
  
  const navHomeActive = isHome;
  const navBrowseActive = isBrowse || isPart;
  const navCommActive = isCommunity;

  const goHome = () => { setIsHome(true); setIsBrowse(false); setIsCommunity(false); setIsPart(false); };
  const goBrowse = () => { setIsHome(false); setIsBrowse(true); setIsCommunity(false); setIsPart(false); };
  const goCommunity = () => { setIsHome(false); setIsBrowse(false); setIsCommunity(true); setIsPart(false); };
  
  const openContribute = () => setShowContribute(true);
  const closeContribute = () => setShowContribute(false);
  const stopProp = (e: any) => e.stopPropagation();

  // Mock data
  const typeTabs = [{label: 'Carros', active: true, onClick: () => {} }, {label: 'Motos', active: false, onClick: () => {} }];
  const marcas = [{nome: 'Chevrolet', modelosCount: 42, active: true, onPick: () => {} }];
  const modelos = [{nome: 'Onix', active: true, onPick: () => {} }];
  const anos = [{label: '2016-2019 (G1)', active: true, onPick: () => {} }];
  const heroChips = [{label: 'Corrente de comando Onix', onClick: () => {} }];
  const popular = [{marca: 'Chevrolet', modelo: 'Onix', anos: '2013-2019', manuais: 142, tipo: 'Carro', label: 'Onix', onSelect: goBrowse}];
  const recentPosts = [{categoria: 'Diagnóstico', titulo: 'Barulho na suspensão', autor: 'João', papel: 'Mecânico', tempo: '2h', votos: 12, initials: 'J', avatarColor: '#1f8a5b', catColor: '#d2232a', onVote: () => {}, voteBg: '#fff', voteBorder: '#e6e8ec', voteColor: '#14213d', veiculo: 'Onix 1.4', corpo: 'Dica rápida...', comentarios: 3}];
  
  const showHowItWorks = true;
  const showModelos = true;
  const showAnos = true;
  const showParts = true;
  const marcaSel = 'Chevrolet';
  const modeloSel = 'Onix';
  const selVehicleLabel = 'Chevrolet Onix';
  const catTabs = [{label: 'Motor', active: true, onClick: () => {} }];
  const partsList = [{nome: 'Corrente de Comando', resumo: 'Kit distribuição', categoria: 'Motor', iniciais: 'MO', catColor: '#1f8a5b', problemasCount: 2, codigoOEM: '55230255', precoMin: '380', precoMax: '760', onOpen: () => setIsPart(true)}];
  
  const stat1 = '4.2k'; const stat2 = '12k'; const stat3 = '8.5k'; const stat4 = '15k';

  // Part data mock
  const hasPart = true;
  const partVehicleLabel = 'Chevrolet Onix';
  const part = {
    nome: 'Corrente de Comando',
    resumo: 'Kit distribuição completo',
    iniciais: 'MO',
    categoria: 'Motor',
    catColor: '#1f8a5b',
    fotos: ['Foto 1'],
    problemas: [{sintoma: 'Ruído', freqColor: '#d2232a', freq: 'Alta', difColor: '#d2232a', dificuldade: 'Difícil', causa: 'Desgaste', solucao: 'Trocar'}],
    codigoOEM: '55230255',
    codigosAlt: ['123456'],
    precoMin: '380',
    precoMax: '760',
    especificacoes: [{l: 'Material', v: 'Aço'}],
    compatibilidade: [{v: 'Onix 1.4', anos: '2013-2019'}]
  };

  const commChips = [{label: 'Todos', active: true, onClick: () => {} }];
  const posts = recentPosts;
  
  // Forms
  const formVeiculo = "";
  const onFormVeiculo = () => {};
  const formCats = [{label: 'Motor', active: true, onClick: () => {} }];
  const formTitulo = "";
  const onFormTitulo = () => {};

  return (
    <div className="min-h-screen">
      ${html}
    </div>
  );
}
`;

fs.writeFileSync('src/routes/index.tsx', reactCode, 'utf-8');
console.log('Conversion complete!');
