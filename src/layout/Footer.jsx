import ArrowRight from "../components/SVG/ArrowRight"
import ArrowUp from "../components/SVG/ArrowUp"

import { Link } from "react-router-dom";

export default function Footer() {

    const handlePageTop = () => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth',
        });
      };

    return(
        <footer className="flex flex-col bg-background text-primary border-t border-secondary w-full font-poppins">
            <div className="flex flex-col xl:flex-row justify-between px-[5%] lg:px-[7%] 2xl:px-[10%] pt-10 pb-12">
                <Link to="/" className="font-bold text-xl">Holidaze</Link>

            <div className="grid gap-y-6 grid-cols-2 lg:flex justify-between w-full xl:w-4/5 2xl:w-2/3 pt-6 xl:pt-0">
                <div className="flex flex-col gap-2 xl:w-1/4">
                    <h4 className="font-medium">Support</h4>
                    <Link to="/contact" className="flex gap-2 items-center text-secondary group hover:text-primary duration-300">
                        Contact us
                        <ArrowRight/>
                    </Link>

                    <Link to="/contact" className="flex gap-2 items-center text-secondary group hover:text-primary duration-300">
                        FAQs
                        <ArrowRight/>
                    </Link>

                    <Link to="/contact" className="flex gap-2 items-center text-secondary group hover:text-primary duration-300">
                        Help center
                        <ArrowRight/>
                    </Link>
                </div>

                <div className="flex flex-col gap-2 xl:w-1/4">
                    <h4 className="font-medium">Company</h4>
                    <span className="flex gap-2 items-center text-secondary group hover:text-primary duration-300">
                        About us
                        <ArrowRight/>
                    </span>

                    <span className="flex gap-2 items-center text-secondary group hover:text-primary duration-300">
                        Careers
                        <ArrowRight/>
                    </span>

                    <span className="flex gap-2 items-center text-secondary group hover:text-primary duration-300">
                        Press & Media
                        <ArrowRight/>
                    </span>

                    <span className="flex gap-2 items-center text-secondary group hover:text-primary duration-300">
                        Blog
                        <ArrowRight/>
                    </span>
                </div>

                <div className="flex flex-col gap-2 xl:w-1/4">
                    <Link to="/terms" className="font-medium">Legal</Link>
                    <Link to="/terms" className="flex gap-2 items-center text-secondary group hover:text-primary duration-300">
                        Terms & Conditions
                        <ArrowRight/>
                    </Link>

                    <Link to="/terms" className="flex gap-2 items-center text-secondary group hover:text-primary duration-300">
                        Privacy policy
                        <ArrowRight/>
                    </Link>

                    <Link to="/terms" className="flex gap-2 items-center text-secondary group hover:text-primary duration-300">
                        Terms & Conditions
                        <ArrowRight />
                    </Link>
                </div>

                <div className="flex flex-col gap-2 xl:w-1/4">
                    <h4 className="font-medium">Explore</h4>
                    <span className="flex gap-2 items-center text-secondary group hover:text-primary duration-300">
                        Travel guides
                        <ArrowRight/>
                    </span>

                    <span className="flex gap-2 items-center text-secondary group hover:text-primary duration-300">
                        Popular venues
                        <ArrowRight/>
                    </span>

                    <span className="flex gap-2 items-center text-secondary group hover:text-primary duration-300">
                        Travel tips
                        <ArrowRight/>
                    </span>
                </div>
            </div>
                
            </div>

            <div className="border-t border-secondary py-6 text-secondary">
                <div className="px-[5%] lg:px-[7%] 2xl:px-[10%] flex justify-between items-center w-full">
                    <p className="font-medium flex items-center gap-1"><span className="text-lg">©</span>Holidaze 2024</p>

                        <p className="hidden xl:flex">Your perfect getaway, just a click away!</p>
                        <div className="flex items-center gap-4 text-2xl">
                            <i title="Linkedin" className="fa-brands fa-linkedin hover:scale-110 hover:text-primary duration-200"/>
                            <i title="Facebook" className="fa-brands fa-square-facebook hover:scale-110 hover:text-primary duration-200"/>
                            <i title="Instagram" className="fa-brands fa-square-instagram hover:scale-110 hover:text-primary duration-200"/>
                            <i title="Youtube" className="fa-brands fa-youtube hover:scale-110 hover:text-primary duration-200"/>

                            <button onClick={handlePageTop} type="button" className="ml-10 h-10 w-10 rounded bg-secondary flex items-center justify-center">
                                <ArrowUp/>
                            </button>
                        </div>
                </div>
                
            </div>
        </footer>
        
        

    )
}