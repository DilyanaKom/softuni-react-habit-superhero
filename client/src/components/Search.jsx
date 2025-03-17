export default function Search(){
    return (
        <form className="d-flex tm-search-form">
        <input className="form-control tm-search-input" type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-outline-success tm-search-btn" type="submit">
          <i className="fas fa-search"></i>
        </button>
      </form>
    )
}