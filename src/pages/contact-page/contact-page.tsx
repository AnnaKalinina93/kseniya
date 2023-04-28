import Form from "../../components/form/form"
import Contact from "../../components/contact/contact";

function ContactPage(): JSX.Element {
  window.scroll(0, 0);
  return (
    <div className="main">
      <section className="section">
        <h2 className="main-title">CONTACT</h2>
        <Contact />
        <Form />
      </section>
    </div>
  );
}

export default ContactPage;
