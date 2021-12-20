import { Injectable } from '@nestjs/common';
import { ApiCreatedResponse } from '@nestjs/swagger';
import { CreateProductDto } from './dto/create-product.dto';
import { Product } from './entities/product.entity';

@Injectable()
export class ProductsService {
  private product: any = [
    { id: 0, name: '213' },
    { id: 1, name: '213' },
    { id: 2, name: '213' },
    { id: 3, name: '2131' },
  ];

  findAll(name?: string) {
    if (name) {
      return this.product.filter((product) => product.name === name);
    }
    return this.product;
  }

  findById(productId: number) {
    return this.product.find((product) => product.id === productId);
  }

  @ApiCreatedResponse({ type: Product })
  createProduct(createProductDto: CreateProductDto) {
    const newPro = { id: Date.now(), ...createProductDto };

    this.product.push(newPro);

    return newPro;
  }
}
