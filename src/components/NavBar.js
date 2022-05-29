import 'bootstrap/dist/css/bootstrap.min.css'; 
import CardWidget from './CardWidget';

const NavBar = () => {
    return(
        <nav className="navbar navbar-expand-lg bg-light">
           <div className="container-fluid">
              <div className="nav">
                <a class="navbar-brand" href="https://www.google.com/">
                  <img src="https://vvalerio81.github.io/vvalerio81/img/logo.png" alt="Daniela Counselor" width="264" height="52" />
                </a>
              </div>

              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="nav justify-content-center">
                  <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="https://www.google.com/">Home</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="https://www.google.com/">Acerca de Mi</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="https://www.google.com/">Cursos</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="https://www.google.com/">Notas</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="https://www.google.com/">Contactame</a>
                  </li>
                </ul>
              </div>
            <div><CardWidget /></div>
            </div>
         </nav>
    );

};

export default NavBar;