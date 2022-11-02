import { data } from "autoprefixer";
import React from "react";
import "./Admin.css";

function Admin() {
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

    return (

        <form>
            <div className="bg-gray-100">
                <div className="w-full text-black bg-main-color">
                    <div className="flex flex-col max-w-screen-xl px-4 mx-auto md:items-center md:justify-between md:flex-row md:px-6 lg:px-8">
                        <div className="p-4 flex flex-row items-center justify-between">
                            <a href="/" className="text-lg font-semibold tracking-widest uppercase rounded-lg focus:outline-none focus:shadow-outline">{dato[0]?.username} {dato[0]?.lastname}</a>
                            <button className="md:hidden rounded-lg focus:outline-none focus:shadow-outline">
                                <svg fill="currentColor" viewBox="0 0 20 20" className="w-6 h-6">
                                    <path x-show="!open" fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z" clipRule="evenodd" />
                                    <path x-show="open" fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                                </svg>
                            </button>
                        </div>
                        <nav className="flex-col flex-grow pb-4 md:pb-0 hidden md:flex md:justify-end md:flex-row">
                            <div className="relative" >
                                <button className="bg-cyan-700 px-6 exit flex text-white focus:text-white flex-row rounded-full items-center space-x-2 w-full py-2 mt-2 text-sm font-semibold text-left bg-transparent hover:bg-cyan-900 md:w-auto md:mt-0 md:ml-4 focus:bg-[#000] focus:outline-none focus:shadow-outline">
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
                                <input type="text" className="text-gray-600 font-lg text-semibold leading-6 pb-4" id="job" placeholder={dato[0]?.job} />
                                <h3 className="text-gray-600 font-lg text-semibold text-sm leading-6">Email</h3>
                                <input type="email" className="text-gray-600 font-lg text-semibold leading-6 pb-4 w-full" id="email" placeholder={dato[0]?.email} />
                                <h3 className="text-gray-600 font-lg text-semibold text-sm leading-6">Phone</h3>
                                <input type="number" className="text-gray-600 font-lg text-semibold leading-6 pb-4 w-full" id="number" placeholder={dato[0]?.phone} />
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
                                    <textarea className="grid md:grid-cols-2 text px-4 py-2 w-1/2 resize-none h-20" placeholder={dato[0]?.aboutme}>
                                    </textarea>

                                    <div className="grid md:grid-cols-2 text-sm">
                                        <div className="grid grid-cols-2">
                                            <div className="px-4 py-2 font-semibold">Name</div>
                                            <input className="px-4 py-2" placeholder={dato[0]?.username}></input>
                                        </div>
                                        <div className="grid grid-cols-2">
                                            <div className="px-4 py-2 font-semibold">Last Name</div>
                                            <input className="px-4 py-2" placeholder={dato[0]?.lastname}></input>
                                        </div>
                                        <div className="grid grid-cols-2">
                                            <div className="px-4 py-2 font-semibold">Username Repositories</div>
                                            <input className="px-4 py-2" placeholder={dato[0]?.usergithub}></input>
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
