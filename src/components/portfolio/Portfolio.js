import React from "react";
import './Portfolio.css';

function Portfolio() {

    const [dato, setDato] = React.useState([]);

    const fetchData = () => {
        fetch(`http://localhost:3001/repositorios/obtener`)
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



    //informacion
    const [data, setData] = React.useState(null);
    React.useEffect(() => {
        fetch("http://localhost:3001/")
            .then((res) => res.json())
            .then((data) => setData(data.message));
    }, []);

    return (
        <section className="Portfolio flex gap-3 max-w-full py-20" id="portfolio">
            <div className="my-portfolio flex items-center justify-center w-full">
                <div className="titles gap-3 w-5/6 text-white">
                    <h1 className=" text-5xl ">{data}</h1>

                </div>
                <div className="projects px-10">
                    <div className=" grid gap-3 grid-cols-3 ">

                        {dato.map((item, index) => (
                            <a key={index} href={item.url} target="_blank" className="max-w-sm rounded-3xl p-4 transition-all overflow-hidden card roboto">
                                <div className="px-6 py-4">
                                    <div className="font-bold text-2xl text-white mb-2">{item.name}</div>
                                    <p className="text-white font-light text-sm">
                                        {item.description}
                                    </p>
                                </div>
                                <div className="px-6 pt-4 pb-2">
                                    <span className="inline-block bg-[#ffffffad] rounded-full px-3 py-1 text-sm font-semibold text-black mr-2 mb-2">{item.topics[0]}</span>
                                    <span className="inline-block bg-[#ffffffad] rounded-full px-3 py-1 text-sm font-semibold text-black mr-2 mb-2">{item.topics[1]}</span>
                                    <span className="inline-block bg-[#ffffffad] rounded-full px-3 py-1 text-sm font-semibold text-black mr-2 mb-2">{item.topics[2]}</span>
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
            </div>

        </section>
    );
};


export default Portfolio;