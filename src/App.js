
import { useEffect, useState } from 'react';
import './App.css';
import NavBar from './Components/NavBar';
import Main from './Components/Main';
import Result from './Components/Result';
import ListBox from './Components/ListBox';
import BooksList from './Components/BooksList';
import BooksRead from './Components/BooksRead';
import Summary from './Components/Summary';
import CompletedBook from './Components/CompletedBook';
import fulldata from './Components/services/fulldata.js';
import Loader from './Components/Loader.js';
import Error from './Components/Error.js';

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
  

async function fetchPost (){
  try
  {
  setLoading(true);
  const response =await fetch(`https://www.googleapis.com/books/v1/volumes?q=monk+ferarri&key=${API_KEY}`);
  const data  =await response.json();
  console.log(data);
  if (!data.items?.length) throw new Error('No Books Data Available'); // Handle no JSON data or empty items
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
    fetchPost();
  }, []);



  return (
    <>
    <NavBar>
      <Result booksData={booksData}/>
    </NavBar>
      <Main>
      <ListBox>
        {loading && <Loader />}
        {!loading && !error && <BooksList booksData={booksData} />} 
        {/* network error,"" empty space (false)   " " single space true*/}
        {error && <Error message={error}/>}
      </ListBox>

      <BooksRead booksReadData={booksReadData}> 
      <Summary>
      <CompletedBook/>
      </Summary>
      </BooksRead> 
      </Main>
    </>
  );
}

export default App;
