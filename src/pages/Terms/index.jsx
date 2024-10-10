import TermsConditions from "./TermsConditions"
import CookiePolicy from "./CookiePolicy"
import PrivacyPolicy from "./PrivacyPolicy"

export default function Terms() {
    return (
        <div className="leading-relaxed pt-8 md:pt-10 2xl:pt-12 text-sm md:text-base">
            <TermsConditions/>
            <CookiePolicy/>
            <PrivacyPolicy/>
        </div>
    )
}