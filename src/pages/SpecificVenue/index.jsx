import { Info } from ".Info.jsx"

export function SpecificVenue() {
    return (
        <div>
            <div></div>
            <Info />
        </div>
    )
}


// <!doctype html>
// <html lang="en">
//   <head>
//     <meta charset="UTF-8">
//     <link rel="icon" type="image/svg+xml" href="/vite.svg">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">

//     <link rel="preconnect" href="https://fonts.googleapis.com">
//     <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
//     <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,300;1,700;1,900&display=swap" rel="stylesheet">

//     <script src="https://kit.fontawesome.com/b515e79b0f.js" crossorigin="anonymous"></script>

//     <link rel="stylesheet" href="/src/assets/styles.css">
//     <title>Holidaze</title>
//   </head>
//   <body class="bg-background text-primary">

// <!--HEADER-->
//     <header class="h-20 bg-white w-full flex items-center">
//         <div class="px-[5%] xl:px-[10%]">
//             <p>LOGO</p> 
//         </div>
//     </header>

// <!--HERO IMAGE-->
//     <main class="bg-background text-primary">
//         <div class="relative px-[5%]">
//             <img src="lofoten.png" alt="" class="w-full h-96 lg:h-screen-minus-10 object-cover rounded-3xl">
            
//             <button class="absolute top-[5%] right-[9%] 2xl:right-[10%] 2xl:top-[10%] bg-white text-sm xl:text-base h-12 2xl:h-14 px-4 xl:px-6 rounded items-center gap-3 flex">
//                 <i class="fa-regular fa-heart text-base xl:text-xl"></i>
//                 Add to favorites
//             </button><!--This button is only visible if its someone elses venue.
//             If its my own venue, show these buttons instead:-->

//             <div class="hidden absolute right-[10%] top-[10%] gap-3">
//                 <button class="bg-white h-12 2xl:h-14 px-4 xl:px-6 rounded items-center gap-3 flex text-sm xl:text-base">
//                     <i class="fa-regular fa-trash-can text-base xl:text-xl"></i>
//                     Delete venue
//                 </button>

//                 <button class="bg-white h-12 2xl:h-14 px-4 xl:px-6 rounded items-center gap-3 flex text-sm xl:text-base">
//                     <i class="fa-regular fa-pen-to-square text-base xl:text-xl"></i>
//                     Edit venue
//                 </button>
//             </div>
            
//             <div class="absolute right-[10%] bottom-[10%] flex gap-3 xl:gap-6 2xl:gap-8 items-center">
//                 <button class="rounded-full bg-white h-8 w-8 xl:h-10 xl:w-10 2xl:h-12 2xl:w-12">
//                     <i class="fa-solid fa-chevron-left text-sm lg:text-base"></i>
//                 </button>
//                     <img src="lofoten.png" alt="" class="h-20 2xl:h-56 aspect-square object-cover">
//                     <img src="lofoten.png" alt="" class="h-20 2xl:h-56  aspect-square object-cover">
//                     <img src="lofoten.png" alt="" class="h-20 2xl:h-56  aspect-square object-cover">
//                 <button class="rounded-full bg-white h-8 w-8 xl:h-10 xl:w-10 2xl:h-12 2xl:w-12">
//                     <i class="fa-solid fa-chevron-right text-sm lg:text-base"></i>
//                 </button>
//             </div>
//         </div>

// <!--INFO VENUE-->

// <div class="px-[5%] xl:px-[10%] lg:w-3/4 xl:w-full mx-auto">
//     <div class="py-[3%] xl:py-[2%] lg:pt-[4%]">
//         <div class="flex font-medium text-sm gap-2 py-2 lg:py-0">
//             <div class="flex items-center justify-between gap-2 border border-secondary px-3 lg:px-6 py-2 rounded-full text-sm 2xl:text-base">
//                 <i class="fa-regular fa-user"></i>
//                 <p class="text-sm flex gap-1 items-center">4 <span class="hidden md:flex">guests</span></p>
//             </div>

