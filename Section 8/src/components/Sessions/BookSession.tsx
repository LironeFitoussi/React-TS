import { FormEvent, useEffect, useRef } from 'react';

import Modal from '../UI/Modal.tsx';
import Input from '../UI/Input.tsx';
import Button from '../UI/Button.tsx';
import { useSessionsContext } from '../../store/sessions-context.tsx';
import { type ModalHandle, type BookSessionProps } from '../../types.ts';

export default function BookSession({ session, onDone }: BookSessionProps) {
  const modal = useRef<ModalHandle>(null);
  const sessionsCtx = useSessionsContext();

  // useEffect is used to open the Modal via its exposed `open` method when the component is mounted
  useEffect(() => {
    if (modal.current) {
      modal.current.open();
    }
  }, []);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const data = Object.fromEntries(formData);
    console.log(data); // would normally be sent to a server, together with session data
    sessionsCtx.bookSession(session);
    onDone();
  }

  return (
    <Modal ref={modal} onClose={onDone}>
      <h2>Book Session</h2>
      <form onSubmit={handleSubmit}>
        <Input label="Your name" id="name" name="name" type="text" />
        <Input label="Your email" id="email" name="email" type="email" />
        <p className="actions">
          <Button type="button" textOnly onClick={onDone}>
            Cancel
          </Button>
          <Button>Book Session</Button>
        </p>
      </form>
    </Modal>
  );
}
