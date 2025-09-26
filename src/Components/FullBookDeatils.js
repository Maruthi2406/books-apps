import { useEffect, useState } from "react";
import { singleBookObject } from "./services/fulldata";
import Loader from './Loader';


export default function FullBookDeatils({selectedid, handleBack}){
const [booksData, setBooksData] = useState([]);
const [loading, setLoading]=useState(false);

    async function fetchPosts (){
      setLoading(true);
      const response =await fetch(`https://www.googleapis.com/books/v1/volumes/${selectedid}`);
      const data  =await response.json();
      console.log(data);
      setBooksData(singleBookObject(data));
      setLoading(false);
    }

    useEffect(() => {
        fetchPosts();
      }, [selectedid]);


     return (
    <div>
      <div>
        <button onClick={handleBack}>Back</button>
      </div>
      {loading ? (
        <Loader />
      ) : (
        <div className="book-details d-flex">
          <div>
            <img src={booksData.image} alt="paban" />
          </div>

          <div>
            <h2>{booksData.title}</h2>

            <ul>
              <li>Year: {booksData.year}</li>
              <li>Publisher: {booksData.publisher}</li>
              <li>ISBN: {booksData.isbn}</li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}