import { ApiProperty } from '@nestjs/swagger';

export class Product {
  @ApiProperty()
  id: number;

  @ApiProperty()
  name: string;

  @ApiProperty()
  type?: string;
}
