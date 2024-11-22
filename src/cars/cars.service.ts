import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { CarInterface } from './interfaces/cars.interface';
import { uuidAdapter } from 'src/config/uuid.adapter';
import { CreateCarDTO } from './dto/create-car.dto';
import { UpdateCarDto } from './dto/update-car.dto';

@Injectable()
export class CarsService {


    private cars: CarInterface[] = [
        // {
        //     id: uuidAdapter(),
        //     model: 'Toyota',
        //     brand: 'Corolla'
        // },
    ];

    getAll(){
        return this.cars;
    }

    getById(id: string){
        const car = this.cars.find( car => car.id === id);
        if(!car){
            throw new NotFoundException(`Car with id ${id} not found`);
        }
        return car;
    }

    create(carDto: CreateCarDTO){

        const newCar: CarInterface = {
            id: uuidAdapter(),
            ...carDto
        }

        this.cars.push(newCar);
        return newCar;
    }

    update(id: string, carDto: UpdateCarDto){

        let carDB = this.getById(id);

        if(carDto.id && carDto.id !== id){
            throw new BadRequestException(`Car id is not valid`)
        }

        this.cars = this.cars.map( car => {
            if(car.id === id){
                carDB = {
                    ...carDB,
                    ...carDto,
                    id
                }
                return carDB;
            }
            return car;
        });

        return carDB;
    }

    delete(id: string){
        const carDB = this.getById(id);
        if(!carDB){
            throw new BadRequestException(`Car with id not exist`);
        }

        const newCars = this.cars.filter( car => car.id !== carDB.id);
        this.cars = newCars;
        return;   
    }

    fillCarsWithFillData(cars: CarInterface[]){
        this.cars = cars;
    }
}
