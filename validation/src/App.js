
//Error alert if user tries to submit without all inputs filled in
//Password confirm throws error message if confirm !=password
//If all fields filled out, submit redirects to new webpage
// Text turns white / Cannot be blank goes away

import { useState } from 'react'
import './App.css';

function App() {
  const [firstError, setFirstError] = useState('')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')  
  // const [username, setUsername] = useState('')
  // const [password, setPassword] = useState('')
  // const [confirmpassword, setPassword] = useState('')
  // const [website, confirmPassword] = useState('')
  
  //this doestn't work. missing something <=============>
  function handleSubmit(e) {
    e.preventDefault()
    if (name === '') {
      setFirstError('This Field Is Required')
    } else {
      setFirstError('')
    }
  }

  //===========this works ========>
  function handleSubmit(e) {
    e.preventDefault()
    if (email === '') {
      alert('This field is required')

    }
  }
// function handleEmpty(val) {
//   if (val === '') {
//   return 'empty-class'
// }
//   return val == '' ? 'empty-class' : 'full-class'
// }
// ==================> Need function <========================
// for in the button??  That if all conditions are met, button opens
// new webpage.
  // 
  //   function submitCompleteForm(e)
  //    e.preventDefault()
  //    window.open(href='http://google.com', new window ??
  // }

  return (
    <div className="formBackground">
    <div className = "heading"><h1>Profile Form - All Fields Required </h1>
      <form className ="form" onSubmit={handleSubmit}>
      {/* onSubmit={handleSubmit} */}

        <label htmlFor="name">Name{firstError}</label>
          <input type="text" 
          id="name" 
          onChange={(e)=> setName(e.target.value)}
          />

        <label for="emailInput">Email</label>
          <input type="text" 
          id="email"
          onChange={(e)=> setEmail(e.target.value)}
        />

        <label for="userName">Username</label>
          <input type="text" 
          id="userName">
        </input>

        <label for="password">Password</label>
          <input type="text" 
          id="password">

          </input>

        <label for="confirmPassword" >
          Confirm Password - Cannot be blank</label>
          <input type="text" id="confirmpassword" 
          placeholder="Confirm Password - cannot be blank"></input>

        <label for="websiteInput">Website - Please enter a valid URL</label>
          <input type="text"  placeholder="Website - please enter a valid URL"
          id="website"></input>
      </form>
      {
//Button -- create a function that if all info is filled out, go 
//to new page.
      <button onClick={handleSubmit} type="button" className="submitButton">Submit</button>
      // <button type="button" onClick={(e) => { e.preventDefault(); 
      //   window.location.href='http://google.com';}} className ="submitButton">Submit</button>
        }
    </div>
    </div>
  );
}

export default App;
