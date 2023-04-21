import  Form  from "../../components/form/form"
import Contact from "../../components/contact/contact";

function Main(): JSX.Element {

  return (
    <div className="main">
      <section className="section">
        <h2 className="main-title">BIO</h2>
        <p className="main-text">Hi, I am Kseniia Kurishchenko. I am a Job Market candidate 2023/2024 at the Department of Economics, Copenhagen Business School.
        </p>
        <p className="main-text">My research interests lie between Machine Learning and Econometrics. Nowadays economists widely use Machine Learning approaches in empirical work. Unfortunately, state-of-the-art Machine Learning models are black-box. In my thesis, I shed the light on black-box models and make them more interpretable and fairer.
        </p>
      </section>
      <section className="section">
        <h2 className="main-title">INTEREST</h2>
        <p className="main-text">Machine Learning, Interpretability, Fairness, Econometrics
        </p>
      </section>
      <section className="section">
        <h2 className="main-title">CONTACT</h2>
        <Contact />
        <Form />
      </section>
    </div>
  );
}

export default Main;