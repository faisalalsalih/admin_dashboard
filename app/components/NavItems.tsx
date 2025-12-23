import React from 'react'
import { Link, NavLink } from 'react-router'
import { sidebarItems } from '~/constants'
import { cn } from '~/lib/utils'


const NavItems = () => {
  return (
    <section className='nav-items'>

        <Link to="/" className='link-logo'>
        <img src="/assets/icons/logo.svg" alt="logo" className='size-[30px]'/>
        <h1>Tourvisto</h1>
        </Link>


        <div className='container'>
            <nav className='gap-10'>

                {sidebarItems.map(({id, href, icon, label}) => (

                    <NavLink to={href} key={id}>
                        {({ isActive }: { isActive: boolean }) => (
                            <div className={cn('group nav-items flex items-center flex-row gap-4 p-4 rounded-sm', {'bg-primary-100 !text-white' : isActive})}>
                                <img src={icon} alt={label} className={`size-7 group-hover:invert ${isActive ? 'brightness-0 invert' : 'text-dark-200'}`}/>
                                <span className='text-xl'>{label}</span>
                            </div>
                        )}                        
                    </NavLink>
                    
                ))}

            </nav>
        </div>


    </section>
  )
}

export default NavItems
