import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Put } from '@nestjs/common';
import { CarsService } from './cars.service';

@Controller('cars')
export class CarsController {

    constructor(
        private readonly carsService: CarsService
    ){}

    @Get()
    getAllCars(){
        return this.carsService.getAll();
    }

    @Get(':id')
    getCarById( @Param('id', ParseIntPipe) id: number){
        return this.carsService.getById(id);
    }

    @Post()
    createCar(@Body() body: any){
        return{
            body,
            message: "created"
        }
    }

    @Put(':id')
    updateCar( @Param('id', ParseIntPipe) id: number, @Body() body: any ){
        return {
            id,
            body,
            message: "patch"
        }
    }

    @Delete(':id')
    deleteCard( @Param('id', ParseIntPipe) id: number ){
        return{
            id,
            message: "deleted"
        }
    }

}
