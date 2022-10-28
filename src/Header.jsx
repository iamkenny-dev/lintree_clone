import React from 'react'

const Header = () => {
  return (
    <header>
        <div className='header-block'>
            <img src="/images/profile-img.jpg" id='profile__img' alt="profile-image" />
            <h3 id='twitter'><a href='https://twitter.com/iamkenny_co'>Kenny Codes</a></h3>
        </div>
        <div>
         <img className='mobile_icon' src="/images/mobileshare.png" alt="share_icon" />
         <img className='desktop_icon' src="/images/wideshare.png" alt="share_icon" />
        </div>
    </header>
  )
}

export default Header