import CompletedBook from "./CompletedBook";
import Summary from "./Summary"

export default function BooksRead ({booksReadData}) {
    return (
    <div className="box"> 
    <Summary />
    <ul>
    {booksReadData.map((bo)=>
       <CompletedBook bo={bo} key={bo.isbn}/> )}
    </ul>
    </div>

     );
}