import { ComponentPropsWithRef } from "react";

type InputProps = {
    label: string;
    id: string;
    // type: "text" | "number" | "password" | "email";
} & ComponentPropsWithRef<"input">;

export default function Input({label, id, ...props}: InputProps) {
  return (
    <p>
        <label htmlFor={id}>{label}</label>
        <input id={id} {...props}/>
    </p>
  );
}