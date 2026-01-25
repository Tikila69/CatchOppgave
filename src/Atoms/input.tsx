<<<<<<< Updated upstream
function Input(props: { placeholder: string; color?: string }) {
=======
<<<<<<< Updated upstream
function Input(props: {placeholder: string, color?: string}) {
>>>>>>> Stashed changes
    return (
        <input
            className="border rounded-md p-3 w-full"
            style={{ color: props.color ? props.color : "black" }}
            placeholder={props.placeholder}
=======
function Input({
    placeholder,
    color,
    value,
}: {
    placeholder: string;
    color?: string;
    value: string;
}) {
    return (
        <input
            className="border rounded-md p-3 w-full"
            style={{ color: color ? color : "black" }}
            placeholder={placeholder}
            value={value}
>>>>>>> Stashed changes
        />
    );
}

export default Input;
