import { useEffect, useState } from "react";
import SongCompass from "./SongCompass";

const SongPart = ({ title, part }) => {

    const [state, setState] = useState([]);

    useEffect(() => {
        dividePart();        
    }, [])

    const dividePart = () => {
        let parts = [];  
        const chunkSize = 4;
        console.log({part});

        for (let i = 0; i < part.length; i += chunkSize) {
            const chunk = part.slice(i, i + chunkSize);
            
            parts.push(chunk);
        }

        setState(parts);
    }

    return (
        <div className="part__container">
            <div className="part__first">{ title }</div>
            <div className="part__second">
                {
                    state.map((el, index) => (
                        <SongCompass
                            key={ el + index }
                            compass={ el }
                        />
                    ))
                }
            </div>
        </div>
    )
}

export default SongPart;