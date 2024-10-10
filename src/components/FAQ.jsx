import { useState } from "react";
import icons from "../utils/icons";
import faqQuestions from "./FAQQuestions";

export default function FAQ() {
    const [activeIndex, setActiveIndex] = useState({});

    const toggleFAQ = (section, index) => {
        setActiveIndex((prev) => ({
            ...prev,
            [section]: prev[section] === index ? null : index,
        }));
    };

    return (
        <div className="bg-customLightBlue grid grid-cols-1 lg:grid-cols-2 gap-6 py-10 lg:py-20 px-[5%] lg:px-[7%] 2xl:px-[15%]">
            <h2 className="text-3xl lg:text-5xl font-bold lg:pb-6 lg:col-span-2">FAQs</h2>

            {/* Booking & Reservations */}
            <div className="bg-white rounded-lg p-8 lg:p-10 2xl:p-12">
                <h3 className="text-xl font-bold pb-6">Booking & Reservations</h3>

                <div className="flex flex-col gap-3">
                    {faqQuestions.booking.map((faq, index) => (
                        <div key={index} className="lg:pb-2">
                            <button
                                type="button"
                                className="flex items-center justify-between cursor-pointer w-full"
                                onClick={() => toggleFAQ('booking', index)}
                            >
                                <span className="font-medium text-left text-sm md:text-base w-full leading-relaxed">{faq.question}</span>
                                <span className="w-[3rem] flex items-center justify-center"><icons.chevronDown /></span>
                            </button>
                            {activeIndex.booking === index && (
                                <p className="pt-3 lg:pt-5 leading-relaxed text-secondary text-sm md:text-base pr-16">{faq.answer}</p>
                            )}
                        </div>
                    ))}
                </div>
            </div>

            {/* Payment and Pricing */}
            <div className="bg-white rounded-lg p-8 lg:p-10 2xl:p-12">
                <h3 className="text-xl font-bold pb-6">Payment & Pricing</h3>

                <div className="flex flex-col gap-3">
                    {faqQuestions.payment.map((faq, index) => (
                        <div key={index} className="lg:pb-2">
                            <button
                                type="button"
                                className="flex items-center justify-between cursor-pointer w-full"
                                onClick={() => toggleFAQ('payment', index)}
                            >
                                <span className="font-medium text-left text-sm md:text-base w-full leading-relaxed">{faq.question}</span>
                                <span className="w-[3rem] flex items-center justify-center"><icons.chevronDown /></span>
                            </button>
                            {activeIndex.payment === index && (
                                <p className="pt-3 lg:pt-5 leading-relaxed text-secondary text-sm md:text-base pr-16">{faq.answer}</p>
                            )}
                        </div>
                    ))}
                </div>
            </div>

            {/* Support & Troubleshooting */}
            <div className="bg-white rounded-lg p-8 lg:p-10 2xl:p-12">
                <h3 className="text-xl font-bold pb-6">Support & Troubleshooting</h3>

                <div className="flex flex-col gap-3">
                    {faqQuestions.support.map((faq, index) => (
                        <div key={index} className="lg:pb-2">
                            <button
                                type="button"
                                className="flex items-center justify-between cursor-pointer w-full"
                                onClick={() => toggleFAQ('support', index)}
                            >
                                <span className="font-medium text-left text-sm md:text-base w-full leading-relaxed">{faq.question}</span>
                                <span className="w-[3rem] flex items-center justify-center"><icons.chevronDown /></span>
                            </button>
                            {activeIndex.support === index && (
                                <p className="pt-3 lg:pt-5 leading-relaxed text-secondary text-sm md:text-base pr-16">{faq.answer}</p>
                            )}
                        </div>
                    ))}
                </div>
            </div>

            {/* Guest Policies and Requirements */}
            <div className="bg-white rounded-lg p-8 lg:p-10 2xl:p-12">
                <h3 className="text-xl font-bold pb-6">Guest Policies and Requirements</h3>

                <div className="flex flex-col gap-3">
                    {faqQuestions.policies.map((faq, index) => (
                        <div key={index} className="lg:pb-2">
                            <button
                                type="button"
                                className="flex items-center justify-between cursor-pointer w-full"
                                onClick={() => toggleFAQ('policies', index)}
                            >
                                <span className="font-medium text-left text-sm md:text-base w-full leading-relaxed">{faq.question}</span>
                                <span className="w-[3rem] flex items-center justify-center"><icons.chevronDown /></span>
                            </button>
                            {activeIndex.policies === index && (
                                <p className="pt-3 lg:pt-5 leading-relaxed text-secondary text-sm md:text-base pr-16">{faq.answer}</p>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
