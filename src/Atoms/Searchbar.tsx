import { useState, useRef } from "react";

function Searchbar({
    placeholder,
    color,
    onSearch,
}: {
    placeholder: string;
    color: string;
    onSearch: (val: string) => void;
}) {
    const [input, setInput] = useState("");
    const timeoutRef = useRef<NodeJS.Timeout | null>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setInput(value);

        if (timeoutRef.current) clearTimeout(timeoutRef.current);
        timeoutRef.current = setTimeout(() => {
            onSearch(value);
        }, 300);
    };

    return (
        <input
            placeholder={placeholder}
            className="border rounded-md p-3 w-full"
            style={{ color: color ? color : "black" }}
            value={input}
            onChange={handleChange}
        />
    );
}

export default Searchbar;
