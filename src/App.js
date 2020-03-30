import React, { Component } from 'react';
import './App.css'
import Customer from './components/Customer';

const customers = [
  {
    'id': 1,
    'image': 'https://placeimg.com/64/64/1',
    'name': '홍길동',
    'birthday': '790217',
    'gender': '남자',
    'job': '프로그래머'
  },
  {
    'id': 2,
    'image': 'https://placeimg.com/64/64/2',
    'name': '김은지',
    'birthday': '900217',
    'gender': '여자',
    'job': '대학생'
  },
  {
    'id': 3,
    'image': 'https://placeimg.com/64/64/3',
    'name': '황기준',
    'birthday': '80117',
    'gender': '남자',
    'job': '공무원'
  }
]

class App extends Component {
  render() {
    return (
      <div>
        {
          customers.map(c => {
            return (<Customer
              key={c.id}
              id={c.id}
              image={c.image}
              name={c.name}
              birthday={c.birthday}
              gender={c.gender}
              job={c.job}
            />
            )
          })
        }
      </div>
    );
  }
}

export default App;