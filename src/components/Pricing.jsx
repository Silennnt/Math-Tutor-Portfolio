import React from 'react';
import './Pricing.css';

const Pricing = () => {
  return (
    <section id="pricing">
      <div className="grid-bg"></div>

      {/* Animowana figura 3D dla sekcji Cennik */}
      <div className="scene-3d-4">
        <div className="tri-spin" style={{ animationDuration: '18s', animationDirection: 'reverse' }}>
          <div className="tri-face tf1" style={{ borderColor: 'rgba(244,114,182,0.3)', color: 'rgba(244,114,182,0.4)', background: 'rgba(244,114,182,0.04)' }}>α</div>
          <div className="tri-face tf2" style={{ borderColor: 'rgba(244,114,182,0.3)', color: 'rgba(244,114,182,0.4)', background: 'rgba(244,114,182,0.04)' }}>β</div>
          <div className="tri-face tf3" style={{ borderColor: 'rgba(244,114,182,0.3)', color: 'rgba(244,114,182,0.4)', background: 'rgba(244,114,182,0.04)' }}>γ</div>
          <div className="tri-face tf4" style={{ borderColor: 'rgba(244,114,182,0.3)', color: 'rgba(244,114,182,0.4)', background: 'rgba(244,114,182,0.04)' }}>θ</div>
          <div className="tri-face tf5" style={{ borderColor: 'rgba(244,114,182,0.3)', color: 'rgba(244,114,182,0.4)', background: 'rgba(244,114,182,0.04)' }}>φ</div>
          <div className="tri-face tf6" style={{ borderColor: 'rgba(244,114,182,0.3)', color: 'rgba(244,114,182,0.4)', background: 'rgba(244,114,182,0.04)' }}>ω</div>
        </div>
      </div>

      <div className="container">
        <div className="section-header">
          <span className="tag">// Cennik</span>
          <h2>Przejrzyste<br /><span className="gradient-text">pakiety</span></h2>
          <p style={{ color: '#94a3b8', fontSize: '0.88rem', marginTop: '0.5rem' }}>
            Cena za godzinę lekcyjną (60 min).
          </p>
        </div>

        <div className="pricing-cards">
          
          <div className="price-card reveal">
            <div className="price-tier">Matura Podstawowa</div>
            <h3>Matematyka Podstawowa</h3>
            <p className="desc">Dla uczniów liceum i technikum przygotowujących się do matury na poziomie podstawowym.</p>
            <div className="price-wrapper">
              <span className="price-old">90 PLN</span>
              <div className="price-amount" style={{ marginBottom: 0 }}>
                <span className="price-big">70</span>
                <span className="price-small">PLN / 60 min</span>
              </div>
              <div>
                <span className="promo-badge">LIMITOWANA OFERTA: -20 PLN</span>
              </div>
            </div>
            <ul className="price-features">
              <li><span className="check">✓</span> Materiały do każdej lekcji</li>
              <li><span className="check">✓</span> Online lub stacjonarnie</li>
              <li><span className="check">✓</span> Kontakt między lekcjami</li>
              <li><span className="check">✓</span> Analiza kluczowych zagadnień</li>
              <li><span className="check">✓</span> Budowanie pewności siebie</li>
            </ul>
          </div>

          <div className="price-card featured reveal">
            <div className="price-tier">Najchętniej wybierany</div>
            <h3>Wsparcie Bieżące</h3>
            <p className="desc">Regularna pomoc w materiale szkolnym, pozwalająca zachować systematyczność i opanować bieżące tematy.</p>
            <div className="price-wrapper">
              <span className="price-old">90 PLN</span>
              <div className="price-amount" style={{ marginBottom: 0 }}>
                <span className="price-big">70</span>
                <span className="price-small">PLN / 60 min</span>
              </div>
              <div>
                <span className="promo-badge">LIMITOWANA OFERTA: -20 PLN</span>
              </div>
            </div>
            <ul className="price-features">
              <li><span className="check">✓</span> Przygotowanie do sprawdzianów</li>
              <li><span className="check">✓</span> Strategie rozwiązywania problemów</li>
              <li><span className="check">✓</span> Skuteczne nadrabianie zaległości</li>
              <li><span className="check">✓</span> Wsparcie w pracach domowych</li>
              <li><span className="check">✓</span> Elastyczne terminy "na już"</li>
            </ul>
          </div>

          <div className="price-card reveal">
            <div className="price-tier">Matura Rozszerzona</div>
            <h3>Matematyka Rozszerzona</h3>
            <p className="desc">Intensywne przygotowanie do matury rozszerzonej z wykorzystaniem autorskich arkuszy i zaawansowanych metod.</p>
            <div className="price-wrapper">
              <span className="price-old">100 PLN</span>
              <div className="price-amount" style={{ marginBottom: 0 }}>
                <span className="price-big">80</span>
                <span className="price-small">PLN / 60 min</span>
              </div>
              <div>
                <span className="promo-badge">LIMITOWANA OFERTA: -20 PLN</span>
              </div>
            </div>
            <ul className="price-features">
              <li><span className="check">✓</span> Autorskie arkusze maturalne PDF</li>
              <li><span className="check">✓</span> Analiza arkuszy CKE</li>
              <li><span className="check">✓</span> Symulowane egzaminy</li>
              <li><span className="check">✓</span> Spersonalizowany plan nauki</li>
              <li><span className="check">✓</span> Priorytetowy kontakt</li>
            </ul>
          </div>

        </div>

        <div style={{ marginTop: '1.5rem', textAlign: 'center' }} className="reveal">
          <p style={{ fontSize: '0.82rem', color: 'var(--muted)', fontFamily: 'var(--font-mono)' }}>
            Pakiety wielolekcyjne – rabat do ustalenia indywidualnie.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;