import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { ItemsController } from './items/items.controller'
import { ItemsModule } from './items/items.module'
import { ItemsService } from './items/items.service'

@Module({
        imports: [ItemsModule],
        controllers: [AppController, ItemsController],
        providers: [AppService, ItemsService],
})
export class AppModule {}
