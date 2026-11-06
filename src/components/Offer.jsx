import React, { useState } from 'react';
import './Offer.css';

const Offer = () => {
  const [activeTab, setActiveTab] = useState('process');

  return (
    <section id="offer">
      <div className="offer-glow"></div>
      <div className="grid-bg"></div>

      <div className="scene-3d-3">
        <div className="cube" style={{ animationDuration: '20s' }}>
          <div className="cube-face cf-front">x</div>
          <div className="cube-face cf-back">y</div>
          <div className="cube-face cf-right">z</div>
          <div className="cube-face cf-left">a</div>
          <div className="cube-face cf-top">b</div>
          <div className="cube-face cf-bottom">c</div>
        </div>
      </div>

      <div className="scene-3d-8">
        <div className="cube" style={{ animationDuration: '17s', animationDirection: 'reverse' }}>
          <div className="cube-face cf-front" style={{ borderColor: 'rgba(244,114,182,0.3)', color: 'rgba(244,114,182,0.4)' }}>+</div>
          <div className="cube-face cf-back" style={{ borderColor: 'rgba(244,114,182,0.3)', color: 'rgba(244,114,182,0.4)' }}>-</div>
          <div className="cube-face cf-right" style={{ borderColor: 'rgba(244,114,182,0.3)', color: 'rgba(244,114,182,0.4)' }}>×</div>
          <div className="cube-face cf-left" style={{ borderColor: 'rgba(244,114,182,0.3)', color: 'rgba(244,114,182,0.4)' }}>÷</div>
          <div className="cube-face cf-top" style={{ borderColor: 'rgba(244,114,182,0.3)', color: 'rgba(244,114,182,0.4)' }}>≈</div>
          <div className="cube-face cf-bottom" style={{ borderColor: 'rgba(244,114,182,0.3)', color: 'rgba(244,114,182,0.4)' }}>%</div>
        </div>
      </div>

      <div className="container">
        <div className="section-header">
          <span className="tag">// Jak pracujemy</span>
          <h2>Proces<br /><span className="gradient-text">Tryb pracy</span></h2>
        </div>

        <div className="mode-toggle" id="mode-toggle">
          {}
          <div 
            className="mode-toggle-pill" 
            style={{ 
              width: 'calc(50% - 4px)', 
              transform: activeTab === 'process' ? 'translateX(0)' : 'translateX(100%)' 
            }}
          ></div>
          
          <button 
            className={`mode-btn ${activeTab === 'process' ? 'active' : ''}`} 
            onClick={() => setActiveTab('process')}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
            </svg>
            Metodologia
          </button>
          
          <button 
            className={`mode-btn ${activeTab === 'modes' ? 'active' : ''}`} 
            onClick={() => setActiveTab('modes')}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="3" width="20" height="14" rx="2" />
              <line x1="8" y1="21" x2="16" y2="21" />
              <line x1="12" y1="17" x2="12" y2="21" />
            </svg>
            Online & Stacjonarnie
          </button>
        </div>

        <div className="mode-panels">
          <div className={`mode-panel ${activeTab === 'process' ? 'active' : ''}`}>
            <div className="process-steps">
              <div className="process-line">
                <div className="process-line-fill" style={{ height: '100%' }}></div>
              </div>

              <div className="step-item in-view">
                <div className="step-dot">
                  <div className="step-dot-inner"></div>
                </div>
                <div className="step-card">
                  <span className="step-num">// 01 — DIAGNOZA</span>
                  <h3>Rozumiemy punkt wyjścia</h3>
                  <p>Zanim zaczniemy, dokładnie weryfikuję posiadaną wiedzę i identyfikuję ewentualne braki. Proces nauczania budujemy zawsze od solidnych fundamentów.</p>
                  <div className="step-tags">
                    <span className="step-tag">Test wstępny</span>
                    <span className="step-tag">Analiza zaległości</span>
                    <span className="step-tag violet">Indywidualny plan</span>
                  </div>
                </div>
              </div>

              <div className="step-item in-view">
                <div className="step-dot">
                  <div className="step-dot-inner"></div>
                </div>
                <div className="step-card">
                  <span className="step-num">// 02 — STRUKTURA</span>
                  <h3>Buduję rozumienie, nie schematy</h3>
                  <p>Każde zagadnienie tłumaczone jest przez pryzmat logiki — uczeń rozumie zasady działania, a nie tylko kroki do wykonania. Odpowiednio zadawane pytania prowadzą do samodzielnego rozwiązania.</p>
                  <div className="step-tags">
                    <span className="step-tag">Metoda sokratyczna</span>
                    <span className="step-tag violet">Bez mechanicznego wkuwania</span>
                  </div>
                </div>
              </div>

              <div className="step-item in-view">
                <div className="step-dot">
                  <div className="step-dot-inner"></div>
                </div>
                <div className="step-card">
                  <span className="step-num">// 03 — UTRWALENIE</span>
                  <h3>Ćwiczymy różnorodność zadań</h3>
                  <p>Testujemy te same koncepcje w wielu różnych kontekstach, aby uniknąć zaskoczenia na egzaminie. Wykorzystujemy dedykowane materiały do każdej lekcji.</p>
                  <div className="step-tags">
                    <span className="step-tag">Zadania wielopoziomowe</span>
                    <span className="step-tag violet">Autorskie PDF-y</span>
                    <span className="step-tag">Arkusze maturalne</span>
                  </div>
                </div>
              </div>

              <div className="step-item in-view">
                <div className="step-dot">
                  <div className="step-dot-inner"></div>
                </div>
                <div className="step-card">
                  <span className="step-num">// 04 — EGZAMIN</span>
                  <h3>Wchodzimy pewnie na maturę</h3>
                  <p>Przeprowadzamy symulacje egzaminów, analizujemy typowe pułapki i optymalizujemy zarządzanie czasem. Uczeń jest w pełni świadomy swoich mocnych stron przed egzaminem.</p>
                  <div className="step-tags">
                    <span className="step-tag">Symulacje egzaminów</span>
                    <span className="step-tag violet">Techniki czasowe</span>
                    <span className="step-tag">Arkusze z 10 lat</span>
                  </div>
                </div>
              </div>

            </div>
          </div>

          <div className={`mode-panel ${activeTab === 'modes' ? 'active' : ''}`}>
            <div className="mode-detail">

              <div className="mode-detail-card in-view">
                <div className="mdc-header">
                  <div className="mdc-icon c">🖥️</div>
                  <div>
                    <div className="mdc-title">Zajęcia Online</div>
                    <div className="mdc-sub">Dowolne miejsce · Polska </div>
                  </div>
                </div>
                <div className="feature-grid">
                  <div className="feat"><div className="feat-dot c"></div>Interaktywna tablica cyfrowa</div>
                  <div className="feat"><div className="feat-dot c"></div>Cyfrowe archiwum lekcji</div>
                  <div className="feat"><div className="feat-dot c"></div>Materiały PDF po lekcji</div>
                  <div className="feat"><div className="feat-dot c"></div>Platforma ćwiczeń online</div>
                  <div className="feat"><div className="feat-dot c"></div>Kontakt WhatsApp/Messenger</div>
                  <div className="feat"><div className="feat-dot c"></div>Elastyczne godziny</div>
                </div>
              </div>

              <div className="mode-detail-card in-view">
                <div className="mdc-header">
                  <div className="mdc-icon v">📍</div>
                  <div>
                    <div className="mdc-title">Zajęcia Stacjonarne</div>
                    <div className="mdc-sub">Radzionków i okolice</div>
                  </div>
                </div>
                <div className="feature-grid">
                  <div className="feat"><div className="feat-dot v"></div>Praca na kartce</div>
                  <div className="feat"><div className="feat-dot v"></div>Materiały drukowane</div>
                  <div className="feat"><div className="feat-dot v"></div>Skupione środowisko</div>
                  <div className="feat"><div className="feat-dot v"></div>Po szkole lub weekend</div>
                  <div className="feat"><div className="feat-dot v"></div>Bezpośredni kontakt</div>
                  <div className="feat"><div className="feat-dot v"></div>Bytom · Piekary · T-Góry</div>
                </div>
                <div className="location-pill">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  Radzionków, woj. śląskie
                </div>
              </div>

              <div className="compare-row mode-detail-card in-view">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--cyan)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <line x1="12" y1="8" x2="12" y2="12" />
                  <line x1="12" y1="16" x2="12.01" y2="16" />
                </svg>
                <p>Nie wiesz, od czego zacząć? Podczas pierwszej lekcji przeprowadzimy <strong style={{ color: 'var(--cyan)' }}>audyt Twoich umiejętności</strong> — zlokalizujemy luki i ustalimy konkretny plan działania, który pomoże sprawnie osiągnąć cel.</p>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Offer;