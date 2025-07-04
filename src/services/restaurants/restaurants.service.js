import { mocks } from "./mock";
import camelize from "camelize";

export const restaurantsRequest = (location = '51.219448,4.402464') => {
    return new Promise((resolve, reject) => {
        const mock = mocks[location];
        if (!mock) {
            reject('not found');
        }
        resolve(mock);
    });
}

export const restaurantsTransform = (results = []) => {
    const mappedResults = results.map((restaurant) => {
        return {
            ...restaurant,
            isOpenNow: restaurant.opening_hours && restaurant.opening_hours.open_now,
            isClosedTemporarily: restaurant.business_status === "CLOSED_TEMPORARILY"
        }
    });

    return camelize(mappedResults);
};


/* restaurantsRequest()
    .then(res => restaurantsTransform(res))
    .then(transformResponse => console.log(transformResponse))
    .catch((err) => {
        console.log({ 'error': err })
    }) */