import './index.scss';
import { useEffect, useRef } from 'react'
import gsap from 'gsap-trial'
import DrawSVGPlugin from 'gsap-trial/DrawSVGPlugin'
import LogoS from '../../../assets/images/logo-s.png'

const Logo = () => {

    const bgRef = useRef()
    const outlineLogoRef = useRef()
    const solidLogoRef = useRef()
    const tl = useRef(gsap.timeline())

    useEffect(() => {
        gsap.registerPlugin(DrawSVGPlugin)

        tl
            .current
            .to(bgRef.current, {
                duration: 1,
                opacity: 1,
            })
            .from(outlineLogoRef.current, {
                drawSVG: 0,
                duration: 5,
            })

        gsap.fromTo(
            solidLogoRef.current,
            {
                opacity: 0,
            },
            {
                opacity: 1,
                delay: 4,
                duration: 4,
            }
        )
    }, [])

    return (
        <div className="logo-container" ref={bgRef}>
            <img
                className="solid-logo"
                ref={solidLogoRef}
                src={LogoS}
                alt="JavaScript,  Developer"
            />

            <svg 
                version="1.0" 
                xmlns="http://www.w3.org/2000/svg"
                width="826pt" 
                height="576pt" 
                viewBox="0 0 826 576"
                preserveAspectRatio="xMidYMid meet">

            <g 
                className="svg-container"
                fill="none"
                transform="translate(0 576) scale(.1, -.1)"
            >
                <path
                    ref={outlineLogoRef} 
                    d="M3667 5481 c-4 -152 -7 -459 -7 -683 0 -225 -2 -408 -4 -408 -3 0 -40 26 -83 59 -631 476 -1460 559 -2158 216 -477 -233 -856 -623 -1110 -1140 -118 -238 -173 -395 -228 -645 -64 -287 -61 -209 -64 -1558 l-4 -1232 47 0 c164 0 405 125 530 276 122 145 184 278 236 502 7 30 13 327 18 832 l7 785 26 121 c144 660 592 1140 1179 1265 121 26 370 31 478 11 270 -52 525 -183 721 -369 158 -151 263 -295 355 -488 l52 -110 5 -270 c5 -270 20 -420 62 -614 128 -603 431 -1132 860 -1499 441 -378 994 -567 1532 -524 285 23 507 83 759 207 252 123 437 258 639 466 385 396 644 923 721 1464 23 161 23 459 0 620 -38 275 -125 542 -265 812 -431 828 -1224 1325 -2061 1289 -390 -16 -731 -126 -1065 -343 -115 -75 -218 -155 -291 -225 l-51 -50 -6 334 c-4 244 -10 353 -21 408 -90 433 -378 721 -762 763 l-41 5 -6 -277z m2584 -1680 c488 -112 871 -454 1024 -914 57 -173 70 -252 70 -442 0 -122 -5 -195 -18 -258 -39 -194 -124 -390 -237 -550 -76 -105 -248 -273 -350 -342 -162 -108 -359 -187 -549 -219 -119 -20 -341 -21 -452 -1 -354 61 -670 253 -882 533 -417 554 -365 1322 123 1813 209 210 464 341 770 395 110 19 389 11 501 -15z"/>
                </g>
            </svg>
        </div>
    )
}

export default Logo