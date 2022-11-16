import './index.scss';

const AnimatedLetters = ({ letterClass, strArray, idx, noobieText }) => {
    return (
        <span>
            {
                strArray.map((char, i) =>(
                    <span key={char + i} className={`${letterClass} _${i + idx} ${noobieText}` }>
                        {char}
                    </span>
                ))
            }
        </span>
    )
};

export default AnimatedLetters