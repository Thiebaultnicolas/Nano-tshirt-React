import '../styles/Header.css';
import imgfrog from '../assets/frog.jpg';

function Header() {

    window.addEventListener('scroll', function() {
      const header = document.querySelector('header');
      header.classList.toggle("sticky", window.scrollY > 0);
    });

  return (
    <header id='masthead' className='site-header fiwex show ' role='banner'>
      <div className='header-wrap'>
        <div className='container'>
          <a href='../pages/Home.jsx'>
            <img src={imgfrog} alt='profil' className='imgfrog' />
          </a>
          <div className='list'>
            <ul>
              <li>
                <a href='../pages/Home.jsx'>Accueil</a>
              </li>
              <li>
              <a href="#scroll">Shop</a>
              </li>
              <li>
              <a href="#footer">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;