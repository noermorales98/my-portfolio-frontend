import React from "react";
import "./Contact.css";


function Contact() {

    const [dato, setDato] = React.useState([]);

    const fetchData = () => {
        fetch(`http://localhost:3001/info`)
            .then((response) => response.json())
            .then((actualDato) => {
                console.log(actualDato);
                setDato(actualDato);
            })
            .catch((err) => {
                console.log(err.message);
            });
    };

    React.useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className="Contact flex justify-center items-center" id="contactme">
            <div className="w-4/5 m-auto text-center h-full">
                <h1 className="text-6xl">Contact me</h1>
                <p>How can help you? I'd love to hear from you:</p>
                <div className="flex w-3/5 m-auto">


                    <div className="w-full flex flex-col gap-1 p-10">
                        <a href={'https://wa.me/+52' + dato[0]?.phone} target="_blank" className=" flex justify-center items-center w-2/4 m-auto bg-green-400 p-4 px-8 rounded-3xl ">
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-whatsapp" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9" />
                                    <path d="M9 10a0.5 .5 0 0 0 1 0v-1a0.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a0.5 .5 0 0 0 0 -1h-1a0.5 .5 0 0 0 0 1" />
                                </svg>
                            </span>
                            <span>
                                WhatsApp
                            </span>
                        </a>
                        <a href={'mailto:' + dato[0]?.email} target="_blank" className=" flex justify-center items-center w-2/4 m-auto bg-blue-500 p-4 px-8 rounded-3xl ">
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-mail" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <rect x="3" y="5" width="18" height="14" rx="2" />
                                    <polyline points="3 7 12 13 21 7" />
                                </svg>
                            </span>
                            <span>
                                Email
                            </span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;