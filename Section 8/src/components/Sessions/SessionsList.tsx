import SessionItem from './SessionItem.tsx';
import { type SessionsListProps } from '../../types.ts'


export default function SessionsList({ sessions }: SessionsListProps) {
  return (
    <ul id="sessions-list">
      {sessions.map((session) => (
        <li key={session.id}>
          <SessionItem {...session} />
        </li>
      ))}
    </ul>
  );
}
