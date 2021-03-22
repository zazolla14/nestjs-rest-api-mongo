import { Injectable } from '@nestjs/common'
import { Item } from './interface/item.interface'

@Injectable()
export class ItemsService {
        private readonly items: Item[] = [
                {
                        id: '12121212',
                        name: 'Item 1',
                        quantity: 1,
                        description: 'Desc Item 1',
                },
                {
                        id: '21212121',
                        name: 'Item 2',
                        quantity: 2,
                        description: 'Desc Item 2',
                },
        ]

        findAll(): Item[] {
                return this.items
        }

        findOne(id: string): Item {
                return this.items.find((item) => item.id === id)
        }

        create(data: Item) {
                data.id = Math.random().toString()
                this.items.push(data)
                return { Items: data }
        }
}
