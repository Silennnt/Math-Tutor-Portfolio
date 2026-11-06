import { useEffect } from "react";

export const useScrollAnimations = () => {
	useEffect(() => {
		// 1. Bottom navigation indicator
		const navLinks = document.querySelectorAll(".bottom-nav a");
		const indicator = document.getElementById("nav-indicator");
		const nav = document.getElementById("bottom-nav");

		const updateIndicator = (activeLink) => {
			if (!activeLink || !indicator || !nav) return;
			const navRect = nav.getBoundingClientRect();
			const linkRect = activeLink.getBoundingClientRect();

			indicator.style.width = `${linkRect.width}px`;
			indicator.style.transform = `translateX(${linkRect.left - navRect.left}px)`;
		};

		const sio = new IntersectionObserver(
			(entries) => {
				entries.forEach((e) => {
					if (e.isIntersecting) {
						const id = e.target.id;
						let activeLink = null;
						navLinks.forEach((a) => {
							if (a.dataset.section === id) {
								a.classList.add("active");
								activeLink = a;
							} else {
								a.classList.remove("active");
							}
						});

						requestAnimationFrame(() => updateIndicator(activeLink));
					}
				});
			},
			{ threshold: 0.3, rootMargin: "0px 0px -40% 0px" },
		);

		document.querySelectorAll("section[id]").forEach((s) => sio.observe(s));

		const handleResize = () => {
			const activeLink = document.querySelector(".bottom-nav a.active");
			updateIndicator(activeLink);
		};
		window.addEventListener("resize", handleResize);

		// 2. Simple reveal animations for various elements
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

		// 3. Section About
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

		// 4. Section Offer
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

		// 5. Section Materials
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

		// 6. Section Pricing
		const pricingIO = new IntersectionObserver(
			(entries) => {
				entries.forEach((e) => {
					if (!e.isIntersecting) return;
					document.querySelectorAll("#pricing .price-card").forEach((el, i) => {
						setTimeout(() => el.classList.add("visible"), i * 120);
					});
					pricingIO.unobserve(e.target);
				});
			},
			{ threshold: 0.1 },
		);
		const pricingSection = document.getElementById("pricing");
		if (pricingSection) pricingIO.observe(pricingSection);

		// 7. Section Contact
		const contactIO = new IntersectionObserver(
			(entries) => {
				entries.forEach((e) => {
					if (!e.isIntersecting) return;
					document.querySelectorAll(".contact-btn").forEach((el, i) => {
						setTimeout(() => el.classList.add("vis"), i * 90);
					});
					contactIO.unobserve(e.target);
				});
			},
			{ threshold: 0.15 },
		);
		const contactCard = document.querySelector(".contact-card");
		if (contactCard) contactIO.observe(contactCard);

		// Registry cleaner
		return () => {
			sio.disconnect();
			io.disconnect();
			aboutIO.disconnect();
			stepIO.disconnect();
			matIO.disconnect();
			pricingIO.disconnect();
			contactIO.disconnect();
			window.removeEventListener("scroll", updateLine);
			window.removeEventListener("resize", handleResize);
		};
	}, []);
};
