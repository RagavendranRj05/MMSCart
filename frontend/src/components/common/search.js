import { useRef } from "react";

const Search = ({ placeholder, onSubmit }) => {
  const searchInput = useRef();

  const onSubmitHandler = (e) => {
    e.preventDefault();
    onSubmit(searchInput);
  }

  return (
    <form action="#" onSubmit={onSubmitHandler}>
      <div className="input-group">
        <div className="input-group-text">
          <div className="icon icon-lg">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
              className="feather feather-search">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
          </div>
        </div>

        <input
          type="text"
          ref={searchInput}
          className="form-control form-control-lg ps-0"
          placeholder={placeholder}
          aria-label={placeholder}
        />
      </div>
    </form>
  )
}

export default Search;