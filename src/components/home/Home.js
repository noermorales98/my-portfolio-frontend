import React from "react";
import './Home.css';
import noe from './profilenoe.jpg';
import avatar from './avatarnoe.png';
import objetos from './objects.png';
// import obj from "./gradient-ob.png";

function Home() {
    return (
        <section className="Home flex items-center overflow-x-hidden">
            <div className="left w-1/2 items-center">
                <div className="dialog gap-1 text-6xl items-center flex whitespace-nowrap font-semibold">
                    <h1>Hello, </h1>
                    <span className="name flex items-center">
                        <h1>I'm</h1>
                        <span className="noe-img w-16 h-16">
                        <img className="noe w-16 rounded-3xl aspect-square items-center" src={noe} alt="imagen" />
                        </span>
                        <h1>Noelí</h1>
                        </span>
                </div>
                <div className="dialog text-6xl font-semibold">
                    <h1>I am a front-end software developer</h1>
                </div>
                <div className="btn-home flex gap-4 my-4 w-full">
                    <input className="py-4 px-8 rounded-xl bg-slate-200 w-9/12 flex justify-center" type="email" placeholder="Insert your email"></input>
                    <button className=" bg-[#112130] hover:bg-[#88aac3] active:bg-[#171930] focus:outline-none focus:ring focus:ring-[#e2e8f0] text-white rounded-xl py-4 px-8 w-3/12 flex justify-center">Let's Go</button>
                </div>
            </div>
            <div className="right w-1/2 items-center flex justify-center">
                <div className="avatar">
                    <div className="first-avatar flex justify-center">
                        <img className="h-full object-cover	z-10" src={avatar} alt="avatar" />
                        <img id="img-objects" className="h-full object-cover absolute overflow-x-hidden" src={objetos} alt="objetos" />
                    </div>
                </div>
            </div>
            {/* <img id="objeto" className="objeto absolute" src={obj} alt="objeto"/> */}
        </section>

    );
}


export default Home;