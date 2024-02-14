import React, { useState, useEffect } from 'react';
import axios from 'axios';

const FetchRegistrations = () => {
    const [res, setRes] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8080/retrieve', {})
            .then(response => {
                setRes(response.data);
                console.log(response.data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);

    const renderFirstBoxData = () => {
        return (
            <div className="box">
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Student</th>
                        </tr>
                    </thead>
                    <tbody>
                        {res.map((data, index) => (
                            <tr key={index}>
                                <td>{data._id}</td>
                                <td>{data.student}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        );
    };

    const renderSecondBoxData = () => {
        return (
            <div className="box">
                
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Password</th>
                        </tr>
                    </thead>
                    <tbody>
                        {res.map((data, index) => (
                            <tr key={index}>
                                <td>{data._id}</td>
                                <td>{data.name}</td>
                                <td>{data.email}</td>
                                <td>{data.password}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        );
    };

    return (
        <div>
            <h1>FetchRegistrations</h1>
            <div className="container">
                {renderFirstBoxData()}
                {renderSecondBoxData()}
            </div>
        </div>
    );
};

export default FetchRegistrations;