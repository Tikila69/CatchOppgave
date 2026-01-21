import styled from "styled-components";



function lable(props: {
    text: string,
    textColor?: string,
    fontSize?: string
}) {
    return <label style={{
        color: props.textColor ? props.textColor : 'black',
        fontSize: props.fontSize ? props.fontSize : '16px'
    }}>{props.text}</label>
}

export default lable;