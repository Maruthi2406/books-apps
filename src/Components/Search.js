export default function Search ({query, setQuery}){
    return <input type ="text" placeholder='Search for Books' value={query} onInput={(e)=>setQuery(e.target.value)}/>;
}