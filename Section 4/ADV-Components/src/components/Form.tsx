import { 
    type ComponentPropsWithoutRef, 
    type FormEvent, 
    useRef, 
    useImperativeHandle, 
    forwardRef
} from "react";

export type FormHandle = {
    clear: () => void;
};

type FormProps = ComponentPropsWithoutRef<"form"> & {
    onSave: (value: unknown) => void;
};

const Form = forwardRef<FormHandle, FormProps>(({
        onSave, children, ...props }, ref
    ) => {
    const form = useRef<HTMLFormElement>(null);

    useImperativeHandle(ref, () => ({
        clear() {
            console.log("Clearing form");
            form.current?.reset();
        }
    }));

    function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        // console.log("Form submitted");

        const formData = new FormData(event.currentTarget);
        // console.log(formData.get("name"));

        const data = Object.fromEntries(formData);
        // console.log(data);
        
        onSave(data);
        // form.current?.reset();
    }
  return (
        <form 
            {...props}
            onSubmit={handleSubmit}
            ref={form}
        >
            {children}
        </form>
    );
})

export default Form;