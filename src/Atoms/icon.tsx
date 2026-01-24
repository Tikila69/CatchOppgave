const IconSizes = {
    small: "16px",
    med: "24px",
    large: "32px",
} as const;

type IconSize = keyof typeof IconSizes;

function Icon(props: { alt?: string; src: string; size?: IconSize; color?: string }) {
    return (
        <img
            alt={props.alt}
            src={props.src}
            style={{
                width: IconSizes[props.size || "med"],
                height: IconSizes[props.size || "med"],
                color: props.color ? props.color : "",
            }}
        />
    );
}

export default Icon;
