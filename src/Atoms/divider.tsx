

function Divider(props: {thickness?: string, color?: string }) {

    return (
        <hr
            className="w-full"
            style={{
                border: props.thickness ? props.thickness+" solid" : "1px solid",
                color: props.color ? props.color : "black"
            }}
        />
    )
}

export default Divider;