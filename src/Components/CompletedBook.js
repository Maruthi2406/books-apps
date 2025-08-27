export default function CompletedBook({bo}) {
    return(

       <li className="book">  
        <img src={bo.image} alt="error" />
        <div>
        <h3>{bo.title}</h3>
         <div>
            <span>⭐</span>
            <span>4.0</span>
        </div>    

        <div>
            <span>✨</span>
            <span>4.0</span>
        </div>
      </div>
       </li> 

    );
}