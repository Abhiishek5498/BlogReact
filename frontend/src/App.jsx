import React from 'react'

export const App = () => {
  return (
    <>
    <div>AI BlOGS</div>
    <ol>
      <li>AI in Education</li>
      <li>AI in Medical</li>
      <li>AI in Technology</li>
      <li>AI in Finance</li>
      <li>AI in Editing</li>
    </ol>
    <form>
    <div>
    <label for="name">Name:</label>
    <input type="text" id="name" name="name" required/>
    <br/>
     <label for="email">Email:</label>
    <input type="email" id="email" name="email" required/>
    <br/>
    <br/>
     <label for="message">Message:</label>
    <textarea type="text" id="name" name="name" required/>
    <br/>
    
    <button type ="submit">Submit</button>
  </div>
    </form>
    </>
  )
}

export default App