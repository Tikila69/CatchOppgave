function Input(props: {placeholder: string, color?: string}) {
    return (
        <input
            className="border rounded-md p-3 w-full"
            style={{color: props.color ? props.color : "black"}}
            placeholder={props.placeholder}
        />
    )
}

export default Input