import React from 'react';
import Card from './Card.jsx';

function HowItWorks() {
  const cards = [
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="3" rx="2" /><path d="M9 9h.01" /><path d="M15 9h.01" /><path d="M9 15h.01" /><path d="M15 15h.01" /></svg>,
      title: "Create Your Template",
      description: "Start by selecting the color scheme for your resume template. Our single, professionally designed template ensures a clean and consistent look for all users."
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" /><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" /></svg>,
      title: "Update Your Information",
      description: "Enter your personal details, work experience, education, and skills into the provided form. Our AI assists you in filling out each section accurately and effectively."
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="18" cy="5" r="3" /><circle cx="6" cy="12" r="3" /><circle cx="18" cy="19" r="3" /><line x1="8.59" y1="13.51" x2="15.42" y2="17.49" /><line x1="15.41" y1="6.51" x2="8.59" y2="10.49" /></svg>,
      title: "Share Your Resume",
      description: "After completing your resume, save it securely and generate a shareable link. Easily update your information anytime and share the link with potential employers or download it in a preferred format."
    }
  ];

  return (
    <section className="pt-6 pb-16">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-4xl font-extrabold text-center mb-2">How it Works?</h2>
        <p className="text-center text-gray-600 text-lg font-medium mb-10">Generate resume in just 3 steps</p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">          {cards.map((card, index) => (
            <Card 
              key={index}
              icon={card.icon}
              title={card.title}
              description={card.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;