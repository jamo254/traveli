// components/CityCard.js
import React from 'react';

// Define colors based on cost of living ranges
const costOfLivingColors = {
    0: '--cyan',
    1000: '--danger',
    2000: '--dark',
    3000: '--font-family-monospace',
    4000: '--font-family-sans-serif',
    5000: '--gray',
    // Add more color ranges as needed
};

const formatPopulation = (population) => {
    if (population >= 1000000) {
        // Format population in millions (e.g., 6.5M)
        return (population / 1000000).toFixed(1) + 'M';
    }
    return population.toString();
};

const getPopulationColorClass = (population) => {
    if (population < 5000000) {
        return 'bg-red-500'; // Red for populations less than 5 million
    } else if (population < 10000000) {
        return 'bg-yellow-500'; // Yellow for populations between 5 million and 10 million
    } else {
        return 'bg-green-500'; // Green for populations greater than or equal to 10 million
    }
};

const getCostOfLivingColorClass = (costOfLiving) => {
    // Find the appropriate color based on the cost of living range
    let color = '--gray'; // Default color

    for (const range in costOfLivingColors) {
        if (costOfLiving <= parseInt(range)) {
            color = costOfLivingColors[range];
            break;
        }
    }

    return `bg-var(${color})`; // Apply the color variable
};

const CityCard = ({ city }) => {
    const populationColorClass = getPopulationColorClass(city.Population);

    return (
        <div className="w-full max-w-xs mx-auto">
            <div className="block bg-white border border-gray-200 rounded-lg shadow-lg hover:shadow-xl transform transition-transform hover:scale-105 dark:bg-gray-800 dark:border-gray-700">
                {/* Background Image */ }
                <div
                    className="relative w-full h-48 bg-cover bg-center rounded-t-lg"
                    style={ {
                        backgroundImage: `url(https://livingcost.org/assets/photo/card/united-states/tx/houston.jpg)`,
                    } }
                ></div>

                {/* Content Container */ }
                <div className="relative z-10 p-4 text-center">
                    <h2 className="text-lg font-semibold text-gray-900 dark:text-white">{ city.City }</h2>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{ city.Country }</p>

                    {/* Population Number */ }
                    <p className={ `text-sm mb-2 ${populationColorClass} text-white py-1 px-2 rounded-full inline-block` }>
                        Population: { formatPopulation(city.Population) }
                    </p>

                    {/* Cost of Living */ }
                    <p className={ `text-sm ${getCostOfLivingColorClass(city.Cost_of_living)} text-white py-1 px-2 rounded-full inline-block` }>
                        Cost of Living: { city.Cost_of_living }
                    </p>
                </div>
            </div>
        </div>
    );
};

export default CityCard;
