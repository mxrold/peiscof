import { useState, useEffect } from 'react';
import moment from 'moment-strftime';

export default function SectionCategories({ posts, title }) {
  const [data, setData] = useState([]);
  const baseURL = 'http://localhost:3000/blog/'

  useEffect(() => {
    const result = posts.filter(item => item.tag === title.toLowerCase());
    setData(result);
  }, [])
  
  if (data.length === 0) return <p>No hay ningún artículo publicado aún.</p>

  return (
    <div className="Section__categories">
      {
        data.map(item => (
          <article className="Section__categories--item" key={item.url}>
            <div className="Section__categories--item-data">
              <a href={`${baseURL}${item.url}`}>{item.title}</a>
              <span>{moment(item.date).strftime('%d/%m/%Y')}</span>
            </div>
            <figure className="Section__categories--item-image">
              <a href={`${baseURL}${item.url}`}>
                <img src={item.image} alt={item.title} />
              </a>
            </figure>
          </article>
        ))
      }
    </div>
  )
}