function handleClick() {
    console.log("button clicked");
}

function Button(props: { text: string; color?: string; backgorundColor?: string }) {
    return (
        <button
            className="border rounded-md p-2"
            style={{
                color: props.color ? props.color : "black",
                backgroundColor: props.backgorundColor ? props.backgorundColor : "",
            }}
            onClick={() => handleClick()}
        >
            {props.text}
        </button>
    );
}

export default Button;
