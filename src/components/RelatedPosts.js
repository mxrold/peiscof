import { useState, useEffect } from 'react';
import { formatTitlePost } from '../utils';

export default function RelatedPosts({ posts, title, tag }) {
  const [filteredPosts, setFilteredPosts] = useState([]);

  useEffect(() => {
    const relatedPosts = () => {
      const newArray = [...posts];
      const findIndex = newArray.findIndex(item => item.title === title);
      newArray.splice(findIndex, 1);
      const filteredResults = newArray.filter(item => {
        return item.tag.toLowerCase() === tag.toLowerCase();
      })
      randomPosts(filteredResults);
    }
    relatedPosts();
  }, [])

  const randomPosts = data => {
    const MIN = 0;
    const MAX_POSTS = 2;
    let MAX = data.length;
    let results = [];
    
    if (data.length > MAX_POSTS) {
      while(results.length < MAX_POSTS) {
        const postIndex = Math.floor(Math.random() * (MAX - MIN)) + MIN;
        if(data[postIndex] !== undefined) {
          results.push(data[postIndex]);
          data.splice(postIndex, 1);
        }
      }
      setFilteredPosts(results);
    } else {
      setFilteredPosts(data)
    }
  }

  return (
    <>
      {
        filteredPosts.length !== 0 &&
        <div className="post-related">
          <h3>Post relacionados 🎉</h3>
          <ul className="post-related-list">
            {
              filteredPosts.map(item => (
                <li key={item.title}>
                  <a className="post-related-list-text" href={`https://peiscof.com/blog/${item.url}`}>{formatTitlePost(item.title, 48)}</a>
                  <a className="post-related-list-image" href={`https://peiscof.com/blog/${item.url}`}>
                   <img src={item.thumb_image} alt={item.thumb_image_alt} />
                  </a>
                </li>
              ))
            }
          </ul>
        </div>
      }
    </>
  );
}