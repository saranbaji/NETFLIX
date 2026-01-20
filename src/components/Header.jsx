import React from 'react'

const Header = () => {
  return (
    <div className="absolute top-5 left-1/2 w-3/4 flex items-center justify-between transform -translate-x-1/2 z-20">
            <img src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2026-01-09/consent/87b6a5c0-0104-4e96-a291-092c11350111/019ae4b5-d8fb-7693-90ba-7a61d24a8837/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt="Netflix" className="h-20"/>
            <div>
                <button class="bg-white text-black px-4 py-1 rounded mr-2 hover:cursor-pointer">English</button>
                <button class="bg-red-600 text-white px-4 py-1 rounded hover:cursor-pointer">Sign In</button>
            </div>
    </div>
  )
}

export default Header