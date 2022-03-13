import React, { useState, useEffect } from 'react';
import './style.css';
import data from './data.json';
import JobBoard from './components/JobBoard';

export default function App() {
  const [jobs, setJobs] = useState([]);
  const [filters, setFilters] = useState([]);

  useEffect(() => {
    setJobs(data);
  }, []);

  const filterFunction = ({ role, level, tools, languages }) => {
    if (filters.length === 0) {
      return true;
    }

    const tags = [role, level, tools, languages];

    if (tools) {
      return tags.push(...tools);
    }
    if (languages) {
      return tags.push(...languages);
    }

    return tags.some((tag) => filters.includes(tag));
  };

  const handleTagClick = (tag) => {
    setFilters([...filters, tag]);
  };

  const handleFilterClick = (passedFilter) => {
    setFilters(filters.filter((f) => f != passedFilter));
  };

  const filteredJobs = jobs.filter(filterFunction);

  console.log(jobs);

  return (
    <div className="App">
      <header className="bg-teal-500 mb-4">
        <img
          src="https://raw.githubusercontent.com/JBoundless/frontend-mentor-job-listings/8b65372a87707a43002e5cbe39bdd20b1b3d0305/images/bg-header-desktop.svg"
          alt="bg-image"
        />
      </header>
      {filters.length > 0 && (
        <div className={'bg-white shadow-md my-16 mx-10 p-6 rounded'}>
          {filters.map((filter) => (
            <span
              className="cursor-pointer"
              onClick={() => handleFilterClick(filter)}
            >
              <span
                onClick={() => handleFilterClick(filter)}
                className="bg-teal-100 text-teal-500 font-bold mr-4 mb-4 p-2 rounded"
              >
                {filter}
              </span>
              <span className="bg-teal-500 text-teal-100">x</span>
            </span>
          ))}
        </div>
      )}
      <h1 className="text-4xl font-bold">Job Board</h1>
      {jobs.length === 0 ? (
        <p>Fetching...</p>
      ) : (
        filteredJobs.map((job) => (
          <JobBoard job={job} key={job.id} handleTagClick={handleTagClick} />
        ))
      )}
    </div>
  );
}
