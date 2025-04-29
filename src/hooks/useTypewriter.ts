import { useEffect, useState } from "react";

export const useTypewriter = (text: string, speed: number = 180) => {
    const [displayText, setDisplayText] = useState("");
    const [index, setIndex] = useState(0);
    const [isComplete, setIsComplete] = useState(false);

    useEffect(() => {
        if (index < text.length) {
        const timeout = setTimeout(() => {
            setDisplayText((current) => current + text.charAt(index));
            setIndex((current) => current + 1);
        }, speed);
        
        return () => clearTimeout(timeout);
        } else {
        setIsComplete(true);
        }
    }, [index, text, speed]);

    return { displayText, isComplete };
};
