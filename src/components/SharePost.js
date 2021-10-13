import Icon from './Icon';

export default function SharePost({ url, title }) {
  const BASE_URL = 'https://peiscof.netlify.app/blog';

  return (
    <div className="post-share">
      <ul className="post-share-list">
        <li>
            <a href={`https://www.facebook.com/sharer/sharer.php?u=${BASE_URL}${url}`} target="_blank">
                <Icon icon='facebook' />
            </a>
        </li>
        <li>
            <a href={`https://twitter.com/intent/tweet?text=${title}&url=${BASE_URL}${url}`} target="_blank">
              <Icon icon='twitter' />
            </a>
        </li>
        <li>
            <a href={`https://www.linkedin.com/shareArticle?title=${title}&url=${BASE_URL}${url}`} target="_blank">
              <Icon icon='linkedin' />
            </a>
        </li>
        <li>
            <a href={`https://api.whatsapp.com/send?text=${title}%20${BASE_URL}${url}`} target="_blank">
              <Icon icon='whatsapp' />
            </a>
        </li>
      </ul>
    </div>
  )
}