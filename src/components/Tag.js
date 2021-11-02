export default function Tag({ value }) {
  const getTag = tag => {
    switch (tag) {
      case 'noticias':
        return 'yellow';
      case 'tutoriales':
        return 'purple';
      case 'programación':
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

  return (
    <div className={`post-tag post-tag-${getTag(value)}`}>
        <p>{value}</p>
    </div>
  )
}