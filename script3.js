const tl = gsap.timeline({defaults: {ease: "power1.out"} });

tl.to(".content", {y: "-435%", duration: 1});
tl.to(".fail", {y: "-215%", duration: 1});
