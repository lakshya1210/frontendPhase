import React from 'react';

function Card({ icon, title, description }) {
  return (
    <div className="bg-white p-6 rounded-3xl shadow-md h-full max-w-xs mx-auto">
      <div className="mb-5">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-gray-600 text-sm leading-relaxed">
        {description}
      </p>
    </div>
  );
}

export default Card;