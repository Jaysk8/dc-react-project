const Search = (props) => {
    return (
        <div className="search-box mb-5 ms-3">
            <form className="d-flex">
                <input type="text"  
                className="form-control me-2" 
                placeholder="Search movie..."
                value={props.value}
                onChange={(e) => props.setSearch(e.target.value)}
                />
            </form>
            </div>
    )
}

export default Search
