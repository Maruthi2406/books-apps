export default function fulldata(data){
    let books=[];
    for (let item of data.items){
        let book=singleBookObject(item)
            books.push(book);
        }
    
        console.log(books);
        return books
}
export function singleBookObject(item){
   
    let book={
                    id:item.id,
                    title: item.volumeInfo.title,
                    isbn: item.industryIdentifiers?.[0]?.identifier ?? "No ISBN",
                    image: item.volumeInfo.imageLinks?.thumbnail,
                    publisher: item.volumeInfo.publisher,
                    rating: 4.5,
                    year: item.volumeInfo.publishedDate
                                                        };
          return book;                                              
}

