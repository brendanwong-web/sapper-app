import watchMedia from "svelte-media";

const mediaqueries = {
  small: "(max-width: 768px)",
  large: "(min-width: 769px)",
};

export const media = watchMedia(mediaqueries);