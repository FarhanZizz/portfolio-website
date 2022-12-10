import emailjs from '@emailjs/browser';
import React, { useRef } from 'react';

const Contact = () => {
    const form = useRef()
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_omtw20j', 'template_szdqwbn', form.current, 'em4Mkgp4vhRuOsTMo')
            .then((result) => {
                e.target.reset()
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };
    return (
        <section className='my-28 grid grid-cols-1 lg:grid-cols-2 gap-24'>
            <div className=''>
                <h1 className='text-8xl font-bold mb-5'>Contact</h1>
                <p className='text-center md:text-left text-xl'>I would love to hear about your project and how I could help. Please fill in the form, and I'll get back to you as soon as possible.</p>
            </div>
            <form ref={form} onSubmit={sendEmail}>
                <input placeholder='NAME' className='focus:bg-transparent focus:outline-0 input input-ghost border-0 border-b-2 border-b-white w-full my-5' type="text" name="user_name" required />
                <input placeholder='EMAIL' className='focus:bg-transparent focus:outline-0 input input-ghost border-0 border-b-2 border-b-white w-full my-5' type="email" name="user_email" required />
                <textarea name='message' className="textarea textarea-ghost focus:bg-transparent focus:outline-0 border-0 border-b-2 border-b-white w-full my-5" placeholder="MESSAGE" required></textarea>
                <div className="flex justify-center lg:justify-end">
                    <button className='custom-btn' value="Send" type="submit"> Send Message</button>
                </div>
            </form>
        </section>
    );
};

export default Contact;