const tl = gsap.timeline({defaults: {ease: "power1.out"} });

tl.to(".content", {y: "-285%", duration: 1});
tl.to(".addi", {y: "-150%", duration: 1});
tl.to(".add", {y: "-170%", duration: 1}, "-=1");
