import React, { useRef } from 'react'
import emailjs from '@emailjs/browser';
import './Join.css'
function Join() {
    const form = useRef()
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_w5gygsr', 'template_1v44l1w', form.current, 'G0rL80WdSAyt5fG3U')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
         
    };
  return (
    <div className='Join' id='join-us'>
        <div className="left-j">
            <hr />
            <div>
                <span className='stroke-text'>Ready to</span>
                <span>Level up</span>
            </div>
            <div>
                <span>your body</span>
                <span className='stroke-text'>with us?</span>
            </div>
        </div>
        <div className="right-j">
            <form ref={form} className="email-container" onSubmit={sendEmail}>
                <input type="email" name='user_email' placeholder='enter your Email address' />
                <button className='btn btn-j'>Join Now</button>
            </form>
        </div>
    </div>
  )
}

export default Join