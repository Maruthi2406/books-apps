
import { useEffect, useState } from 'react';
import './App.css';
import NavBar from './Components/NavBar';
import Main from './Components/Main';
import Result from './Components/Result';
import ListBox from './Components/ListBox';
import BooksList from './Components/BooksList';
import BooksRead from './Components/BooksRead';
import Summary from './Components/Summary';
import fulldata from './Components/services/fulldata.js';
import Loader from './Components/Loader.js';
import Error from './Components/Error.js';
import Search from './Components/Search.js';
import FullBookDeatils from './Components/FullBookDeatils.js';
import CompletedBook from './Components/CompletedBook.js';


const booksRead = [
  {
    isbn: '9788129112859',
    title: 'I BOUGHT THE MONKS FERRARI',
    rating: 4.3,
    year: 2001,
    publisher: 'Rupa Publications India',
    image: 'https://covers.openlibrary.org/b/id/6903838-M.jpg'
  },
  {
    isbn: '9780618263225',
    title: 'The Lord of the Rings',
    rating: 4.3,
    year: 2004,
    publisher: 'HarperCollins Publishers',
    image: 'https://covers.openlibrary.org/b/id/393992-M.jpg'
  },
  {
    isbn: '9780984221233',
    title: 'A Python Book',
    rating: 4.3,
    year: 2006,
    publisher: 'Platypus Global Media"',
    image:
      'http://books.google.com/books/content?id=1FL-ygAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api'
  },
  {
    isbn: '9781521546185',
    title: 'React. Js Book',
    rating: 4.3,
    year: 2008,
    publisher: 'Packt Publishers',
    image:
      'http://books.google.com/books/content?id=e_l9zQEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api'
  }
];

const API_KEY=`AIzaSyCvVOZTGms2rpaRWOaUdLNUqd_-q7Oo2E4`
function App() {
  const [booksData, setBooksData] = useState([]);
  const [booksReadData, setBooksReadData] = useState(booksRead);
  const [loading, setLoading]=useState(false);
  const [error, setError]=useState("");
  const [query, setQuery] = useState("")
  const [selectedisbn, setSelectedisbn]=useState("")

  function handleSelectedisbn(isbn){
    setSelectedisbn(isbn);
  }
  

async function fetchPost (){
  try
  {
  setLoading(true);
  setError("");
  const response =await fetch(`https://www.googleapis.com/books/v1/volumes?q=${query}&key=${API_KEY}`);
  const data  =await response.json();
  console.log(data);
  if (!data.items?.length) throw new Error('No Books Data Available'); // Handle no JSON data or empty items in json 
  setBooksData(fulldata(data));
  setLoading(false)
  } catch(error)
  {
    setLoading(false);
    setError(error.message);
    console.log(error.message);
  }
}

 useEffect(() => {
  if(query.length < 4){
    return;
  }
    fetchPost();
  }, [query]);



  return (
    <>
    <NavBar>
      <Search query={query} setQuery={setQuery}/>
      <Result booksData={booksData}/>
    </NavBar>
      <Main>
      <ListBox>
        {loading && <Loader />}
        {!loading && !error && <BooksList booksData={booksData} handleSelectedisbn={handleSelectedisbn}/>} 
        {/* network error,"" empty space (false)   " " single space true*/}
        {error && <Error message={error}/>}
      </ListBox>

      <BooksRead booksReadData={booksReadData}> 
      {selectedisbn?<FullBookDeatils selectedisbn={selectedisbn}/>:
      <div><Summary>
        <CompletedBook />
      </Summary></div>}
      </BooksRead> 
      </Main>
    </>
  );
}

export default App;
