import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  UseFilters,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { AppService } from './app.service';
import { MyIntPipePipe } from './my-int-pipe/my-int-pipe.pipe';
import { IsArray, IsOptional, IsString } from 'class-validator';
import { MyguardGuard } from './myguard/myguard.guard';
import { MyfilterFilter } from './myfilter/myfilter.filter';
import { MyinterceptorInterceptor } from './myinterceptor/myinterceptor.interceptor';

class ObjDto {
  @IsOptional()
  @IsString()
  foo: string;

  @IsArray()
  baz: number[];
}

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @UseFilters(MyfilterFilter)
  getHello() {
    return this.appService.getHello();
  }

  // @UseInterceptors(MyinterceptorInterceptor)
  @Get(':id')
  getById(@Param('id', MyIntPipePipe) id: number) {
    console.log('getById', id, typeof id);
    return 'ok';
  }

  @Post()
  createObject(@Body() objDto: ObjDto) {
    console.log('createObject', objDto);
    return 'ok';
  }
}
