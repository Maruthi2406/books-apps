import Book from "./Book";

export default function BooksList({booksData,handleSelectedid}){
    return(
        <ul className="books-list">
                { booksData.map((boo)=> (
                      <Book boo={boo}  key={boo.id} handleSelectedid={(()=>handleSelectedid(boo.id))}
                      />))}
            </ul>  
    )
} 