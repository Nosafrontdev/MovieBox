import { Link } from "react-router";
function NavBar() {
    return (  
        <nav>
            <Link to ='/'> <h1> MovieBox </h1> </Link>

            <div>
                <Link to ='/search'> Search </Link>
                <Link to = '/favourite'> Favorites </Link>
            </div>

        </nav>
    );
}

export default NavBar;