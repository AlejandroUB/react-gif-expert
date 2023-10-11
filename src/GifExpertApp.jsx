import { useState } from "react";
import { AddCategory } from "./components/AddCategory";

export const GifExpertApp = () => {
  
  const [categories, setCategories] = useState(['One Punch', 'Two Punches']);

  const onAddCategory = () => {
    setCategories([Math.random(), ...categories]);
    // setCategories(cat => [...cat, Math.random()]);
  }

  return (
    <>
        {/* Título */}
        <h1>GifExpertApp</h1>

        {/* Input */}
        <AddCategory />

        {/* Listado de Gifs */}
        <button onClick={ onAddCategory }>Add</button>
        <ol key={ 'categories-list' }>
          { categories.map(category => <li key={ category }>{ category }</li>) }
        </ol>
            {/* Gif Item */}
    </>
  );
}
