export default function FullBookDeatils({selectedisbn, handleBack}){
    return(
        <div>
        
        <div>{selectedisbn}</div>
        <button onClick={handleBack}>Back</button>
        </div>
     
    );
}