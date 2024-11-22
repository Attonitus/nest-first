import { CarInterface } from "src/cars/interfaces/cars.interface";
import { uuidAdapter } from "src/config/uuid.adapter";


export const CARS_SEED: CarInterface[] = [
    {
        id: uuidAdapter(),
        brand: "Jeep",
        model: "Cherokee"
    },
    {
        id: uuidAdapter(),
        brand: "Honda",
        model: "Civic"
    },
    {
        id: uuidAdapter(),
        brand: "Nissan",
        model: "Tsuru"
    },
    {
        id: uuidAdapter(),
        brand: "Spark",
        model: "Chevrolet"
    },
]