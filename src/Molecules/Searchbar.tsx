import Input from "../Atoms/input";

function Searchbar(props: { placeholder: string; color: string }) {
    return (
        <div>
            <Input placeholder={props.placeholder} color={props.color} />
        </div>
    );
}

export default Searchbar;
