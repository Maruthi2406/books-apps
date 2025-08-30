import { useState } from "react";

export default function ListBox ({children}){
    const [open, setOpen]=useState(true);

    return(
<div className="box">

<div className="plus"> 
    <button className="plus"onClick={()=>setOpen(open=>!open)}>
     {open?"-":"+"}
    </button>
    </div>

 {open && children} 

</div>
    )
}

