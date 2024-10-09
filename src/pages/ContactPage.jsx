import icons from "../utils/icons"
import FAQ from "../components/FAQ"

export default function ContactPage() {
    return(
        <div className="flex flex-col">
            <div className="flex items-center flex-col xl:flex-row">
            <section className="md:w-3/4 lg:w-2/3 xl:w-1/2 px-[5%] lg:px-0 xl:pr-[5%] xl:pl-[7%] 2xl:pr-[10%] 2xl:pl-[15%] pt-16 pb-8 lg:py-16 xl:py-0">
                <h2 className="text-contrast font-bold tracking-wider text-sm md:text-base">CONTACT US</h2>
                <h1 className="text-3xl md:text-4xl xl:text-5xl 2xl:text-6xl font-bold pt-2 lg:pt-4">Get in touch</h1>

                <div className="py-6 lg:py-8">
                    <p className="leading-relaxed text-sm md:text-base">We'd love to hear from you! Whether you have questions, feedback, or just want to say hello, feel free to reach out to us.</p>
                    <p className="pt-4 leading-relaxed text-sm md:text-base">Here are some ways to contact us:</p>
                </div>

                <div className="flex flex-col gap-5">
                    <div className="flex items-center gap-6 bg-background p-5 rounded-lg">
                        <span className="h-14 w-14 md:h-16 md:w-16 flex items-center justify-center bg-customLightBlue rounded-xl">
                            <icons.mailIcon/>
                        </span>
                        <div className="flex flex-col">
                            <p className="text-secondary text-sm md:text-base font-medium md:font-normal">Email:</p>
                            <p className="font-medium">support@holidaze.com</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-6 bg-background p-5 rounded-lg">
                        <span className="h-14 w-14 md:h-16 md:w-16 flex items-center justify-center bg-customLightBlue rounded-xl">
                            <icons.phoneIcon/>
                        </span>
                        <div className="flex flex-col">
                            <p className="text-secondary text-sm md:text-base font-medium md:font-normal">Phone:</p>
                            <p className="font-medium">+47 55 22 11 00</p>
                        </div>
                    </div>
                </div>

                <div className="flex pb-4 pt-6 md:py-6 lg:py-8 md:items-center justify-between w-full flex-col md:flex-row">
                    <p className="font-medium text-secondary pb-4 md:pb-0 text-sm md:text-base">Or check us out on social media:</p>
                    <div className="flex items-center gap-3">
                        <span className="bg-background h-12 w-12 flex items-center justify-center rounded-lg hover:scale-110 duration-200">
                            <i title="Linkedin" className="fa-brands fa-linkedin text-2xl"/>
                        </span>

                        <span className="bg-background h-12 w-12 flex items-center justify-center rounded-lg hover:scale-110 duration-200">
                            <i title="Facebook" className="fa-brands fa-square-facebook text-2xl"/>
                        </span>

                        <span className="bg-background h-12 w-12 flex items-center justify-center rounded-lg hover:scale-110 duration-200">
                            <i title="Instagram" className="fa-brands fa-square-instagram text-2xl"/>
                        </span>
                            
                        <span className="bg-background h-12 w-12 flex items-center justify-center rounded-lg hover:scale-110 duration-200">
                            <i title="Youtube" className="fa-brands fa-youtube text-2xl"/>
                        </span>    
                    </div>
                </div>
            </section>

            <section className="bg-background w-full xl:w-1/2 flex justify-end px-[5%] lg:px-[0%] xl:pl-[5%] xl:pr-[7%] 2xl:pr-[15%] 2xl:pl-0 py-12 md:py-16 lg:py-20 2xl:py-36">
                <div className="2xl:ml-[15%] w-full md:w-3/4 lg:w-2/3 bg-white mx-auto xl:w-full rounded-lg">
                    <h1 className="text-xl 2xl:text-2xl pt-10 px-12 font-bold">Contact</h1>

                    <form className="px-12 pb-12 pt-6 space-y-3 lg:space-y-4 xl:space-y-6 bg-white rounded-lg shadow-md">
                        <div>
                            <label htmlFor="name" className="text-sm font-medium text-secondary">
                            Name
                            </label>
                            <input
                            type="text"
                            id="name"
                            name="name"
                            className="mt-1 w-full px-3 py-2 border border-secondary rounded text-sm md:text-base h-12"
                            required
                            />
                        </div>

                        <div>
                            <label htmlFor="email" className="text-sm font-medium text-secondary">
                            Email
                            </label>
                            <input
                            type="email"
                            id="email"
                            name="email"
                            className="mt-1 w-full px-3 py-2 border border-secondary rounded text-sm md:text-base h-12"
                            required
                            />
                        </div>

                        <div>
                            <label htmlFor="phone" className="text-sm font-medium text-secondary">
                            Phone number
                            </label>
                            <input
                            type="tel"
                            id="phone"
                            name="phone"
                            className="mt-1 w-full px-3 py-2 border border-secondary rounded text-sm md:text-base h-12"
                            required
                            />
                        </div>

                        <div>
                            <label htmlFor="message" className="text-sm font-medium text-secondary">
                            Message
                            </label>
                            <textarea
                            id="message"
                            name="message"
                            rows="6"
                            className="mt-1 block w-full px-3 py-2 border border-secondary rounded text-sm lg:text-base resize-none"
                            required
                            />
                        </div>

                        <div>
                            <button type="submit" className="px-4 py-2 bg-contrast text-white rounded w-full h-12 font-medium text-sm xl:text-base">
                            Send message
                            </button>
                        </div>
                        </form>
                </div>
            </section>
        </div>

        <FAQ/>
        </div>

        
    ) } 