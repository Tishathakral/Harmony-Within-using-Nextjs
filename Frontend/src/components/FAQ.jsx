"use client";
import React from "react";
import { useQuery } from "@tanstack/react-query";
import { getFAQ } from "@/handlers/homePageApis";



  const FAQ = () => {
    const { data:faqData, isLoading } = useQuery({
      queryKey: ["faq"],
      queryFn : getFAQ,
    });

    console.log(faqData);
  
    if (isLoading) {
      return <div>Loading...</div>;
    }
  
  return (
    <div className="max-w-7xl mx-auto mt-8 p-6">
      <h2
        id="faq"
        className="text-3xl font-semibold mb-6 text-center text-decoration underline"
      >
        Frequently Asked Questions
      </h2>
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
