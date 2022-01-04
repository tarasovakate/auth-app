export const safeJSONParser = (data: any) => {
  try {
    return JSON.parse(data);
  } catch {
    return null;
  }
};
