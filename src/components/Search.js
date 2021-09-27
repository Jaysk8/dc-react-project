const Search = () => {
    return (
        <div className="search-box mb-4">
            <form className="d-flex">
                <input type="text"  
                className="form-control me-2" 
                placeholder="Search movie..."
                />
                <button className="btn btn-outline-primary">
                    <i className="fa fa-search"></i>
                </button>
            </form>
            </div>
    )
}

export default Search
