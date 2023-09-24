// pages/index.js
"use client"
import React, { useState, useEffect } from 'react';
import CityList from '../components/CityList';
import data from '../data';

export default function Home() {
    const [cities, setCities] = useState(data);
    const [searchQuery, setSearchQuery] = useState('');
    const [originalData, setOriginalData] = useState(data);

    const handleSearch = (query) => {
        setSearchQuery(query);
        // Filter cities based on the search query
        const filteredCities = originalData.filter((city) =>
            city.City.toLowerCase().includes(query.toLowerCase())
        );
        setCities(filteredCities);
    };

    const handleFilter = (filter) => {
        let sortedCities;
        switch (filter) {
            case 'Population':
                sortedCities = [...cities].sort((a, b) =>
                    a[filter] > b[filter] ? 1 : -1
                );
                break;
            case 'Cost_of_living':
                sortedCities = [...cities].sort((a, b) =>
                    a[filter] > b[filter] ? 1 : -1
                );
                break;
            case 'Country':
                sortedCities = [...cities].sort((a, b) =>
                    a[filter].localeCompare(b[filter])
                );
                break;
            case 'City':
                sortedCities = [...cities].sort((a, b) =>
                    a[filter].localeCompare(b[filter])
                );
                break;
            case 'Cheapest':
                sortedCities = [...cities].sort((a, b) =>
                    a['Cost_of_living'] > b['Cost_of_living'] ? 1 : -1
                );
                break;
            case 'Most_Expensive':
                sortedCities = [...cities].sort((a, b) =>
                    a['Cost_of_living'] < b['Cost_of_living'] ? 1 : -1
                );
                break;
            default:
                sortedCities = [...cities];
        }
        setCities(sortedCities);
    };

    const resetData = () => {
        setSearchQuery('');
        setCities(originalData);
    };

    useEffect(() => {
        setOriginalData(data);
    }, []);

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-semibold mb-4">Traveli</h1>
            <div className="mb-4">
                <input
                    style={ { color: 'black' } }
                    type="text"
                    placeholder="Search by city"
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-500"
                    value={ searchQuery }
                    onChange={ (e) => handleSearch(e.target.value) }
                />
            </div>
            <div className="flex flex-wrap items-center mb-4">
                <div className="space-x-4 mt-4">
                    <button
                        className="bg-blue-500 text-white px-4 py-2 rounded-md"
                        onClick={ () => handleFilter('Population') }
                        disabled={ searchQuery !== '' }
                    >
                        Sort by Population
                    </button>
                    <button
                        className="bg-red-500 text-white px-4 py-2 rounded-md"
                        onClick={ () => handleFilter('Cost_of_living') }
                        disabled={ searchQuery !== '' }
                    >
                        Sort by Cost of Living
                    </button>
                    <button
                        className="bg-yellow-500 text-white px-4 py-2 rounded-md"
                        onClick={ () => handleFilter('Country') }
                        disabled={ searchQuery !== '' }
                    >
                        Sort by Country
                    </button>
                    <button
                        className="bg-purple-500 text-white px-4 py-2 rounded-md"
                        onClick={ () => handleFilter('City') }
                        disabled={ searchQuery !== '' }
                    >
                        Sort by City
                    </button>
                    <button
                        className="bg-green-500 text-white px-4 py-2 rounded-md"
                        onClick={ () => handleFilter('Cheapest') }
                        disabled={ searchQuery !== '' }
                    >
                        Sort by Cheapest
                    </button>
                    <button
                        className="bg-pink-500 text-white px-4 py-2 rounded-md"
                        onClick={ () => handleFilter('Most_Expensive') }
                        disabled={ searchQuery !== '' }
                    >
                        Sort by Most Expensive
                    </button>
                    <button className="bg-green-500 text-white px-4 py-2 rounded-md" onClick={ resetData }>
                        Reset
                    </button>
                </div>
            </div>
            <CityList cities={ cities } />
        </div>
    );
}
