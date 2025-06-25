import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: '93.188.161.115',
      port: 3306,
      username: 'root',      
      password: 'Olivas031523',  
      database: 'Distancia',     
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,      
    }),
    UsersModule,
  ],
})
export class AppModule {}
