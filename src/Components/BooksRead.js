import { useState } from "react";
import CompletedBook from "./CompletedBook";
import Button from "./Button";


export default function BooksRead ({children,booksReadData}) {
   const[open, setOpen]=useState(true)
    return (
    <div className="box"> 
<div className="plus">
   <button className="plus" onClick={()=>setOpen((open)=>!open)}>
      {open?"-":"+"} </button>
</div>
    {open &&(<>{children}
    <ul>
    {booksReadData.map((bo)=>
       <CompletedBook bo={bo} key={bo.isbn}/> )}
    </ul></>)}
    <Button />

    </div>
     );
    
}