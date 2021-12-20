import { ApiProperty } from '@nestjs/swagger';
import { IsAlphanumeric, MaxLength } from 'class-validator';

export class CreateProductDto {
  @ApiProperty()
  @IsAlphanumeric()
  @MaxLength(20)
  name: string;

  @ApiProperty({ required: false })
  @IsAlphanumeric()
  type?: string;
}
