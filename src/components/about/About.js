import React from "react";
import './About.css'
function About() {

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

    React.useEffect(() => {
        fetchData();
    }, []);
    
    
    return (
        <div className="About flex justify-center items-center " id="aboutme">
            <h1 className="text-6xl w-4/5">{dato[0]?.aboutme}</h1>
        </div>
    );
}

export default About;