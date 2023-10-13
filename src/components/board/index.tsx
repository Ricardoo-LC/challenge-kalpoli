import { Word } from './word'

export const Board: React.FC = () => {
  return (
    <div className='pt-10'>
        {Array(5).fill().map((_, index) => (
            <Word key={index} word="Gatos" input={'s'}/>
        ))}
    </div>
  )
}
