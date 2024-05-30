import React, { useState } from 'react';
import Main6 from './router-dom 6/Main6';
import Main64 from './router-dom 6.4/Main64';



function App() {

  const contentComments = [
    {
      'id'  : 0,
      'name': 'chanho',
      'text': '안녕하세요 테스트 중입니다!😝'
    },
    {
      'id'  : 1,
      'name': 'hoho',
      'text': '위코드으~~😀😀😀😀'
    }
  ]

  
  return (
    <div>
      {
        contentComments.map((list) => (
          <li key={list.id}>
            {list.name}
            {list.text}
          </li>
        ))
      }
    </div>
  );
    
}

export default App;

