const tl = gsap.timeline({defaults: {ease: "power1.out"} });

tl.to(".header", {y: "-400%", duration: 1});
tl.to(".output", {x: "-130%", duration: 1});
