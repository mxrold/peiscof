export default function getTag(value) {
  switch (value) {
    case 'criptomonedas':
      return 'yellow';
    case 'noticias':
      return 'purple';
    case 'programacion' || 'programación':
      return 'blue';
    case 'juegos':
      return 'red';
    case 'android':
      return 'green';
    case 'apple':
      return 'gray';
    case 'windows':
      return 'indigo';
    case 'linux':
      return 'pink';
    default: 
      return 'default';
  }
}