//             <div class="flex items-center justify-between gap-2 border border-secondary px-3 lg:px-6 py-2 rounded-full text-sm 2xl:text-base">
//                 <i class="fa-solid fa-bed"></i>
//                 <p class="text-sm flex gap-1 items-center">2 <span class="hidden md:flex">bedrooms</span></p>
//             </div>

//             <div class="flex items-center justify-between gap-2 border border-secondary px-3 lg:px-6 py-2 rounded-full text-sm 2xl:text-base">
//                 <i class="fa-regular fa-star"></i>
//                 <p class="text-sm flex gap-1 items-center">4.5 <span class="hidden md:flex">rating</span></p>
//             </div>
//         </div>
//     </div>

// <!--LEFT SIDE INFO-->
//     <div class="flex flex-col xl:flex-row justify-between xl:gap-4 2xl:gap-20">
//         <section class="w-full xl:w-1/2 2xl:w-2/5 xl:pr-20">
//             <h1 class="text-xl lg:text-2xl 2xl:text-3xl font-bold xl:mt-2 2xl:mt-0">Cabin by the fjord</h1>
//             <div class="flex gap-2 text-secondary pt-2 lg:pt-3 items-center">
//                 <i class="fa-solid fa-location-dot"></i>
//                 <p class="text-sm md:text-base">Traneveien 13, 8513 Reine, Lofoten, Norway </p><!--Make spans for the different locations-->
//             </div>

//             <img src="map.png" alt="" class="object-cover mt-6 2xl:mt-8 w-full h-28 max-h-40 rounded-md"><!--Insert a real map?-->

//             <div class="flex flex-col gap-y-3 my-6 2xl:my-8">
//                 <p class="text-sm md:text-base leading-relaxed">Discover the beauty of Reine, Lofoten, from our cozy cabin, perfectly located between 
//                     majestic mountains and serene fjords. The cabin features two bedrooms, a fully equipped kitchen, 
//                     and a spacious living area with stunning views. Enjoy outdoor adventures like hiking and fishing, 
//                     or relax on the terrace.
//                 </p>
//                 <p class="text-sm md:text-base leading-relaxed">
//                     Just a short distance from Reine's center, you'll have easy access to local restaurants, shops, 
//                     and attractions. Perfect for families, couples, or small groups, this cabin is your ideal base 
//                     for exploring the wonders of Lofoten. Book your stay and experience Norway's northern paradise!
//                 </p>
//             </div>

//             <!--Facilities-->
            
//             <div class="flex justify-between border-b border-secondary pb-8 flex-col gap-5 md:flex-row md:items-end xl:border-b-0">
//                 <div class="flex flex-col xl:border-b-0">
//                     <h2 class="font-bold md:text-lg 2xl:text-xl pb-4">Facilities:</h2>

//                     <div class="flex flex-col gap-1">
//                         <div class="flex items-center gap-3">
//                             <i class="fa-regular fa-circle-check text-green-600 lg:text-xl"></i><!--Change the icon to SVG's-->
//                             <span class="text-sm">Wi-fi available</span>
//                         </div>

//                         <div class="flex items-center gap-3">
//                             <i class="fa-regular fa-circle-check text-green-600 lg:text-xl"></i><!--Change the icon to SVG's-->
//                             <span class="text-sm">Pets allowed</span>
//                         </div>

//                         <div class="flex items-center gap-3">
//                             <i class="fa-regular fa-circle-xmark text-red-600 lg:text-xl"></i><!--Change the icon to SVG's-->
//                             <span class="text-sm">Parking available</span>
//                         </div>

//                         <div class="flex items-center gap-3">
//                             <i class="fa-regular fa-circle-xmark text-red-600 lg:text-xl"></i><!--Change the icon to SVG's-->
//                             <span class="text-sm">Breakfast included</span>
//                         </div>
//                     </div>
//                 </div>

