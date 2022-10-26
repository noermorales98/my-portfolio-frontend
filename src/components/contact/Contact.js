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
                <p>HOW can help you? I'd love to hear from you:</p>
                <div className="flex w-3/5 m-auto">

                    {dato.map((item, index) => (
                        <div className="w-1/2 flex flex-col	gap-1 p-10">
                            <a href={'https://wa.me/+52' + item.phone} className=" bg-green-400 p-4 px-8 rounded-3xl ">{item.phone}</a>
                            <a href={'mailto:' + item.email} className=" bg-blue-500 p-4 px-8 rounded-3xl ">{item.email}</a>
                        </div>
                    ))}

                    <div className="w-1/2 flex flex-col	gap-1 p-10">adios</div>
                </div>
            </div>
        </div>
    )
}

export default Contact;