import {
        Body,
        Controller,
        Delete,
        Get,
        Param,
        Patch,
        Post,
} from '@nestjs/common'
import { ItemsService } from './items.service'
import { CreateItemDto } from './dto/create-item.dto'
import { Item } from './interface/item.interface'
// import { Item } from './schemas/item.schema'

@Controller('items')
export class ItemsController {
        constructor(private readonly itemsService: ItemsService) {}
        @Get()
        findAll(): Promise<Item[]> {
                return this.itemsService.findAll()
        }

        @Get(':id')
        findOne(@Param('id') id: string): Promise<Item> {
                return this.itemsService.findOne(id)
        }

        @Post()
        create(@Body() createItemDto: CreateItemDto): Promise<Item> {
                return this.itemsService.create(createItemDto)
        }

        @Patch(':id')
        update(
                @Param('id') id: string,
                @Body() updateItemDto: CreateItemDto,
        ): Promise<Item> {
                return this.itemsService.update(id, updateItemDto)
        }

        @Delete(':id')
        delete(@Param('id') id: string): Promise<Item> {
                return this.itemsService.delete(id)
        }

        // @Delete(':id')
        // delete(@Param('id') id: number): string {
        //         return `Delete Item ${id}`
        // }
}
