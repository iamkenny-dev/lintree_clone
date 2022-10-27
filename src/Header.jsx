import React from 'react'

const Header = () => {
  return (
    <header>
        <div className='header-block'>
            <img src="/images/profile-img.jpg" id='profile__img' alt="profile-image" />
            <h3 id='twitter'><a href='https://twitter.com/iamkenny-dev'>Kenny Codes</a></h3>
        </div>
    </header>
  )
}

export default Header