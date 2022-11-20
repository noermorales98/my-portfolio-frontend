import React from "react";
import "./Contact.css";
import setting from "./settings.svg"

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
            <div className="w-4/5 flex gap-0 datos">
                <div className="w-1/2 m-auto text-center h-full flex flex-col">
                    <h1 className="md:text-6xl text-3xl">Contáctame</h1>
                </div>
                <div className="flex w-1/2 contactos">
                    <div className="w-full flex flex-col gap-1 p-10">
                        <p className="text-2xl">¿Cómo puede ayudarte? <br /> Me encantaría saber de ti</p>
                        <div className="boton-contacto pl-2 w-full flex flex-col gap-2">
                            <a className="bg-[#3ad37c] hover:bg-[green] py-2 rounded-full px-5 text-center w-40" target="_blank" href={'https://wa.me/+52' + dato[0]?.phone}>WhatsApp</a>
                            <a className="bg-[#5173c6] hover:bg-[blue] py-2 rounded-full px-5 text-center w-40" target="_blank" href={'mailto:' + dato[0]?.email}>Correo</a>
                        </div>
                    </div>
                </div>
            </div>
            <a className="settings" href="/admin">
                <img src={setting} alt="settings" />
            </a>
        </div>
    )
}

export default Contact;