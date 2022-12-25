import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faLinkedinIn, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons'
import Form from './Form'

const Contact = () => {
  return (
    <>
    <div id='contact' className="container mx-auto px-[15px] md:px-[24px] mb-[40px] md:mb-[50px]">
      <div className="relative mb-[15px]">
          <div className="text-[32px] text-gray20 font-semibold">Contact</div>
          <span className="absolute w-[20%] border-[3px] border-[#E6E345]"></span>
      </div>
      <div className="font-semibold text-[16px] lg:text-[24px] lg opacity-[.6] mb-[10px] mt-[10px]">LET'S WORK TOGETHER</div>
      <div className="flex flex-col gap-8 lg:flex-row">
        <div className="one lg:w-[50%] text-gray20">
          <div className="gett pb-[8px] lg:text-[24px]">You can reach me through any of my socials below</div>
          <ul className="flex justify-start gap-4 lg:gap-6 self-center md:pr-[24px] text-[1.6rem] lg:text-[2rem]">
              <li><a href="https://twitter.com/3ohh9" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faTwitter} /></a></li>
              <li><a href="https://www.linkedin.com/in/osinaya-oludare-101218158/" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faLinkedinIn}/></a></li>
              <li><a href="https://github.com/exzerth" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faGithub}/></a></li>
              <li><a href="#ig"><FontAwesomeIcon icon={faInstagram}/></a></li>
          </ul>
        </div>
        <div className="two lg:w-[70%] bg-bgfoundation bg-bgblack bg-blend-overlay rounded-[10px] px-[35px] pt-[25px] pb-[45px] md:px-[55px] md:pt-[45px] md:pb-[85px] text-owhite">
          <Form/>
        </div>
      </div>
    </div>
    </>
  )
}

export default Contact