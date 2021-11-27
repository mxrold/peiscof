import { getTag, formatUrl } from '../utils/';

export default function Tag({ value }) {
  const url = formatUrl(value);
  const localURL = 'http://localhost:3000/blog/';
  const prodURL = 'https://peiscof.com/blog/';


  return (
    <div className={`post-tag post-tag-${getTag(url)}`}>
      <a href={`${prodURL}${url}`}>{value}</a>
    </div>
  )
}