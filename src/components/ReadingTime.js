import { FiClock } from 'react-icons/fi'

export default function ReadingTime ({ text }) {
  const wordsPerMinute = 200;
  const numOfWords = text.split(/\s/g).length;
  const minutes = numOfWords / wordsPerMinute;
  const readTime = Math.ceil(minutes);

  return (
    <span>
      {readTime}' <FiClock size="14px" color="#8d8d8d" />
    </span>
  )
}