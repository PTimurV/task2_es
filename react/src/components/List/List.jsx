import React, { useState } from 'react';
import './List.css';

export const List = ({ texts }) => {
  return (
      <ul>
      {texts.map((text, index) => (
          <li key={index} className='text'>{text}</li>
      ))}
    </ul>
    
  );
};

export default List;