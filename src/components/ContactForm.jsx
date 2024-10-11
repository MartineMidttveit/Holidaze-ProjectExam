export default function ContactForm() {
    return (
      <section className="bg-background w-full xl:w-1/2 flex justify-end px-[5%] lg:px-0 xl:pl-[5%] xl:pr-[7%] 2xl:pl-0 2xl:pr-[15%] py-12 md:py-16 lg:py-20 2xl:py-28">
        <div className="w-full md:w-3/4 lg:w-2/3 xl:w-full 2xl:ml-[15%] bg-white mx-auto rounded-lg">
          <h1 className="text-xl 2xl:text-2xl pt-10 px-8 md:px-10 lg:px-12 font-bold">Contact</h1>
  
          <form className="px-8 md:px-10 lg:px-12 pt-6 pb-12 space-y-3 lg:space-y-4 xl:space-y-6 bg-white rounded-lg shadow-md">
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
                type="number"
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
                className="mt-1 block w-full px-3 py-2 border border-secondary rounded text-sm md:text-base lg:text-base resize-none"
                required
              />
            </div>
  
            <div>
              <button type="submit" className="w-full h-12 px-4 py-2 bg-contrast text-white rounded font-medium text-sm xl:text-base">
                Send message
              </button>
            </div>
          </form>
        </div>
      </section>
    );
  }
  