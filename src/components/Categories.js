import _ from 'lodash';

export default function Categories({ categories, style, styleItem }) {
  return (
    <div className={`site-categories categories-${style}`}>
      <ul className={`site-categories-list categories-${styleItem}`}>
        {_.map(categories, (action) => <li key={action.name}>{action.name}</li>)}
      </ul>
    </div>
  )
}