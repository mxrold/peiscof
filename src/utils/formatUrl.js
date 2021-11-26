export default function formatUrl(url) {
  const strToLower = url.toLowerCase();
  const str = strToLower.normalize('NFD').replace(/[\u0300-\u036f]/g, '');

  return str
}