import cv from '../../images/Kseniia-Kurishchenko-cv.pdf'

function CV(): JSX.Element {

    return (
        <section className="section">
            <h2 className="main-title">CV</h2>
            <p className="main-text">My CV.pdf should be <a className="link" href={cv} download="Kseniia-Kurishchenko-cv"> uploaded </a></p>
        </section>
    );
}

export default CV;