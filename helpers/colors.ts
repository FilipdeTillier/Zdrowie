export const colors = {
  primary: "slate-100",
  header: "slate-200",
  body: "slate-50",
};

export const prefix = {
  background: "bg",
};

export const getBackgroundColor = (color: string) =>
  `${prefix.background}-${color}`;
