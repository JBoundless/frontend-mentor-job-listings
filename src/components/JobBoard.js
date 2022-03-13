import React from 'react';

const JobBoard = ({
  job: {
    company,
    logo,
    isNew,
    featured,
    position,
    role,
    level,
    postedAt,
    contract,
    location,
    languages,
    tools,
  },
  handleTagClick,
}) => {
  const tags = [role, level];

  if (tags) {
    tags.push(...tools);
  }
  if (tags) {
    tags.push(...languages);
  }
  return (
    <div className="flex bg-white shadow-md my-16 mx-10 p-4 rounded">
      <div>
        <img
          className="-mt-16 mb-4 w-20 h-20 sm:mt-0 sm:h-24 sm:w-24 sm:mb-0"
          src="${logo}"
          alt={company}
        />
      </div>
      <div className="flex flex-col justify-between ml-4">
        <h3 className="font-bold text-teal-500">
          {company}
          {isNew && (
            <span className="bg-teal-500 text-teal-100 font-bold m-2 p-2 rounded-full text-uppercase">
              New
            </span>
          )}
          {featured && (
            <span className="bg-gray-800 text-white font-bold m-2 p-2 rounded-full text-uppercase">
              Featured
            </span>
          )}
        </h3>
        <h1 className="font-bold text-md text-xl my-2">{position}</h1>
        <p className="text-gray-700">
          {postedAt} * {contract} * {location}
        </p>
      </div>
      <div className="flex flex-wrap items-center mt-4 mx-4 pt-4 border-t border-gray-500 border-solid sm:ml-auto sm:border-0 sm:pt-0 sm:mt-0 sm:items-center">
        {tags
          ? tags.map((tag) => (
              <span
                onClick={() => handleTagClick(tag)}
                className="cursor-pointer bg-teal-100 text-teal-500 font-bold mr-4 mb-4 p-2 rounded"
              >
                {tag}
              </span>
            ))
          : ''}
      </div>
    </div>
  );
};

export default JobBoard;
