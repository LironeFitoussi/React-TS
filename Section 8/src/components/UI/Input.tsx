import { type InputProps } from '../../types.ts'

export default function Input({ label, id, ...props }: InputProps) {
  return (
    <div className="control">
      <label htmlFor={id}>{label}</label>
      <input id={id} {...props} />
    </div>
  );
}
