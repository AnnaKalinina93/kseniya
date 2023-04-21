import { FormEvent } from "react";

function Form(): JSX.Element {

    const forms = [
        {
            type: "text",
            name: "Name"
        },
        {
            type: "email",
            name: "Email"
        },
        {
            type: "text",
            name: "Subject"
        }
    ]
    return (
        <form
            className="form"
            action="#"
            method="post"
            id="contact-form"
            onSubmit={(evt: FormEvent<HTMLFormElement>) => {
                evt.preventDefault();
            }}
        >
            {forms.map(form => (
                <input
                    key={form.name}
                    className="form-input"
                    name={form.name}
                    placeholder={form.name}
                    type={form.type}
                    id="contact-form"
                />
            ))}

            <textarea
                className="form-textarea"
                id="contact-form"
                name="contact"
                placeholder="Message"
            />
            <button
                className="form-submit button"
                type="submit"
            >
                SUBMIT
            </button>
        </form>
    )
}

export default Form;
