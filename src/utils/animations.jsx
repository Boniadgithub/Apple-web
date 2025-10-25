// src/utils/animations.jsx
import gsap from "gsap";

export const animateWithGsapTimeline = (timeline, target, vars) => {
  timeline.to(target, vars);
};

export const animateWithGsap = (target, vars) => {
  gsap.to(target, vars);
};
