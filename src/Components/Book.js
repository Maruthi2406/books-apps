export default function Book ({boo}){
    return(
        <li className="book bo">
                    <img src={boo.image} alt="Error"/>
                     <div>
                          <h3>{boo.title}</h3>
                         <div>Year: {boo.year}</div>
                    </div>
                </li>
                );
            }
    