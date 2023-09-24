// components/CityList.js
import React from 'react';
import LazyLoad from 'react-lazyload';
import CityCard from './CityCard';

const CityList = ({ cities }) => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            { cities.map((city, index) => (
                <LazyLoad key={ index } height={ 200 } offset={ 100 }>
                    <div className="animate__animated animate__fadeIn">
                        <CityCard city={ city } />
                    </div>
                </LazyLoad>
            )) }
        </div>
    );
};

export default CityList;
