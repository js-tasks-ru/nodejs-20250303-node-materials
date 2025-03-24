import {
  ArgumentMetadata,
  BadRequestException,
  Injectable,
  PipeTransform,
} from '@nestjs/common';

@Injectable()
export class MyIntPipePipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    console.log('MyIntPipePipe', value);
    const int = parseInt(value, 10);
    if (isNaN(int)) {
      throw new BadRequestException(
        `Ожидается целое число, получено: ${value}`,
      );
    }
    return int;
  }
}
