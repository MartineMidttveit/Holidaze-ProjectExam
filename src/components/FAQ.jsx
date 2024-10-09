import { useState } from "react";
import icons from "../utils/icons";

export default function FAQ() {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    const faqs = [
        {
            question: "How do I make a booking on Holidaze?",
            answer: "To make a booking on Holidaze, simply browse our selection of accommodations by destination or date. Once you find a venue that suits your needs, click on the listing for more details. Select your desired dates, enter the required information, and proceed to checkout to complete your booking."
        },
        {
            question: "Can I modify my reservation after it's confirmed?",
            answer: "Yes, you can modify your reservation after it's confirmed. However, changes must be made at least 48 hours prior to your check-in date to avoid any additional fees."
        },
        {
            question: "What is the cancellation policy?",
            answer: "Our cancellation policy allows you to cancel your reservation up to 48 hours before your check-in date without any penalty. If you cancel within 48 hours, you may incur a charge, which will depend on the specific venue's policy."
        },
        {
            question: "How do I check the status of my reservation?",
            answer: "You can check the status of your reservation by logging into your Holidaze account. Navigate to the “My Reservations” section, where you'll find details about your upcoming bookings and their current status."
        },
        {
            question: "Is there a way to extend my stay after booking?",
            answer: "Yes, you can extend your stay after booking, subject to availability at the venue. To do this, please contact our customer support team or log into your account to modify your reservation, and we will assist you in extending your stay."
        },
    ];

    return (
        <div className="bg-customLightBlue grid grid-cols-6 py-16 px-[5%] lg:px-[7%] 2xl:px-[15%]">
            <h2 className="text-5xl font-bold pb-6 col-span-1">FAQs</h2>

            <div className="flex flex-col col-span-2 ml-10">
                <p className="font-medium text-lg h-10">Booking & Reservations</p>
                <p className="hover:font-medium h-10">Payment & Pricing</p>
                <p className="hover:font-medium h-10">Accommodation & Venues</p>
                <p className="hover:font-medium h-10">Guest Policies & Requirements</p>
                <p className="hover:font-medium h-10">Support & Troubleshooting</p>
            </div>

            <div className="bg-white col-span-3 rounded-lg p-12">
                <h3 className="text-xl font-bold pb-6">Booking & Reservations</h3>

                <div className="flex flex-col gap-3">
                    {faqs.map((faq, index) => (
                        <div key={index} className="pb-2">
                            <button type="button"
                                className="flex items-center justify-between cursor-pointer w-full"
                                onClick={() => toggleFAQ(index)}
                            >
                                <span className="font-medium">{faq.question}</span>
                                <icons.chevronDown/> 
                            </button>
                            {activeIndex === index && (
                                <p className="pt-5 pb-3 leading-relaxed text-secondary">{faq.answer}</p>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}