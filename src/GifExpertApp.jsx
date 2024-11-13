import { useState } from "react"

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One punch','Dragon Ball']);
    console.log(categories)
  return (
    <>
    {/*Titulo */}
    <h1>GifExpertApp</h1>
    {/*Input */}
    {/*Listado de Gif */}
    <ol>
     {categories.map(category=>{
        return <li key={category}>{category}</li>
     })}
    </ol>
    {/*Gif item */}

    </>
  )
}
