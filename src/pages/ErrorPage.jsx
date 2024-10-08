export default function SpecificVenue() {
    return(
        <div className='relative hidden items-center'>
            <img src="404.jpg" alt="" className='h-screen w-full object-cover' />

            <div className='absolute text-white'>
                <h1 className='font-extrabold text-16xl'>404</h1>
                <p className='text-3xl'>Woops... Can't seem to find the right destination</p>
                <button className='bg-contrast h-12 2xl:h-14 py-4 text-white font-medium rounded mt-6 lg:mt-8 px-8' type='button'>GO BACK HOME</button>
            </div>
        </div>
    ) }

