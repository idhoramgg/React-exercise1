import React from 'react';

//css
import './App.css';

//component
import Avatar from '../src/Components/Avatar/Avatar'
import StudentInfo from '../src/Components/StudentInfo/StudentInfo'
import TodoList from '../src/Components/TodoList/TodoList'
function App() {
  // state
  let name = "David Winalda";
  let status = "Bootcamp Student";
  let bio = "Coding membuat saya belajar bagaimana berfikir";

  return (
    <div className="App">  
      <ul><TodoList/></ul>
     </div>
  );
}

export default App;
