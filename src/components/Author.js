import { useState, useEffect } from 'react';
import { withPrefix } from '../utils';

export default function Author ({ author }) {
  const [data, setData] = useState([])

  useEffect(() => {
    let obj = [];

    const validateAuthor = author => {
      switch (author) {
        case 'hernan-roldan':
          return obj.push({
            author: 'Hernán Roldán',    
            img: '/images/author-hernanroldan.png',
            description: '',
            linkedin: 'hroldán',
            email: 'hernan@peiscof.com'
          });
        case 'martin-roldan':
          return obj.push({
            author: 'Martín Roldán',
            img: '/images/author-martinroldan.png',
            description: '',
            linkedin: 'martindavidroldan',
            email: 'martin@peiscof.com'
          });
        default:
          return '';
      }
    }

    validateAuthor(author);
    setData(obj)
  }, [])

  return (
    <>
      {
        data.length !== 0 &&
        <div className="author">
          <div className="author-data">
              <figure className="author-image">
                  <img src={withPrefix(data[0].img)} alt={`Imagen de ${data[0].author}`} loading="lazy" />
              </figure>
              <div className="author-text">
                <h3 className="author-name">Por <a href={`https://www.linkedin.com/in/${data[0].linkedin}`} target="_blank">{data[0].author}</a></h3>
                {data[0].description && <p className="author-description">{data[0].description}</p>}
              </div>
          </div>
        </div>
      }
    </>
  )
}