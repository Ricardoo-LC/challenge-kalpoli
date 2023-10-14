import { Letter } from './letter'

const WordEmpty = () => {
  return <div className='pt-4 grid grid-cols-5 gap-5'>
        {Array.from(Array(5)).map((_, i) => (
            <Letter key={i} value="" status="empty"/>
        ))}
    </div>
}

export default WordEmpty
