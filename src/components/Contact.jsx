import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <>
      <section id="contact">
        <div className="grid-bg"></div>

        {}
        <div className="scene-3d-5">
          <div className="cube" style={{ animationDuration: '15s', animationDirection: 'reverse' }}>
            <div className="cube-face cf-front" style={{ borderColor: 'rgba(168,85,247,0.3)', color: 'rgba(168,85,247,0.4)', background: 'rgba(168,85,247,0.04)' }}>lim</div>
            <div className="cube-face cf-back" style={{ borderColor: 'rgba(168,85,247,0.3)', color: 'rgba(168,85,247,0.4)', background: 'rgba(168,85,247,0.04)' }}>dx</div>
            <div className="cube-face cf-right" style={{ borderColor: 'rgba(168,85,247,0.3)', color: 'rgba(168,85,247,0.4)', background: 'rgba(168,85,247,0.04)' }}>dy</div>
            <div className="cube-face cf-left" style={{ borderColor: 'rgba(168,85,247,0.3)', color: 'rgba(168,85,247,0.4)', background: 'rgba(168,85,247,0.04)' }}>dt</div>
            <div className="cube-face cf-top" style={{ borderColor: 'rgba(168,85,247,0.3)', color: 'rgba(168,85,247,0.4)', background: 'rgba(168,85,247,0.04)' }}>dz</div>
            <div className="cube-face cf-bottom" style={{ borderColor: 'rgba(168,85,247,0.3)', color: 'rgba(168,85,247,0.4)', background: 'rgba(168,85,247,0.04)' }}>ds</div>
          </div>
        </div>

        <div className="container">
          <div className="section-header reveal">
            <span className="tag">// Kontakt</span>
            <h2>Zacznijmy<br /><span className="gradient-text">współpracę</span></h2>
          </div>

          <div className="contact-card reveal">
            <div className="contact-header">
              <h3>Napisz lub zadzwoń</h3>
              <p>Odpowiadam zazwyczaj w ciągu kilku godzin.</p>
            </div>

            <div className="contact-actions">
              <a href="tel:+48517431322" className="contact-btn">
                <div className="contact-btn-icon ci-green">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.63 3.36 2 2 0 0 1 3.62 1h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 8.91a16 16 0 0 0 6 6l.81-.81a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </div>
                <div className="contact-btn-meta">
                  <strong>Zadzwoń teraz</strong>
                  <span>+48 517 431 322</span>
                </div>
                <svg className="contact-btn-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </a>

              <a href="sms:+48517431322?body=Cześć, chciałbym/chciałabym umówić się na lekcję matematyki. Klasa: ..., Poziom: (Podstawa/Rozszerzenie), Tryb: (Online/Stacjonarnie)." className="contact-btn">
                <div className="contact-btn-icon ci-cyan">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--cyan)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                  </svg>
                </div>
                <div className="contact-btn-meta">
                  <strong>Wyślij SMS</strong>
                  <span>Zapytaj o termin</span>
                </div>
                <svg className="contact-btn-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </a>

              <a href="mailto:dawidchrzaszcz64@gmail.com?subject=Korepetycje - pierwsza lekcja&body=Cześć, chciałbym/chciałabym umówić się na lekcję matematyki. Klasa: ..., Poziom: (Podstawa/Rozszerzenie), Tryb: (Online/Stacjonarnie)." className="contact-btn">
                <div className="contact-btn-icon ci-orange">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fb923c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                </div>
                <div className="contact-btn-meta">
                  <strong>Wyślij e-mail</strong>
                  <span>dawidchrzaszcz64@gmail.com</span>
                </div>
                <svg className="contact-btn-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </a>

              <a href="https://www.olx.pl/d/oferta/korepetycje-z-matematyki-matura-liceum-i-technikum-dcmath-pl-radzionkow-cala-polska-CID4371-ID1aEgVI.html?bs=olx_pro_listing" target="_blank" rel="noopener noreferrer" className="contact-btn">
                <div className="contact-btn-icon" style={{ background: 'rgba(79,209,197,.1)', border: '1px solid rgba(79,209,197,.3)' }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#4fd1c5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="18" cy="5" r="3" />
                    <circle cx="6" cy="12" r="3" />
                    <circle cx="18" cy="19" r="3" />
                    <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
                    <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
                  </svg>
                </div>
                <div className="contact-btn-meta">
                  <strong>Ogłoszenie OLX</strong>
                  <span>Wyślij wiadomość na OLX</span>
                </div>
                <svg className="contact-btn-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </a>
            </div>

            <div className="info-row">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              Stacjonarnie: Radzionków i okolice · Online: cała Polska
            </div>
          </div>

          <div style={{ marginTop: '1.5rem' }} className="reveal">
            <a href="#hero" className="btn btn-primary" style={{ width: '100%' }}>
              ↑ Wróć na górę
            </a>
          </div>
        </div>
      </section>

      <footer>
        <div className="logo-f gradient-text">DC Math</div>
        <p>© 2026 DC Math · Korepetycje z matematyki</p>
        <p style={{ marginTop: '0.4rem' }}>
          <a href="https://dcmath.pl" style={{ color: 'var(--muted)', textDecoration: 'none' }}>dcmath.pl</a>
        </p>
      </footer>
    </>
  );
};

export default Contact;