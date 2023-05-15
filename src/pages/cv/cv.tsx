import cv from '../../images/Kseniia-Kurishchenko-cv.pdf'

function CV(): JSX.Element {

    return (
        <section className="section">
            <h2 className="main-title">CV</h2>
            <p className="main-text">
                My CV.pdf should be uploaded</p>
            <a className="link" href={cv} download="Kseniia-Kurishchenko-cv">
                <object
                    className="src"
                    type="image/svg+xml"
                    data="img/cv.svg"
                    width="100">
                    <img
                        src="img/cv.svg" alt="cv icon" />
                </object>
            </a>
        </section>
    );
}

export default CV;