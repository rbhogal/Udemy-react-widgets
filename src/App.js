import React from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';

const App = () => {
  const items = [
    {
      title: 'What is react?',
      content: 'React is a front end javascript framework',
    },
    {
      title: 'Why use React?',
      content: 'React is a favorite JS library among engineers',
    },
    {
      title: 'How do you use React?',
      content: 'You use it by creating components',
    },
  ];

  return (
    <div>
      <Search />
    </div>
  );
};

export default App;
