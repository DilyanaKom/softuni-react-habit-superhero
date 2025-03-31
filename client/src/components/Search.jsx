
import styles from './Forms.module.css'


export default function Search({ onSearch }) {

  const submitAction = (formData) => {
    const searchValues = Object.fromEntries(formData);
    onSearch(searchValues.searchTitle)

  }

  return (
    <form className={styles.searchForm} action={submitAction}>
      <input
        className={`form-control ${styles.searchInput}`}
        type="search"
        placeholder="Search Title"
        aria-label="Search"
        name='searchTitle'
      />
      <button
        className={`btn btn-outline-success ${styles.searchBtn}`}
        type="submit"
      >
        <i className="fas fa-search"></i>
      </button>
    </form>
    
  )
}