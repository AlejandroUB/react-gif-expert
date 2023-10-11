import { useState } from "react";
import { AddCategory } from "./components/AddCategory";

export const GifExpertApp = () => {
  
  const [categories, setCategories] = useState(['One Punch', 'Two Punches']);

  return (
    <>
        {/* Título */}
        <h1>GifExpertApp</h1>

        {/* Input */}
        <AddCategory setCategories={setCategories}/>

        {/* Listado de Gifs */}
        <ol key={ 'categories-list' }>
          { categories.map(category => <li key={ category }>{ category }</li>) }
        </ol>
            {/* Gif Item */}
    </>
  );
}
