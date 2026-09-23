import React from 'react'
import Profileimg from '../assets/akash.jpeg'

const ProfileCard = () => {
  return (<>
  <div className='body'>
    <div className='card'>
       <img src={Profileimg} alt="" />
       <h3>NAME : Akash</h3>
       <p>AGE : 20</p>
       <p>COURSE : Full-Stack</p>
       <button>Show Profile</button>
    </div>
  </div>
  </>
  )
}

export default ProfileCard