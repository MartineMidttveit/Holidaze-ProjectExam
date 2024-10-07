import React from 'react';
import DeleteIcon from '../components/SVG/DeleteIcon';
import RoundedXIcon from '../components/SVG/RoundedXIcon';
import BedIcon from '../components/SVG/BedIcon';
import ChevronDown from '../components/SVG/ChevronDown';
import ChevronRight from '../components/SVG/ChevronRight';
import ChevronLeft from '../components/SVG/ChevronLeft';
import EditIcon from '../components/SVG/EditIcon';
import GuestIcon from '../components/SVG/GuestIcon';
import HeartIcon from '../components/SVG/GuestIcon';
import LocationIcon from '../components/SVG/LocationIcon';
import ShareIcon from '../components/SVG/ShareIcon';
import RatingIcon from '../components/SVG/RatingIcon';
import CheckIcon from '../components/SVG/CheckIcon';
import ReportIcon from '../components/SVG/ReportIcon';

import GuestsAmount from '../components/dropdowns/GuestAmount';

export default function SpecificVenue() {
    return(
        <main className="bg-background text-primary font-poppins">
                <div className="relative px-[5%]">
                <img src="lofoten.png" alt="" className="w-full h-96 lg:h-screen-minus-10 object-cover rounded-3xl" />
                    
                    <button className="absolute top-[5%] right-[9%] 2xl:right-[10%] 2xl:top-[10%] bg-white text-sm xl:text-base h-12 2xl:h-14 px-4 xl:px-6 rounded items-center gap-3 flex">
                        <HeartIcon/>
                        Add to favorites
                    </button>

                    <div className="hidden absolute right-[10%] top-[10%] gap-3">
                        <button className="bg-white h-12 2xl:h-14 px-4 xl:px-6 rounded items-center gap-3 flex text-sm xl:text-base">
                            <DeleteIcon/>
                            Delete venue
                        </button>

                        <button className="bg-white h-12 2xl:h-14 px-4 xl:px-6 rounded items-center gap-3 flex text-sm xl:text-base">
                            <EditIcon/>
                            Edit venue
                        </button>
                    </div>
                    
                    <div className="absolute right-[10%] bottom-[10%] flex gap-3 xl:gap-6 2xl:gap-8 items-center">
                        <button className="rounded-full bg-white h-8 w-8 xl:h-10 xl:w-10 2xl:h-12 2xl:w-12 flex items-center justify-center">
                            <ChevronLeft/>
                        </button>
                            <img src="lofoten.png" alt="" className="h-20 2xl:h-56 aspect-square object-cover"/>
                            <img src="lofoten.png" alt="" className="h-20 2xl:h-56  aspect-square object-cover"/>
                            <img src="lofoten.png" alt="" className="h-20 2xl:h-56  aspect-square object-cover"/>
                        <button className="rounded-full bg-white h-8 w-8 xl:h-10 xl:w-10 2xl:h-12 2xl:w-12 flex items-center justify-center">
                            <ChevronRight/>
                        </button>
                    </div>
                </div>

        {/* <!--INFO VENUE--> */}

        <div className="px-[5%] xl:px-[10%] lg:w-3/4 xl:w-full mx-auto">
            <div className="py-[3%] xl:py-[2%] lg:pt-[4%]">
                <div className="flex font-medium text-sm gap-2 py-2 lg:py-0">
                    <div className="flex items-center justify-between gap-2 border border-secondary px-3 lg:px-6 py-2 rounded-full text-sm 2xl:text-base">
                        <GuestIcon/>
                        <p className="text-sm flex gap-1 items-center">4 <span className="hidden md:flex">guests</span></p>
                    </div>

                    <div className="flex items-center justify-between gap-2 border border-secondary px-3 lg:px-6 py-2 rounded-full text-sm 2xl:text-base">
                        <BedIcon/>
                        <p className="text-sm flex gap-1 items-center">2 <span className="hidden md:flex">bedrooms</span></p>
                    </div>

                    <div className="flex items-center justify-between gap-2 border border-secondary px-3 lg:px-6 py-2 rounded-full text-sm 2xl:text-base">
                        <RatingIcon/>
                        <p className="text-sm flex gap-1 items-center">4.5 <span className="hidden md:flex">rating</span></p>
                    </div>
                </div>
            </div>

        {/* <!--LEFT SIDE INFO--> */}
            <div className="flex flex-col xl:flex-row justify-between xl:gap-4 2xl:gap-20">
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
                    
                    <div className="flex justify-between border-b border-secondary pb-8 flex-col gap-5 md:flex-row md:items-end xl:border-b-0">
                        <div className="flex flex-col xl:border-b-0">
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

                        <div className="flex flex-col xl:hidden items-baseline border-t border-primary pt-6 md:border-t-0 md:pt-0">
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
                    

                    {/* <!--Share, report, last updated--> */}
                    <div className="flex-col gap-2 border-t border-secondary xl:pt-10 hidden xl:flex">
                        <div className="flex items-center gap-3">
                        <ShareIcon/>
                            <span className="font-medium">Share the venue</span>
                        </div>

                        <div className="flex items-center gap-3">
                        <ReportIcon/>
                            <span className="font-medium">Report the venue</span>
                        </div>

                        <p className="text-secondary pt-3">Last updated: <span>21.03.2025</span>, <span>17:04</span></p>
                    </div>
                </section>

        {/* RIGHT SIDE */}
                <div className="w-full xl:w-1/2 2xl:w-2/5">
                    <div className="flex justify-between items-center xl:mt-2 2xl:mt-0 border-b py-6 border-secondary xl:border-b-0 xl:py-0">
                        <div className="flex gap-3 md:gap-5 items-center">
                            <img src="germany.png" alt="" className="h-12 w-12 md:h-14 md:w-14 lg:h-16 lg:w-16 object-cover rounded-full"/>
                            <div className="flex flex-col">
                                <p className="font-semibold text-sm lg:text-base">Hosted by:</p>
                                <p className="text-sm lg:text-base">Stine Svendsen</p>
                            </div>
                        </div>
                        <button className="text-sm 2xl:text-base border rounded border-secondary px-3 lg:px-8 hover:bg-contrast hover:border-contrast hover:text-white duration-300 h-12 2xl:h-14 flex items-center gap-1">Message 
                            <span className="hidden md:flex">the host</span></button>
                    </div>

        {/* MAKE RESERVATION */}
                    <div className="bg-white mt-10 rounded-lg shadow-lg">
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

                                <button className="bg-contrast h-12 2xl:h-14 py-4 text-white font-medium rounded mt-6 lg:mt-8">BOOK NOW</button>
                            </div>
                        </div>
                    </div>  

                    <div className="py-6 lg:py-10">
                        <p className="text-center pb-1 text-secondary text-sm 2xl:text-base">Pressing the button will take you to the payment page.</p>
                        <p className="text-center text-secondary text-sm 2xl:text-base">For more information regarding booking, read our <span className="underline">terms and conditions.</span></p>
                    </div>
                </div>
            </div>
        </div>
        </main>
    )
}