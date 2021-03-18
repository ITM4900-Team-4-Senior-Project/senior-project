const Search = () => {
  return (
    <search>
      <h6>Search/Filter Results:</h6>
      {/* Dropdown menu for subjects */}
      <div className="dropdown">
        <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
          All subjects:
        </button>
        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
          <li><a className="dropdown-item" href="#">Math</a></li>
          <li><a className="dropdown-item" href="#">English</a></li>
          <li><a className="dropdown-item" href="#">Science</a></li>
        </ul>
      </div>

    </search>
  );
};

export default Search;