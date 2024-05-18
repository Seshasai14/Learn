import React from "react";
import Card from "./Card";
const HomeCards = () => {
  return (
    <section className="py-4">
      <div className="container-xl lg:container m-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg">
          <Card
            title="For Developers"
            subtitle="Browse our React jobs and start your career today"
            buttontxt="Browse Jobs"
            bgcolor="bg-gray-300"
          />
          <Card
            title="For Employers"
            subtitle="List your job to find the perfect developer for the role"
            buttontxt="Add Job"
            bgcolor="bg-indigo-100"
          />
        </div>
      </div>
    </section>
  );
};

export default HomeCards;
