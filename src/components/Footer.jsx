import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faLinkedinIn, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
    return (
        <footer className="bg-gray20 text-owhite flex flex-col justify-center items-center w-full mt-[5rem]">
            <div className="text-[28px] font-semibold pt-[2.5rem] text-center">HAVE A PROJECT? <br />LET'S TALK ABOUT IT!</div>
            <div className="flex justify-center items-center pb-[2.2rem] mt-[1.5rem]">
                <ul className="flex justify-center gap-4 lg:gap-6 self-center md:justify-end md:pr-[24px] text-[1.6rem] lg:text-[2rem]">
                    <li><a href="https://twitter.com/3ohh9" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faTwitter} /></a></li>
                    <li><a href="https://www.linkedin.com/in/osinaya-oludare-101218158/" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faLinkedinIn}/></a></li>
                    <li><a href="https://github.com/exzerth" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faGithub}/></a></li>
                    <li><a href="#ig"><FontAwesomeIcon icon={faInstagram}/></a></li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer