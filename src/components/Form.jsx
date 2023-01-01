import { useRef } from "react";
import axios from "axios";
const API_PATH = 'http://localhost:3000/api/index.php';

const Form = () => {
  const nameRef = useRef()
  const emailRef = useRef()
  const subjectRef = useRef()
  const msgRef = useRef()

  const handleSubmit = async (event) => {

    event.preventDefault()

    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const subject = subjectRef.current.value;
    const message = msgRef.current.value;

    axios({
      method: 'post',
      url: `${API_PATH}`,
      headers: { 'content-type': 'application/json' },
      data: {
        name,
        email,
        subject,
        message
      }
    })
      .then(result => {
        console.log(result)
      })
      .catch(error => console.log(error));



  };


  return (
    <form action="action.php" method="POST" onSubmit={handleSubmit} className="">
        <input ref={nameRef} type="text" id="name" name="name" placeholder="Enter your name" className="bg-transparent placeholder:text-owhite hover:placeholder:opacity-[0.6] outline-none border-b w-[100%] pb-[18px] pt-[30px] md:pb-[38px] md:pt-[50px]"/> <br />
        <input ref={emailRef} type="email" id="email" name="email" placeholder="Enter your email" className="bg-transparent placeholder:text-owhite hover:placeholder:opacity-[0.6] outline-none border-b w-[100%] pb-[18px] pt-[30px] md:pb-[38px] md:pt-[50px]"/> <br />
        <input ref={subjectRef} type="text" name="subject" placeholder="Subject" className="bg-transparent placeholder:text-owhite hover:placeholder:opacity-[0.6] outline-none border-b w-[100%] pb-[18px] pt-[30px] md:pb-[38px] md:pt-[50px]"/> 
        <textarea ref={msgRef} name="message" placeholder="Write me a message" id="" cols="10" rows="3" className="bg-transparent placeholder:text-owhite hover:placeholder:opacity-[0.6] outline-none border-b w-[100%] pb-[18px] pt-[50px] md:pb-[38px] md:pt-[70px]"></textarea>
        <button type="submit" className="border-[2px] rounded-[8px] font-semibold bg-transparent outline-none w-full mt-[35px] md:mt-[55px] p-[10px]">SEND</button>
    </form>
  )
}

export default Form


