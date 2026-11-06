import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about">
      <div className="grid-bg"></div>
      <div className="scene-3d-6">
        <div className="cube" style={{ animationDuration: '25s' }}>
          <div className="cube-face cf-front">sin</div>
          <div className="cube-face cf-back">cos</div>
          <div className="cube-face cf-right">tg</div>
          <div className="cube-face cf-left">ctg</div>
          <div className="cube-face cf-top">sec</div>
          <div className="cube-face cf-bottom">csc</div>
        </div>
      </div>

      <div className="container">
        <div className="section-header">
          <span className="tag">// O mnie</span>
          <h2>Korepetycje<br /><span className="gradient-text">z głową</span></h2>
        </div>

        <div className="about-card">
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '1.2rem' }}>
            <div className="avatar-wrap">🧑‍🏫</div>
            <div>
              <strong style={{ fontSize: '1.1rem', fontFamily: 'var(--font-head)', display: 'block' }}>DC Math</strong>
              <span style={{ fontSize: '0.8rem', color: 'var(--muted)', fontFamily: 'var(--font-mono)' }}>
                Korepetytor Matematyki
              </span>
            </div>
          </div>

          <p style={{ fontSize: '0.9rem', color: '#94a3b8', lineHeight: '1.8', marginBottom: '1rem' }}>
            Uczę matematyki inaczej niż na typowych korepetycjach. Zamiast mechanicznie powtarzać schematy, 
            pomagam uczniom zbudować <strong style={{ color: 'var(--text)' }}>logiczne rozumienie problemu</strong>. 
            Dostarczam niezbędne narzędzia i rozwijam umiejętność samodzielnej analizy, co pozwala radzić sobie 
            nawet z nietypowymi zadaniami.
          </p>

          <p style={{ fontSize: '0.9rem', color: '#94a3b8', lineHeight: '1.8' }}>
            Pracuję z uczniami szkół średnich przygotowujących się do <strong style={{ color: 'var(--text)' }}>matury podstawowej i rozszerzonej</strong>. 
            Zapewniam pełne wsparcie i sprawdzone materiały, jednak to Twoja systematyczność i praca własna 
            ostatecznie przekuwają ten wysiłek w sukces na egzaminie. Każda lekcja jest dopasowana do Twojego tempa.
          </p>

          <div className="stat-row">
            <div className="stat-item">
              <span className="stat-num">100%</span>
              <span className="stat-lbl">Indywidualne</span>
            </div>
            <div className="stat-item">
              <span className="stat-num">Online<br />+</span>
              <span className="stat-lbl">Stacjonarnie</span>
            </div>
            <div className="stat-item">
              <span className="stat-num">Matura</span>
              <span className="stat-lbl">Basic & Rozszerzenie</span>
            </div>
          </div>

          <div className="badge-row">
            <span className="badge badge-cyan">Logiczne myślenie</span>
            <span className="badge badge-violet">Matura rozszerzona</span>
            <span className="badge badge-pink">Materiały własne</span>
            <span className="badge badge-pink">Narzędzia interaktywne</span>
            <span className="badge badge-cyan">Radzionków & okolice</span>
            <span className="badge badge-violet">Zwięźle i na temat</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;