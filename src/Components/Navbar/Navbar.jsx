import React, {useState} from 'react'

import styles from './Navbar.module.css'



export const Navbar = () => {

  return (
  
  <div className={styles.navbar}>
      <a className={styles.title} href="/"> Portfolio </a>
  
              <div className={styles.menu}>
                
                <ul className={styles.menuItems}>
                  <li><a href="#Home">Home</a></li>
                <li><a href="#About">About</a></li>
                <li><a href="#Projects"> Projects</a></li>
                <li><a href="#Contact">Contact</a></li>
  
             </ul>

            </div>
</div>
 
  )
}

export default Navbar