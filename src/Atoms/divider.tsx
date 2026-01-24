function Divider(props: { thickness?: string; color?: string }) {
    return (
        <hr
            className="w-full mt-2 mb-2"
            style={{
                border: props.thickness ? props.thickness + " solid" : "1px solid",
                color: props.color ? props.color : "black",
            }}
        />
    );
}

export default Divider;
