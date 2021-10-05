import { withPrefix } from '../utils';
import {
  FaLinkedin,
  FaRegEnvelope
} from 'react-icons/fa'

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
              <FaLinkedin />
            </a>
          </li>
          <li>
            <a href={`mailto:${email}`}>
              <FaRegEnvelope />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  )
}