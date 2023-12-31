import { HeaderProps } from '../../types/header';
//import { Link } from "react-router-dom"

const Navbar = (props: HeaderProps) => {
  return (
    <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-light border-bottom shadow-sm">
      <div className="container">
        <nav className="my-2 my-md-0 mr-md-3">
          
            
            <h2> {props?.title} </h2>
        </nav>
      </div>
    </div>
  );
}

export default Navbar