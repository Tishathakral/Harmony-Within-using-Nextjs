// src/components/FAQ.js
import React from 'react';


const FAQ = () => {
  const faqData = [
    {
      question: 'Q- What is meditation?',
      answer: 'Meditation is a practice where an individual uses a technique – such as mindfulness, or focusing the mind on a particular object, thought, or activity – to train attention and awareness, and achieve a mentally clear and emotionally calm and stable state.',
    },
    {
      question: 'Q- How do I start meditating?',
      answer: 'To start meditating, find a quiet and comfortable place, sit or lie down, focus on your breath or a specific point of attention, and let go of distracting thoughts. Start with short sessions and gradually increase the duration as you become more comfortable with the practice.',
    },
    {
      question: 'Q- How long should I meditate??',
      answer: "Some people meditate for just a few minutes, while others may meditate for an hour or more. It depends on what works for your needs. If you're just starting out on your mediation journey, you’ll probably want to start with a short session of just a few minutes and gradually increase the time you meditate as you become more comfortable.",
    },
    {
        question: 'Q- What is the best time of day to meditate?',
        answer: "The best time of day to meditate is whenever you can fit it into your schedule. It may be helpful to start with just a few minutes in the morning or evening. As you become more comfortable with the practice, you can increase the length of time and frequency you meditate.",
    },
    {
        question: 'Q- Is meditating with music or relaxing sounds helpful?',
        answer: "Relaxing sounds can be helpful when meditating, but it's important to note that this depends on your goal. Some people prefer complete silence if they're looking to focus their thoughts. In contrast, others find that gentle background music or nature sounds help them to relax. Experiment with different sounds and see what works best for you.",
    },
    {
        question: 'Q- How to Choose the Right Meditation Playlist',
        answer: "Consider what type of music or sound you find most relaxing. Some people prefer the sound of nature, while others find classical music more calming. Experiment with different types of music and see what works best for your meditation playlist.",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto mt-8 p-6">
      <h2 id="faq" className="text-3xl font-semibold mb-6 text-center text-decoration underline">Frequently Asked Questions</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {faqData.map((item, index) => (
          <div key={index} className="mb-4 bg-white rounded-lg shadow-md">
            <div className="flex justify-between items-center p-4">
              <h3 className="text-lg font-semibold hover:scale-105 transition duration-300 ease-in-out">{item.question}</h3>
            </div>
            <div className="p-4 text-gray-700">{item.answer}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
