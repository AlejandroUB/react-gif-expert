import { useEffect } from "react";
import { getGifs } from "../helpers/getGifs";

export const GifGrid = ({ category }) => {

    useEffect(() => {
        getGifs(category);
    }, []);

    const gifs = [1, 2, 3, 4, 5];

    return (
        <>
            <h3>{category}</h3>
            {
                gifs.map(gif => <p key={gif}>{gif}</p>)
            }
        </>
    )
}
