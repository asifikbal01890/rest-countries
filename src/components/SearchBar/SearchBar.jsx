

const SearchBar = ({setInputValue, handleSearch}) => {




    return (
        <form >
            <input type="text" onChange={(e)=>{setInputValue(e.target.value)}} placeholder='Search Counrty'/>
            <button onClick={handleSearch()} type="submit">Search</button>
        </form>
    );
};

export default SearchBar;