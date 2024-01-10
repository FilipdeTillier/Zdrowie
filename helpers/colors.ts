export const colors = {
  primary: "sky-700",
  header: "neutral-300",
  body: "slate-100",
};

export const prefix = {
  background: "bg",
};

export const getBackgroundColor = (color: string) =>
  `${prefix.background}-${color}`;
