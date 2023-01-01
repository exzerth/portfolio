import { useRef } from "react";
import emailjs from '@emailjs/browser';

const Form = () => {
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_yraxwfw', 'portfoliov1', form.current, process.env.REACT_APP_EMAIL_API)
      .then((result) => {
          console.log(result.text);
          form.current.reset();

      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <form ref={form} action="" method="POST" onSubmit={handleSubmit} className="">
        <input type="text" id="name" name="name" placeholder="Enter your name" className="bg-transparent placeholder:text-owhite hover:placeholder:opacity-[0.6] outline-none border-b w-[100%] pb-[18px] pt-[30px] md:pb-[38px] md:pt-[50px]"/> <br />
        <input type="email" name="email" placeholder="Enter your email" className="bg-transparent placeholder:text-owhite hover:placeholder:opacity-[0.6] outline-none border-b w-[100%] pb-[18px] pt-[30px] md:pb-[38px] md:pt-[50px]"/> <br />
        <input type="text" name="subject" placeholder="Subject" className="bg-transparent placeholder:text-owhite hover:placeholder:opacity-[0.6] outline-none border-b w-[100%] pb-[18px] pt-[30px] md:pb-[38px] md:pt-[50px]"/> 
        <textarea  name="message" placeholder="Write me a message" id="" cols="10" rows="3" className="bg-transparent placeholder:text-owhite hover:placeholder:opacity-[0.6] outline-none border-b w-[100%] pb-[18px] pt-[50px] md:pb-[38px] md:pt-[70px]"></textarea>
        <button type="submit" className="border-[2px] rounded-[8px] font-semibold bg-transparent outline-none w-full mt-[35px] md:mt-[55px] p-[10px]">SEND</button>
    </form>
  )
}

export default Form