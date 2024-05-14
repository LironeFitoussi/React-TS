import { type FormEvent, useRef } from "react";

type NewGoalProps = {
    onAddGoal: (title: string, description: string) => void;
}

export default function NewGoal({onAddGoal}: NewGoalProps) {

    const titleInputRef = useRef<HTMLInputElement>(null);
    const descriptionInputRef = useRef<HTMLInputElement>(null);

    function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        // console.log("Add Goal");

        const titleValue = titleInputRef.current?.value;
        const descriptionValue = descriptionInputRef.current?.value;

        if (titleValue && descriptionValue) {
            onAddGoal(titleValue, descriptionValue);
        } else {
            // Handle validation error
            alert("Please enter a title and description");
            throw new Error("Please enter a title and description");
        }

        e.currentTarget.reset();
    }  
    return (
        <form onSubmit={handleSubmit}>
            <p>
                <label htmlFor="title">Course Goal</label>
                <input type="text" id="title" ref={titleInputRef}/>
            </p>
            <p>
                <label htmlFor="description">Short summary</label>
                <input type="text" id="description" ref={descriptionInputRef} />
            </p>
            <button>Add Goal</button>
        </form>
    );
}

