import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/opacity.css'; // You can add more CSS effects if needed
import CityCard from './CityCard';

const CityList = ({ cities }) => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            { cities.map((city, index) => (
                <div key={ index } className="animate__animated animate__fadeIn">
                    <CityCard city={ city } />
                    <LazyLoadImage
                        alt={ city.City }
                        src={ city.imageURL } // Replace with the actual image URL property from your data
                        height={ 200 }
                        effect="opacity" // You can customize the loading effect
                    />
                </div>
            )) }
        </div>
    );
};

export default CityList;
