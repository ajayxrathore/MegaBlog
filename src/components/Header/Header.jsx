import React from 'react'
import { useSelector } from 'react-redux'
import {LogoutBtn,Container} from "../index"
import { Link, useNavigate } from 'react-router-dom'
function Header() {
  const authStatus = useSelector((state) => state.auth.status)
  const navigate = useNavigate()

  const navItems = [
    {
      name: 'Home',
      slug: "/",
      active: true
    }, 
    {
      name: "Login",
      slug: "/login",
      active: !authStatus,
  },
  {
      name: "Signup",
      slug: "/signup",
      active: !authStatus,
  },
  {
      name: "All Posts",
      slug: "/all-posts",
      active: authStatus,
  },
  {
      name: "Add Post",
      slug: "/add-post",
      active: authStatus,
  },
  ]


  return (
    <header className='py-4 mb-4 shadow-md bg-gray-800 text-white'>
      <Container>
        <nav className='flex justify-between items-center'>
          <div className='mr-6'>
            <Link to='/'>
              <h2 className=''>MegaBlog</h2>

              </Link>
          </div>
          <ul className='flex ml-auto space-x-4'>
            {navItems.map((item) => 
            item.active ? (
              <li key={item.name}>
                <button
                onClick={() => navigate(item.slug)}
                className='inline-bock px-6 py-2  duration-200 hover:bg-blue-100 rounded-full'
                >{item.name}</button>
              </li>
            ) : null
            )}
            {authStatus && (
              <li>
                <LogoutBtn />
              </li>
            )}
          </ul>
        </nav>
        </Container>
    </header>
  )
}

export default Header