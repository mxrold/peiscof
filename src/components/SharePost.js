import Icon from './Icon';

export default function SharePost({ url, title }) {
  const BASE_URL = 'https://peiscof.com/blog/';

  return (
    <div className="post-share">
      <h3>¡Compártelo! 🚀</h3>
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
        <li>
            <a href={`https://telegram.me/share/url?url=${BASE_URL}${url}`} target="_blank">
              <Icon icon='telegram' />
            </a>
        </li>
      </ul>
    </div>
  )
}