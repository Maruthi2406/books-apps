
import BooksRead from "./BooksRead";
import ListBox from "./ListBox";

export default function  Main ({booksData, booksReadData}) {
    return(
<div className="main d-flex">
    <ListBox booksData={booksData}/>  
    <BooksRead booksReadData={booksReadData}/> 
</div>
    );
} 