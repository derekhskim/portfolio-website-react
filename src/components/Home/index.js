import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
    import AnimatedLetters from '../AnimatedLetters';
import Logo from './Logo'
import './index.scss';
import Loader from 'react-loaders';

const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = ['N', 'o', 'o', 'b', 'i', 'e', 't', 'u', 'b', 'i', 'e']
    const jobArray = ['M', 'o', 'b', 'i', 'l', 'e', ' ', 'A', 'p', 'p', ' ', 'D', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r', '.']

    useEffect(() => {
        const timer = setTimeout(() => {
            return setLetterClass('text-animate-hover')
        }, 4000)
        return () => clearTimeout(timer)
    }, [])
    
    
    return (
        <>
        <div className="container home-page">
            <div className="text-zone">
                <h1>
                <span className={letterClass}>H</span>
                <span className={`${letterClass} _12`}>i,</span>
                <br />
                <span className={`${letterClass} _13`}>I</span>
                <span className={`${letterClass} _14`}>'m</span>
                <span className={`${letterClass} _15`}>  </span>
                <AnimatedLetters letterClass={letterClass}
                noobieText={'name-array'}
                strArray={nameArray}
                idx={15} />
                <br />
                <AnimatedLetters letterClass={letterClass}
                strArray={jobArray}
                idx={15} />
                </h1>
                <h2>iOS Developer / Flutter Developer</h2>
                <Link to="/contact" className='flat-button'>
                    CONTACT ME
                </Link>
            </div>
            <Logo />
        </div>
        <Loader type="pacman" />
        </>
    );
}

export default Home