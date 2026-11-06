import React from "react";
import "./About.css";

const About = () => {
	return (
		<section id="about">
			<div className="grid-bg"></div>
			<div className="scene-3d-6">
				<div className="cube" style={{ animationDuration: "25s" }}>
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
					<h2>
						Korepetycje
						<br />
						<span className="gradient-text">z głową</span>
					</h2>
				</div>

				<div className="about-card">
					{/* large profile image */}
					<div className="about-large-image">
						<img src="/profile.jpg" alt="Dawid Chrząszcz" />
					</div>

					{/* author details */}
					<div className="about-header-text">
						<strong>Dawid Chrząszcz</strong>
						<span>Student Wydziału Matematyki Stosowanej</span>
					</div>

					<p className="about-desc">
						Studiuję Informatykę na Wydziale Matematyki Stosowanej Politechniki
						Śląskiej. Od ponad 3 lat z sukcesami przygotowuję uczniów do
						egzaminów dojrzałości. Moje podejście jest w pełni pragmatyczne -
						skupiam się na{" "}
						<strong style={{ color: "var(--text)" }}>
							realnych wymaganiach egzaminacyjnych
						</strong>{" "}
						i tzw. "pewniakach maturalnych". Nie tracimy czasu na teorię, która
						nie przekłada się na wyniki.
					</p>

					<p className="about-desc">
						Pracuję w oparciu o autorskie arkusze, ale równie chętnie
						dostosowuję się do bieżących materiałów ucznia i wymagań konkretnego
						nauczyciela w szkole. Dzięki temu, że sam stosunkowo niedawno
						przechodziłem przez system maturalny, doskonale rozumiem presję
						czasu i wiem, jak zoptymalizować naukę, by uczeń rozwiązywał zadania
						z pełnym{" "}
						<strong style={{ color: "var(--text)" }}>
							logicznym zrozumieniem
						</strong>
						, a nie tylko z pamięci.
					</p>

					{/* stats */}
					<div className="stat-row">
						<div className="stat-item">
							<span className="stat-num">3+</span>
							<span className="stat-lbl">Lata Doświadczenia</span>
						</div>
						<div className="stat-item">
							<span className="stat-num">PŚ</span>
							<span className="stat-lbl">Matematyka Stosowana</span>
						</div>
						<div className="stat-item">
							<span className="stat-num">100%</span>
							<span className="stat-lbl">Skupienie na Celu</span>
						</div>
					</div>

					{/* badges */}
					<div className="badge-row">
						<span className="badge badge-cyan">Logiczne myślenie</span>
						<span className="badge badge-violet">Matura rozszerzona</span>
						<span className="badge badge-pink">Pewniaki maturalne</span>
						<span className="badge badge-cyan">Politechnika Śląska</span>
						<span className="badge badge-violet">Pragmatyczne podejście</span>
					</div>
				</div>
			</div>
		</section>
	);
};

export default About;
