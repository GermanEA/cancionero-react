import { data } from "../data/data";

export const getAllData = () => {
    return data;
}

export function getSong(id) {
    return data.find(
      (data) => data.id === id
    );
}