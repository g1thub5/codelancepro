import React, { useState } from 'react';

const Survey = () => {
  const [selectedAuthors, setSelectedAuthors] = useState([]);

  const authorsList = [
    "J.K. Rowling",
    "Stephen King",
    "Jane Austen",
    "George R.R. Martin",
    "Roald Dahl",	
    "Agatha Christie",
    "Charles Dickens",
    "Tolkien",
    "Leo Tolstoy",
    "William Shakespeare",
    "Ernest Hemingway",
  ];

  const handleCheckboxChange = (author) => {
    if (selectedAuthors.includes(author)) {
      setSelectedAuthors(selectedAuthors.filter(a => a !== author));
    } else {
      setSelectedAuthors([...selectedAuthors, author]);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Selected Authors: ", selectedAuthors);
  };

  return (
    <div>
      <h2>Select your favourite authors:</h2>
      <form onSubmit={handleSubmit}>
        {authorsList.map(author => (
          <div key={author}>
            <label>
              <input 
                type="checkbox"
                checked={selectedAuthors.includes(author)}
                onChange={() => handleCheckboxChange(author)}
              />
              {author}
            </label>
          </div>
        ))}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Survey;