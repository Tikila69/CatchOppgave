
import styled from 'styled-components';

const Button = styled.button`
    padding: 10px 20px;
    rounded: 5px;
    border: 2px solid black;
    border-radius: 10px;
    cursor: pointer;
    width: 100%;
`;
function handleClick() {
    console.log("button clicked");
}

function styledButton(props: {text: string}) {


    return (<Button
        onClick={ () =>
            handleClick()
        }
    
    >{props.text}</Button>)
}

export default styledButton;