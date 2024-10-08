import React from 'react';
import DeleteIcon from '../components/SVG/DeleteIcon';
import RoundedXIcon from '../components/SVG/RoundedXIcon';
import BedIcon from '../components/SVG/BedIcon';
import ChevronRight from '../components/SVG/ChevronRight';
import ChevronLeft from '../components/SVG/ChevronLeft';
import EditIcon from '../components/SVG/EditIcon';
import GuestIcon from '../components/SVG/GuestIcon';
import HeartIcon from '../components/SVG/HeartIcon';
import LocationIcon from '../components/SVG/LocationIcon';
import ShareIcon from '../components/SVG/ShareIcon';
import RatingIcon from '../components/SVG/RatingIcon';
import CheckIcon from '../components/SVG/CheckIcon';
import ReportIcon from '../components/SVG/ReportIcon';
import CloseIcon from '../components/SVG/CloseIcon';
import DeleteIconBig from '../components/SVG/DeleteIconBig';

import GuestsAmount from '../components/dropdowns/GuestAmount';

export default function SpecificVenue() {
    return(
        <main className="bg-background text-primary font-poppins relative">
                <div className="relative bg-white flex items-center justify-center flex-col">
                    <div className='flex items-center'>
                        <button className="rounded-full bg-background h-8 w-8 xl:h-10 xl:w-10 2xl:h-12 2xl:w-12 flex items-center justify-center" type='button'>
                            <ChevronLeft/>
                        </button>

                        <img src="lofoten.png" alt="" className="h-96 lg:h-screen-minus-40 object-cover rounded-3xl m-10" />

                        <button className="rounded-full bg-background h-8 w-8 xl:h-10 xl:w-10 2xl:h-12 2xl:w-12 flex items-center justify-center" type='button'>
                            <ChevronRight/>
                        </button>
                    </div>

                    <button className="absolute top-[5%] right-[9%] 2xl:right-[10%] 2xl:top-[10%] bg-background text-sm xl:text-base h-12 2xl:h-14 px-4 xl:px-6 rounded items-center gap-3 flex" type='button'>
                        <HeartIcon/>
                        Add to favorites
                    </button>

                    <div className="hidden absolute right-[10%] top-[10%] gap-3">
                        <button className="bg-background h-12 2xl:h-14 px-4 xl:px-6 rounded items-center gap-3 flex text-sm xl:text-base" type='button'>
                            <DeleteIcon/>
                            Delete venue
                        </button>

                        <button className="bg-background h-12 2xl:h-14 px-4 xl:px-6 rounded items-center gap-3 flex text-sm xl:text-base" type='button'>
                            <EditIcon/>
                            Edit venue
                        </button>
                    </div>
                </div>

        {/* <!--INFO VENUE--> */}

        <div className="px-[5%] lg:px-[7%] 2xl:px-[10%] lg:w-3/4 xl:w-full mx-auto">
            <div className="py-[3%] xl:py-[2%] lg:pt-[4%]">
                <div className="flex font-medium text-sm gap-3 py-2 lg:py-0">
                    <div className="flex items-center justify-between gap-2 border border-secondary px-3 lg:px-6 py-2 rounded text-sm 2xl:text-base">
                        <GuestIcon/>
                        <p className="text-sm flex gap-1 items-center">4 <span className="hidden md:flex">guests</span></p>
                    </div>

                    <div className="flex items-center justify-between gap-2 border border-secondary px-3 lg:px-6 py-2 rounded text-sm 2xl:text-base">
                        <BedIcon/>
                        <p className="text-sm flex gap-1 items-center">2 <span className="hidden md:flex">bedrooms</span></p>
                    </div>

                    <div className="flex items-center justify-between gap-2 border border-secondary px-3 lg:px-6 py-2 rounded text-sm 2xl:text-base">
                        <RatingIcon/>
                        <p className="text-sm flex gap-1 items-center">4.5 <span className="hidden md:flex">rating</span></p>
                    </div>
                </div>
            </div>

        {/* <!--LEFT SIDE INFO--> */}
            <div className="flex flex-col xl:flex-row justify-between xl:gap-4 2xl:gap-10">
                <section className="w-full xl:w-1/2 2xl:w-2/5 xl:pr-20">
                    <h1 className="text-xl lg:text-2xl 2xl:text-3xl font-bold xl:mt-2 2xl:mt-0">Cabin by the fjord</h1>
                    <div className="flex gap-2 text-secondary pt-2 lg:pt-3 items-center">
                        <LocationIcon/>
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

                            <div className="flex flex-col gap-1 text-sm md:text-base">
                                <div className="flex items-center gap-3">
                                    <CheckIcon/>
                                    <span>Wi-fi available</span>
                                </div>

                                <div className="flex items-center gap-3">
                                    <CheckIcon/>
                                    <span>Pets allowed</span>
                                </div>

                                <div className="flex items-center gap-3">
                                    <RoundedXIcon/>
                                    <span>Parking available</span>
                                </div>

                                <div className="flex items-center gap-3">
                                    <RoundedXIcon/>
                                    <span>Breakfast included</span>
                                </div>
                            </div>
                        </div>

                        <div className="hidden xl:flex flex-col border-t border-b xl:border-b-0 border-primary py-6 2xl:pt-8 xl:w-full">
                            <div className="flex items-center gap-3 pb-1 md:pb-2">
                                <ShareIcon/>
                                <span className="font-medium text-sm">Share the venue</span>
                            </div>

                            <div className="flex items-center gap-3">
                                <ReportIcon/>
                                <span className="font-medium text-sm">Report the venue</span>
                            </div>

                            <p className="text-secondary pt-3 text-sm">Last updated: <span>21.03.2025</span>, <span>17:04</span></p>
                        </div>
                </section>

        {/* RIGHT SIDE */}
                <div className="w-full xl:w-1/2 2xl:w-2/5">
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
                    <div className="flex items-center gap-3 pb-1 md:pb-2">
                        <ShareIcon/>
                        <span className="font-medium text-sm">Share the venue</span>
                    </div>

                    <div className="flex items-center gap-3">
                        <ReportIcon/>
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
                    <CloseIcon/>
                </button>

                <div className='h-20 w-20 lg:h-24 lg:w-24 bg-customLightBlue flex items-center justify-center rounded-full mb-4 lg:mb-6'>
                    <DeleteIconBig/>
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

{/* SHARE VENUE */}
{/* SET IT TO FLEX WHEN CLICKING ON THE DELETE-BUTTON.  */}
        <div className='absolute inset-0 bg-black bg-opacity-40 items-center justify-center h-screen flex'>
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

        </main>
    )
}