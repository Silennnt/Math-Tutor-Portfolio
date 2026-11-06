import { useEffect } from "react";

export const useScrollAnimations = () => {
	useEffect(() => {
		const navLinks = document.querySelectorAll(".bottom-nav a");
		const sio = new IntersectionObserver(
			(entries) => {
				entries.forEach((e) => {
					if (e.isIntersecting) {
						const id = e.target.id;
						navLinks.forEach((a) => {
							if (a.dataset.section === id) {
								a.classList.add("active");
							} else {
								a.classList.remove("active");
							}
						});
					}
				});
			},
			{ threshold: 0.3, rootMargin: "0px 0px -40% 0px" },
		);
		document.querySelectorAll("section[id]").forEach((s) => sio.observe(s));

		const io = new IntersectionObserver(
			(entries) => {
				entries.forEach((e) => {
					if (e.isIntersecting) {
						e.target.classList.add("visible");
						io.unobserve(e.target);
					}
				});
			},
			{ threshold: 0.1 },
		);

		document
			.querySelectorAll(
				".section-header, .about-card, .price-card, .contact-card",
			)
			.forEach((el) => {
				el.classList.add("reveal");
				io.observe(el);
			});

		const aboutIO = new IntersectionObserver(
			(entries) => {
				entries.forEach((e) => {
					if (!e.isIntersecting) return;
					document.querySelectorAll("#about .stat-item").forEach((el, i) => {
						setTimeout(() => el.classList.add("vis"), 200 + i * 100);
					});
					document.querySelectorAll("#about .badge").forEach((el, i) => {
						setTimeout(() => el.classList.add("vis"), 450 + i * 60);
					});
					aboutIO.unobserve(e.target);
				});
			},
			{ threshold: 0.2 },
		);
		const aboutSection = document.getElementById("about");
		if (aboutSection) aboutIO.observe(aboutSection);

		const stepIO = new IntersectionObserver(
			(entries) => {
				entries.forEach((e) => {
					if (e.isIntersecting) {
						const delay = parseInt(e.target.dataset.delay || 0) * 140;
						setTimeout(() => e.target.classList.add("in-view"), delay);
						stepIO.unobserve(e.target);
					}
				});
			},
			{ threshold: 0.2, rootMargin: "0px 0px -5% 0px" },
		);

		document
			.querySelectorAll(".step-item, .mode-detail-card")
			.forEach((el, i) => {
				el.classList.remove("in-view");
				el.dataset.delay = i;
				stepIO.observe(el);
			});

		const updateLine = () => {
			const lineFill = document.getElementById("line-fill");
			const processSteps = document.getElementById("process-steps");
			if (!lineFill || !processSteps) return;
			const rect = processSteps.getBoundingClientRect();
			const total = rect.height;
			const visible = Math.max(
				0,
				Math.min(total, window.innerHeight - rect.top - 40),
			);
			lineFill.style.height = Math.min(100, (visible / total) * 120) + "%";
		};
		window.addEventListener("scroll", updateLine, { passive: true });
		updateLine();

		const matIO = new IntersectionObserver(
			(entries) => {
				entries.forEach((e) => {
					if (!e.isIntersecting) return;
					setTimeout(() => e.target.classList.add("shimmer"), 400);
					matIO.unobserve(e.target);
				});
			},
			{ threshold: 0.3 },
		);
		const matCard = document.querySelector(".material-card");
		if (matCard) matIO.observe(matCard);

		return () => {
			sio.disconnect();
			io.disconnect();
			aboutIO.disconnect();
			stepIO.disconnect();
            matIO.disconnect();
			window.removeEventListener("scroll", updateLine);
		};
	}, []);
};
