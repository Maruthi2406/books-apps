import { useState } from "react";
import CompletedBook from "./CompletedBook";
import Summary from "./Summary"

export default function BooksRead ({booksReadData}) {
   const[open, setOpen]=useState(true)
    return (
    <div className="box"> 
<div className="plus">
   <button className="plus" onClick={()=>setOpen((open)=>!open)}>
      {open?"-":"+"} </button>
</div>
    {open &&(<><Summary />
    <ul>
    {booksReadData.map((bo)=>
       <CompletedBook bo={bo} key={bo.isbn}/> )}
    </ul></>)}

   <div className="btn">
      <button onClick={() => setOpen(true)}>Open </button>
      <button onClick={() => setOpen(false)}>Close </button>
    </div>

    </div>
     );
    
}