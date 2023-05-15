import Navbar from '../navbar/navbar';

function Header(): JSX.Element {
  
    return (
      <header className="header" >
        <div className="container header-wrapper"> 
        <div></div>
        <Navbar />
        </div>
      </header>
    );
  }
  
  export default Header;