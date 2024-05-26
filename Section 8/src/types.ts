import type { ComponentPropsWithoutRef, ReactNode } from "react";

export type ModalProps = {
  children: React.ReactNode;
  onClose: () => void; // The onClose function prop is used to propagate the default "close" event that can be triggered by <dialog> (for example, when the ESC key is pressed)
};

export type ModalHandle = {
  open: () => void;
};

export type InputProps = {
  label: string;
  id: string;
} & ComponentPropsWithoutRef<"input">;

export type BaseProps = {
  children: ReactNode;
  textOnly?: boolean;
};

export type ButtonProps = ComponentPropsWithoutRef<"button"> &
  BaseProps & { to?: never };

export type UpcomingSessionsProps = {
  onClose: () => void; // onClose is accepted to "tell" the parent component that the UpcomingSessions component should be removed from the DOM
};

export type UpcomingSessionProps = {
  session: {
    id: string;
    title: string;
    summary: string;
    date: string;
  };
  onCancel: () => void;
};

export type SessionsListProps = {
  sessions: {
    id: string;
    title: string;
    summary: string;
    image: string;
  }[];
};

export type SessionItemProps = {
  id: string;
  title: string;
  summary: string;
  image: string;
};

export type BookSessionProps = {
  session: Session;
  onDone: () => void; // onDone will "tell" the parent component that the BookSession component should be removed from the DOM
};

export type Session = {
  id: string;
  title: string;
  summary: string;
  description: string;
  date: string;
  image: string;
  duration: number;
};

export type SessionState = {
  upcomingSessions: Session[];
};

export type SessionContextValue = SessionState & {
  bookSession: (session: Session) => void;
  cancelSession: (sessionId: string) => void;
};
