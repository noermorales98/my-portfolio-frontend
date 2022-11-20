import { render } from "@testing-library/react";
import React from "react";
import "./Admin.css";


async function sendDatos(datos) {
    return fetch('http://localhost:3001/info/update', {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(datos)
    })
        .then(data => data.json())
}

async function saveDatos(repo) {
    if (repo === "") {
        alert("No se puede guardar un repositorio vacio")
    } else {
        return fetch(`http://localhost:3001/repositorios/guardar/${repo}`, {
            method: 'POST',
        }).then(console.log("Guardado"))
    }
}

async function deleteDatos() {
    return fetch('http://localhost:3001/repositorios/eliminar', {
        method: 'DELETE',
    }).then(console.log("Eliminado"))
}


function Admin({ setInfo }) {

    const [username, setUserName] = React.useState();
    const [lastname, setLastname] = React.useState();
    const [email, setEmail] = React.useState();
    const [aboutme, setAboutme] = React.useState();
    const [usergithub, setUsergithub] = React.useState();
    const [phone, setPhone] = React.useState();
    const [knowledges, setKnowledges] = React.useState();
    const [job, setJob] = React.useState();

    //informacion
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

    const [data, setData] = React.useState([]);
    React.useEffect(() => {
        fetch("http://localhost:3001/repositorios/obtener")
            .then((res) => res.json())
            .then((data) => setData(data));
    }, []);


    React.useEffect(() => {
        fetchData();
    }, []);



    //boton enviar
    const handleSubmit = async e => {
        e.preventDefault();
        const info = await sendDatos({
            username,
            lastname,
            job,
            aboutme,
            knowledges,
            email,
            phone,
            usergithub
        });
        if (usergithub != null) {
            fetch('http://localhost:3001/repositorios/eliminar', {
                method: 'DELETE',
            }).then(console.log("Eliminado"))
        }
        sendDatos(info);
        //deleteDatos();
        saveDatos(usergithub);
        window.location.reload()

    }

    return (

        <form onSubmit={handleSubmit}>
            <div className="bg-gray-100">
                <div className="w-full text-black bg-main-color">
                    <div className="flex justify-between flex-row max-w-screen-xl px-4 mx-auto md:items-center md:justify-between md:flex-row md:px-6 lg:px-8">
                        <div className="p-4 flex flex-row items-center justify-between">
                            <a href="/" className="text-lg font-semibold tracking-widest uppercase rounded-lg focus:outline-none focus:shadow-outline">{dato[0]?.username} {dato[0]?.lastname}</a>
                        </div>
                        <nav className="flex-col pb-4 md:pb-0 md:flex md:justify-end md:flex-row">
                            <div className="relative" >
                                <button type="submit" className="bg-cyan-700 px-6 exit flex text-white focus:text-white flex-row rounded-full items-center space-x-2 w-full py-2 mt-2 text-sm font-semibold text-left hover:bg-cyan-900 md:w-auto md:mt-0 md:ml-4 focus:bg-[#000] focus:outline-none focus:shadow-outline">
                                    <span>Save</span>
                                </button>
                            </div>
                        </nav>
                    </div>
                </div>
                {/* End of Navbar */}
                <div className="container mx-auto my-5 p-5 min-h-screen">
                    <div className="md:flex no-wrap md:-mx-2 ">
                        {/* Left Side */}
                        <div className="w-full md:w-3/12 md:mx-2">
                            {/* Profile Card */}
                            <div className="bg-white p-3 rounded-xl ">
                                <h1 className="text-gray-900 font-bold text-xl leading-8 my-1">{dato[0]?.username} {dato[0]?.firstname}</h1>
                                <input type="text" className="text-gray-600 font-lg text-semibold leading-6 pb-4" id="job" placeholder={dato[0]?.job} onChange={e => setJob(e.target.value)} />
                                <h3 className="text-gray-600 font-lg text-semibold text-sm leading-6">Email</h3>
                                <input type="email" className="text-gray-600 font-lg text-semibold leading-6 pb-4 w-full" id="email" placeholder={dato[0]?.email} onChange={e => setEmail(e.target.value)} />
                                <h3 className="text-gray-600 font-lg text-semibold text-sm leading-6">Phone</h3>
                                <input type="number" className="text-gray-600 font-lg text-semibold leading-6 pb-4 w-full" id="number" placeholder={dato[0]?.phone} onChange={e => setPhone(e.target.value)} />
                                <ul className="bg-gray-100 text-gray-600 hover:text-gray-700 hover:shadow py-2 px-3 mt-3 divide-y rounded-xl shadow-sm">
                                    <li className="flex items-center py-3 font-bold">
                                        <span>Skills</span>
                                    </li>
                                    {dato.map((recipe) => {
                                        return <div key={recipe}>
                                            {recipe.knowledges.map((type, index) => {
                                                return <span key={index}>
                                                    <li className="flex items-center py-1">{type}</li>
                                                </span>
                                            })}
                                        </div>
                                    })}
                                </ul>
                            </div>
                            {/* End of profile card */}
                            <div className="my-4" />
                        </div>
                        {/* Right Side */}
                        <div className="w-full md:w-9/12 mx-2 h-64">
                            {/* Profile tab */}
                            {/* About Section */}
                            <div className="bg-white p-3 shadow-sm rounded-xl">
                                <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8">
                                    <span clas="text-green-500">
                                        <svg className="h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                        </svg>
                                    </span>
                                    <span className="tracking-wide">About me</span>
                                </div>
                                <div className="text-gray-700">
                                    <textarea className="grid md:grid-cols-2 text px-4 py-2 w-1/2 resize-none h-20" placeholder={dato[0]?.aboutme} onChange={e => setAboutme(e.target.value)}>
                                    </textarea>

                                    <div className="grid md:grid-cols-2 text-sm">
                                        <div className="grid grid-cols-2">
                                            <div className="px-4 py-2 font-semibold">Name</div>
                                            <input className="px-4 py-2" placeholder={dato[0]?.username} onChange={e => setUserName(e.target.value)}></input>
                                        </div>
                                        <div className="grid grid-cols-2">
                                            <div className="px-4 py-2 font-semibold">Last Name</div>
                                            <input className="px-4 py-2" placeholder={dato[0]?.lastname} onChange={e => setLastname(e.target.value)}></input>
                                        </div>
                                        <div className="grid grid-cols-2">
                                            <div className="px-4 py-2 font-semibold">Username Repositories</div>
                                            <input className="px-4 py-2" placeholder={dato[0]?.usergithub} onChange={e => setUsergithub(e.target.value)}></input>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* End of about section */}
                            <div className="my-4" />
                            {/* Experience and education */}
                            <div className="bg-white p-3 shadow-sm rounded-xl">
                                <div className="grid grid-cols-2">
                                    <div>
                                        <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8 mb-3">
                                            <span clas="text-green-500">
                                                <svg className="h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                                </svg>
                                            </span>
                                            <span className="tracking-wide">Projects</span>
                                        </div>
                                        <ul className="list-inside space-y-2">
                                            {data.map((item, index) => (
                                                <li key={index}>
                                                    <div className="text-teal-600">{item.name}</div>
                                                    <div className="text-gray-500 text-xs">{item.description}</div>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                                {/* End of Experience and education grid */}
                            </div>
                            {/* End of profile tab */}
                        </div>
                    </div>
                </div>
            </div>
        </form>
    )
}

export default Admin;
