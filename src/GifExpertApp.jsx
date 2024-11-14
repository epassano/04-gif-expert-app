import { useState } from "react"
import { AddCategory } from "./components/AddCategory";

export const GifExpertApp = () => {
  
    const [categories, setCategories] = useState(['One punch','Dragon Ball']);
    
    const onAddCategory=( newCategory)=>{
      if(categories.includes(newCategory)) return;
       //console.log(newCategory);
       setCategories([newCategory,...categories]);
    }
  return (
    <>
    {/*Titulo */}
    <h1>GifExpertApp</h1>
    <AddCategory 
      onNewCategory={ (event) => onAddCategory(event)}
    />
    {/*Listado de Gif */}
    <button onClick={onAddCategory}>Agregar</button>
    <ol>
     {categories.map(category=>{
        return <li key={category}>{category}</li>
     })}
    </ol>
    {/*Gif item */}

    </>
  )
}
