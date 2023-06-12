export function scrollAnimation(view) {
  return {
    transform: view ? "none" : "translateX(-200px)",
    opacity: view ? 1 : 0,
    transition: "all 1s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
  };
}
