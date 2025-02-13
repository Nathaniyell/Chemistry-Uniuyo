"use client"
import React, { useState } from 'react';
import { PiCaretDown } from "react-icons/pi";

interface AccordionItemProps {
  title: string;
  content: React.ReactNode
}

const Accordion: React.FC<AccordionItemProps> = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mb-2">
      <button
        className="flex justify-between items-center w-full p-2 text-left text-xl font-semibold text-primary bg-blue-100 rounded-t-lg hover:bg-blue-200 focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{title}</span>
      <PiCaretDown className={`w-5 h-5 transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      {isOpen && <div className="p-4 text-lightBg bg-white">{content}</div>}
    </div>
  );
};

export default Accordion;
