import Logo from '../logo/logo';
import Navbar from '../navbar/navbar';

function Header(): JSX.Element {
  
    return (
      <header className="header" >
        <div className="container header-wrapper"> 
        <Logo/>
        <Navbar />
        </div>
      </header>
    );
  }
  
  export default Header;