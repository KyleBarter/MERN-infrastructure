import { useState, useEffect } from 'react'

export default function Contact(){
    useEffect(() => {
        if(window.innerWidth > 550){       
                window.scrollTo({
                        top: 1250,
                        behavior: 'smooth'
                })
        } 
    })
    
    const FORM_ENDPOINT = "https://public.herotofu.com/v1/14c30210-350f-11ee-9ba1-bb0a8466b803"
    const [submitted, setSubmitted] = useState(false)
    const handleSubmit = (e) => {
        e.preventDefault();

        const inputs = e.target.elements
        const data = {}

        for (let i = 0; i < inputs.length; i++) {
            if (inputs[i].name) {
            data[inputs[i].name] = inputs[i].value;
            }
        }

        fetch(FORM_ENDPOINT, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
        .then((response) => {
            if (!response.ok) {
                throw new Error('form response not ok')
            }

            setSubmitted(true)
        })
        .catch((err) => {
            e.target.submit();
        });
    };

    if (submitted) {
        return (
            <>
                <div className="text-2xl">Thank you!</div>
                <div className="text-md">I'll be in touch soon.</div>
            </>
        );
    }



    return (    
        <div className='form-container'>
            <a href="https://www.linkedin.com/in/kyle-barter-039bb0107/">
                <img src="https://i.imgur.com/vi1aLbh.png"  />
            </a>
            <a href="https://github.com/KyleBarter">
                <img src="https://i.imgur.com/mIkjkqc.png"  />
            </a>
            <div className='contact-form'>
                <form 
                    action={FORM_ENDPOINT}
                    onSubmit={handleSubmit}
                    method='POST'
                >
                    <table>
                        <tbody>
                            <tr>
                                <td>
                                    <input 
                                        type="text" 
                                        name="name" 
                                        placeholder= "Name" 
                                        required
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <input 
                                        type="email" 
                                        placeholder='Email'
                                        name='email'
                                        required
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <input 
                                        type="text" 
                                        placeholder='Number (optional)'
                                        name='number'
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <textarea 
                                        name="message" 
                                        placeholder="Your message" 
                                        cols="30" 
                                        rows="10"
                                        required
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td>
                                <button
                                    type='submit'
                                >
                                    Send message
                                </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </form>
            </div>
        </div>    
    )
}