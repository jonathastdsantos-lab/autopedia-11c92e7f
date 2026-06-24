import React, { useState } from "react";
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
      



<div style={minHeight: '100vh', background: '#f5f6f8', fontFamily: '\'Manrope\',sans-serif', color: '#1a2233', WebkitFontSmoothing: 'antialiased'}>

  <header style={position: 'sticky', top: '0', zIndex: '50', background: 'rgba(255,255,255,0.92)', backdropFilter: 'blur(12px)', borderBottom: '1px solid #e6e8ec'}>
    <div style={maxWidth: '1200px', margin: '0 auto', padding: '0 24px', height: '68px', display: 'flex', alignItems: 'center', gap: '30px'}>
      <button onClick={goHome} style={display: 'flex', alignItems: 'center', gap: '11px', background: 'none', border: 'none', cursor: 'pointer', padding: '0'}>
        <img src="assets/autopedia-emblem.png" alt="AutoPedia" style={height: '38px', width: 'auto', display: 'block'} />
        <span style={fontWeight: '800', fontSize: '22px', fontStyle: 'italic', letterSpacing: '-0.02em', lineHeight: '1'}><span style={color: '#14213d'}>Auto</span><span style={color: '#d2232a'}>Pedia</span></span>
      </button>
      <nav style={display: 'flex', alignItems: 'center', gap: '4px', marginLeft: '8px'}>
        <button onClick={goHome} style={position: 'relative', background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'inherit', fontSize: '14.5px', fontWeight: '600', color: '#1a2233', padding: '8px 12px', borderRadius: '8px'}>Início{navHomeActive && (<><span style={position: 'absolute', left: '12px', right: '12px', bottom: '-1px', height: '2.5px', background: '#d2232a', borderRadius: '2px'}></span></>)}</button>
        <button onClick={goBrowse} style={position: 'relative', background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'inherit', fontSize: '14.5px', fontWeight: '600', color: '#1a2233', padding: '8px 12px', borderRadius: '8px'}>Buscar manuais{navBrowseActive && (<><span style={position: 'absolute', left: '12px', right: '12px', bottom: '-1px', height: '2.5px', background: '#d2232a', borderRadius: '2px'}></span></>)}</button>
        <button onClick={goCommunity} style={position: 'relative', background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'inherit', fontSize: '14.5px', fontWeight: '600', color: '#1a2233', padding: '8px 12px', borderRadius: '8px'}>Comunidade{navCommActive && (<><span style={position: 'absolute', left: '12px', right: '12px', bottom: '-1px', height: '2.5px', background: '#d2232a', borderRadius: '2px'}></span></>)}</button>
      </nav>
      <div style={flex: '1'}></div>
      <button style={background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'inherit', fontSize: '14px', fontWeight: '600', color: '#14213d', padding: '9px 14px', borderRadius: '9px'}>Entrar</button>
      <button onClick={openContribute} style={display: 'flex', alignItems: 'center', gap: '7px', background: '#d2232a', border: 'none', cursor: 'pointer', fontFamily: 'inherit', fontSize: '14px', fontWeight: '700', color: '#fff', padding: '10px 18px', borderRadius: '9px', boxShadow: '0 4px 12px rgba(210,35,42,0.28)'} data-hover="background:#b81d24;">＋ Contribuir</button>
    </div>
  </header>

  
  {isHome && (<>
  <div>

    <section style={background: 'linear-gradient(180deg,#ffffff 0%,#f1f3f7 100%)', borderBottom: '1px solid #e6e8ec'}>
      <div style={maxWidth: '1200px', margin: '0 auto', padding: '64px 24px 56px', display: 'grid', gridTemplateColumns: '1.05fr 0.95fr', gap: '56px', alignItems: 'center'}>
        <div>
          <div style={display: 'inline-flex', alignItems: 'center', gap: '8px', background: '#fdeced', color: '#b81d24', fontSize: '12px', fontWeight: '700', letterSpacing: '0.06em', textTransform: 'uppercase', padding: '7px 13px', borderRadius: '999px', marginBottom: '22px'}>Plataforma colaborativa automotiva</div>
          <h1 style={fontSize: '48px', lineHeight: '1.06', fontWeight: '800', letterSpacing: '-0.025em', color: '#14213d', margin: '0 0 18px', textWrap: 'balance'}>Todo o conhecimento mecânico do Brasil, em um só lugar.</h1>
          <p style={fontSize: '18px', lineHeight: '1.55', color: '#5a6172', margin: '0 0 30px', maxWidth: '520px'}>Manuais por marca, modelo e ano. Códigos de peça, números de série, fotos, diagramas e os defeitos crônicos de cada veículo — explicados por quem entende.</p>

          <div style={background: '#fff', border: '1px solid #e6e8ec', borderRadius: '18px', boxShadow: '0 16px 40px rgba(20,33,61,0.10)', padding: '18px'}>
            <div style={display: 'flex', gap: '6px', marginBottom: '14px'}>
              {typeTabs?.map(t => (<React.Fragment key={Math.random()}>
                <button onClick={t.onClick} style={flex: '1', background: `${ t.active ? '#14213d' : '#f1f3f6' }`, color: `${ t.active ? '#fff' : '#5a6172' }`, border: 'none', cursor: 'pointer', fontFamily: 'inherit', fontSize: '13.5px', fontWeight: '700', padding: '10px', borderRadius: '10px'}>{t.label}</button>
              </React.Fragment>))}
            </div>
            <div style={display: 'grid', gridTemplateColumns: '1fr 1fr 0.7fr', gap: '10px'}>
              <button onClick={goBrowse} style={textAlign: 'left', background: '#f7f8fa', border: '1px solid #e6e8ec', borderRadius: '11px', padding: '11px 13px', cursor: 'pointer', fontFamily: 'inherit'} data-hover="border-color:#14213d;">
                <div style={fontSize: '11px', fontWeight: '700', letterSpacing: '0.05em', textTransform: 'uppercase', color: '#9aa0ad', marginBottom: '3px'}>Marca</div>
                <div style={fontSize: '14.5px', fontWeight: '600', color: '#14213d'}>Selecione ▾</div>
              </button>
              <button onClick={goBrowse} style={textAlign: 'left', background: '#f7f8fa', border: '1px solid #e6e8ec', borderRadius: '11px', padding: '11px 13px', cursor: 'pointer', fontFamily: 'inherit'} data-hover="border-color:#14213d;">
                <div style={fontSize: '11px', fontWeight: '700', letterSpacing: '0.05em', textTransform: 'uppercase', color: '#9aa0ad', marginBottom: '3px'}>Modelo</div>
                <div style={fontSize: '14.5px', fontWeight: '600', color: '#14213d'}>Selecione ▾</div>
              </button>
              <button onClick={goBrowse} style={textAlign: 'left', background: '#f7f8fa', border: '1px solid #e6e8ec', borderRadius: '11px', padding: '11px 13px', cursor: 'pointer', fontFamily: 'inherit'} data-hover="border-color:#14213d;">
                <div style={fontSize: '11px', fontWeight: '700', letterSpacing: '0.05em', textTransform: 'uppercase', color: '#9aa0ad', marginBottom: '3px'}>Ano</div>
                <div style={fontSize: '14.5px', fontWeight: '600', color: '#14213d'}>▾</div>
              </button>
            </div>
            <button onClick={goBrowse} style={width: '100%', marginTop: '10px', background: '#d2232a', border: 'none', cursor: 'pointer', fontFamily: 'inherit', fontSize: '15px', fontWeight: '700', color: '#fff', padding: '13px', borderRadius: '11px', boxShadow: '0 6px 16px rgba(210,35,42,0.26)'} data-hover="background:#b81d24;">Buscar manuais e peças</button>
          </div>

          <div style={display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap', marginTop: '18px'}>
            <span style={fontSize: '13px', color: '#9aa0ad', fontWeight: '600'}>Mais buscados:</span>
            {heroChips?.map(c => (<React.Fragment key={Math.random()}>
              <button onClick={c.onClick} style={background: '#fff', border: '1px solid #e6e8ec', cursor: 'pointer', fontFamily: 'inherit', fontSize: '13px', fontWeight: '600', color: '#14213d', padding: '6px 12px', borderRadius: '999px'} data-hover="border-color:#14213d;color:#d2232a;">{c.label}</button>
            </React.Fragment>))}
          </div>
        </div>

        <div style={position: 'relative'}>
          <div style={background: '#fff', border: '1px solid #e6e8ec', borderRadius: '20px', boxShadow: '0 24px 60px rgba(20,33,61,0.14)', overflow: 'hidden'}>
            <div style={background: '#14213d', padding: '16px 20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between'}>
              <div style={display: 'flex', alignItems: 'center', gap: '10px'}>
                <span style={display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '30px', height: '30px', borderRadius: '8px', background: 'rgba(255,255,255,0.12)', fontFamily: '\'IBM Plex Mono\',monospace', fontSize: '13px', fontWeight: '600', color: '#fff'}>CC</span>
                <div>
                  <div style={fontSize: '14px', fontWeight: '700', color: '#fff', lineHeight: '1.2'}>Corrente de Comando</div>
                  <div style={fontSize: '11.5px', color: '#9fb0cc', fontFamily: '\'IBM Plex Mono\',monospace'}>OEM 55230255</div>
                </div>
              </div>
              <span style={fontSize: '11px', fontWeight: '700', color: '#fff', background: '#d2232a', padding: '4px 9px', borderRadius: '6px'}>DEFEITO CRÔNICO</span>
            </div>
            <div style={height: '170px', background: 'repeating-linear-gradient(135deg,#eceef2 0 12px,#f4f5f8 12px 24px)', display: 'flex', alignItems: 'center', justifyContent: 'center', borderBottom: '1px solid #eef0f3'}>
              <span style={fontFamily: '\'IBM Plex Mono\',monospace', fontSize: '12px', color: '#9aa0ad', background: 'rgba(255,255,255,0.7)', padding: '5px 10px', borderRadius: '6px'}>[ diagrama do sincronismo ]</span>
            </div>
            <div style={padding: '18px 20px'}>
              <div style={fontSize: '12px', fontWeight: '700', letterSpacing: '0.05em', textTransform: 'uppercase', color: '#d2232a', marginBottom: '7px'}>Sintoma mais comum</div>
              <div style={fontSize: '14.5px', lineHeight: '1.5', color: '#3a4254', marginBottom: '16px'}>Ruído metálico de "matraca" na partida a frio no Onix 1.4 SPE/4 — corrente esticada antes dos 80 mil km.</div>
              <div style={display: 'flex', gap: '8px'}>
                <div style={flex: '1', background: '#f7f8fa', borderRadius: '10px', padding: '10px 12px'}><div style={fontSize: '11px', color: '#9aa0ad', fontWeight: '600'}>Dificuldade</div><div style={fontSize: '14px', fontWeight: '700', color: '#d2232a'}>Difícil</div></div>
                <div style={flex: '1', background: '#f7f8fa', borderRadius: '10px', padding: '10px 12px'}><div style={fontSize: '11px', color: '#9aa0ad', fontWeight: '600'}>Preço médio</div><div style={fontSize: '14px', fontWeight: '700', color: '#14213d'}>R$ 380–760</div></div>
              </div>
            </div>
          </div>
          <div style={position: 'absolute', bottom: '-18px', left: '-18px', background: '#fff', border: '1px solid #e6e8ec', borderRadius: '14px', boxShadow: '0 12px 30px rgba(20,33,61,0.12)', padding: '12px 16px', display: 'flex', alignItems: 'center', gap: '10px'}>
            <span style={width: '34px', height: '34px', borderRadius: '8px', background: '#1f8a5b', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '700', fontSize: '13px'}>JM</span>
            <div><div style={fontSize: '12.5px', fontWeight: '700', color: '#14213d'}>142 mecânicos confirmaram</div><div style={fontSize: '11.5px', color: '#9aa0ad'}>esse diagnóstico</div></div>
          </div>
        </div>
      </div>
    </section>

    <section style={background: '#14213d'}>
      <div style={maxWidth: '1200px', margin: '0 auto', padding: '26px 24px', display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: '24px'}>
        <div style={textAlign: 'center'}><div style={fontSize: '30px', fontWeight: '800', color: '#fff', letterSpacing: '-0.02em'}>{stat1}</div><div style={fontSize: '13px', color: '#9fb0cc', fontWeight: '600', marginTop: '2px'}>Manuais publicados</div></div>
        <div style={textAlign: 'center', borderLeft: '1px solid rgba(255,255,255,0.1)'}><div style={fontSize: '30px', fontWeight: '800', color: '#fff', letterSpacing: '-0.02em'}>{stat2}</div><div style={fontSize: '13px', color: '#9fb0cc', fontWeight: '600', marginTop: '2px'}>Peças catalogadas</div></div>
        <div style={textAlign: 'center', borderLeft: '1px solid rgba(255,255,255,0.1)'}><div style={fontSize: '30px', fontWeight: '800', color: '#fff', letterSpacing: '-0.02em'}>{stat3}</div><div style={fontSize: '13px', color: '#9fb0cc', fontWeight: '600', marginTop: '2px'}>Problemas resolvidos</div></div>
        <div style={textAlign: 'center', borderLeft: '1px solid rgba(255,255,255,0.1)'}><div style={fontSize: '30px', fontWeight: '800', color: '#fff', letterSpacing: '-0.02em'}>{stat4}</div><div style={fontSize: '13px', color: '#9fb0cc', fontWeight: '600', marginTop: '2px'}>Membros ativos</div></div>
      </div>
    </section>

    <section style={maxWidth: '1200px', margin: '0 auto', padding: '64px 24px 20px'}>
      <div style={display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: '28px'}>
        <div>
          <h2 style={fontSize: '30px', fontWeight: '800', letterSpacing: '-0.02em', color: '#14213d', margin: '0 0 6px'}>Veículos populares do Brasil</h2>
          <p style={fontSize: '15.5px', color: '#6b7385', margin: '0'}>Começamos pelos carros e motos que mais rodam nas ruas e oficinas.</p>
        </div>
        <button onClick={goBrowse} style={background: 'none', border: '1px solid #d3d7df', cursor: 'pointer', fontFamily: 'inherit', fontSize: '14px', fontWeight: '700', color: '#14213d', padding: '11px 18px', borderRadius: '10px', whiteSpace: 'nowrap'} data-hover="border-color:#14213d;">Ver todos →</button>
      </div>
      <div style={display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '18px'}>
        {popular?.map(v => (<React.Fragment key={Math.random()}>
          <button onClick={v.onSelect} style={textAlign: 'left', background: '#fff', border: '1px solid #e6e8ec', borderRadius: '16px', overflow: 'hidden', cursor: 'pointer', fontFamily: 'inherit', transition: 'all .16s'} data-hover="border-color:#14213d;box-shadow:0 14px 32px rgba(20,33,61,0.12);transform:translateY(-3px);">
            <div style={height: '128px', background: 'repeating-linear-gradient(135deg,#eceef2 0 12px,#f4f5f8 12px 24px)', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative'}>
              <span style={fontFamily: '\'IBM Plex Mono\',monospace', fontSize: '11.5px', color: '#9aa0ad', background: 'rgba(255,255,255,0.72)', padding: '5px 10px', borderRadius: '6px'}>[ foto {v.label} ]</span>
              <span style={position: 'absolute', top: '12px', left: '12px', background: '#14213d', color: '#fff', fontSize: '11px', fontWeight: '700', padding: '4px 9px', borderRadius: '6px'}>{v.tipo}</span>
            </div>
            <div style={padding: '16px 18px'}>
              <div style={fontSize: '12px', fontWeight: '700', letterSpacing: '0.04em', textTransform: 'uppercase', color: '#9aa0ad'}>{v.marca}</div>
              <div style={fontSize: '19px', fontWeight: '800', color: '#14213d', letterSpacing: '-0.01em', margin: '1px 0 8px'}>{v.modelo}</div>
              <div style={display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: '11px', borderTop: '1px solid #eef0f3'}>
                <span style={fontSize: '13px', color: '#6b7385', fontWeight: '600'}>{v.anos}</span>
                <span style={fontSize: '13px', color: '#d2232a', fontWeight: '700'}>{v.manuais} manuais</span>
              </div>
            </div>
          </button>
        </React.Fragment>))}
      </div>
    </section>

    {showHowItWorks && (<>
    <section style={maxWidth: '1200px', margin: '0 auto', padding: '56px 24px'}>
      <div style={background: '#fff', border: '1px solid #e6e8ec', borderRadius: '22px', padding: '44px 40px'}>
        <div style={textAlign: 'center', marginBottom: '38px'}>
          <h2 style={fontSize: '30px', fontWeight: '800', letterSpacing: '-0.02em', color: '#14213d', margin: '0 0 8px'}>Conhecimento que move.</h2>
          <p style={fontSize: '15.5px', color: '#6b7385', margin: '0'}>Quatro passos — do problema à solução.</p>
        </div>
        <div style={display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: '14px'}>
          <div style={padding: '24px 20px', borderRadius: '16px', background: '#f7f8fa', border: '1px solid #eef0f3'}>
            <div style={display: 'flex', alignItems: 'center', justifyContent: 'center', width: '46px', height: '46px', borderRadius: '12px', background: '#14213d', color: '#fff', fontSize: '18px', fontWeight: '800', marginBottom: '16px'}>1</div>
            <div style={fontSize: '17px', fontWeight: '800', color: '#14213d', marginBottom: '6px'}>Busque</div>
            <p style={fontSize: '14px', lineHeight: '1.5', color: '#6b7385', margin: '0'}>Filtre por marca, modelo e ano e chegue direto na peça ou no problema do seu veículo.</p>
          </div>
          <div style={padding: '24px 20px', borderRadius: '16px', background: '#f7f8fa', border: '1px solid #eef0f3'}>
            <div style={display: 'flex', alignItems: 'center', justifyContent: 'center', width: '46px', height: '46px', borderRadius: '12px', background: '#14213d', color: '#fff', fontSize: '18px', fontWeight: '800', marginBottom: '16px'}>2</div>
            <div style={fontSize: '17px', fontWeight: '800', color: '#14213d', marginBottom: '6px'}>Descubra</div>
            <p style={fontSize: '14px', lineHeight: '1.5', color: '#6b7385', margin: '0'}>Veja código, número de série, fotos, diagramas e os defeitos crônicos de cada componente.</p>
          </div>
          <div style={padding: '24px 20px', borderRadius: '16px', background: '#f7f8fa', border: '1px solid #eef0f3'}>
            <div style={display: 'flex', alignItems: 'center', justifyContent: 'center', width: '46px', height: '46px', borderRadius: '12px', background: '#d2232a', color: '#fff', fontSize: '18px', fontWeight: '800', marginBottom: '16px'}>3</div>
            <div style={fontSize: '17px', fontWeight: '800', color: '#14213d', marginBottom: '6px'}>Compartilhe</div>
            <p style={fontSize: '14px', lineHeight: '1.5', color: '#6b7385', margin: '0'}>Publique o que você aprendeu na bancada. Mecânicos, eletricistas e pintores ajudam todo mundo.</p>
          </div>
          <div style={padding: '24px 20px', borderRadius: '16px', background: '#f7f8fa', border: '1px solid #eef0f3'}>
            <div style={display: 'flex', alignItems: 'center', justifyContent: 'center', width: '46px', height: '46px', borderRadius: '12px', background: '#d2232a', color: '#fff', fontSize: '18px', fontWeight: '800', marginBottom: '16px'}>4</div>
            <div style={fontSize: '17px', fontWeight: '800', color: '#14213d', marginBottom: '6px'}>Solucione</div>
            <p style={fontSize: '14px', lineHeight: '1.5', color: '#6b7385', margin: '0'}>Compre a peça certa, evite errar o diagnóstico e resolva mais rápido — com economia.</p>
          </div>
        </div>
      </div>
    </section>
    </>)}

    <section style={maxWidth: '1200px', margin: '0 auto', padding: '8px 24px 56px'}>
      <div style={display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: '24px'}>
        <div>
          <h2 style={fontSize: '30px', fontWeight: '800', letterSpacing: '-0.02em', color: '#14213d', margin: '0 0 6px'}>Da comunidade</h2>
          <p style={fontSize: '15.5px', color: '#6b7385', margin: '0'}>Diagnósticos e dicas compartilhados por profissionais e donos de veículo.</p>
        </div>
        <button onClick={goCommunity} style={background: 'none', border: '1px solid #d3d7df', cursor: 'pointer', fontFamily: 'inherit', fontSize: '14px', fontWeight: '700', color: '#14213d', padding: '11px 18px', borderRadius: '10px', whiteSpace: 'nowrap'} data-hover="border-color:#14213d;">Ver comunidade →</button>
      </div>
      <div style={display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '18px'}>
        {recentPosts?.map(p => (<React.Fragment key={Math.random()}>
          <button onClick={goCommunity} style={textAlign: 'left', background: '#fff', border: '1px solid #e6e8ec', borderRadius: '16px', padding: '20px', cursor: 'pointer', fontFamily: 'inherit', transition: 'all .16s'} data-hover="border-color:#14213d;box-shadow:0 12px 28px rgba(20,33,61,0.10);">
            <div style={display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '14px'}>
              <span style={width: '7px', height: '7px', borderRadius: '50%', background: `${ p.catColor }`}></span>
              <span style={fontSize: '11.5px', fontWeight: '700', letterSpacing: '0.03em', textTransform: 'uppercase', color: '#6b7385'}>{p.categoria}</span>
            </div>
            <div style={fontSize: '16px', fontWeight: '700', color: '#14213d', lineHeight: '1.35', marginBottom: '14px', textWrap: 'pretty'}>{p.titulo}</div>
            <div style={display: 'flex', alignItems: 'center', gap: '9px', paddingTop: '14px', borderTop: '1px solid #eef0f3'}>
              <span style={width: '30px', height: '30px', borderRadius: '8px', background: `${ p.avatarColor }`, color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '700', fontSize: '12px'}>{p.initials}</span>
              <div style={flex: '1'}><div style={fontSize: '13px', fontWeight: '700', color: '#14213d', lineHeight: '1.2'}>{p.autor}</div><div style={fontSize: '11.5px', color: '#9aa0ad'}>{p.papel} · {p.tempo}</div></div>
              <span style={fontSize: '13px', fontWeight: '700', color: '#d2232a'}>▲ {p.votos}</span>
            </div>
          </button>
        </React.Fragment>))}
      </div>
    </section>

    <section style={maxWidth: '1200px', margin: '0 auto', padding: '0 24px 64px'}>
      <div style={background: 'linear-gradient(120deg,#14213d 0%,#1d2f54 100%)', borderRadius: '22px', padding: '48px 44px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '32px', flexWrap: 'wrap'}>
        <div style={maxWidth: '560px'}>
          <h2 style={fontSize: '30px', fontWeight: '800', letterSpacing: '-0.02em', color: '#fff', margin: '0 0 10px'}>Você sabe um macete que ninguém acha na internet?</h2>
          <p style={fontSize: '16px', lineHeight: '1.55', color: '#bcc8de', margin: '0'}>Cada diagrama, código de peça e diagnóstico que você compartilha ajuda milhares de profissionais e donos de veículo no Brasil inteiro.</p>
        </div>
        <button onClick={openContribute} style={background: '#d2232a', border: 'none', cursor: 'pointer', fontFamily: 'inherit', fontSize: '16px', fontWeight: '700', color: '#fff', padding: '16px 28px', borderRadius: '12px', whiteSpace: 'nowrap', boxShadow: '0 8px 22px rgba(210,35,42,0.36)'} data-hover="background:#e63540;">Compartilhar conhecimento</button>
      </div>
    </section>

  </div>
  </>)}

  
  {isBrowse && (<>
  <div style={maxWidth: '1200px', margin: '0 auto', padding: '30px 24px 70px'}>
    <div style={display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13.5px', color: '#9aa0ad', marginBottom: '22px'}>
      <button onClick={goHome} style={background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'inherit', fontSize: '13.5px', color: '#9aa0ad', fontWeight: '600', padding: '0'} data-hover="color:#14213d;">Início</button>
      <span>/</span><span style={color: '#14213d', fontWeight: '700'}>Buscar manuais</span>
      {selVehicleLabel && (<><span>/</span><span style={color: '#d2232a', fontWeight: '700'}>{selVehicleLabel}</span></>)}
    </div>

    <h1 style={fontSize: '32px', fontWeight: '800', letterSpacing: '-0.02em', color: '#14213d', margin: '0 0 6px'}>Encontre a peça ou o problema</h1>
    <p style={fontSize: '15.5px', color: '#6b7385', margin: '0 0 28px'}>Siga os passos: tipo de veículo → marca → modelo → ano. Depois filtre por sistema.</p>

    
    <div style={background: '#fff', border: '1px solid #e6e8ec', borderRadius: '16px', padding: '22px 24px', marginBottom: '16px'}>
      <div style={display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px'}>
        <span style={width: '26px', height: '26px', borderRadius: '7px', background: '#14213d', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '13px', fontWeight: '800'}>1</span>
        <span style={fontSize: '16px', fontWeight: '800', color: '#14213d'}>Tipo de veículo & marca</span>
      </div>
      <div style={display: 'flex', gap: '8px', marginBottom: '16px', maxWidth: '380px'}>
        {typeTabs?.map(t => (<React.Fragment key={Math.random()}>
          <button onClick={t.onClick} style={flex: '1', background: `${ t.active ? '#14213d' : '#f1f3f6' }`, color: `${ t.active ? '#fff' : '#5a6172' }`, border: 'none', cursor: 'pointer', fontFamily: 'inherit', fontSize: '13.5px', fontWeight: '700', padding: '9px', borderRadius: '9px'}>{t.label}</button>
        </React.Fragment>))}
      </div>
      <div style={display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: '10px'}>
        {marcas?.map(m => (<React.Fragment key={Math.random()}>
          <button onClick={m.onPick} style={textAlign: 'left', background: `${ m.active ? '#fdeced' : '#f7f8fa' }`, border: `1.5px solid ${ m.active ? '#d2232a' : '#e6e8ec' }`, borderRadius: '11px', padding: '13px 15px', cursor: 'pointer', fontFamily: 'inherit'} data-hover="border-color:#14213d;">
            <div style={fontSize: '15px', fontWeight: '700', color: '#14213d'}>{m.nome}</div>
            <div style={fontSize: '12px', color: '#9aa0ad', fontWeight: '600', marginTop: '2px'}>{m.modelosCount} modelos</div>
          </button>
        </React.Fragment>))}
      </div>
    </div>

    
    {showModelos && (<>
    <div style={background: '#fff', border: '1px solid #e6e8ec', borderRadius: '16px', padding: '22px 24px', marginBottom: '16px'}>
      <div style={display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px'}>
        <span style={width: '26px', height: '26px', borderRadius: '7px', background: '#14213d', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '13px', fontWeight: '800'}>2</span>
        <span style={fontSize: '16px', fontWeight: '800', color: '#14213d'}>Modelo</span>
        <span style={fontSize: '13px', color: '#9aa0ad', fontWeight: '600'}>— {marcaSel}</span>
      </div>
      <div style={display: 'flex', flexWrap: 'wrap', gap: '9px'}>
        {modelos?.map(m => (<React.Fragment key={Math.random()}>
          <button onClick={m.onPick} style={background: `${ m.active ? '#14213d' : '#f7f8fa' }`, color: `${ m.active ? '#fff' : '#14213d' }`, border: `1.5px solid ${ m.active ? '#14213d' : '#e6e8ec' }`, borderRadius: '10px', padding: '10px 18px', cursor: 'pointer', fontFamily: 'inherit', fontSize: '14.5px', fontWeight: '700'} data-hover="border-color:#14213d;">{m.nome}</button>
        </React.Fragment>))}
      </div>
    </div>
    </>)}

    
    {showAnos && (<>
    <div style={background: '#fff', border: '1px solid #e6e8ec', borderRadius: '16px', padding: '22px 24px', marginBottom: '16px'}>
      <div style={display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px'}>
        <span style={width: '26px', height: '26px', borderRadius: '7px', background: '#14213d', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '13px', fontWeight: '800'}>3</span>
        <span style={fontSize: '16px', fontWeight: '800', color: '#14213d'}>Ano / geração</span>
        <span style={fontSize: '13px', color: '#9aa0ad', fontWeight: '600'}>— {marcaSel} {modeloSel}</span>
      </div>
      <div style={display: 'flex', flexWrap: 'wrap', gap: '9px'}>
        {anos?.map(a => (<React.Fragment key={Math.random()}>
          <button onClick={a.onPick} style={background: `${ a.active ? '#d2232a' : '#f7f8fa' }`, color: `${ a.active ? '#fff' : '#14213d' }`, border: `1.5px solid ${ a.active ? '#d2232a' : '#e6e8ec' }`, borderRadius: '10px', padding: '9px 16px', cursor: 'pointer', fontFamily: '\'IBM Plex Mono\',monospace', fontSize: '13.5px', fontWeight: '600'} data-hover="border-color:#d2232a;">{a.label}</button>
        </React.Fragment>))}
      </div>
    </div>
    </>)}

    
    {showParts && (<>
    <div>
      <div style={display: 'flex', alignItems: 'center', gap: '12px', margin: '30px 0 18px'}>
        <span style={display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '32px', height: '32px', borderRadius: '8px', background: '#14213d', color: '#fff', fontSize: '14px', fontWeight: '800'}>4</span>
        <div>
          <div style={fontSize: '20px', fontWeight: '800', color: '#14213d', letterSpacing: '-0.01em'}>Peças & problemas — {selVehicleLabel}</div>
          <div style={fontSize: '13.5px', color: '#9aa0ad', fontWeight: '600'}>Selecione um sistema e abra a ficha técnica de cada componente.</div>
        </div>
      </div>
      <div style={display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '22px'}>
        {catTabs?.map(c => (<React.Fragment key={Math.random()}>
          <button onClick={c.onClick} style={background: `${ c.active ? '#14213d' : '#fff' }`, color: `${ c.active ? '#fff' : '#5a6172' }`, border: `1px solid ${ c.active ? '#14213d' : '#e6e8ec' }`, borderRadius: '999px', padding: '8px 16px', cursor: 'pointer', fontFamily: 'inherit', fontSize: '13px', fontWeight: '700'} data-hover="border-color:#14213d;">{c.label}</button>
        </React.Fragment>))}
      </div>
      <div style={display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(290px,1fr))', gap: '16px'}>
        {partsList?.map(p => (<React.Fragment key={Math.random()}>
          <button onClick={p.onOpen} style={textAlign: 'left', background: '#fff', border: '1px solid #e6e8ec', borderRadius: '15px', padding: '18px', display: 'flex', flexDirection: 'column', gap: '11px', cursor: 'pointer', fontFamily: 'inherit', transition: 'all .15s'} data-hover="border-color:#14213d;box-shadow:0 10px 26px rgba(20,33,61,0.10);transform:translateY(-2px);">
            <div style={display: 'flex', alignItems: 'center', gap: '9px'}>
              <span style={display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '34px', height: '34px', borderRadius: '9px', background: `${ p.catColor }`, color: '#fff', fontFamily: '\'IBM Plex Mono\',monospace', fontSize: '13px', fontWeight: '600'}>{p.iniciais}</span>
              <span style={fontSize: '11px', fontWeight: '700', letterSpacing: '0.04em', textTransform: 'uppercase', color: '#9aa0ad'}>{p.categoria}</span>
            </div>
            <div style={fontSize: '17px', fontWeight: '800', color: '#14213d', letterSpacing: '-0.01em'}>{p.nome}</div>
            <div style={fontSize: '13.5px', color: '#6b7385', lineHeight: '1.45'}>{p.resumo}</div>
            <div style={display: 'flex', alignItems: 'center', gap: '7px'}>
              <span style={fontFamily: '\'IBM Plex Mono\',monospace', fontSize: '11.5px', background: '#f1f3f6', color: '#14213d', padding: '3px 8px', borderRadius: '6px'}>OEM {p.codigoOEM}</span>
              <span style={fontFamily: '\'IBM Plex Mono\',monospace', fontSize: '11.5px', color: '#6b7385'}>R$ {p.precoMin}–{p.precoMax}</span>
            </div>
            <div style={display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '3px', paddingTop: '12px', borderTop: '1px solid #eef0f3'}>
              <span style={fontSize: '12.5px', color: '#b81d24', fontWeight: '700'}>{p.problemasCount} defeitos crônicos</span>
              <span style={fontSize: '13px', fontWeight: '700', color: '#14213d'}>Ver ficha →</span>
            </div>
          </button>
        </React.Fragment>))}
      </div>
    </div>
    </>)}

    {showParts && (<><span></span></>)}
  </div>
  </>)}

  
  {isPart && (<>
  {hasPart && (<>
  <div style={maxWidth: '1100px', margin: '0 auto', padding: '30px 24px 70px'}>
    <div style={display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13.5px', color: '#9aa0ad', marginBottom: '22px', flexWrap: 'wrap'}>
      <button onClick={goHome} style={background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'inherit', fontSize: '13.5px', color: '#9aa0ad', fontWeight: '600', padding: '0'} data-hover="color:#14213d;">Início</button>
      <span>/</span>
      <button onClick={goBrowse} style={background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'inherit', fontSize: '13.5px', color: '#9aa0ad', fontWeight: '600', padding: '0'} data-hover="color:#14213d;">Buscar manuais</button>
      <span>/</span><span style={color: '#14213d', fontWeight: '700'}>{partVehicleLabel}</span>
      <span>/</span><span style={color: '#d2232a', fontWeight: '700'}>{part.nome}</span>
    </div>

    <div style={display: 'grid', gridTemplateColumns: '1.15fr 0.85fr', gap: '30px', alignItems: 'start'}>
      
      <div>
        <div style={display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px'}>
          <span style={display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '42px', height: '42px', borderRadius: '11px', background: `${ part.catColor }`, color: '#fff', fontFamily: '\'IBM Plex Mono\',monospace', fontSize: '15px', fontWeight: '600'}>{part.iniciais}</span>
          <span style={fontSize: '12px', fontWeight: '700', letterSpacing: '0.05em', textTransform: 'uppercase', color: `${ part.catColor }`}>{part.categoria}</span>
        </div>
        <h1 style={fontSize: '34px', fontWeight: '800', letterSpacing: '-0.02em', color: '#14213d', margin: '0 0 10px'}>{part.nome}</h1>
        <p style={fontSize: '16px', lineHeight: '1.55', color: '#5a6172', margin: '0 0 22px'}>{part.resumo}</p>

        
        <div style={display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '10px', marginBottom: '26px'}>
          {part.fotos?.map(foto => (<React.Fragment key={Math.random()}>
            <div style={aspectRatio: '4/3', background: 'repeating-linear-gradient(135deg,#eceef2 0 12px,#f4f5f8 12px 24px)', border: '1px solid #e6e8ec', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '10px', textAlign: 'center'}>
              <span style={fontFamily: '\'IBM Plex Mono\',monospace', fontSize: '11px', color: '#9aa0ad', lineHeight: '1.35'}>[ {foto} ]</span>
            </div>
          </React.Fragment>))}
        </div>

        
        <div style={display: 'flex', alignItems: 'center', gap: '9px', marginBottom: '14px'}>
          <h2 style={fontSize: '21px', fontWeight: '800', color: '#14213d', margin: '0', letterSpacing: '-0.01em'}>Problemas crônicos</h2>
          <span style={background: '#fdeced', color: '#b81d24', fontSize: '12px', fontWeight: '700', padding: '3px 9px', borderRadius: '999px'}>reportados pela comunidade</span>
        </div>
        <div style={display: 'flex', flexDirection: 'column', gap: '14px', marginBottom: '28px'}>
          {part.problemas?.map(pr => (<React.Fragment key={Math.random()}>
            <div style={background: '#fff', border: '1px solid #e6e8ec', borderRadius: '15px', overflow: 'hidden'}>
              <div style={padding: '16px 18px', borderBottom: '1px solid #eef0f3', display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '14px'}>
                <div style={fontSize: '16px', fontWeight: '700', color: '#14213d', lineHeight: '1.35'}>{pr.sintoma}</div>
                <div style={display: 'flex', gap: '6px', flexShrink: '0'}>
                  <span style={fontSize: '11px', fontWeight: '700', color: '#fff', background: `${ pr.freqColor }`, padding: '4px 9px', borderRadius: '6px', whiteSpace: 'nowrap'}>{pr.freq}</span>
                  <span style={fontSize: '11px', fontWeight: '700', color: `${ pr.difColor }`, border: `1.5px solid ${ pr.difColor }`, padding: '3px 9px', borderRadius: '6px', whiteSpace: 'nowrap'}>{pr.dificuldade}</span>
                </div>
              </div>
              <div style={padding: '16px 18px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '18px'}>
                <div>
                  <div style={fontSize: '11.5px', fontWeight: '700', letterSpacing: '0.05em', textTransform: 'uppercase', color: '#9aa0ad', marginBottom: '5px'}>Causa provável</div>
                  <div style={fontSize: '14px', lineHeight: '1.5', color: '#3a4254'}>{pr.causa}</div>
                </div>
                <div>
                  <div style={fontSize: '11.5px', fontWeight: '700', letterSpacing: '0.05em', textTransform: 'uppercase', color: '#1f8a5b', marginBottom: '5px'}>Solução</div>
                  <div style={fontSize: '14px', lineHeight: '1.5', color: '#3a4254'}>{pr.solucao}</div>
                </div>
              </div>
            </div>
          </React.Fragment>))}
        </div>

        
        <h2 style={fontSize: '21px', fontWeight: '800', color: '#14213d', margin: '0 0 14px', letterSpacing: '-0.01em'}>Diagrama de instalação</h2>
        <div style={height: '240px', background: 'repeating-linear-gradient(135deg,#eceef2 0 14px,#f4f5f8 14px 28px)', border: '1px solid #e6e8ec', borderRadius: '15px', display: 'flex', alignItems: 'center', justifyContent: 'center'}>
          <span style={fontFamily: '\'IBM Plex Mono\',monospace', fontSize: '12px', color: '#9aa0ad', background: 'rgba(255,255,255,0.72)', padding: '6px 12px', borderRadius: '6px'}>[ diagrama / esquema elétrico — {part.nome} ]</span>
        </div>
      </div>

      
      <div style={position: 'sticky', top: '88px', display: 'flex', flexDirection: 'column', gap: '16px'}>
        <div style={background: '#fff', border: '1px solid #e6e8ec', borderRadius: '16px', padding: '20px'}>
          <div style={fontSize: '12px', fontWeight: '700', letterSpacing: '0.05em', textTransform: 'uppercase', color: '#9aa0ad', marginBottom: '12px'}>Identificação da peça</div>
          <div style={marginBottom: '14px'}>
            <div style={fontSize: '12px', color: '#9aa0ad', fontWeight: '600', marginBottom: '4px'}>Código original (OEM)</div>
            <div style={fontFamily: '\'IBM Plex Mono\',monospace', fontSize: '18px', fontWeight: '600', color: '#14213d', background: '#f1f3f6', padding: '9px 12px', borderRadius: '9px'}>{part.codigoOEM}</div>
          </div>
          <div style={marginBottom: '6px', fontSize: '12px', color: '#9aa0ad', fontWeight: '600'}>Equivalências (aftermarket)</div>
          <div style={display: 'flex', flexDirection: 'column', gap: '6px'}>
            {part.codigosAlt?.map(alt => (<React.Fragment key={Math.random()}>
              <div style={fontFamily: '\'IBM Plex Mono\',monospace', fontSize: '13px', color: '#3a4254', background: '#f7f8fa', border: '1px solid #eef0f3', padding: '7px 11px', borderRadius: '8px'}>{alt}</div>
            </React.Fragment>))}
          </div>
          <div style={marginTop: '16px', paddingTop: '14px', borderTop: '1px solid #eef0f3', display: 'flex', alignItems: 'center', justifyContent: 'space-between'}>
            <span style={fontSize: '13px', color: '#6b7385', fontWeight: '600'}>Preço médio</span>
            <span style={fontSize: '18px', fontWeight: '800', color: '#14213d'}>R$ {part.precoMin}–{part.precoMax}</span>
          </div>
        </div>

        <div style={background: '#fff', border: '1px solid #e6e8ec', borderRadius: '16px', padding: '20px'}>
          <div style={fontSize: '12px', fontWeight: '700', letterSpacing: '0.05em', textTransform: 'uppercase', color: '#9aa0ad', marginBottom: '12px'}>Especificações</div>
          <div style={display: 'flex', flexDirection: 'column'}>
            {part.especificacoes?.map(e => (<React.Fragment key={Math.random()}>
              <div style={display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '12px', padding: '9px 0', borderBottom: '1px solid #f1f3f6'}>
                <span style={fontSize: '13.5px', color: '#6b7385'}>{e.l}</span>
                <span style={fontSize: '13.5px', fontWeight: '700', color: '#14213d', textAlign: 'right'}>{e.v}</span>
              </div>
            </React.Fragment>))}
          </div>
        </div>

        <div style={background: '#fff', border: '1px solid #e6e8ec', borderRadius: '16px', padding: '20px'}>
          <div style={fontSize: '12px', fontWeight: '700', letterSpacing: '0.05em', textTransform: 'uppercase', color: '#9aa0ad', marginBottom: '12px'}>Compatível com</div>
          <div style={display: 'flex', flexDirection: 'column', gap: '10px'}>
            {part.compatibilidade?.map(c => (<React.Fragment key={Math.random()}>
              <div style={display: 'flex', alignItems: 'flex-start', gap: '9px'}>
                <span style={width: '7px', height: '7px', borderRadius: '50%', background: '#14213d', marginTop: '6px', flexShrink: '0'}></span>
                <div><div style={fontSize: '14px', fontWeight: '700', color: '#14213d', lineHeight: '1.3'}>{c.v}</div><div style={fontFamily: '\'IBM Plex Mono\',monospace', fontSize: '12px', color: '#9aa0ad'}>{c.anos}</div></div>
              </div>
            </React.Fragment>))}
          </div>
        </div>

        <button onClick={openContribute} style={width: '100%', background: '#d2232a', border: 'none', cursor: 'pointer', fontFamily: 'inherit', fontSize: '15px', fontWeight: '700', color: '#fff', padding: '14px', borderRadius: '12px', boxShadow: '0 6px 16px rgba(210,35,42,0.26)'} data-hover="background:#b81d24;">＋ Adicionar informação</button>
      </div>
    </div>
  </div>
  </>)}
  </>)}

  
  {isCommunity && (<>
  <div style={maxWidth: '1100px', margin: '0 auto', padding: '30px 24px 70px'}>
    <div style={display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: '20px', marginBottom: '26px', flexWrap: 'wrap'}>
      <div>
        <h1 style={fontSize: '32px', fontWeight: '800', letterSpacing: '-0.02em', color: '#14213d', margin: '0 0 6px'}>Comunidade AutoPedia</h1>
        <p style={fontSize: '15.5px', color: '#6b7385', margin: '0'}>Conhecimento compartilhado por mecânicos, eletricistas, pintores e donos de veículo.</p>
      </div>
      <button onClick={openContribute} style={display: 'flex', alignItems: 'center', gap: '7px', background: '#d2232a', border: 'none', cursor: 'pointer', fontFamily: 'inherit', fontSize: '15px', fontWeight: '700', color: '#fff', padding: '13px 22px', borderRadius: '11px', boxShadow: '0 6px 16px rgba(210,35,42,0.26)', whiteSpace: 'nowrap'} data-hover="background:#b81d24;">＋ Nova contribuição</button>
    </div>

    <div style={display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '22px'}>
      {commChips?.map(c => (<React.Fragment key={Math.random()}>
        <button onClick={c.onClick} style={background: `${ c.active ? '#14213d' : '#fff' }`, color: `${ c.active ? '#fff' : '#5a6172' }`, border: `1px solid ${ c.active ? '#14213d' : '#e6e8ec' }`, borderRadius: '999px', padding: '8px 16px', cursor: 'pointer', fontFamily: 'inherit', fontSize: '13px', fontWeight: '700'} data-hover="border-color:#14213d;">{c.label}</button>
      </React.Fragment>))}
    </div>

    <div style={display: 'flex', flexDirection: 'column', gap: '14px'}>
      {posts?.map(p => (<React.Fragment key={Math.random()}>
        <div style={background: '#fff', border: '1px solid #e6e8ec', borderRadius: '16px', padding: '20px 22px', display: 'flex', gap: '18px'}>
          <div style={display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px', flexShrink: '0'}>
            <button onClick={p.onVote} style={display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2px', background: `${ p.voteBg }`, border: `1px solid ${ p.voteBorder }`, cursor: 'pointer', fontFamily: 'inherit', borderRadius: '11px', padding: '8px 12px', minWidth: '52px'} data-hover="border-color:#d2232a;">
              <span style={fontSize: '15px', color: `${ p.voteColor }`, lineHeight: '1'}>▲</span>
              <span style={fontSize: '15px', fontWeight: '800', color: `${ p.voteColor }`, lineHeight: '1'}>{p.votos}</span>
            </button>
          </div>
          <div style={flex: '1', minWidth: '0'}>
            <div style={display: 'flex', alignItems: 'center', gap: '9px', marginBottom: '9px'}>
              <span style={width: '34px', height: '34px', borderRadius: '9px', background: `${ p.avatarColor }`, color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '700', fontSize: '13px', flexShrink: '0'}>{p.initials}</span>
              <div style={flex: '1', minWidth: '0'}>
                <div style={fontSize: '14px', fontWeight: '700', color: '#14213d', lineHeight: '1.2'}>{p.autor} <span style={fontSize: '12px', fontWeight: '600', color: '#9aa0ad'}>· {p.papel}</span></div>
                <div style={fontSize: '12px', color: '#9aa0ad'}>{p.veiculo} · {p.tempo}</div>
              </div>
              <span style={display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '11.5px', fontWeight: '700', letterSpacing: '0.03em', textTransform: 'uppercase', color: '#6b7385', flexShrink: '0'}><span style={width: '7px', height: '7px', borderRadius: '50%', background: `${ p.catColor }`}></span>{p.categoria}</span>
            </div>
            <div style={fontSize: '17px', fontWeight: '800', color: '#14213d', lineHeight: '1.35', marginBottom: '7px', letterSpacing: '-0.01em', textWrap: 'pretty'}>{p.titulo}</div>
            <p style={fontSize: '14.5px', lineHeight: '1.55', color: '#5a6172', margin: '0 0 12px'}>{p.corpo}</p>
            <div style={display: 'flex', alignItems: 'center', gap: '18px'}>
              <span style={fontSize: '13px', color: '#6b7385', fontWeight: '600'}>💬 {p.comentarios} comentários</span>
              <span style={fontSize: '13px', color: '#6b7385', fontWeight: '600'}>↗ Compartilhar</span>
            </div>
          </div>
        </div>
      </React.Fragment>))}
    </div>
  </div>
  </>)}

  
  <footer style={background: '#0f1830', borderTop: '1px solid #1d2942'}>
    <div style={maxWidth: '1200px', margin: '0 auto', padding: '46px 24px 30px', display: 'grid', gridTemplateColumns: '1.4fr 1fr 1fr 1fr', gap: '32px'}>
      <div>
        <div style={display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '14px'}>
          <img src="assets/autopedia-emblem.png" alt="AutoPedia" style={height: '34px', width: 'auto', filter: 'brightness(1.4)'} />
          <span style={fontWeight: '800', fontSize: '19px', fontStyle: 'italic', letterSpacing: '-0.02em', color: '#fff'}>AutoPedia</span>
        </div>
        <p style={fontSize: '13.5px', lineHeight: '1.55', color: '#8493b3', margin: '0', maxWidth: '280px'}>Manuais · Peças · Diagramas · Soluções. A enciclopédia automotiva colaborativa do Brasil.</p>
      </div>
      <div>
        <div style={fontSize: '12px', fontWeight: '700', letterSpacing: '0.06em', textTransform: 'uppercase', color: '#5e6e92', marginBottom: '14px'}>Plataforma</div>
        <div style={display: 'flex', flexDirection: 'column', gap: '9px', fontSize: '13.5px', color: '#b3becf', fontWeight: '500'}><span>Buscar manuais</span><span>Catálogo de peças</span><span>Defeitos crônicos</span><span>Diagramas</span></div>
      </div>
      <div>
        <div style={fontSize: '12px', fontWeight: '700', letterSpacing: '0.06em', textTransform: 'uppercase', color: '#5e6e92', marginBottom: '14px'}>Comunidade</div>
        <div style={display: 'flex', flexDirection: 'column', gap: '9px', fontSize: '13.5px', color: '#b3becf', fontWeight: '500'}><span>Contribuir</span><span>Profissionais</span><span>Ranking</span><span>Regras</span></div>
      </div>
      <div>
        <div style={fontSize: '12px', fontWeight: '700', letterSpacing: '0.06em', textTransform: 'uppercase', color: '#5e6e92', marginBottom: '14px'}>Veículos</div>
        <div style={display: 'flex', flexDirection: 'column', gap: '9px', fontSize: '13.5px', color: '#b3becf', fontWeight: '500'}><span>Carros</span><span>Motos</span><span>Caminhões</span><span>Todas as marcas</span></div>
      </div>
    </div>
    <div style={maxWidth: '1200px', margin: '0 auto', padding: '18px 24px', borderTop: '1px solid #1d2942', display: 'flex', alignItems: 'center', justifyContent: 'space-between'}>
      <span style={fontSize: '12.5px', color: '#5e6e92'}>© 2026 AutoPedia · Conhecimento que move.</span>
      <span style={fontSize: '12.5px', color: '#5e6e92'}>Feito no Brasil 🇧🇷</span>
    </div>
  </footer>

  
  {showContribute && (<>
  <div style={position: 'fixed', inset: '0', zIndex: '100', background: 'rgba(15,24,48,0.55)', backdropFilter: 'blur(3px)', display: 'flex', alignItems: 'flex-start', justifyContent: 'center', padding: '48px 20px', overflowY: 'auto'} onClick={closeContribute}>
    <div style={background: '#fff', borderRadius: '20px', width: '100%', maxWidth: '560px', boxShadow: '0 30px 80px rgba(0,0,0,0.3)'} onClick={stopProp}>
      <div style={padding: '22px 26px', borderBottom: '1px solid #eef0f3', display: 'flex', alignItems: 'center', justifyContent: 'space-between'}>
        <div>
          <div style={fontSize: '19px', fontWeight: '800', color: '#14213d', letterSpacing: '-0.01em'}>Compartilhar conhecimento</div>
          <div style={fontSize: '13px', color: '#9aa0ad', fontWeight: '500', marginTop: '2px'}>Ajude outros profissionais e donos de veículo.</div>
        </div>
        <button onClick={closeContribute} style={background: '#f1f3f6', border: 'none', cursor: 'pointer', width: '34px', height: '34px', borderRadius: '9px', fontSize: '17px', color: '#6b7385', lineHeight: '1'} data-hover="background:#e6e8ec;">✕</button>
      </div>
      <div style={padding: '24px 26px'}>
        <div style={marginBottom: '18px'}>
          <label style={display: 'block', fontSize: '13px', fontWeight: '700', color: '#14213d', marginBottom: '7px'}>Veículo</label>
          <input value="{formVeiculo}" onChange={onFormVeiculo} placeholder="Ex.: Chevrolet Onix 1.4 2016" style={width: '100%', border: '1.5px solid #e6e8ec', borderRadius: '10px', padding: '11px 13px', fontFamily: 'inherit', fontSize: '14.5px', color: '#14213d', outline: 'none'} data-focus="border-color:#14213d;" />
        </div>
        <div style={marginBottom: '18px'}>
          <label style={display: 'block', fontSize: '13px', fontWeight: '700', color: '#14213d', marginBottom: '7px'}>Sistema / categoria</label>
          <div style={display: 'flex', flexWrap: 'wrap', gap: '7px'}>
            {formCats?.map(c => (<React.Fragment key={Math.random()}>
              <button onClick={c.onClick} style={background: `${ c.active ? '#14213d' : '#f7f8fa' }`, color: `${ c.active ? '#fff' : '#5a6172' }`, border: `1.5px solid ${ c.active ? '#14213d' : '#e6e8ec' }`, borderRadius: '9px', padding: '7px 13px', cursor: 'pointer', fontFamily: 'inherit', fontSize: '12.5px', fontWeight: '700'} data-hover="border-color:#14213d;">{c.label}</button>
            </React.Fragment>))}
          </div>
        </div>
        <div style={marginBottom: '18px'}>
          <label style={display: 'block', fontSize: '13px', fontWeight: '700', color: '#14213d', marginBottom: '7px'}>Título <span style={color: '#d2232a'}>*</span></label>
          <input value="{formTitulo}" onChange={onFormTitulo} placeholder="Ex.: Como diagnosticar a corrente de comando esticada" style={width: '100%', border: '1.5px solid #e6e8ec', borderRadius: '10px', padding: '11px 13px', fontFamily: 'inherit', fontSize: '14.5px', color: '#14213d', outline: 'none'} data-focus="border-color:#14213d;" />
        </div>
        <div style={marginBottom: '4px'}>
          <label style={display: 'block', fontSize: '13px', fontWeight: '700', color: '#14213d', marginBottom: '7px'}>Descrição / solução <span style={color: '#d2232a'}>*</span></label>
          <textarea value="{formDescricao}" onChange={onFormDescricao} placeholder="Descreva o sintoma, a causa, os códigos de peça e como você resolveu. Quanto mais detalhe, mais gente você ajuda." style={width: '100%', minHeight: '120px', resize: 'vertical', border: '1.5px solid #e6e8ec', borderRadius: '10px', padding: '11px 13px', fontFamily: 'inherit', fontSize: '14.5px', lineHeight: '1.5', color: '#14213d', outline: 'none'} data-focus="border-color:#14213d;"></textarea>
        </div>
        <div style={display: 'flex', alignItems: 'center', gap: '10px', marginTop: '8px', padding: '12px 14px', background: '#f7f8fa', border: '1px dashed #d3d7df', borderRadius: '11px'}>
          <span style={fontSize: '18px'}>📎</span>
          <span style={fontSize: '13px', color: '#6b7385', fontWeight: '500'}>Arraste fotos da peça, do defeito ou diagramas (opcional)</span>
        </div>
      </div>
      <div style={padding: '18px 26px', borderTop: '1px solid #eef0f3', display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: '10px'}>
        <button onClick={closeContribute} style={background: '#fff', border: '1.5px solid #e6e8ec', cursor: 'pointer', fontFamily: 'inherit', fontSize: '14px', fontWeight: '700', color: '#14213d', padding: '11px 20px', borderRadius: '10px'} data-hover="border-color:#14213d;">Cancelar</button>
        <button onClick={submitContribution} style={background: '#d2232a', border: 'none', cursor: 'pointer', fontFamily: 'inherit', fontSize: '14px', fontWeight: '700', color: '#fff', padding: '11px 22px', borderRadius: '10px', boxShadow: '0 4px 12px rgba(210,35,42,0.28)'} data-hover="background:#b81d24;">Publicar contribuição</button>
      </div>
    </div>
  </div>
  </>)}

  
  {hasToast && (<>
  <div style={position: 'fixed', bottom: '28px', left: '50%', transform: 'translateX(-50%)', zIndex: '120', background: '#14213d', color: '#fff', fontSize: '14px', fontWeight: '600', padding: '13px 22px', borderRadius: '12px', boxShadow: '0 12px 34px rgba(20,33,61,0.34)', display: 'flex', alignItems: 'center', gap: '9px'}>
    <span style={width: '8px', height: '8px', borderRadius: '50%', background: '#3ad07f'}></span>{toast}
  </div>
  </>)}

</div>

<script type="text/x-dc" data-dc-script>
class Component extends DCLogic {
  state = {
    screen: (this.props && this.props.startScreen) || 'home',
    vehicleType: 'Carro',
    marca: null, modelo: null, ano: null,
    categoria: 'Todos',
    selectedPartId: null,
    communityFilter: 'Todos',
    showContribute: false,
    form: { veiculo: '', categoria: 'Motor', titulo: '', descricao: '' },
    posts: this.initialPosts(),
    toast: null,
  };

  toastMsg(t){ this.setState({toast:t}); clearTimeout(this._t); this._t=setTimeout(()=>this.setState({toast:null}),2400); }
  nav(s){ try{ window.scrollTo({top:0}); }catch(e){ try{ window.scrollTo(0,0);}catch(_){} } this.setState({screen:s}); }
  goBrowseFresh(){ this.setState({marca:null,modelo:null,ano:null,categoria:'Todos'}); this.nav('browse'); }
  setType(t){ this.setState({vehicleType:t,marca:null,modelo:null,ano:null}); }
  pickMarca(m){ this.setState({marca:m,modelo:null,ano:null}); }
  pickModelo(m){ this.setState({modelo:m,ano:null}); }
  pickAno(a){ this.setState({ano:a,categoria:'Todos'}); }
  pickCategoria(c){ this.setState({categoria:c}); }
  selectPopular(v){ this.setState({vehicleType:v.tipo,marca:v.marca,modelo:v.modelo,ano:null,categoria:'Todos'}); this.nav('browse'); }
  openPart(id){ this.setState({selectedPartId:id}); this.nav('part'); }
  vote(id){ this.setState(s=>({posts:s.posts.map(p=>p.id===id?{...p,votos:p.hasVoted?p.votos-1:p.votos+1,hasVoted:!p.hasVoted}:p)})); }
  openContribute(){ this.setState({showContribute:true}); }
  closeContribute(){ this.setState({showContribute:false}); }
  setForm(k,v){ this.setState(s=>({form:{...s.form,[k]:v}})); }
  submitContribution(){
    const f=this.state.form;
    if(!f.titulo.trim()||!f.descricao.trim()){ this.toastMsg('Preencha título e descrição.'); return; }
    const post={ id:'u'+Date.now(), autor:'Você', papel:'Proprietário', initials:'VC', avatarColor:'#14213d',
      veiculo:(f.veiculo.trim()||'Geral'), categoria:f.categoria, titulo:f.titulo.trim(), corpo:f.descricao.trim(),
      votos:1, comentarios:0, tempo:'agora', hasVoted:true, mine:true };
    this.setState(s=>({posts:[post,...s.posts], showContribute:false, communityFilter:'Todos',
      form:{veiculo:'',categoria:'Motor',titulo:'',descricao:''}}));
    this.toastMsg('Contribuição publicada! Obrigado por compartilhar.');
  }

  catColor(c){ return ({'Motor':'#d2232a','Elétrica & Eletrônica':'#2a6fdb','Suspensão & Direção':'#1f8a5b','Freios':'#e08a00','Arrefecimento':'#0fa3b1','Funilaria & Pintura':'#7a3ff2'})[c]||'#6b7385'; }
  difColor(d){ return ({'Fácil':'#1f8a5b','Média':'#e08a00','Difícil':'#d2232a'})[d]||'#6b7385'; }
  freqColor(f){ return ({'Muito comum':'#d2232a','Comum':'#e08a00'})[f]||'#6b7385'; }

  vehicles(){ return [
    {marca:'Chevrolet',modelo:'Onix',tipo:'Carro',anos:'2012–2025',manuais:42,montadora:'GM'},
    {marca:'Volkswagen',modelo:'Gol',tipo:'Carro',anos:'1994–2023',manuais:58,montadora:'VW'},
    {marca:'Fiat',modelo:'Uno',tipo:'Carro',anos:'1984–2021',manuais:51,montadora:'Stellantis'},
    {marca:'Fiat',modelo:'Argo',tipo:'Carro',anos:'2017–2025',manuais:29,montadora:'Stellantis'},
    {marca:'Hyundai',modelo:'HB20',tipo:'Carro',anos:'2012–2025',manuais:33,montadora:'Hyundai'},
    {marca:'Honda',modelo:'CG 160',tipo:'Moto',anos:'2016–2025',manuais:24,montadora:'Honda'},
  ]; }
  marcasFor(t){
    if(t==='Moto') return [{nome:'Honda',count:4},{nome:'Yamaha',count:3}];
    if(t==='Caminhão') return [{nome:'Mercedes-Benz',count:3},{nome:'Volvo',count:2},{nome:'Scania',count:2},{nome:'Volkswagen',count:2}];
    return [{nome:'Chevrolet',count:6},{nome:'Volkswagen',count:5},{nome:'Fiat',count:5},{nome:'Hyundai',count:2},{nome:'Renault',count:4},{nome:'Ford',count:4},{nome:'Toyota',count:3}];
  }
  modelosFor(m){ return ({
    'Chevrolet':['Onix','Prisma','Cobalt','Celta','Corsa','S10'],
    'Volkswagen':['Gol','Voyage','Fox','Polo','Saveiro'],
    'Fiat':['Uno','Argo','Palio','Strada','Mobi'],
    'Hyundai':['HB20','Creta'],
    'Renault':['Sandero','Logan','Kwid','Duster'],
    'Ford':['Ka','Fiesta','EcoSport','Ranger'],
    'Toyota':['Corolla','Etios','Hilux'],
    'Honda':['CG 160','Biz 125','CB 250F','Pop 110i'],
    'Yamaha':['Factor 150','Fazer 250','NMax 160'],
    'Mercedes-Benz':['Accelo','Atego','Axor'],
    'Volvo':['FH','VM'],
    'Scania':['R 450','P 320'],
  })[m]||['Modelo 1','Modelo 2','Modelo 3']; }
  anosList(){ return ['2025','2024','2023','2022','2021','2020','2019','2018','2017','2016','2015 e anteriores']; }

  partsCatalog(){ return [
    { id:'corrente-comando', nome:'Corrente de Comando + Tensor', categoria:'Motor', iniciais:'CC',
      resumo:'Sincroniza virabrequim e comando de válvulas. Estica com o tempo no motor 1.4 SPE/4.',
      codigoOEM:'55230255', codigosAlt:['Iwis 59010','SKF VKML 85101','Tritava TKC0118'], precoMin:380, precoMax:760,
      fotos:['Kit completo corrente + tensor','Tensor hidráulico','Folga / desgaste na corrente'],
      compatibilidade:[{v:'Chevrolet Onix 1.4 SPE/4',anos:'2013–2019'},{v:'Chevrolet Prisma 1.4',anos:'2013–2019'},{v:'Chevrolet Cobalt 1.4/1.8',anos:'2012–2019'}],
      problemas:[
        {sintoma:'Ruído metálico / "matraca" na partida a frio',causa:'Corrente esticada e tensor sem pressão hidráulica suficiente ao ligar.',solucao:'Substituir o kit completo (corrente, tensor e guias). Não reaproveitar o tensor antigo.',dificuldade:'Difícil',freq:'Muito comum'},
        {sintoma:'Código P0016 / P0017 (sincronismo virabrequim-comando)',causa:'Corrente pulou um dente por desgaste, defasando o comando.',solucao:'Conferir marcas de sincronismo e refazer a calagem com a corrente nova.',dificuldade:'Difícil',freq:'Comum'},
      ],
      especificacoes:[{l:'Tipo',v:'Corrente de rolos simples'},{l:'Passo / elos',v:'3/8" — 122 elos'},{l:'Tensor',v:'Hidráulico com trava'},{l:'Troca recomendada',v:'A cada 80.000 km'}],
    },
    { id:'bobina', nome:'Bobina de Ignição', categoria:'Elétrica & Eletrônica', iniciais:'BI',
      resumo:'Gera a alta tensão que alimenta a centelha das velas em cada cilindro.',
      codigoOEM:'55570157', codigosAlt:['Bosch 0986221045','NGK U5054','Magneti Marelli BAE907E'], precoMin:120, precoMax:280,
      fotos:['Bobina caneta — vista frontal','Conector de 3 vias','Trinca / fuga de corrente'],
      compatibilidade:[{v:'Chevrolet Onix 1.0 / 1.4',anos:'2013–2019'},{v:'Chevrolet Prisma 1.4',anos:'2013–2019'},{v:'Chevrolet Cobalt 1.4/1.8',anos:'2012–2019'}],
      problemas:[
        {sintoma:'Motor "engasgando" / trepidando em aceleração',causa:'Isolamento da bobina rompido provocando fuga de corrente para a massa.',solucao:'Medir resistência primária/secundária e trocar a bobina do cilindro afetado. Checar velas e vedação.',dificuldade:'Fácil',freq:'Muito comum'},
        {sintoma:'Luz de injeção (P0351–P0354)',causa:'Falha no circuito primário de uma das bobinas.',solucao:'Scanner para identificar o cilindro, verificar alimentação 12V e sinal de comando do módulo.',dificuldade:'Média',freq:'Comum'},
      ],
      especificacoes:[{l:'Tipo',v:'Bobina caneta (pencil coil)'},{l:'Tensão de saída',v:'até 40 kV'},{l:'Resistência primária',v:'0,5 – 0,8 Ω'},{l:'Conector',v:'3 vias'}],
    },
    { id:'bomba-comb', nome:'Bomba de Combustível', categoria:'Motor', iniciais:'BC',
      resumo:'Pressuriza e envia o combustível do tanque até os bicos injetores.',
      codigoOEM:'52029658', codigosAlt:['Bosch 0580200318','Delphi FE0708','VDO E22041061Z'], precoMin:160, precoMax:420,
      fotos:['Módulo da bomba completo','Filtro/tela de sucção','Conector elétrico oxidado'],
      compatibilidade:[{v:'Chevrolet Onix 1.0/1.4',anos:'2012–2019'},{v:'VW Gol G5/G6 1.0/1.6',anos:'2008–2017'},{v:'Fiat Uno 1.0/1.4',anos:'2010–2021'}],
      problemas:[
        {sintoma:'Veículo não pega após reabastecer / morre quente',causa:'Bomba perdendo vazão e pressão com o aquecimento.',solucao:'Medir pressão de linha (3,8 bar). Verificar relé e tela de sucção entupida antes de condenar a bomba.',dificuldade:'Média',freq:'Muito comum'},
        {sintoma:'Falha intermitente em alta rotação',causa:'Conector elétrico oxidado gerando mau contato.',solucao:'Limpar/refazer o conector e checar aterramento. Medir queda de tensão sob carga.',dificuldade:'Fácil',freq:'Comum'},
      ],
      especificacoes:[{l:'Pressão de trabalho',v:'3,8 bar'},{l:'Vazão',v:'110 L/h'},{l:'Tensão',v:'12 V'},{l:'Filtro',v:'Tela 60 µm integrada'}],
    },
    { id:'tbi', nome:'Corpo de Borboleta (TBI)', categoria:'Motor', iniciais:'TB',
      resumo:'Controla a entrada de ar do motor de forma eletrônica (acelerador eletrônico).',
      codigoOEM:'55562270', codigosAlt:['Bosch 0280750473','Magneti Marelli TB0042'], precoMin:340, precoMax:890,
      fotos:['Corpo de borboleta — corpo','Motor de passo / TPS','Acúmulo de carvão na borboleta'],
      compatibilidade:[{v:'Chevrolet Onix 1.0/1.4',anos:'2013–2019'},{v:'VW Gol G5 1.6',anos:'2009–2014'},{v:'Fiat Argo 1.0/1.3',anos:'2017–2023'}],
      problemas:[
        {sintoma:'Marcha lenta irregular / motor "respira" parado',causa:'Acúmulo de carvão alterando a posição de fechamento da borboleta.',solucao:'Limpar o corpo de borboleta e realizar o reaprendizado da marcha lenta (TBI relearn) via scanner.',dificuldade:'Fácil',freq:'Muito comum'},
        {sintoma:'Modo de segurança (EPC) / perda de potência',causa:'Falha no sensor de posição (TPS) integrado.',solucao:'Verificar sinal do TPS, alimentação e massa. Substituir o conjunto se fora de faixa.',dificuldade:'Média',freq:'Comum'},
      ],
      especificacoes:[{l:'Tipo',v:'Acelerador eletrônico (drive-by-wire)'},{l:'Diâmetro',v:'52 mm'},{l:'Sensor',v:'TPS duplo + motor DC'},{l:'Conector',v:'6 vias'}],
    },
    { id:'sensor-rot', nome:'Sensor de Rotação', categoria:'Elétrica & Eletrônica', iniciais:'SR',
      resumo:'Informa a posição e a rotação do virabrequim para a central de injeção.',
      codigoOEM:'55187331', codigosAlt:['Bosch 0261210170','MTE-Thomson 7080'], precoMin:70, precoMax:190,
      fotos:['Sensor indutivo','Roda fônica (cremalheira)','Ponta do sensor com limalha'],
      compatibilidade:[{v:'Chevrolet Onix 1.0/1.4',anos:'2012–2019'},{v:'Fiat Palio/Uno 1.0/1.4',anos:'2010–2020'},{v:'VW Gol 1.0/1.6',anos:'2008–2016'}],
      problemas:[
        {sintoma:'Motor corta / morre em movimento e volta a ligar',causa:'Sensor com falha térmica ou ponta contaminada por limalha.',solucao:'Limpar a ponta e medir resistência/sinal. Substituir se o corte ocorrer com o motor quente.',dificuldade:'Fácil',freq:'Comum'},
        {sintoma:'Não dá partida (sem rotação no scanner)',causa:'Sensor sem sinal ou chicote interrompido.',solucao:'Verificar sinal em osciloscópio, continuidade do chicote e folga com a roda fônica.',dificuldade:'Média',freq:'Comum'},
      ],
      especificacoes:[{l:'Tipo',v:'Indutivo (relutância variável)'},{l:'Resistência',v:'480 – 1000 Ω'},{l:'Roda fônica',v:'58 dentes (60-2)'},{l:'Conector',v:'2 vias'}],
    },
    { id:'pastilha', nome:'Pastilha de Freio Dianteira', categoria:'Freios', iniciais:'PF',
      resumo:'Material de atrito que pressiona o disco para reduzir a velocidade da roda.',
      codigoOEM:'13301234', codigosAlt:['Cobreq N-1456','Bosch BB1456','Fras-le PD/1456'], precoMin:90, precoMax:230,
      fotos:['Jogo de pastilhas','Sensor de desgaste','Disco com sulco / empenamento'],
      compatibilidade:[{v:'Chevrolet Onix / Prisma',anos:'2012–2019'},{v:'Fiat Uno / Palio',anos:'2010–2021'},{v:'VW Gol G5/G6',anos:'2008–2017'}],
      problemas:[
        {sintoma:'Chiado agudo ao frear',causa:'Sensor de desgaste encostando no disco ou pastilha vitrificada.',solucao:'Medir espessura (mín. 3 mm), lixar/limpar e aplicar pasta antiruído nas costas da pastilha.',dificuldade:'Fácil',freq:'Muito comum'},
        {sintoma:'Pedal trepidando / volante vibra ao frear',causa:'Disco empenado pelo superaquecimento.',solucao:'Verificar desempeno do disco; retificar dentro do limite ou substituir o par.',dificuldade:'Média',freq:'Comum'},
      ],
      especificacoes:[{l:'Posição',v:'Eixo dianteiro'},{l:'Espessura nova',v:'17,5 mm'},{l:'Espessura mínima',v:'3,0 mm'},{l:'Sensor',v:'Acústico integrado'}],
    },
    { id:'amortecedor', nome:'Amortecedor Dianteiro', categoria:'Suspensão & Direção', iniciais:'AM',
      resumo:'Controla as oscilações da mola, mantendo o pneu em contato com o solo.',
      codigoOEM:'52102345', codigosAlt:['Cofap GP32812','Monroe G16312','Nakata HG31055'], precoMin:230, precoMax:560,
      fotos:['Amortecedor + coxim','Batente / kit completo','Vazamento de óleo na haste'],
      compatibilidade:[{v:'Chevrolet Onix / Prisma',anos:'2012–2019'},{v:'Fiat Argo / Cronos',anos:'2017–2024'},{v:'VW Gol G5/G6',anos:'2008–2017'}],
      problemas:[
        {sintoma:'Carro "flutua" e quica em lombadas',causa:'Amortecedor sem carga de gás/óleo (vazando).',solucao:'Substituir sempre aos pares e trocar coxim, batente e kit de proteção juntos.',dificuldade:'Média',freq:'Muito comum'},
        {sintoma:'Barulho seco na frente em buracos',causa:'Coxim ou rolamento do amortecedor (camboteiro) desgastado.',solucao:'Inspecionar coxim e rolamento; substituir o kit superior completo.',dificuldade:'Média',freq:'Comum'},
      ],
      especificacoes:[{l:'Tipo',v:'Pressurizado a gás'},{l:'Montagem',v:'McPherson'},{l:'Curso',v:'180 mm'},{l:'Troca',v:'Aos pares, ~60.000 km'}],
    },
    { id:'radiador', nome:'Radiador', categoria:'Arrefecimento', iniciais:'RA',
      resumo:'Dissipa o calor do líquido de arrefecimento, mantendo a temperatura do motor.',
      codigoOEM:'52015678', codigosAlt:['Valeo RA2034','Notus NT2034','Visconde V2034'], precoMin:280, precoMax:640,
      fotos:['Radiador — colmeia','Tanque plástico lateral','Trinca no tanque / mancha verde'],
      compatibilidade:[{v:'Chevrolet Onix 1.0/1.4',anos:'2012–2019'},{v:'Hyundai HB20 1.0/1.6',anos:'2012–2022'},{v:'Fiat Uno 1.0/1.4',anos:'2010–2021'}],
      problemas:[
        {sintoma:'Superaquecimento e perda de líquido',causa:'Trinca no tanque plástico ou colmeia obstruída.',solucao:'Testar com bomba de pressão. Substituir o radiador e fazer a sangria do sistema.',dificuldade:'Média',freq:'Comum'},
        {sintoma:'Líquido contaminado / "borra"',causa:'Mistura de aditivos incompatíveis cristalizando.',solucao:'Lavar o sistema (flush) e abastecer com aditivo único correto na proporção indicada.',dificuldade:'Fácil',freq:'Comum'},
      ],
      especificacoes:[{l:'Material',v:'Alumínio + tanque plástico'},{l:'Núcleo',v:'2 fileiras'},{l:'Aditivo',v:'Orgânico (OAT) — não misturar'},{l:'Pressão da tampa',v:'1,1 bar'}],
    },
    { id:'cdi', nome:'Módulo CDI / Regulador', categoria:'Elétrica & Eletrônica', iniciais:'CD',
      resumo:'Controla o ponto de ignição da moto e regula a tensão de carga da bateria.',
      codigoOEM:'30410-K05-901', codigosAlt:['Magnetron 90304870','DNI 8350','Servtec ST‑CG160'], precoMin:90, precoMax:260,
      fotos:['Módulo CDI','Regulador retificador','Conector queimado'],
      compatibilidade:[{v:'Honda CG 160 Fan/Titan/Start',anos:'2016–2025'},{v:'Honda Bros 160',anos:'2016–2025'},{v:'Honda CG 150',anos:'2009–2015'}],
      problemas:[
        {sintoma:'Moto falha em alta rotação e "trava" o giro',causa:'CDI com limitador atuando cedo por defeito interno.',solucao:'Comparar com módulo bom. Verificar bobina de pulso e aterramento antes de trocar o CDI.',dificuldade:'Média',freq:'Comum'},
        {sintoma:'Bateria não carrega / lâmpadas queimando',causa:'Regulador retificador em curto, enviando tensão alta.',solucao:'Medir tensão de carga (13,5–14,5 V a 5.000 rpm). Substituir o regulador se acima de 15 V.',dificuldade:'Fácil',freq:'Comum'},
      ],
      especificacoes:[{l:'Ignição',v:'CDI digital'},{l:'Tensão de carga',v:'13,5 – 14,5 V'},{l:'Avanço',v:'Mapa eletrônico'},{l:'Conector CDI',v:'6 vias'}],
    },
  ]; }

  initialPosts(){ return [
    {id:'p1',autor:'Carlos Menezes',papel:'Mecânico',initials:'CM',avatarColor:'#14213d',veiculo:'Chevrolet Onix 1.4 2016',categoria:'Motor',
      titulo:'Corrente de comando do Onix 1.4 esticando antes dos 80 mil km',
      corpo:'Defeito clássico do SPE/4. O barulho de "matraca" na partida a frio é o tensor sem pressão. Troquem o kit completo — corrente, tensor e guias — não reaproveitem nada. Segue o sincronismo correto nas fotos.',
      votos:142,comentarios:38,tempo:'2h',hasVoted:false},
    {id:'p2',autor:'Aline Souza',papel:'Eletricista',initials:'AS',avatarColor:'#2a6fdb',veiculo:'VW Gol G5 2010',categoria:'Elétrica & Eletrônica',
      titulo:'Gol G5 apagando o painel: pinos do conector do corpo de borboleta',
      corpo:'Antes de trocar a TBI, olhem os pinos do conector. Oxidam e dão mau contato intermitente. Limpei, apliquei spray de contato e o defeito sumiu. Economizei a peça do cliente.',
      votos:89,comentarios:21,tempo:'5h',hasVoted:false},
    {id:'p3',autor:'Robson Lima',papel:'Pintor',initials:'RL',avatarColor:'#7a3ff2',veiculo:'Fiat Argo 2019',categoria:'Funilaria & Pintura',
      titulo:'Tabela de código de cor original do Argo (Vermelho Montecarlo)',
      corpo:'A etiqueta fica na coluna da porta do motorista. Código 192/A. Deixei a fórmula de tinta base d\'água que mais aproximou aqui na oficina. Quem tiver o sólido e o tricoat, complementa aí.',
      votos:67,comentarios:12,tempo:'1d',hasVoted:false},
    {id:'p4',autor:'Júnior Mecânico',papel:'Mecânico',initials:'JM',avatarColor:'#1f8a5b',veiculo:'Honda CG 160 2018',categoria:'Motor',
      titulo:'CG 160 falhando em alta: diagnóstico passo a passo (bobina x CDI)',
      corpo:'Roteiro que uso: 1) testa a vela; 2) mede resistência da bobina; 3) checa a bobina de pulso; 4) por último o CDI, comparando com um bom. Na maioria das vezes é a bobina de pulso, não o CDI.',
      votos:113,comentarios:29,tempo:'1d',hasVoted:false},
    {id:'p5',autor:'Patrícia Gomes',papel:'Proprietária',initials:'PG',avatarColor:'#d2232a',veiculo:'Fiat Uno 1.0 2014',categoria:'Freios',
      titulo:'Pastilha dianteira do Uno: equivalências e medida do disco',
      corpo:'Sou dona do carro, não sou mecânica, mas pesquisei bastante. O disco mínimo é 10,8 mm. Listei 3 marcas de pastilha que servem e o preço médio que paguei. Espero ajudar quem tá com o mesmo carro.',
      votos:41,comentarios:9,tempo:'2d',hasVoted:false},
    {id:'p6',autor:'Diego Ramos',papel:'Eletricista',initials:'DR',avatarColor:'#e08a00',veiculo:'Hyundai HB20 1.0 2015',categoria:'Elétrica & Eletrônica',
      titulo:'Mapa de fusíveis do HB20 e o relé da bomba que ninguém acha',
      corpo:'O relé da bomba não está na caixa do habitáculo, está na caixa do motor (posição 4). Montei o diagrama completo com a numeração real. Salva muito tempo no diagnóstico de "não pega".',
      votos:95,comentarios:17,tempo:'3d',hasVoted:false},
  ]; }

  renderVals(){
    const s=this.state;
    const screen=s.screen;
    const cat=this.partsCatalog();
    const popular=this.vehicles().map(v=>({...v, label:v.marca+' '+v.modelo, onSelect:()=>this.selectPopular(v)}));
    const typeTabs=['Carro','Moto','Caminhão'].map(t=>({label:t, active:s.vehicleType===t, onClick:()=>this.setType(t)}));
    const heroChips=this.vehicles().slice(0,5).map(v=>({label:v.modelo, onClick:()=>this.selectPopular(v)}));

    const marcas=this.marcasFor(s.vehicleType).map(m=>({nome:m.nome, modelosCount:m.count, active:s.marca===m.nome, onPick:()=>this.pickMarca(m.nome)}));
    const modelos=(s.marca?this.modelosFor(s.marca):[]).map(m=>({nome:m, active:s.modelo===m, onPick:()=>this.pickModelo(m)}));
    const anos=this.anosList().map(a=>({label:a, active:s.ano===a, onPick:()=>this.pickAno(a)}));
    const catTabs=['Todos','Motor','Elétrica & Eletrônica','Suspensão & Direção','Freios','Arrefecimento','Funilaria & Pintura'].map(c=>({label:c, active:s.categoria===c, onClick:()=>this.pickCategoria(c)}));
    const partsList=cat.filter(p=>s.categoria==='Todos'||p.categoria===s.categoria).map(p=>({
      id:p.id, nome:p.nome, categoria:p.categoria, resumo:p.resumo, codigoOEM:p.codigoOEM, iniciais:p.iniciais,
      catColor:this.catColor(p.categoria), problemasCount:p.problemas.length, precoMin:p.precoMin, precoMax:p.precoMax,
      onOpen:()=>this.openPart(p.id),
    }));
    const selVehicleLabel=[s.marca,s.modelo,s.ano].filter(Boolean).join(' ');

    let part=null;
    if(s.selectedPartId){
      const p=cat.find(x=>x.id===s.selectedPartId);
      if(p){ part={...p, catColor:this.catColor(p.categoria),
        problemas:p.problemas.map(pr=>({...pr, difColor:this.difColor(pr.dificuldade), freqColor:this.freqColor(pr.freq)})) }; }
    }

    const commChips=['Todos','Motor','Elétrica & Eletrônica','Suspensão & Direção','Freios','Funilaria & Pintura'].map(f=>({label:f, active:s.communityFilter===f, onClick:()=>this.setState({communityFilter:f})}));
    const posts=s.posts.filter(p=>s.communityFilter==='Todos'||p.categoria===s.communityFilter).map(p=>({
      ...p, catColor:this.catColor(p.categoria), onVote:()=>this.vote(p.id), voteColor:p.hasVoted?'#d2232a':'#6b7385',
      voteBg:p.hasVoted?'#fdeced':'#f1f3f6', voteBorder:p.hasVoted?'#f3c2c4':'#e6e8ec',
    }));
    const recentPosts=s.posts.slice(0,3).map(p=>({...p, catColor:this.catColor(p.categoria)}));

    const f=s.form;
    const formCats=['Motor','Elétrica & Eletrônica','Suspensão & Direção','Freios','Arrefecimento','Funilaria & Pintura'].map(c=>({label:c, active:f.categoria===c, onClick:()=>this.setForm('categoria',c)}));

    return {
      isHome:screen==='home', isBrowse:screen==='browse', isPart:screen==='part', isCommunity:screen==='community',
      navHomeActive:screen==='home', navBrowseActive:(screen==='browse'||screen==='part'), navCommActive:screen==='community',
      goHome:()=>this.nav('home'), goBrowse:()=>this.goBrowseFresh(), goCommunity:()=>this.nav('community'),
      openContribute:()=>this.openContribute(),
      showHowItWorks:(this.props && this.props.showHowItWorks!==undefined)?this.props.showHowItWorks:true,
      popular, typeTabs, heroChips,
      marcas, showModelos:!!s.marca, modelos, showAnos:!!s.modelo, anos, showParts:!!s.ano,
      catTabs, partsList, hasParts:partsList.length>0, selVehicleLabel, marcaSel:s.marca, modeloSel:s.modelo, anoSel:s.ano,
      part, hasPart:!!part, partVehicleLabel:(selVehicleLabel||'Modelos compatíveis'),
      commChips, posts, hasPosts:posts.length>0, recentPosts,
      showContribute:s.showContribute, closeContribute:()=>this.closeContribute(),
      formVeiculo:f.veiculo, formTitulo:f.titulo, formDescricao:f.descricao, formCats,
      onFormVeiculo:e=>this.setForm('veiculo',e.target.value),
      onFormTitulo:e=>this.setForm('titulo',e.target.value),
      onFormDescricao:e=>this.setForm('descricao',e.target.value),
      submitContribution:()=>this.submitContribution(),
      stopProp:(e)=>{ if(e && e.stopPropagation) e.stopPropagation(); },
      toast:s.toast, hasToast:!!s.toast,
      stat1:'12.480', stat2:'38.260', stat3:'9.215', stat4:'24.700',
    };
  }
}
</script>

    </div>
  );
}
