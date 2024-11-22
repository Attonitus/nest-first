import { Body, Controller, Delete, Get, Param, ParseUUIDPipe, Patch, Post} from '@nestjs/common';
import { CarsService } from './cars.service';
import { CreateCarDTO } from './dto/create-car.dto';
import { UpdateCarDto } from './dto/update-car.dto';

@Controller('cars')
// @UsePipes(ValidationPipe)
export class CarsController {

    constructor(
        private readonly carsService: CarsService
    ){}

    @Get()
    getAllCars(){
        return this.carsService.getAll();
    }

    @Get(':id')
    getCarById( @Param('id', ParseUUIDPipe) id: string){
        return this.carsService.getById(id);
    }

    @Post()
    createCar(@Body() carDto: CreateCarDTO){
        return this.carsService.create(carDto);
    }

    @Patch(':id')
    updateCar( @Param('id', ParseUUIDPipe) id: string, @Body() updateCarDto: UpdateCarDto ){
        return this.carsService.update(id, updateCarDto);
    }

    @Delete(':id')
    deleteCard( @Param('id', ParseUUIDPipe) id: string ){
        return this.carsService.delete(id);
    }

}
