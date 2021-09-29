import { withPrefix } from '../utils';

export default function Author ({ image, author, description }) {
  return (
    <footer className="author">
      <div className="author-data">
          <figure className="author-image">
              <img src={withPrefix(image)} alt={`Imagen de ${author}`} />
          </figure>
          <div className="author-text">
              <h3 className="author-name">Por <span>{author}</span></h3>
              <p className="author-description">{description}</p>
          </div>
      </div>
    </footer>
  )
}