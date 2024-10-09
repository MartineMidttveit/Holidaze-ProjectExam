import ArrowRight from "../SVG/ArrowRight"
import PhoneIcon from "../SVG/PhoneIcon"
import MailIcon from "../SVG/MailIcon"

export default function Footer() {
    return(
        <footer className="flex flex-col bg-background text-primary border-t border-secondary w-full font-poppins">
            <div className="flex justify-between px-[5%] lg:px-[7%] 2xl:px-[10%] py-6">
                <span className="font-bold text-xl">Holidaze</span>

                <div className="flex flex-col gap-2">
                    <h4 className="font-medium">Support</h4>
                    <span className="flex gap-2 items-center text-secondary">
                        Contact us
                        <ArrowRight/>
                    </span>

                    <span className="flex gap-2 items-center text-secondary">
                        FAQs
                        <ArrowRight/>
                    </span>

                    <span className="flex gap-2 items-center text-secondary">
                        Help center
                        <ArrowRight/>
                    </span>

                    <span className="flex gap-2 items-center text-secondary">
                        Cancellations & Refunds
                        <ArrowRight/>
                    </span>
                </div>

                <div className="flex flex-col gap-2">
                    <h4 className="font-medium">Company</h4>
                    <span className="flex gap-2 items-center text-secondary">
                        About us
                        <ArrowRight/>
                    </span>

                    <span className="flex gap-2 items-center text-secondary">
                        Careers
                        <ArrowRight/>
                    </span>

                    <span className="flex gap-2 items-center text-secondary">
                        Press & Media
                        <ArrowRight/>
                    </span>

                    <span className="flex gap-2 items-center text-secondary">
                        Blog
                        <ArrowRight/>
                    </span>
                </div>

                <div className="flex flex-col gap-2">
                    <h4 className="font-medium">Legal</h4>
                    <span className="flex gap-2 items-center text-secondary">
                        Terms & Conditions
                        <ArrowRight/>
                    </span>

                    <span className="flex gap-2 items-center text-secondary">
                        Privacy policy
                        <ArrowRight/>
                    </span>

                    <span className="flex gap-2 items-center text-secondary">
                        Cookie policy
                        <ArrowRight/>
                    </span>
                </div>

                <div className="flex flex-col gap-2">
                    <h4 className="font-medium">Explore</h4>
                    <span className="flex gap-2 items-center text-secondary">
                        Travel guides
                        <ArrowRight/>
                    </span>

                    <span className="flex gap-2 items-center text-secondary">
                        Popular venues
                        <ArrowRight/>
                    </span>

                    <span className="flex gap-2 items-center text-secondary">
                        Travel tips
                        <ArrowRight/>
                    </span>
                </div>
            </div>

            <div className="border-t border-secondary py-6">
                <div className="px-[5%] lg:px-[7%] 2xl:px-[10%] flex justify-between w-full">
                    <p className="font-medium flex items-center gap-1"><span className="text-lg">©</span>Holidaze 2024</p>
                        <div className="flex gap-4 text-2xl">
                            <i className="fa-brands fa-linkedin hover:scale-110 duration-200"/>
                            <i class="fa-brands fa-square-facebook hover:scale-110 duration-200"/>
                            <i class="fa-brands fa-square-instagram hover:scale-110 duration-200"/>
                            <i class="fa-brands fa-youtube hover:scale-110 duration-200"/>
                        </div>
                </div>
                
            </div>
        </footer>
        
        

    )
}