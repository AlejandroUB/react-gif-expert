import { useState } from "react";
import { AddCategory } from "./components/AddCategory";

export const GifExpertApp = () => {

  const [categories, setCategories] = useState(['One Punch', 'Two Punches']);

  const onAddCategory = (newCategory) => {
    setCategories([newCategory, ...categories]);
    // setCategories(cat => [...cat, newCategory]);
  }

  return (
    <>
      {/* Título */}
      <h1>GifExpertApp</h1>

      {/* Input */}
      <AddCategory
        // setCategories={setCategories}
        onNewCategory={onAddCategory}
      />

      {/* Listado de Gifs */}
      <ol key={'categories-list'}>
        {categories.map(category => <li key={category}>{category}</li>)}
      </ol>
      {/* Gif Item */}
    </>
  );
}
