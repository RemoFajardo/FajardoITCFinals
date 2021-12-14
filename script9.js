const tl = gsap.timeline({defaults: {ease: "power1.out"} });

tl.to(".content", {x: "-60%", duration: 1});
tl.to(".add", {y: "-240%", duration: 1});
tl.to(".Dataone", {y: "-290%", duration: 1});
tl.to(".Datathree", {y: "-280%", duration: 1}, "-=1");
tl.to(".Datatwo", {y: "-280%", duration: 1}, "-=1");
tl.to(".Datafour", {y: "-295%", duration: 1}, "-=1");
