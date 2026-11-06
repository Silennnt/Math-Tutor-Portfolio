import React from "react";
import "./Hero.css";

const Hero = () => {
	return (
		<section id="hero">
			<div className="grid-bg"></div>
			<div className="hero-canvas">
				<div className="hero-glow-1"></div>
				<div className="hero-glow-2"></div>

				{}
				<div className="hero-shape hero-shape-1">
					<div className="cube" style={{ animationDuration: "18s" }}>
						<div className="cube-face cf-front">∑</div>
						<div className="cube-face cf-back">π</div>
						<div className="cube-face cf-right">∫</div>
						<div className="cube-face cf-left">√</div>
						<div className="cube-face cf-top">Δ</div>
						<div className="cube-face cf-bottom">∞</div>
					</div>
				</div>

				{}
				<div className="hero-shape hero-shape-2">
					<div className="tri-spin" style={{ animationDuration: "24s" }}>
						<div className="tri-face tf1">f(x)</div>
						<div className="tri-face tf2">x²</div>
						<div className="tri-face tf3">≠</div>
						<div className="tri-face tf4">∀</div>
						<div className="tri-face tf5">±</div>
						<div className="tri-face tf6">≤</div>
					</div>
				</div>

				{}
				<div className="hero-shape hero-shape-3">
					<div
						className="cube"
						style={{ animationDuration: "35s", animationDirection: "reverse" }}
					>
						<div className="cube-face center-face cf-front">sin</div>
						<div className="cube-face center-face cf-back">cos</div>
						<div className="cube-face center-face cf-right">tg</div>
						<div className="cube-face center-face cf-left">ctg</div>
						<div className="cube-face center-face cf-top">x</div>
						<div className="cube-face center-face cf-bottom">y</div>
					</div>
				</div>
			</div>

			<div className="container hero-container">
				<div className="hero-wrapper">
					<div className="hero-text-side">
						<div className="hero-eyebrow">
							<div className="hero-dot"></div>
							<span className="eyebrow-content">
								Korepetycje z Matematyki <span className="mobile-hide">·</span>
								<br className="mobile-break" />
								Radzionków & Online
							</span>
						</div>

						<h1 className="hero-h1">
							Wiedza
							<br />
							<span className="line2">
								Praktyka
								<br />
								Sukces
							</span>
						</h1>

						<p className="hero-sub">
							Matematyka to nie schematy do zapamiętania — to język myślenia.
							Wspólnie nauczymy Cię widzieć strukturę problemu i rozwiązywać go
							samodzielnie, z pełnym zrozumieniem.
						</p>

						<div className="hero-ctas">
							<a href="#contact" className="btn btn-primary">
								<svg
									width="16"
									height="16"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									strokeWidth="2.5"
									strokeLinecap="round"
									strokeLinejoin="round"
								>
									<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.63 3.36 2 2 0 0 1 3.62 1h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 8.91a16 16 0 0 0 6 6l.81-.81a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
								</svg>
								Umów się na lekcje
							</a>
							<a href="#offer" className="btn btn-ghost">
								Zobacz ofertę →
							</a>
						</div>
					</div>

					<div className="hero-image-side">
						<div className="profile-frame">
							<img src="/profile.jpg" alt="DC Math - Ekspert Matematyki" />
							<div className="profile-decoration"></div>
						</div>
					</div>
				</div>
			</div>

			<div className="scroll-indicator">
				<div className="scroll-mouse">
					<div className="scroll-mouse-dot"></div>
				</div>
				<span>Przewiń</span>
			</div>
		</section>
	);
};

export default Hero;
