import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class CarsService {


    private cars = [
        {
            id: 1,
            name: 'Toyota',
            brand: 'Corolla'
        },
        {
            id: 2,
            name: 'Honda',
            brand: 'Civic'
        },
        {
            id: 3,
            name: 'Jeep',
            brand: 'Cherokee'
        }
    ];

    getAll(){
        return this.cars;
    }

    getById(id: number){
        const car = this.cars.find( car => car.id === id);
        if(!car){
            throw new NotFoundException(`Car with id ${id} not found`);
        }
        return car;
    }


}
