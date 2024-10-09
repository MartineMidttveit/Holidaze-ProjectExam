import icons from '../utils/icons';

import GuestsAmount from '../components/dropdowns/GuestAmount';

export default function SpecificVenue() {
    return(
        <main className="bg-background text-primary font-poppins relative pb-12">
                <div className="relative flex items-center justify-center flex-col px-[5%] lg:px-[7%] 2xl:px-[15%]">
                    <div className='flex items-center w-full relative'>

                        <button type="button" className="absolute right-10 top-10 flex items-center justify-between gap-2 bg-background px-3 lg:px-6 py-2 rounded text-sm 2xl:text-base">
                            <icons.galleryIcon/>
                            Gallery
                        </button>

                        <button className="absolute left-10 rounded-full backdrop-blur bg-background bg-opacity-75 hover:bg-opacity-100 duration-300 h-8 w-8 xl:h-10 xl:w-10 2xl:h-12 2xl:w-12 flex items-center justify-center" type='button'>
                            <icons.chevronLeft/>
                        </button>

                        <img src="lofoten.png" alt="" className="h-96 lg:h-screen-minus-25 object-cover rounded-btm w-full" />

                        <button className="absolute right-10 rounded-full backdrop-blur bg-background bg-opacity-75 hover:bg-opacity-100 duration-300 h-8 w-8 xl:h-10 xl:w-10 2xl:h-12 2xl:w-12 flex items-center justify-center" type='button'>
                            <icons.chevronRight/>
                        </button>
                    </div>
                </div>

        {/* <!--INFO VENUE--> */}

        <div className="px-[5%] lg:px-[7%] 2xl:px-[15%] lg:w-3/4 xl:w-full mx-auto">
            <div className="py-[3%] xl:py-[2%] lg:pt-[4%]">
                <div className="flex font-medium text-sm gap-3 py-2 lg:py-0">
                    <div className="flex items-center justify-between gap-2 border border-secondary px-3 lg:px-6 py-2 rounded text-sm 2xl:text-base">
                        <icons.guestIcon/>
                        <p className="text-sm flex gap-1 items-center">4 <span className="hidden md:flex">guests</span></p>
                    </div>

                    <div className="flex items-center justify-between gap-2 border border-secondary px-3 lg:px-6 py-2 rounded text-sm 2xl:text-base">
                        <icons.ratingIcon/>
                        <p className="text-sm flex gap-1 items-center">4.5 <span className="hidden md:flex">rating</span></p>
                    </div>

                    <button className="flex items-center justify-between gap-2 border border-secondary px-3 lg:px-6 py-2 rounded text-sm 2xl:text-base" type='button'>
                        <icons.heartIcon/>
                        <p className="text-sm flex gap-1 items-center">Add to favorites</p>
                    </button>

{/* SET TO FLEX IF THE USER OWNS THE VENUE, WHILE ADD TO FAVORITES WILL BE HIDDEN */}
                    <div className="hidden gap-3">
                        <button className="flex items-center justify-between gap-2 border border-secondary px-3 lg:px-6 py-2 rounded text-sm 2xl:text-base" type='button'>
                            <icons.deleteIcon/>
                            <span className='text-sm flex gap-1 items-center'>Delete venue</span>
                        </button>

                        <button className="flex items-center justify-between gap-2 border border-secondary px-3 lg:px-6 py-2 rounded text-sm 2xl:text-base" type='button'>
                            <icons.editIcon/>
                            <span className='text-sm flex gap-1 items-center'>Edit venue</span>
                        </button>
                    </div>
                </div>
            </div>

        {/* <!--LEFT SIDE INFO--> */}
            <div className="flex flex-col xl:flex-row justify-between xl:gap-[7%] 2xl:gap-[10%]">
                <section className="w-full xl:w-1/2 2xl:max-w-2xl">
                    <h1 className="text-xl lg:text-2xl 2xl:text-3xl font-bold xl:mt-2 2xl:mt-0">Cabin by the fjord</h1>
                    <div className="flex gap-2 text-secondary pt-2 lg:pt-3 items-center">
                        <icons.locationIcon/>
                        <p className="text-sm md:text-base">Traneveien 13, 8513 Reine, Lofoten, Norway </p>
                    </div>

                    <img src="map.png" alt="" className="object-cover mt-6 2xl:mt-8 w-full h-28 max-h-40 rounded-md"/>

                    <div className="flex flex-col gap-y-3 my-6 2xl:my-8">
                        <p className="text-sm md:text-base leading-relaxed">Discover the beauty of Reine, Lofoten, from our cozy cabin, perfectly located between
                            majestic mountains and serene fjords. The cabin features two bedrooms, a fully equipped kitchen,
                            and a spacious living area with stunning views. Enjoy outdoor adventures like hiking and fishing,
                            or relax on the terrace.
                        </p>
                        <p className="text-sm md:text-base leading-relaxed">
                            Just a short distance from Reine's center, you'll have easy access to local restaurants, shops,
                            and attractions. Perfect for families, couples, or small groups, this cabin is your ideal base
                            for exploring the wonders of Lofoten. Book your stay and experience Norway's northern paradise!
                        </p>
                    </div>

                    {/* <!--Facilities--> */}

                        <div className="flex flex-col pb-6 2xl:pb-8">
                            <h2 className="font-bold md:text-lg 2xl:text-xl pb-4">Facilities:</h2>

                            <div className="flex flex-col gap-1 xl:gap-2 text-sm md:text-base">
                                <div className="flex items-center gap-3">
                                    <icons.checkIcon/>
                                    <span>Wi-fi available</span>
                                </div>

                                <div className="flex items-center gap-3">
                                <icons.checkIcon/>
                                    <span>Pets allowed</span>
                                </div>

                                <div className="flex items-center gap-3">
                                    <icons.roundedXIcon/>
                                    <span>Parking available</span>
                                </div>

                                <div className="flex items-center gap-3">
                                    <icons.roundedXIcon/>
                                    <span>Breakfast included</span>
                                </div>
                            </div>
                        </div>

                        <div className="hidden xl:flex flex-col border-t border-b xl:border-b-0 border-primary py-6 2xl:pt-8 xl:w-full">
                            <div className="flex items-center gap-3 pb-1 md:pb-2">
                                <icons.shareIcon/>
                                <span className="font-medium text-sm lg:text-base">Share the venue</span>
                            </div>

                            <div className="flex items-center gap-3">
                                <icons.reportIcon/>
                                <span className="font-medium text-sm lg:text-base">Report the venue</span>
                            </div>

                            <p className="text-secondary pt-3 text-sm lg:text-base">Last updated: <span>21.03.2025</span>, <span>17:04</span></p>
                        </div>
                </section>

        {/* RIGHT SIDE */}
                <div className="w-full xl:w-1/2 2xl:max-w-3xl">
                    <div className="flex justify-between items-center xl:mt-2 2xl:mt-0 border-b border-t xl:border-t-0 py-6 border-secondary xl:border-b-0 xl:py-0">
                        <div className="flex gap-3 md:gap-5 items-center">
                            <img src="germany.png" alt="" className="h-12 w-12 md:h-14 md:w-14 lg:h-16 lg:w-16 object-cover rounded-full"/>
                            <div className="flex flex-col">
                                <p className="font-semibold text-sm lg:text-base">Hosted by:</p>
                                <p className="text-sm lg:text-base">Stine Svendsen</p>
                            </div>
                        </div>
                        <button className="text-sm 2xl:text-base border rounded border-secondary px-3 lg:px-8 hover:bg-contrast hover:border-contrast hover:text-white duration-300 h-12 2xl:h-14 flex items-center gap-1" type='button'>Message
                            <span className="hidden md:flex">the host</span></button>
                    </div>

        {/* MAKE RESERVATION */}
                    <div className="bg-white mt-8 xl:mt-10 rounded-lg shadow-lg">
                        <div className="py-8 px-6 md:p-10 lg:p-12">

                            <div className="font-bold 2xl:text-xl pb-4 2xl:pb-6">
                                <h2 className="md:text-lg pb-3">Make a reservation:</h2>
                                <p className="text-sm md:text-base lg:text-lg pt-1 lg:pt-2">1249 NOK <span className="text-secondary font-normal">/ night</span></p>
                            </div>

                            <form action="" className="flex flex-col md:flex-row w-full gap-4">
                                <div className="flex flex-col w-full">
                                    <label for="checkIn" className="pb-2 lg:pb-3 font-medium md:font-normal text-sm md:text-base">Check in:</label>
                                    <input type="date" id="checkIn" name="checkIn" className="border border-secondary rounded py-3 px-4 h-12 xl:h-14 text-sm md:text-base"/>
                                </div>

                                <div className="flex flex-col w-full">
                                    <label for="checkOut" className="pb-2 lg:pb-3 font-medium md:font-normal text-sm md:text-base">Check out:</label>
                                    <input type="date" id="checkOut" name="checkOut" className="border border-secondary rounded py-3 px-4 h-12 xl:h-14 text-sm md:text-base"/>
                                </div>
                            </form>

                            <GuestsAmount/>

                            {/* <!--Prices-->  */}
                            <div className="flex flex-col text-sm md:text-base">
                                <div className="flex flex-col border-b border-secondary pt-6 lg:pt-10 pb-4 lg:pb-6 text-secondary">
                                    <div className="flex justify-between">
                                        <p className="flex gap-4 pb-2">1249 NOK <span>x</span> <span>4 nights</span></p>
                                        <p>4996 NOK</p>
                                    </div>
                                    <div className="flex justify-between">
                                        <p className="flex gap-4">Service fee</p>
                                        <p>179 NOK</p>
                                    </div>
                                </div>

                                <div className="flex justify-between pt-4 lg:pt-6 font-medium">
                                    <p>Total:</p>
                                    <p>5175 NOK</p>
                                </div>

                                <button className="bg-contrast h-12 2xl:h-14 py-4 text-white font-medium rounded mt-6 lg:mt-8 hover:shadow-md" type='submit'>BOOK NOW</button>
                            </div>
                        </div>
                    </div>

                    <div className="pt-6 pb-10 lg:py-10">
                        <p className="text-center pb-1 text-secondary text-sm 2xl:text-base">Pressing the button will take you to the payment page.</p>
                        <p className="text-center text-secondary text-sm 2xl:text-base">For more information regarding booking, read our <span className="underline">terms and conditions.</span></p>
                    </div>
                </div>

                <div className="xl:hidden flex flex-col border-t border-primary pt-6 pb-8">
                    <button className="flex items-center gap-3 pb-1 md:pb-2" type='button'>
                        <icons.shareIcon/>
                        <span className="font-medium text-sm">Share the venue</span>
                    </button>

                    <div className="flex items-center gap-3">
                        <icons.reportIcon/>
                        <span className="font-medium text-sm">Report the venue</span>
                    </div>

                    <p className="text-secondary pt-3 text-sm">Last updated: <span>21.03.2025</span>, <span>17:04</span></p>
                </div>
            </div>
        </div>

{/* DELETE VENUE */}
{/* SET IT TO FLEX WHEN CLICKING ON THE DELETE-BUTTON.  */}
        <div className='absolute inset-0 bg-black bg-opacity-40 items-center justify-center h-screen text-center hidden'>
            <div className='bg-white rounded px-4 md:p-16 flex items-center justify-center flex-col relative h-screen w-full md:h-fit md:w-fit'>
                <button className='absolute top-6 right-6 bg-background rounded-full h-12 w-12 flex items-center justify-center' type='button'>
                    <icons.closeIcon/>
                </button>

                <div className='h-20 w-20 lg:h-24 lg:w-24 bg-customLightBlue flex items-center justify-center rounded-full mb-4 lg:mb-6'>
                    <icons.deleteIcon/>
                </div>

                <h2 className='md:text-lg lg:text-xl font-bold'>You are about to delete your venue</h2>
                <p className='pt-4 lg:pt-5 text-sm md:text-base'>This is a destructive action, and it's not possible to undo it.</p>
                <p className='pb-4 lg:pb-6 text-sm md:text-base'>Are you sure that you want to proceed?</p>

                <div className='flex gap-3 items-center'>
                    <button className='border border-primary h-12 2xl:h-14 py-4 font-medium rounded px-4 md:px-6 2xl:px-8 flex items-center text-sm md:text-base hover:bg-customLightBlue hover:border-customLightBlue duration-300' type='button'>Cancel</button>
                    <button className='bg-contrast h-12 2xl:h-14 py-4 text-white font-medium rounded px-4 md:px-6 2xl:px-8 flex items-center text-sm md:text-base' type='button'>Delete</button>
                </div>
            </div>
        </div>        

        </main>
    )
}