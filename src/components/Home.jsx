import React from 'react'
import { Link } from 'react-router-dom'
import './Home.styles.css'


function Home () {
    return (
      <>
        <div>
          <h2>Test your knowledge on New Zealand history 
              by taking our ANZAC quiz below!</h2>
              
          <h4>Select the answer you think is correct, and 
              your total score will be revealed at the end.</h4>
          <p className='poem'>
            <em>
              They shall grow not old, as we that are left grow old;<br />
              Age shall not weary them, nor the years condemn.<br />
              At the going down of the sun and in the morning<br />
              We will remember them.
            </em>
          </p>
          <h4>Lest we forget</h4>
          <h4>- Laurence Binyon</h4>
        </div>
        <div>
          <Link to='/quiz/1' >
            <button className='button'>Start Quiz</button>
          </Link>
        </div>
      </>
    )
}

export default Home
