import FAQ from "../components/FAQ"
import ContactInfo from "../components/ContactInfo"
import ContactForm from "../components/ContactForm"

export default function ContactPage() {
    return(
        <div className="flex flex-col">
            <div className="flex items-center flex-col xl:flex-row">
                <ContactInfo/>
                <ContactForm/>
            </div>
            <FAQ/>
        </div>   
    ) } 