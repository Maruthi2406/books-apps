export default function Book ({boo,handleSelectedid}){
    return(
        <li className="book bo" onClick={handleSelectedid}>
                    <img src={boo.image} alt="Error"/>
                     <div>
                          <h3>{boo.title}</h3>
                         <div>Year: {boo.year}</div>
                    </div>
                </li>
                );
            }
    