//                 <div class="flex flex-col xl:hidden items-baseline border-t border-primary pt-6 md:border-t-0 md:pt-0">
//                     <div class="flex items-center gap-3 pb-1 md:pb-2">
//                         <i class="fa-regular fa-share-from-square"></i><!--Change the icon to SVG's-->
//                         <span class="font-medium text-sm">Share the venue</span>
//                     </div>

//                     <div class="flex items-center gap-3">
//                         <i class="fa-regular fa-flag"></i><!--Change the icon to SVG's-->
//                         <span class="font-medium text-sm">Report the venue</span>
//                     </div>

//                     <p class="text-secondary pt-3 text-sm">Last updated: <span>21.03.2025</span>, <span>17:04</span></p>
//                 </div>
//             </div>
            

//             <!--Share, report, last updated-->
//             <div class="flex-col gap-2 border-t border-secondary xl:pt-10 hidden xl:flex">
//                 <div class="flex items-center gap-3">
//                     <i class="fa-regular fa-share-from-square text-xl"></i><!--Change the icon to SVG's-->
//                     <span class="font-medium">Share the venue</span>
//                 </div>

//                 <div class="flex items-center gap-3">
//                     <i class="fa-regular fa-flag text-xl"></i><!--Change the icon to SVG's-->
//                     <span class="font-medium">Report the venue</span>
//                 </div>

//                 <p class="text-secondary pt-3">Last updated: <span>21.03.2025</span>, <span>17:04</span></p>
//             </div>
//         </section>

// <!--RIGHT SIDE-->
//         <div class="w-full xl:w-1/2 2xl:w-2/5">
//             <div class="flex justify-between items-center xl:mt-2 2xl:mt-0 border-b py-6 border-secondary xl:border-b-0 xl:py-0">
//                 <div class="flex gap-3 md:gap-5 items-center">
//                     <img src="germany.png" alt="" class="h-12 w-12 md:h-14 md:w-14 lg:h-16 lg:w-16 object-cover rounded-full">
//                     <div class="flex flex-col">
//                         <p class="font-semibold text-sm lg:text-base">Hosted by:</p>
//                         <p class="text-sm lg:text-base">Stine Svendsen</p>
//                     </div>
//                 </div>
//                 <button class="text-sm 2xl:text-base border rounded border-secondary px-3 lg:px-8 hover:bg-contrast hover:border-contrast hover:text-white duration-300 h-12 2xl:h-14 flex items-center gap-1">Message 
//                     <span class="hidden md:flex">the host</span></button>
//             </div>

// <!--MAKE RESERVATION-->
//             <div class="bg-white mt-10 rounded-lg shadow-lg">
//                 <div class="py-8 px-6 md:p-10 lg:p-12">

//                     <div class="font-bold 2xl:text-xl pb-4 2xl:pb-6">
//                         <h2 class="md:text-lg pb-3">Make a reservation:</h2>
//                         <p class="text-sm md:text-base lg:text-lg pt-1 lg:pt-2">1249 NOK <span class="text-secondary font-normal">/ night</span></p>
//                     </div>
                    
//                     <form action="" class="flex flex-col md:flex-row w-full gap-4">
//                         <div class="flex flex-col w-full">
//                             <label for="checkIn" class="pb-2 lg:pb-3 font-medium md:font-normal text-sm md:text-base">Check in:</label>
//                             <input type="date" id="checkIn" name="checkIn" class="border border-secondary rounded py-3 px-4 h-12 xl:h-14 text-sm md:text-base">
//                         </div>

//                         <div class="flex flex-col w-full">
//                             <label for="checkOut" class="pb-2 lg:pb-3 font-medium md:font-normal text-sm md:text-base">Check out:</label>
//                             <input type="date" id="checkOut" name="checkOut" class="border border-secondary rounded py-3 px-4 h-12 xl:h-14 text-sm md:text-base">
//                         </div>                            
//                     </form>

