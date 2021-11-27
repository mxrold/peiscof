import _ from 'lodash';
import { getTag, formatUrl } from '../utils';

export default function Categories({ categories, style, styleItem }) {
  const localURL = 'http://localhost:3000/';
  const prodURL = 'https://peiscof.com/';

  return (
    <div className={`site-categories categories-${style}`}>
      <ul className={`site-categories-list categories-${styleItem}`}>
        {_.map(categories, (action) => 
        <li className={`link-${getTag(formatUrl(action.name))}`} key={action.name}>
          <a className='site-categories-list-link' href={`${prodURL}${formatUrl(action.name)}`}>{action.name}</a>
        </li>
        )}
      </ul>
    </div>
  )
}