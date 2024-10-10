export default function Terms() {
    return (
        <div className="leading-relaxed pt-8 md:pt-10 2xl:pt-12 text-sm md:text-base">
            <div className="px-[5%] md:px-[15%] lg:px-[25%] xl:px-[30%] 2xl:px-[36%] pb-8 md:pb-10 2xl:pb-12">
                <p className="text-contrast font-bold tracking-widest text-sm md:text-base">LEGAL</p>
                <h1 className="text-xl xl:text-2xl font-bold pt-1">Terms & Conditions</h1>
                <p className="py-2 lg:py-4">Welcome to Holidaze! By accessing or using our website, you agree to comply with and be bound by the following terms and conditions. Please review them carefully.</p>

                <h2 className="font-semibold text-base">Introduction</h2>
                <ul className="list-disc pl-5 font-normal pb-4 flex flex-col gap-2 pt-2">
                    <li>This document outlines the rules and regulations for using the Holidaze website, including browsing, booking properties, and communicating with hosts.</li>
                    <li>By using our website, you agree to these terms and conditions. If you do not agree, please refrain from using the site.</li>
                </ul>

                <h2 className="font-semibold text-base">Booking and Payment</h2>
                <ul className="list-disc pl-5 font-normal py-4 flex flex-col gap-2 pt-2">
                    <li>All bookings made through Holidaze are subject to the availability of the selected property.</li>
                    <li>Users are required to provide accurate information during the booking process, including payment details.</li>
                    <li>Payments are processed securely, and Holidaze reserves the right to charge the payment method provided by the user at the time of booking.</li>
                </ul>

                <h2 className="font-semibold text-base">User Responsibilities</h2>
                <ul className="list-disc pl-5 font-normal py-4 flex flex-col gap-2 pt-2">
                    <li>Users must provide accurate and up-to-date personal information.</li>
                    <li>You are responsible for ensuring the safety and security of your account credentials.</li>
                    <li>Any misuse of the website, including fraudulent activity, will result in termination of your account.</li>
                </ul>

                <h2 className="font-semibold text-base">Host Responsibilities</h2>
                <ul className="list-disc pl-5 font-normal py-4 flex flex-col gap-2 pt-2">
                    <li>Hosts are required to ensure their property listings are accurate, up-to-date, and compliant with local laws.</li>
                    <li>Hosts agree to honor confirmed bookings and provide a safe and clean environment for guests.</li>
                </ul>

                <h2 className="font-semibold text-base">Cancellation and Refund Policy</h2>
                <ul className="list-disc pl-5 font-normal py-4 flex flex-col gap-2 pt-2">
                    <li>Cancellations must be made in accordance with the cancellation policy set for each property.</li>
                    <li>Refunds are subject to the cancellation policy terms and may not be available for late cancellations or no-shows.</li>
                </ul>
            </div>
             
            <div className="bg-background">
                <div className="px-[5%] md:px-[15%] lg:px-[25%] xl:px-[30%] 2xl:px-[36%] py-10 2xl:py-12">
                    <h2 className="text-xl xl:text-2xl font-bold pb-2">Cookie Policy</h2>
                    <ul className="list-disc pl-5 font-normal py-4 flex flex-col gap-2 pt-2">
                        <li>Holidaze uses cookies to enhance the user experience and gather data to improve our services.</li>
                        <li>By using our site, you consent to the use of cookies in accordance with this policy.</li>
                        <li>We use cookies to remember your preferences, analyze traffic, and understand usage patterns.</li>
                        <li>You can disable cookies through your browser settings, but doing so may affect your experience on the site.</li>
                    </ul>
                </div>
            </div>
                            
            <div className="bg-customLightBlue py-10 2xl:py-12">
                <div className="px-[5%] md:px-[15%] lg:px-[25%] xl:px-[30%] 2xl:px-[36%]">
                    <h2 className="text-xl xl:text-2xl font-bold pb-2">Privacy Policy</h2>
                    <ul className="list-disc pl-5 font-normal py-4 flex flex-col gap-2 pt-2">
                        <li>We collect personal information such as your name, email, and payment details when you use our services.</li>
                        <li>This information is used to process bookings, manage your account, and communicate with you.</li>
                        <li>Holidaze is committed to protecting your personal information and complies with data protection regulations.</li>
                        <li>We do not share your personal information with third parties, except as necessary to fulfill services (e.g., sharing your details with hosts) or as required by law.</li>
                    </ul>
                </div> 
            </div>          
        </div>
    );
}
