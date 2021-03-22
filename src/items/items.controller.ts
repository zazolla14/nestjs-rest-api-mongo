import {
        Body,
        Controller,
        Delete,
        Get,
        Param,
        Patch,
        Post,
} from '@nestjs/common'
import { CreateItemDto } from './dto/create-item.dto'
import { Item } from './interface/item.interface'
import { ItemsService } from './items.service'

@Controller('items')
export class ItemsController {
        constructor(private readonly itemsService: ItemsService) {}
        @Get()
        findAll(): Item[] {
                return this.itemsService.findAll()
        }

        @Get(':id')
        findOne(@Param('id') id: string): Item {
                return this.itemsService.findOne(id)
        }

        @Post()
        create(@Body() createItemDto: CreateItemDto) {
                return this.itemsService.create(createItemDto)
        }

        @Patch(':id')
        update(@Param('id') id: string, @Body() updateItemDto: CreateItemDto) {
                return
        }

        @Delete(':id')
        delete(@Param('id') id: number): string {
                return `Delete Item ${id}`
        }
}
