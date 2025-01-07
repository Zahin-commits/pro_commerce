import './style.nav.css'
import { LuMenu } from "react-icons/lu";
import { LuShoppingCart } from "react-icons/lu";

const Navbar = () => {
  return (
    <div id='navbar'>
     <LuMenu/>
      <LuShoppingCart/> 
    </div>
  )
}

export default Navbar