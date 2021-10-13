import { withPrefix } from '../utils';
import Icon from './Icon';

export default function Author ({ image, author, description, linkedin, email }) {
  return (
    <footer className="author">
      <div className="author-data">
          <figure className="author-image">
              <img src={withPrefix(image)} alt={`Imagen de ${author}`} loading="lazy" />
          </figure>
          <div className="author-text">
              <h3 className="author-name">Por <span>{author}</span></h3>
              <p className="author-description">{description}</p>
          </div>
      </div>
      <div className="author-social">
        <p>Encuentrame en:</p>
        <ul className="author-social-links">
          <li>
            <a href={`https://www.linkedin.com/in/${linkedin}`} target="_blank">
              <Icon icon='linkedin' />
            </a>
          </li>
          <li>
            <a href={`mailto:${email}`}>
              <Icon icon='email' />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  )
}