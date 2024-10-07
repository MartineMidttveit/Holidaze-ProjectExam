import React, { useState } from 'react';
import ChevronDown from '../SVG/ChevronDown';

const GuestsAmount = () => {
    const [isOpen, setIsOpen] = useState(false); 
    const [adults, setAdults] = useState(0);
    const [children, setChildren] = useState(0);
    const [pets, setPets] = useState(0);
    const [guestText, setGuestText] = useState('0 guests'); // Initial text

    const toggleDropdown = () => {
        setIsOpen(!isOpen); 
    };

    const handleCountChange = (type, operation) => {
        if (operation === '+') {
            if (type === 'adults') setAdults(adults + 1);
            if (type === 'children') setChildren(children + 1);
            if (type === 'pets') setPets(pets + 1);
        } else if (operation === '-') {
            if (type === 'adults' && adults > 0) setAdults(adults - 1);
            if (type === 'children' && children > 0) setChildren(children - 1);
            if (type === 'pets' && pets > 0) setPets(pets - 1);
        }
    };

    const handleApply = () => {
        const totalGuests = adults + children + pets;
        const adultText = adults > 0 ? `${adults} adult${adults > 1 ? 's' : ''}` : '';
        const childText = children > 0 ? `${children} child${children > 1 ? 'ren' : ''}` : '';
        const petText = pets > 0 ? `${pets} pet${pets > 1 ? 's' : ''}` : '';

        const details = [adultText, childText, petText].filter(Boolean).join(', '); // Join only non-empty strings

        const updatedText = `${totalGuests} guest${totalGuests !== 1 ? 's' : ''}${details ? ` (${details})` : ''}`;
        setGuestText(updatedText);
        setIsOpen(false); 
    };

    return (
        <div className="pt-3 lg:pt-5">
            <p className="pb-2 lg:pb-3 font-medium md:font-normal text-sm md:text-base">Guests:</p>
            <div 
                className="border border-secondary rounded bg-white py-3 h-12 xl:h-14 max-h-14 flex items-center justify-between px-4 cursor-pointer" 
                onClick={toggleDropdown} 
            >
                <p className="text-sm md:text-base">{guestText}</p>
                <ChevronDown />
            </div>

            <div className={`bg-white flex-col border border-secondary px-10 py-7 border-t-0 ${isOpen ? 'block' : 'hidden'}`}>
                {/* Adults */}
                <div className="flex items-center justify-between py-2">
                    <p>Adults</p>
                    <div className="flex items-center gap-4">
                        <button className="h-8 w-8 bg-background rounded-full flex items-center justify-center" onClick={() => handleCountChange('adults', '-')}>-</button>
                        <span>{adults}</span>
                        <button className="h-8 w-8 bg-background rounded-full flex items-center justify-center" onClick={() => handleCountChange('adults', '+')}>+</button>
                    </div>
                </div>

                {/* Children */}
                <div className="flex items-center justify-between py-2">
                    <p>Children</p>
                    <div className="flex items-center gap-4">
                        <button className="h-8 w-8 bg-background rounded-full flex items-center justify-center" onClick={() => handleCountChange('children', '-')}>-</button>
                        <span>{children}</span>
                        <button className="h-8 w-8 bg-background rounded-full flex items-center justify-center" onClick={() => handleCountChange('children', '+')}>+</button>
                    </div>
                </div>

                {/* Pets */}
                <div className="flex items-center justify-between py-2">
                    <p>Pets</p>
                    <div className="flex items-center gap-4">
                        <button className="h-8 w-8 bg-background rounded-full flex items-center justify-center" onClick={() => handleCountChange('pets', '-')}>-</button>
                        <span>{pets}</span>
                        <button className="h-8 w-8 bg-background rounded-full flex items-center justify-center" onClick={() => handleCountChange('pets', '+')}>+</button>
                    </div>
                </div>

                <button className="bg-customOrange py-2 rounded mt-4 duration-300 h-12 w-full" onClick={handleApply}>Apply</button>
            </div>
        </div>
    );
};

export default GuestsAmount;