//                     <!--Guests--> 
//                     <div class="pt-3 lg:pt-5">       
//                         <p class="pb-2 lg:pb-3 font-medium md:font-normal text-sm md:text-base">Guests:</p>
//                         <div class="border border-secondary rounded bg-white py-3 h-12 xl:h-14 max-h-14 flex items-center justify-between px-4">
//                             <p class="font-medium text-sm md:text-base">3 guests <span class="font-normal text-secondary">(2 adults, 1 child)</span></p>
//                             <i class="fa-solid fa-chevron-down"></i>
//                         </div>

//                     <!--DROPDOWN FOR SELECTING AMOUNT OF GUESTS--> 
//                     <!--CURRENTLY SET TO HIDDEN!-->  
//                     <!--When clicking outside of this container, it disappears-->   
//                         <div class="bg-white flex-col border border-secondary px-10 py-7 border-t-0 hidden">

//                             <!--Adults-->
//                             <div class="flex items-center justify-between py-2">
//                                 <p>Adults</p>
//                                 <div class="flex items-center gap-4">
//                                     <button class="h-8 w-8 bg-background rounded-full flex items-center justify-center">-</button>
//                                     <span>0</span>
//                                     <button class="h-8 w-8 bg-background rounded-full flex items-center justify-center">+</button>
//                                 </div>
//                             </div>

//                             <!--Children-->
//                             <div class="flex items-center justify-between py-2">
//                                 <p>Children</p>
//                                 <div class="flex items-center gap-4">
//                                     <button class="h-8 w-8 bg-background rounded-full flex items-center justify-center">-</button>
//                                     <span>0</span>
//                                     <button class="h-8 w-8 bg-background rounded-full flex items-center justify-center">+</button>
//                                 </div>
//                             </div>

//                             <!--Pets-->
//                             <div class="flex items-center justify-between py-2">
//                                 <p>Pets</p>
//                                 <div class="flex items-center gap-4">
//                                     <button class="h-8 w-8 bg-background rounded-full flex items-center justify-center">-</button>
//                                     <span>0</span>
//                                     <button class="h-8 w-8 bg-background rounded-full flex items-center justify-center">+</button>
//                                 </div>
//                             </div>

//                             <button class="bg-contrast py-2 rounded mt-4 duration-300 h-12 text-white">Apply</button>
//                         </div>
//                     </div>

//                     <!--Prices--> 
//                     <div class="flex flex-col text-sm md:text-base">
//                         <div class="flex flex-col border-b border-secondary pt-6 lg:pt-10 pb-4 lg:pb-6 text-secondary">
//                             <div class="flex justify-between">
//                                 <p class="flex gap-4">1249 NOK <span>x</span> <span>4 nights</span></p>
//                                 <p>4996 NOK</p>
//                             </div>
//                             <div class="flex justify-between">
//                                 <p class="flex gap-4">Service fee</p>
//                                 <p>179 NOK</p>
//                             </div>
//                         </div>

//                         <div class="flex justify-between pt-4 lg:pt-6 font-medium">
//                             <p>Total:</p>
//                             <p>5175 NOK</p>
//                         </div>

//                         <button class="bg-contrast h-12 2xl:h-14 py-4 text-white font-medium rounded mt-6 lg:mt-8">BOOK NOW</button>
//                     </div>
//                 </div>
//             </div>  

//             <div class="py-6 lg:py-10">
//                 <p class="text-center pb-1 text-secondary text-sm 2xl:text-base">Pressing the button will take you to the payment page.</p>
//                 <p class="text-center text-secondary text-sm 2xl:text-base">For more information regarding booking, read our <span class="underline">terms and conditions.</span></p>
//             </div>
//         </div>
//     </div>
// </div>
// </main>
        


