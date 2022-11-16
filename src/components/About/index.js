import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAndroid, faApple, faGit, faGithub, faSwift } from '@fortawesome/free-brands-svg-icons'
import { SiFlutter } from "react-icons/si"
import Loader from 'react-loaders'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    const timer = setTimeout(() => {
        return setLetterClass('text-animate-hover')
    }, 4000)
    return () => clearTimeout(timer)
}, [])

  return(
    <>
    <div className='container about-page'>
      <div className='text-zone'>
        <h1>
          <AnimatedLetters
          letterClass={letterClass}
          strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
          idx={15}
          />
        </h1>
        <p>
        I am a self-taught Flutter/iOS developer who is still studying and improving my knowledge and skills everyday to become one of the most impactful person in the mobile application development industry. 
        I am eager to learn and very passionate in making a mobile application. 
        I am an open-minded and willing to learn everything that it takes to become a mobile developer. 
        </p>
        <p>
        I have named myself "Noobietubie" which is a nickname that I have used in the online space since the year 2008. 
        Can't exactly remember why I have named it such way, but I believe it was when I was playing FPS game called Sudden Attack, and my friend had a quite similar name. 
        I think his nickname was "NoobBoob".  
        </p>
        <p>
        On the right is a square box animation that I am currently capable of! 
        Please feel free to take a look! 
        </p>
      </div>

      <div className='stage-cube-cont'>
        <div className='cubespinner'>
          <div className='face1'>
            <FontAwesomeIcon icon={faGit} color="#191919" />
          </div>
          <div className='face2'>
            <FontAwesomeIcon icon={faAndroid} color="#A4C639" />
          </div>
          <div className='face3'>
            <FontAwesomeIcon icon={faSwift} color="#F05138" />
          </div>
          <div className='face4'>
            <SiFlutter  />
          </div>
          <div className='face5'>
            <FontAwesomeIcon icon={faApple} color="#737373" />
          </div>
          <div className='face6'>
            <FontAwesomeIcon icon={faGithub} color="#191919" />
          </div>
        </div>

      </div>
    </div>
    <Loader type="pacman" />
    </>
  )
}

export default About