function Contact(): JSX.Element {
    return (
        <ul className="contact-list">
            <li className="contact-item">
                <h3 className="contact-title">Tel:</h3><a className="contact-link" href="tel:+4550303739">+4550303739</a>
            </li>
            <li className="contact-item">
                <h3 className="contact-title">Email:</h3><a className="contact-link" href="mailto:kk.eco@cbs.dk">kk.eco@cbs.dk</a>
            </li>
        </ul>
    )
}

export default Contact;