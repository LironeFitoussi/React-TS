import Button from '../UI/Button.tsx';
import { type SessionItemProps } from '../../types.ts'

export default function SessionItem({
  image,
  title,
  summary,
  id,
}: SessionItemProps) {
  return (
    <article className='session-item'>
      <img src={image} alt={title} />
      <div className="session-data">
        <div>
          <h3>{title}</h3>
          <p>{summary}</p>
        </div>
        <p className="actions">
          <Button to={id}>Learn More</Button>
        </p>
      </div>
    </article>
  );
}
