import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { TaskModule } from './task/task.module';
import { SequelizeModule } from '@nestjs/sequelize';
import { dataBaseConfig } from './database.config';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { APP_GUARD } from '@nestjs/core';
import { AuthGuard } from './auth.guard';
import { NotificationModule } from './notification/notification.module';

@Module({
  imports: [
    TaskModule,
    SequelizeModule.forRoot(dataBaseConfig),
    AuthModule,
    UsersModule,
    NotificationModule
  ],
  //controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_GUARD,
      useClass: AuthGuard,
    },
  ],
})
export class AppModule {}
