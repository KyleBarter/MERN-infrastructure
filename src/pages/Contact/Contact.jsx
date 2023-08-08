import { useState } from 'react'

export default function Contact(){
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
                                        placeholder='Number'
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