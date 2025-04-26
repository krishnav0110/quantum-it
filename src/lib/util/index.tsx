export const getTextFieldParams = (name: string, type?: string) => {
  return { type: type ?? "text", id: name, name: name, autoComplete: name };
};
