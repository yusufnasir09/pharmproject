import { mocks, mockImages } from "./mock";
import { camelize } from 'camelize';


export const pharmaciesRequest = (location = "37.7749295,-122.4194155") => {
    return new Promise((resolve, reject) => {
        const mock = mocks[location];
        if (!mock) {
            reject("not found");
        }
        resolve(mock);
    })
}
const camelized = require('camelize');
export const pharmaciesTransform = ({ results = [] }) => {

    const mappedResults = results.map((pharmacy) => {
        pharmacy.photos = pharmacy.photos.map((p) => {
            return mockImages[Math.ceil(Math.random() * (mockImages.length - 1))];
        });
        return {
            ...pharmacy,
            isOpenNow: pharmacy.opening_hours && pharmacy.opening_hours.open_now,
            isClosedTemporarily: pharmacy.business_status === "CLOSED_TEMPORARILY",
        };
    });

    return camelized(mappedResults);
};