//     <!--HEADER-->
//     <!-- <div class="relative h-screen w-full overflow-hidden">
//         <header class="flex justify-between items-center fixed top-0 w-full z-50 p-6">
//             <span>
//                 <a href="/index.html" class="font-semibold text-xl text-background">Holidaze</a>
//             </span>
//             <div class="flex items-center">
//                 <button class="">
//                     <img src="profile.png" alt="" class="px-3">
//                 </button>
//                 <button class="">
//                     <img src="favorites.png" alt="" class="px-3">
//                 </button>
//                 <button class="xl:hidden">
//                     <img src="hamburger.png" alt="" class="pl-3">
//                 </button>
//             </div>
//             <div class="hidden xl:flex justify-between w-1/3">
//                 <a href="/pages/newListing/index.html" class="w-1/3 text-center py-4 text-background hover:font-medium duration-100">New listing</a>
//                 <a href="/pages/auctions/index.html" class="w-1/3 text-center py-4 text-background hover:font-medium duration-100">Auctions</a>
//                 <p class="w-1/3 text-center py-4 text-background hover:font-medium duration-100">About</p>
//             </div>
//         </header>
//         <div class="fixed top-60 w-full z-30 header-wrapper">
//             <p class="font-bold text-4xl text-background pb-1.5">Discover</p>
//             <p class="font-bold text-4xl text-background">New York City</p>
//             <p class="text-2xl text-background pt-3 pb-6">From 1299 NOK / night</p>
//             <button class="bg-primary text-background rounded py-2.5 px-6 flex items-center gap-3 group transition duration-300 hover:pl-6 hover:pr-9">
//                 Check it out
//                 <i class="fa-solid fa-arrow-right-long transform group-hover:translate-x-2"></i>
//             </button>
//         </div>
//         <div class="header-background inset-0 h-full w-full fixed top-0"></div>
//     </div>

//     <main class="relative z-40 bg-background top-rounded pt-8">

