const Navbar = () => {
    return (
        <div className="navbar">
            <h1>Movie Finder</h1>
            <div>
                <form className="d-flex">
                    <input type="text" className="form-control me-2" placeholder="search movie..."/>
                    <button className="btn btn-outline-primary">
                        <i class="fa fa-search"></i>
                    </button>
                    <span></span>
                 </form>
            </div>

            <div className="links">
                <a href="/">Home</a>
                <a href="/about">About</a>
                <a href="/donate">Donate</a>
            </div>
        </div>
    )
}

export default Navbar
