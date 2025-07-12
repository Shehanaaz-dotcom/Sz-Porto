import React from 'react'
import imageSrc2 from '../../assets/htmli.png'
import imageSrc3 from '../../assets/css.png'
import imageSrc4 from '../../assets/js8.jpg'
import imageSrc5 from '../../assets/react.png'
import imageSrc6 from '../../assets/bootstrap3.png'
import imageSrc7 from '../../assets/DXC.png'
import imageSrc8 from '../../assets/Aitam.jpg'
import styles from './About.module.css'

 const About = () => {
  return (
  

  
<section id= "about">
  <h1> About </h1>
  <div className="details">
  
  <p className="s1"> I have Passion for creating dynamic, user-friendly websites with strong technical skills.   </p> 

                  <p className ="s2">  Proficient in building and optimizing websites for desktop and mobile devices.</p>  
                          
                       
</div>

<div className={styles.column1}>
  <div className={styles.column2}>

    <div className={styles.skills}>
      <h3>Skills</h3>
       <div className={styles.skills1}>
        <div className={styles.im}><img  src={imageSrc2}/></div>
         <div className={styles.im2}>  <img  src={imageSrc3}/></div>
          <div className={styles.im3}>   <img  src={imageSrc4}/></div>
         <div className={styles.im4}>   <img  src={imageSrc5}/></div>
        <div className={styles.im5}> <img  src={imageSrc6}/></div>

        
        </div>

      
  </div>

  </div>


 <div className={styles.column3}>


 <div className={styles.column4}></div>


 <div className={styles.column5}></div>






 </div>




 </div>

</section>








  )
}

export default About