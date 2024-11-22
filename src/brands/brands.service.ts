import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateBrandDto } from './dto/create-brand.dto';
import { UpdateBrandDto } from './dto/update-brand.dto';
import { Brand } from './entities/brand.entity';
import { uuidAdapter } from 'src/config/uuid.adapter';

@Injectable()
export class BrandsService {


  private brands: Brand[] = [
    // {
    //   id: uuidAdapter(),
    //   name: 'toyota',
    //   createdAt: new Date().getTime()
    // },
  ]

  create(createBrandDto: CreateBrandDto) {
    const newBrand = {
      id: uuidAdapter(),
      createdAt: new Date().getTime(),
      ...createBrandDto
    }

    this.brands.push(newBrand);
    return this.brands;
  }

  findAll() {
    return this.brands;
  }

  findOne(id: string) {
    const brand = this.brands.find( brand => brand.id === id);
    if(!brand) throw new NotFoundException(`Brand with id ${id} not exist`);
    return brand;
  }

  update(id: string, updateBrandDto: UpdateBrandDto) {
    let brandDB = this.findOne(id);
    this.brands = this.brands.map( brand => {

      if(brand.id === id){
        brandDB = {
          ...brandDB,
          ...updateBrandDto,
          updatedAt: new Date().getTime()
        }
        return brandDB;
      }

      return brand;
    });

    return brandDB;
  }

  remove(id: string) {
    this.findOne(id);
    this.brands = this.brands.filter(brand => brand.id !== id);
    return;
  }

  fillBrandsWithFillData(brands: Brand[]){
    this.brands = brands;
}
}
