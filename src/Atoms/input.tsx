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
        />
    );
}

export default Input;
