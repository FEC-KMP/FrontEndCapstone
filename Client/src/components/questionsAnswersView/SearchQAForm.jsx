import React, { useState, useEffect } from 'react';

const SearchQAForm = ({ handleSearch }) => {
  const [searchQuestion, setSearchQuestion] = useState('');
  const handleSearchChange = (e) => (setSearchQuestion(e.target.value));


  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   handleSearch(searchQuestion);
  // };
  useEffect(() => {
    handleSearch(searchQuestion);
  }, [searchQuestion]);

  return (
    <div className="d-flex justify-content-center px-5">
      <div className="search">
        <form >
          <input type="text"
            className="search-input"
            placeholder="HAVE A QUESTION? SEARCH FOR ANSWERS..."
            onChange={handleSearchChange}
            name="searchQuestion" />
          <a href="#" className="search-icon"> <i className="fa fa-search"></i> </a>
        </form>
      </div>
    </div>
  );
};

export default SearchQAForm;