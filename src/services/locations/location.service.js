import { camelize } from "camelize";
import { locations } from "./location.mock";

export const locationRequest = (searchTerm) => {
    return new Promise((resolve, reject) => {
        const locationMock = locations[searchTerm];
        if (!locationMock) {
            reject("not found");
        }
        resolve(locationMock);
    })
}
const camelized = require('camelize');
export const locationTransform = (result) => {

    const formattedResponse = camelized(result);
    const { geometry = {} } = formattedResponse.results[0];
    const { lat, lng } = geometry.location;

    return { lat, lng };
}