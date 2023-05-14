import React from 'react'
import '../style.scss'
import {Link, Outlet} from 'react-router-dom'

const MainLayout = () => {
  return (
    <div className='main-layout'>
        <nav>
            <ul>
                <Link to=''><li>Accaunt</li></Link>
                <Link to='payment'><li>Odenis</li></Link>
                <Link to='schedule'><li>Cedvel</li></Link>
                <Link to='point'><li>Qiymetlendirme</li></Link>
            </ul>
        </nav>
        <section>
           <Outlet/>
        </section>
    </div>
  )
}

export default MainLayout
