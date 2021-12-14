const tl = gsap.timeline({defaults: {ease: "power1.out"} });

tl.to(".header", {y: "-350%", duration: 1});
tl.to(".output", {x: "-130%", duration: 1});
