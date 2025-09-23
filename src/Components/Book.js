export default function Book ({boo,handleSelectedisbn}){
    return(
        <li className="book bo" onClick={handleSelectedisbn}>
                    <img src={boo.image} alt="Error"/>
                     <div>
                          <h3>{boo.title}</h3>
                         <div>Year: {boo.year}</div>
                    </div>
                </li>
                );
            }
    