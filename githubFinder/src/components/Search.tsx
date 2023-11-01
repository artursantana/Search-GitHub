
import React, { useState, KeyboardEvent } from 'react';
import { BsSearch } from 'react-icons/bs';

import classes from './Search.module.css'

type SearchProps = {
  loadUser: (userName: string) => Promise<void>;
};

export const Search: React.FC<SearchProps> = ({ loadUser }) => {
  const [userName, setUserName] = useState('');

  const handleSearch = async () => {
    try {
      await loadUser(userName);
    } catch (error) {
      console.error('Error loading user:', error);
    }
  };

  const handleKeydown = (e: KeyboardEvent) => {
    if(e.key === 'Enter'){
        loadUser(userName)
    }
  }

  return (
    <div className={classes.search}>
      <h2>Looking for a user</h2>
      <p>Know your better repository</p>
      <div className={classes.search_container}>
        <input
          type="text"
          placeholder="Write your username"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          onKeyDown={handleKeydown}
        />
        <button onClick={handleSearch}>
          <BsSearch />
        </button>
      </div>
    </div>
  );
};
