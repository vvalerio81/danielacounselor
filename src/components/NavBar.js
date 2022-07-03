import 'bootstrap/dist/css/bootstrap.min.css'; 
import CardWidget from './CardWidget';
import { Link } from 'react-router-dom';

const NavBar = () => {


    return(
        <nav className="navbar navbar-expand-lg bg-light">
           <div className="container-fluid">
              <div className="nav">
                <Link to='/'>
                  <img src="https://vvalerio81.github.io/vvalerio81/img/logo.png" alt="Daniela Counselor" width="264" height="52" />
                </Link>
              </div>

              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="nav justify-content-center">
                  <li className="nav-item">
                    <Link to='/category/personal' className="nav-link">Desarrollo Personal</Link>
                  </li>
                  <li className="nav-item">
                    <Link to='/category/profesional' className="nav-link">Desarrollo Profesional</Link>
                  </li>
                </ul>
              </div>
              <Link to='/cart' style={{textDecoration: "none"}}><CardWidget /></Link>
            <div></div>
            </div>
         </nav>
    );

};

export default NavBar;