import { useEffect, useState } from "react";
import { List } from "../molecules/list"
import "../styles/solutions.css"

export const Solutions = () => {
    const [screenSize, setScreenSize] = useState({ width: window.innerWidth, height: window.innerHeight });

    useEffect(() => {
        const handleResize = () => {
            setScreenSize({ width: window.innerWidth, height: window.innerHeight });
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);
    return (
        <div className="Solutions">
            <List />
        </div>
    )
}
