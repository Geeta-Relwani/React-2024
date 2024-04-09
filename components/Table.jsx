import React, { useState, useEffect } from 'react';

const Table = () => {
    const [data, setData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await fetch('https://dummyjson.com/products');
            const jsonData = await response.json();
            setData(jsonData);
            setFilteredData(jsonData);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const handleSearch = (e) => {
        const value = e.target.value;
        setSearchTerm(value);
        const filtered = data.filter(item =>
            item.name.toLowerCase().includes(value.toLowerCase())
        );
        setFilteredData(filtered);
    };

    return (
        <div>
            <input
                type="text"
                placeholder="Search by name"
                value={searchTerm}
                onChange={handleSearch}
            />
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Website</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredData.map(item => (
                        <tr key={item.id}>
                            <td>{item.name}</td>
                            <td>{item.email}</td>
                            <td>{item.phone}</td>
                            <td>{item.website}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Table;
