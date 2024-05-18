import React from 'react';
import jobs from '../jobs.json';

const JobsListing = ({props}) => {
  return (
    <div>
      {/* Job Listing 1 */}
      <div className="bg-white rounded-xl shadow-md relative">
        <div className="p-4">
          <div className="mb-6">
            <div className="text-gray-600 my-2">{props.type}</div>
            <h3 className="text-xl font-bold">{props.title}</h3>
          </div>

          <div className="mb-5">
            {props.description}
          </div>

          <h3 className="text-indigo-500 mb-2">{props.salary}/ Year</h3>

          <div className="border border-gray-100 mb-5"></div>

          <div className="flex flex-col lg:flex-row justify-between mb-4">
            <div className="text-orange-700 mb-3">
              <i className="fa-solid fa-location-dot text-lg"></i>
              {props.location}
            </div>
            <a
              href={`/jobs/${jobs.id}`}
              className="h-[36px] bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg text-center text-sm"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default JobsListing;
