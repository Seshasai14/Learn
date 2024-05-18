import React from "react";

const Card = ({title,subtitle,buttontxt,bgcolor}) => {
  return (
    <div className={`${bgcolor} p-6 rounded-lg shadow-md`}>
      <h2 className="text-2xl font-bold">{title}</h2>
      <p className="mt-2 mb-4">
        {subtitle}
      </p>
      <a
        href="/jobs.html"
        className="inline-block bg-black text-white rounded-lg px-4 py-2 hover:bg-gray-700"
      >
        {buttontxt}
      </a>
    </div>
  );
};

export default Card;
