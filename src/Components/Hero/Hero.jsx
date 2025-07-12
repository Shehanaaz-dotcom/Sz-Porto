import React from 'react'
import imageSrc1 from '../../assets/develop2.png'

import styles from'./Hero.module.css'

const Hero = () => {
  return (
 

               <div className={styles.hero}> 
      
       <div className={styles.intro}>
  
       <p className= {styles.name} > Hi, I'm Shehanaaz</p> 
        <p className= {styles.f1}> 
  
 I am an aspiring <span className={styles.front}> Front End Developer</span>    </p>
  
  
         <p className= {styles.f1}>  focusing on creating user interfaces for mobile</p>
  
            <p className= {styles.f1}>   and desktop applications </p>

       </div>
  
  
       <div>
  
          <img className={styles.develop} src={imageSrc1}/>        
        
        </div>
        </div>
  

 



  )
}

export default Hero