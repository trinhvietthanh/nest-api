import {
  Body,
  Controller,
  Get,
  NotFoundException,
  Param,
  ParseIntPipe,
  Post,
  Query,
} from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiCreatedResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiQuery,
  ApiTags,
} from '@nestjs/swagger';
import { NotFoundError } from 'rxjs';
import { CreateProductDto } from './dto/create-product.dto';
import { Product } from './entities/product.entity';
import { ProductsService } from './products.service';

@ApiTags('products')
@Controller('products')
export class ProductsController {
  constructor(private productsService: ProductsService) {}

  @ApiOkResponse({ type: Product, isArray: true })
  @ApiQuery({ name: 'name', required: false })
  @Get()
  getProducts(@Query('name') name?: string): Product[] {
    return this.productsService.findAll(name);
  }

  @ApiOkResponse({ type: Product, description: 'the product' })
  @ApiNotFoundResponse()
  @Get(':id')
  getProductById(@Param('id', ParseIntPipe) id: string): Product {
    const product = this.productsService.findById(Number(id));
    if (!product) {
      throw new NotFoundException();
    }
    return product;
  }

  @ApiCreatedResponse({ type: Product })
  @ApiBadRequestResponse()
  @Post()
  createProduct(@Body() body: CreateProductDto): Product {
    return this.productsService.createProduct(body);
  }
}
