export const GetHtmlString = async (url = "") => {
  const res = await fetch(url);
  const htmlString = await res.text();
  return htmlString;
};
