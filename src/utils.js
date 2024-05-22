export const getTmageUrl = (path)=>{
  return new URL (`/assets/${path}`,import.meta.url).href;
};