import React from 'react'
import Card from './Card'
import styles from '../../styles/Karusel.module.css'
import one from '../../../public/monters/1.jpg'
import two from '../../../public/monters/2.jpg'
import three from '../../../public/monters/3.jpg'
import four from '../../../public/monters/4.jpg'
import five from '../../../public/monters/5.jpg'
import six from '../../../public/monters/6.jpg'
import seven from '../../../public/monters/7.jpg'
import eight from '../../../public/monters/8.jpg'
import nine from '../../../public/monters/9.jpg'
import ten from '../../../public/monters/10.jpg'

const Karusel = () => {
  return (
    <div className={styles.marquee}>
        <div className={styles.marquee__content} id="marguee">
           <span><Card  def={one} /></span> 
           <span><Card  def={two} /></span> 
           <span><Card  def={three} /></span> 
           <span><Card  def={four} /></span>
           <span><Card  def={five} /></span> 
           <span><Card  def={six} /></span> 
           <span><Card  def={seven} /></span> 
           <span><Card  def={eight} /></span>
           <span><Card  def={nine} /></span> 
           <span><Card  def={ten} /></span>
           <span><Card  def={nine} /></span> 
           <span><Card  def={ten} /></span>
        </div>

        <div aria-hidden='true' className={styles.marquee__content}>
           <span><Card  def={one} /></span> 
           <span><Card  def={two} /></span> 
           <span><Card  def={three} /></span> 
           <span><Card  def={four} /></span> 
           <span><Card  def={five} /></span> 
           <span><Card  def={six} /></span> 
           <span><Card  def={seven} /></span> 
           <span><Card  def={eight} /></span>
           <span><Card  def={nine} /></span> 
           <span><Card  def={ten} /></span>
           <span><Card  def={nine} /></span> 
           <span><Card  def={ten} /></span>
        </div>
    </div>
  )
}

export default Karusel