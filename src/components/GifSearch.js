import react, { useState }  from "react";

function GifSearch ({ submitHandler } ) {
    const [searchTerm, setSearchTerm] = useState("");
    
        const updateSearchTerm =(event) =>{
            setSearchTerm(event.target.value)
        }
    
        const sendSearchTerm=(event)=> {
            event.preventDefault();
            submitHandler(searchTerm);
            setSearchTerm('');
        }

    return (
      <div>
           <form onSubmit={sendSearchTerm} className="form-group">
                <label htmlFor="search">Enter a search term:</label>
                <input onChange={updateSearchTerm} value={searchTerm} type="text" name="search" className="form-control-lg form-control"></input>
                <button className="btn btn-success">Find GIFs</button>
            </form>
      
      </div>
    );
  };

  export default GifSearch;