
import { useState } from 'react';
import './App.css';
import NavBar from './Components/NavBar';
import Main from './Components/Main';
import Result from './Components/Result';
import ListBox from './Components/ListBox';
import BooksList from './Components/BooksList';
import BooksRead from './Components/BooksRead';
import Summary from './Components/Summary';
import CompletedBook from './Components/CompletedBook';
import Button from './Components/Button';
const books = [
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
  const [booksData, setBooksData] = useState(books);
  const [booksReadData, setBooksReadData] = useState(booksRead);
  
fetch(`https://www.googleapis.com/books/v1/volumes?q=monk+ferarri&key=${API_KEY}`)
.then((response)=>response.json())
.then((data)=>console.log(data))
.catch(error =>console.log(error));

  return (
    <>
    <NavBar>
      <Result booksData={booksData}/>
    </NavBar>
      <Main>
      <ListBox>
      <BooksList booksData={booksData} />
      <Button />
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
