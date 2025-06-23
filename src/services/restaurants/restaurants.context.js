import { useEffect, useState, createContext, useMemo } from 'react'

import { restaurantsRequest, restaurantsTransform } from './restaurants.service'

const [restaurants, setRestaurants] = useState([]);


useEffect(() => {
    const rest = restaurantsRequest()
    if (rest) {
        setRestaurants(rest)
    }
}, [])

export const restaurantContext = createContext();


export const restaurantProvider = ({ children }) => {
    return (
        <restaurantContext.Provider value={
            {
                restaurants: [1, 2, 3, 4]
            }
        }>
            {children}
        </restaurantContext.Provider>
    )
}