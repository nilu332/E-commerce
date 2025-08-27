import React from 'react'
import './NewsLetters.css'

const NewsLetter = () => {
  return (
    <div className='newsletter'>
      <h1>GEt Exclusive Offers on Your Email</h1>
      <p>Subscribe to our newsletter and saty updated</p>
      <div>
        <input type="email" placeholder='Your Email id' />
        <button>Subscribe</button>
      </div>
    </div>
  )
}

export default NewsLetter
