import { LuSearch } from "react-icons/lu";

const Searchbar = () => {
  return (
    <div id='searchbar'>
        <div className="container">
          <button><LuSearch/></button>
           <input type="text" placeholder='Search' />
        </div>
    </div>
  )
}

export default Searchbar