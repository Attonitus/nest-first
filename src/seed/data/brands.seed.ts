import { Brand } from "src/brands/entities/brand.entity";
import { uuidAdapter } from "src/config/uuid.adapter";


export const BRANDS_SEED: Brand[] = [
    {
        id: uuidAdapter(),
        name: "Cheroke",
        createdAt: new Date().getTime()
    },
    {
        id: uuidAdapter(),
        name: "Honda",
        createdAt: new Date().getTime()
    },
    {
        id: uuidAdapter(),
        name: "Nissan",
        createdAt: new Date().getTime()
    },
    {
        id: uuidAdapter(),
        name: "Chevrolet",
        createdAt: new Date().getTime()
    },
]