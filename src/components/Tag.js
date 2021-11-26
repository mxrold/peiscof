import { getTag, formatUrl } from '../utils/';

export default function Tag({ value }) {
  const url = formatUrl(value);

  return (
    <div className={`post-tag post-tag-${getTag(url)}`}>
      <a href={`http://localhost:3000/${url}`}>{value}</a>
    </div>
  )
}