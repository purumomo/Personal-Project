const SearchBar = () => (
    <form action="/" method="get">
        <label htmlFor="header-search">
            <span className="visually-hidden">Launch</span>
        </label>
        <input
            type="text"
            id="header-search"
            placeholder="Search your trip"
            name="s" 
        />
        <button type="submit">Search</button>
    </form>
);

export default SearchBar;