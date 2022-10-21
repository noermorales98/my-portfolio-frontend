import React from "react";
function Prueba() {
    const [data, setData] = React.useState([]);

    const fetchData = () => {
        fetch(`http://localhost:3001/repositorios/obtener`)
            .then((response) => response.json())
            .then((actualData) => {
                console.log(actualData);
                setData(actualData);
                console.log(data);
            })
            .catch((err) => {
                console.log(err.message);
            });
    };

    React.useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className="App">
            <tbody>
                <tr>
                    <th>Name</th>
                    <th>Brand</th>
                    <th>Image</th>
                    <th>Price</th>
                </tr>
                {data.map((item, index) => (
                    <tr key={index}>
                        <td>{item.name}</td>
                        <td>{item.url}</td>
                        <td>{item.description}</td>
                        <td>{item.topics[0]}</td>
                    </tr>
                ))}
            </tbody>
        </div>
    );
}

export default Prueba;