export function Info() {
    return (
        <div>
            <h1 className="text-xl lg:text-2xl 2xl:text-3xl font-bold xl:mt-2 2xl:mt-0">Cabin by the fjord</h1>
            <div className="flex gap-2 text-secondary pt-2 lg:pt-3 items-center">
                <i className="fa-solid fa-location-dot"></i>
                <p className="text-sm md:text-base flex gap-1">
                    <span>Traneveien 13,</span> 
                    <span>8513 Reine,</span> 
                    <span>Lofoten, Norway</span>
                </p> 
            </div>

            <img src="map.png" alt="Map of location" className="object-cover mt-6 2xl:mt-8 w-full h-28 max-h-40 rounded-md" /> {/* Added alt text */}

            <div className="flex flex-col gap-y-3 my-6 2xl:my-8">
                <p className="text-sm md:text-base leading-relaxed">
                    Discover the beauty of Reine, Lofoten, from our cozy cabin, perfectly located between 
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

            {/* Facilities */}
            <div className="flex justify-between border-b border-secondary pb-8 flex-col gap-5 md:flex-row md:items-end xl:border-b-0">
                <div className="flex flex-col xl:border-b-0">
                    <h2 className="font-bold md:text-lg 2xl:text-xl pb-4">Facilities:</h2>

                    <div className="flex flex-col gap-1">
                        <div className="flex items-center gap-3">
                            <svg className="text-green-600 lg:text-xl"></svg> {/* Replace icons with SVGs */}
                            <span className="text-sm">Wi-fi available</span>
                        </div>

                        <div className="flex items-center gap-3">
                            <svg className="text-green-600 lg:text-xl"></svg> {/* Replace icons with SVGs */}
                            <span className="text-sm">Pets allowed</span>
                        </div>

                        <div className="flex items-center gap-3">
                            <svg className="text-red-600 lg:text-xl"></svg> {/* Replace icons with SVGs */}
                            <span className="text-sm">Parking available</span>
                        </div>

                        <div className="flex items-center gap-3">
                            <svg className="text-red-600 lg:text-xl"></svg> {/* Replace icons with SVGs */}
                            <span className="text-sm">Breakfast included</span>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col xl:hidden items-baseline border-t border-primary pt-6 md:border-t-0 md:pt-0">
                    <div className="flex items-center gap-3 pb-1 md:pb-2">
                        <svg></svg> {/* Replace icon with SVG */}
                        <span className="font-medium text-sm">Share the venue</span>
                    </div>

                    <div className="flex items-center gap-3">
                        <svg></svg> {/* Replace icon with SVG */}
                        <span className="font-medium text-sm">Report the venue</span>
                    </div>

                    <p className="text-secondary pt-3 text-sm">Last updated: <span>21.03.2025</span>, <span>17:04</span></p>
                </div>
            </div>

            {/* Share, report, last updated */}
            <div className="flex-col gap-2 border-t border-secondary xl:pt-10 hidden xl:flex">
                <div className="flex items-center gap-3">
                    <svg className="text-xl"></svg> {/* Replace icon with SVG */}
                    <span className="font-medium">Share the venue</span>
                </div>

                <div className="flex items-center gap-3">
                    <svg className="text-xl"></svg> {/* Replace icon with SVG */}
                    <span className="font-medium">Report the venue</span>
                </div>

                <p className="text-secondary pt-3">Last updated: <span>21.03.2025</span>, <span>17:04</span></p>
            </div>
        </div>
    );
}