//         <section class="flex flex-col header-wrapper">
//             <div class="flex items-end justify-between mb-5">
//                 <div>
//                     <p class="text-sm">Start dreaming about</p>
//                     <h2 class="text-textPrimary font-bold text-lg">Your next trip</h2>
//                 </div>
//                 <a href="#" class="viewAll text-sm font-medium">view all</a>
//             </div>
//             <div class="flex flex-col md:grid md:grid-cols-2 md:gap-4">
//                 <a href="/venue/" class="relative">
//                     <img src="card-1.png" alt="" class="object-cover rounded h-80">
//                     <div class="absolute top-4 flex justify-between px-3 w-full">
//                         <span class="bg-lightRust text-secondary px-4 rounded font-medium text-sm flex items-center">4 guests</span>
//                         <button class="bg-background text-textPrimary text-lg p-2.5 rounded flex items-center">
//                             <i class="fa-regular fa-heart"></i>
//                         </button>
//                     </div>
//                     <div class="pt-3 pb-8 md:pb-3">
//                         <p class="flex gap-2 text-sm items-center pb-1">
//                             <i class="fa-solid fa-location-dot text-secondary"></i>
//                             Florida, North-America
//                         </p>
//                         <h3 class="font-semibold text-textPrimary pb-1">Apartment close to Miami Beach</h3>
//                         <p class="text-textPrimary text-sm font-medium">
//                             <span id="pricePerNight">4999</span>
//                             NOK
//                             <span class="text-textSecondary font-normal">/ night</span>
//                         </p>
//                     </div>
//                 </a>
//                 <a href="/venue/" class="relative">
//                     <img src="card-2.png" alt="" class="object-cover rounded h-80">
//                     <div class="absolute top-4 flex justify-between px-3 w-full">
//                         <span class="bg-lightRust text-secondary px-4 rounded font-medium text-sm flex items-center">4 guests</span>
//                         <button class="bg-background text-textPrimary text-lg p-2.5 rounded flex items-center">
//                             <i class="fa-regular fa-heart"></i>
//                         </button>
//                     </div>
//                     <div class="pt-3 pb-8 md:pb-3">
//                         <p class="flex gap-2 text-sm items-center pb-1">
//                             <i class="fa-solid fa-location-dot text-secondary"></i>
//                             Florida, North-America
//                         </p>
//                         <h3 class="font-semibold text-textPrimary pb-1">Beautiful villa in Fig Tree Bay</h3>
//                         <p class="text-textPrimary text-sm font-medium">
//                             <span id="pricePerNight">10.999</span>
//                             NOK
//                             <span class="text-textSecondary font-normal">/ night</span>
//                         </p>
//                     </div>
//                 </a>
//                 <a href="/venue/" class="relative">
//                     <img src="card-3.png" alt="" class="object-cover rounded h-80">
//                     <div class="absolute top-4 flex justify-between px-3 w-full">
//                         <span class="bg-lightRust text-secondary px-4 rounded font-medium text-sm flex items-center">4 guests</span>
//                         <button class="bg-background text-textPrimary text-lg p-2.5 rounded flex items-center">
//                             <i class="fa-regular fa-heart"></i>
//                         </button>
//                     </div>
//                     <div class="pt-3 pb-8 md:pb-3">
//                         <p class="flex gap-2 text-sm items-center pb-1">
//                             <i class="fa-solid fa-location-dot text-secondary"></i>
//                             Florida, North-America
//                         </p>
//                         <h3 class="font-semibold text-textPrimary pb-1">Cabin in the Alaskan highlands</h3>
//                         <p class="text-textPrimary text-sm font-medium">
//                             <span id="pricePerNight">899</span>
//                             NOK
//                             <span class="text-textSecondary font-normal">/ night</span>
//                         </p>
//                     </div>
//                 </a>
//                 <a href="/venue/" class="relative">
//                     <img src="card-3.png" alt="" class="object-cover rounded h-80">
//                     <div class="absolute top-4 flex justify-between px-3 w-full">
//                         <span class="bg-lightRust text-secondary px-4 rounded font-medium text-sm flex items-center">4 guests</span>
//                         <button class="bg-background text-textPrimary text-lg p-2.5 rounded flex items-center">
//                             <i class="fa-regular fa-heart"></i>
//                         </button>
//                     </div>
//                     <div class="pt-3 pb-8 md:pb-3">
//                         <p class="flex gap-2 text-sm items-center pb-1">
//                             <i class="fa-solid fa-location-dot text-secondary"></i>
//                             Florida, North-America
//                         </p>
//                         <h3 class="font-semibold text-textPrimary pb-1">Cabin in the Alaskan highlands</h3>
//                         <p class="text-textPrimary text-sm font-medium">
//                             <span id="pricePerNight">899</span>
//                             NOK
//                             <span class="text-textSecondary font-normal">/ night</span>
//                         </p>
//                     </div>
//                 </a>
//             </div>
//         </section>

//     <section class="mt-5 mb-10 bg-lightRust">
//             <p class="pt-12 text-center">Our guide to plan</p>
//             <h2 class="text-textPrimary font-bold text-lg mb-5 text-center">Your next vacation</h2>
            
//             <div class="flex gap-3 mb-5 flex-col items-center">
//                 <span class="min-w-12 h-12 md:max-w-14 bg-secondary rounded-full flex items-center justify-center">
//                 <img src="destination.png" alt="" class="">
//                 </span>
                
//                 <div class="flex flex-col text-center">
//                 <h4 class="font-semibold text-textPrimary">Discover amazing venues</h4>
//                 <p class="text-textSecondary text-sm">Browse through our diverse listings to find the perfect place for your stay.</p>
//                 </div>
//             </div>

//             <div class="flex gap-3 mb-5 flex-col items-center">
//                 <span class="min-w-12 h-12 md:max-w-14 bg-secondary rounded-full flex items-center justify-center">
//                 <img src="calendar.png" alt="" class="">
//                 </span>
                
