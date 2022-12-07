export const colors = {
  primary: "slate-100",
  header: "slate-200",
};

export const prefix = {
  background: "bg",
};

export const getBackgroundColor = (color: string) =>
  `${prefix.background}-${color}`;
