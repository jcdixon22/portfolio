import ContactForm from "../components/ContactForm"
import PageWrapper from "../components/PageWrapper"

function ContactPage() {
    return(
        <PageWrapper>
            <div className='home-format'>
                <div className='contact-title'> Get in touch</div>
                <ContactForm></ContactForm>
            </div>
        </PageWrapper>
    );
}

export default ContactPage;