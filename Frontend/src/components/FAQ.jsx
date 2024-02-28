"use client";
import React, { useEffect, useState } from 'react';
const FAQ = () => {

  const [faqData, setFaqData] = useState([]);
  const getFaqData = async () => {
    try {
      const res = await fetch('http://localhost:3000/faq');
      const data = await res.json();
      console.log(data);
      setFaqData(data);
    } catch (error) {
      console.error('Error fetching FAQ data:', error);
    }
  };
  useEffect(() => {
    getFaqData();
  }, []);

 
  return (
    <div className="max-w-7xl mx-auto mt-8 p-6">
      <h2 id="faq" className="text-3xl font-semibold mb-6 text-center text-decoration underline">Frequently Asked Questions</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {faqData.map((item, index) => (
          <div key={index} className="mb-4 bg-white rounded-lg shadow-md">
            <div className="flex justify-between items-center p-4">
              <h3 className="text-lg font-semibold">{item.question}</h3>
            </div>
            <div className="p-4 text-gray-700">{item.answer}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
