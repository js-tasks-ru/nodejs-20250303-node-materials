import { Global, Module } from '@nestjs/common';
import { MyClass } from './MyClass';
import { ConfigModule } from '@nestjs/config';

@Global()
@Module({
  imports: [ConfigModule],
  providers: [MyClass],
  exports: [MyClass],
})
export class SharedModule {}
