'use client'
import React, { useState, FormEvent } from 'react';

type FormData = {
    name: string;
    email: string;
    message: string;
    info: string;
}

const ContactForm = () => {
    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        message: '',
        info: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setFormData((prevState) => ({
            ...prevState,
            info: 'Sending...'
        }));
        try {
            const response = await fetch('/api/send', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                throw new Error('Server responded with an error');
            }

            setFormData({
                name: '',
                email: '',
                message: '',
                info: 'Thank you! I\'ll be in touch soon.'
            });
        } catch (error) {
            console.log(error);
            setFormData((prevState) => ({
                ...prevState,
                info: 'Error. Please try again.'
            }));
        }
    };

    return (
        <form className="contact-form" onSubmit={handleSubmit}>
            <input
                type="text"
                id="name"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                required
            />

            <input
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
            /><textarea
                id="message"
                name="message"
                placeholder="Message"
                value={formData.message}
                onChange={handleChange}
                required
            />
            <button className="button" type="submit">Send Message</button>
            {formData.info &&
                <span className="contact-form__info">{formData.info}</span>
            }
        </form>
    );
}

export default ContactForm;
