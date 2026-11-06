import React, { useState } from 'react';
import './Materials.css';

const Materials = () => {
  const [isDownloading, setIsDownloading] = useState(false);
  const [downloadText, setDownloadText] = useState('Pobierz arkusz (PDF)');

  const handleDownload = () => {
    setIsDownloading(true);
    const states = [
      { t: 0, label: '⬇ Pobieranie... 0%' },
      { t: 400, label: '⬇ Pobieranie... 35%' },
      { t: 900, label: '⬇ Pobieranie... 72%' },
      { t: 1400, label: '⬇ Pobieranie... 98%' },
      { t: 1800, label: '✓ Pobrano! Sprawdź Pobrane' },
    ];

    states.forEach(s => {
      setTimeout(() => {
        setDownloadText(s.label);
      }, s.t);
    });

    setTimeout(() => {
      setIsDownloading(false);
      setDownloadText('Pobierz arkusz (PDF)');

      const link = document.createElement('a');
      link.href = '/Matura_Rozszerzenie_DCMath.pdf';
      link.download = 'Matura_Rozszerzenie_DCMath.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }, 3200);
  };

  return (
    <section id="materials">
      <div className="grid-bg"></div>
      <div className="materials-glow"></div>

      {}
      <div className="scene-3d-7">
        <div className="tri-spin" style={{ animationDuration: '22s', animationDirection: 'reverse' }}>
          <div className="tri-face tf1" style={{ borderColor: 'rgba(0,229,255,0.3)', color: 'rgba(0,229,255,0.4)', background: 'rgba(0,229,255,0.04)' }}>E</div>
          <div className="tri-face tf2" style={{ borderColor: 'rgba(0,229,255,0.3)', color: 'rgba(0,229,255,0.4)', background: 'rgba(0,229,255,0.04)' }}>m</div>
          <div className="tri-face tf3" style={{ borderColor: 'rgba(0,229,255,0.3)', color: 'rgba(0,229,255,0.4)', background: 'rgba(0,229,255,0.04)' }}>c²</div>
          <div className="tri-face tf4" style={{ borderColor: 'rgba(0,229,255,0.3)', color: 'rgba(0,229,255,0.4)', background: 'rgba(0,229,255,0.04)' }}>G</div>
          <div className="tri-face tf5" style={{ borderColor: 'rgba(0,229,255,0.3)', color: 'rgba(0,229,255,0.4)', background: 'rgba(0,229,255,0.04)' }}>h</div>
          <div className="tri-face tf6" style={{ borderColor: 'rgba(0,229,255,0.3)', color: 'rgba(0,229,255,0.4)', background: 'rgba(0,229,255,0.04)' }}>v</div>
        </div>
      </div>

      <div className="container">
        <div className="section-header">
          <span className="tag">// Wymagający trening</span>
          <h2>Matematyczny<br /><span className="gradient-text">poligon</span></h2>
        </div>

        <div className="material-card">
          <h3>📄 Autorski Arkusz Maturalny - Rozszerzenie</h3>
          <p>
            Udostępniam autorski arkusz, który wymaga pełnego zaangażowania i weryfikuje rzeczywistą wiedzę. 
            Zasady są przejrzyste: <strong style={{ color: 'var(--text)' }}>brak gotowych odpowiedzi i omówień.</strong> 
            To doskonała okazja, aby samodzielnie zmierzyć się z zadaniami o wysokim stopniu trudności przed przystąpieniem do właściwego egzaminu.
          </p>

          <div className="pdf-preview">
            <div className="pdf-icon">📕</div>
            <div className="pdf-meta">
              <strong>Arkusz Maturalny – Rozszerzenie</strong>
              <span>DC Math · Plik PDF · ~2 MB · 24 strony</span>
            </div>
          </div>

          <button 
            className={`btn btn-violet ${isDownloading ? 'downloading' : ''}`} 
            style={{ width: '100%' }} 
            onClick={handleDownload}
            disabled={isDownloading}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            <span>{downloadText}</span>
          </button>

          <p style={{ fontSize: '0.75rem', color: 'var(--muted)', marginTop: '0.8rem', textAlign: 'center', fontFamily: 'var(--font-mono)' }}>
            Rzetelna praca z błędami i konsekwentne dążenie do celu to podstawa moich zajęć.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Materials;