export default function ShareVenue() {
    return(
        <div className='absolute inset-0 bg-black bg-opacity-40 items-center justify-center h-screen hidden'>
            <div className='bg-white rounded px-4 md:p-16 flex justify-center flex-col relative h-screen w-full md:h-fit md:w-fit'>
                <button className='absolute top-6 right-6 bg-background rounded-full h-12 w-12 flex items-center justify-center' type='button'>
                    <CloseIcon/>
                </button>

                <h2 className='md:text-lg lg:text-xl font-bold'>Share the venue with friends</h2>
                <p className='pt-4 lg:pt-5 text-sm md:text-base'>To whom or where do you want to share the venue?</p>

                <div className='flex gap-4 py-6'>
                    <div title="Facebook" className='bg-background h-20 w-20 rounded-full flex justify-center items-center hover:scale-110 duration-200'>
                        <i className="fa-brands fa-facebook text-3xl text-contrast"/>
                    </div>

                    <div title="Messenger" className='bg-background h-20 w-20 rounded-full flex justify-center items-center hover:scale-110 duration-200'>
                        <i className="fa-brands fa-facebook-messenger text-3xl messenger-linear"/>
                    </div>

                    <div title="Outlook" className='bg-background h-20 w-20 rounded-full flex justify-center items-center hover:scale-110 duration-200'>
                        <img src="outlook.png" alt="Outlook logo" className='h-8 w-8 object-cover' />
                    </div>

                    <div title="Snapchat" className='bg-background h-20 w-20 rounded-full flex justify-center items-center hover:scale-110 duration-200'>
                        <img src="snapchat.png" alt="Snapchat logo" className='h-9 w-9 object-cover' />
                    </div>
                </div>
                
                <div className='flex'>
                    <div className="h-12 border border-secondary w-full flex items-center px-4 rounded-left">
                        https://ui.shadcn.com/docs/components/separator
                    </div>
                    <button className='rounded-right h-12 border-contrast bg-contrast px-4 flex items-center justify-center text-white font-medium text-sm 2xl:text-base' type='button'>COPY</button>
                </div>
            </div>
        </div>
    )
}


