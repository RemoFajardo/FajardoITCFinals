const tl = gsap.timeline({defaults: {ease: "power1.out"} });

tl.to(".content", {y: "-440%", duration: 1});
tl.to(".fail", {y: "-350%", duration: 1});
