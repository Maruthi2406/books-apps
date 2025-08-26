import Book from "./Book";

export default function BooksList({booksData}){
    return(
        <ul className="books-list">
                { booksData.map((boo)=> (
                      <Book boo={boo}  key={boo.isbn}/>))}
            </ul>  
    )
} 