//                 <div class="flex flex-col text-center">
//                 <h4 class="font-semibold text-textPrimary">Book with ease</h4>
//                 <p class="text-textSecondary text-sm">Use our secure booking system to reserve your chosen venue quickly and safely.</p>
//                 </div>
//             </div>

//             <div class="flex gap-3 pb-12 flex-col items-center">
//                 <span class="min-w-12 h-12 md:max-w-14 bg-secondary rounded-full flex items-center justify-center">
//                 <img src="stay.png" alt="" class="">
//                 </span>
                
//                 <div class="flex flex-col text-center">
//                 <h4 class="font-semibold text-textPrimary">Enjoy your stay</h4>
//                 <p class="text-textSecondary text-sm">Experience a hassle-free stay with our verified venues and responsive hosts.</p>
//             </div>
//       </div>
      
//     </section>

//         <div class="pt-1 pb-6">
//             <h2 class="text-textPrimary font-bold header-wrapper text-lg mb-5">Popular destinations</h2>
//             <div class="overflow-auto flex gap-4 header-wrapper mb-6">
//                 <a href="#" class="w-64 md:w-80 flex-shrink-0">
//                     <img src="thailand.png" alt="Thailand" class="rounded object-cover w-full h-40 md:h-60">
//                     <h3 class="pt-3 pb-5 font-medium flex gap-3 items-center text-textSecondary hover:text-textPrimary duration-200">
//                         <i class="fa-solid fa-location-dot text-secondary"></i>
//                         Ao Nang, Asia
//                     </h3>
//                 </a>
//                 <a href="#" class="w-64 md:w-80 flex-shrink-0">
//                     <img src="germany.png" alt="Germany" class="rounded object-cover w-full h-40 md:h-60">
//                     <h3 class="pt-3 pb-5 font-medium flex gap-3 items-center text-textSecondary hover:text-textPrimary duration-200">
//                         <i class="fa-solid fa-location-dot text-secondary"></i>
//                         Germany, Europe
//                     </h3>
//                 </a>
//                 <a href="#" class="w-64 md:w-80 flex-shrink-0">
//                     <img src="india.jpg" alt="India" class="rounded object-cover w-full h-40 md:h-60">
//                     <h3 class="pt-3 pb-5 font-medium flex gap-3 items-center text-textSecondary hover:text-textPrimary duration-200">
//                         <i class="fa-solid fa-location-dot text-secondary"></i>
//                         Hawal Mawal, India
//                     </h3>
//                 </a>
//                 <a href="#" class="w-64 md:w-80 flex-shrink-0">
//                     <img src="africa.jpg" alt="Africa" class="rounded object-cover w-full h-40 md:h-60">
//                     <h3 class="pt-3 pb-5 font-medium flex gap-3 items-center text-textSecondary hover:text-textPrimary duration-200">
//                         <i class="fa-solid fa-location-dot text-secondary"></i>
//                         Cape Town, South Africa
//                     </h3>
//                 </a>
//             </div>
//         </div>

//          <section class="bg-primary text-background header-wrapper py-10">
//           <h2 class="font-semibold text-lg">Affordable travel options</h2>
//           <p class="pt-3 pb-5 text-sm">Discover over 2000 incredible venues, all for under 1000 NOK per night!</p>
//           <button class="bg-background text-primary rounded py-2.5 px-6 flex items-center gap-3 group transition duration-300 hover:pl-6 hover:pr-9">
//               Check it out
//               <i class="fa-solid fa-arrow-right-long transform group-hover:translate-x-2"></i>
//           </button>
//       </section>

//         <footer class="bg-customGray z-50">
//           <p>fe</p>
//           <p>fe</p>
//           <p>fe</p>
//           <p>fe</p>
//           <p>fe</p>
//           <p>fe</p>
//           <p>fe</p>
//           <p>fe</p>
//           <p>fe</p>
//           <p>fe</p>
//       </footer>
//     </main> -->
//   </body>
// </html>
