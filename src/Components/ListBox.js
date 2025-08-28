import { useState } from "react";
import BooksList from "./BooksList";

export default function ListBox ({booksData}){
    const [open, setOpen]=useState(true);

    return(
<div className="box">

<div className="plus"> 
    <button className="plus"onClick={()=>setOpen(open=>!open)}>
     {open?"-":"+"}
    </button>
    </div>

   {open && <BooksList booksData={booksData}/>} 

    <div className="btn">
      <button onClick={() => setOpen(true)}>Open </button>
      <button onClick={() => setOpen(false)}>Close </button>
    </div>

</div>
    )
}

