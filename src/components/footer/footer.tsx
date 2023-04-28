function Footer(): JSX.Element {

  return (
    <footer className="footer">
      <ul className="footer-list">
        <li className="footer-item">
          <h3 className="footer-title">Tel:</h3><a className="footer-link" href="tel:+4550303739">+4550303739</a>
        </li>
        <li className="footer-item">
          <h3 className="footer-title">Email:</h3><a className="footer-link" href="mailto:kk.eco@cbs.dk">kk.eco@cbs.dk</a>
        </li>
        </ul>
        <p>© 2023 Kseniia Kurishchenko: powered by Anna Kalinina (sister <img className="smile" src="img/smile.png" alt="smile" width="20"/>)</p>
    </footer>
  );
}

export default Footer;