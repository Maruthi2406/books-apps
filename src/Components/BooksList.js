import Book from "./Book";

export default function BooksList({booksData,handleSelectedisbn}){
    return(
        <ul className="books-list">
                { booksData.map((boo)=> (
                      <Book boo={boo}  key={boo.isbn} handleSelectedisbn={(()=>handleSelectedisbn(boo.isbn))}/>))}
            </ul>  
    )
} 