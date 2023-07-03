import { ApiProperty } from '@nestjs/swagger'

export type UserPlayDto = {
    id: string,
    userId: string,
    gameId: string,
    attempts: object
}

export class UserPlay {
    @ApiProperty({
        type: String,
        required: true,
        description: 'Id',
    })
    id: string

    @ApiProperty({
        type: String,
        required: true,
        description: 'Name of the group',
    })
    gameId: string

    @ApiProperty({
        type: String,
        required: true,
        description: 'User',
    })
    userId: string

    @ApiProperty({
        type: Object,
        required: true,
        description: 'attemps object ',
    })
    attempts: Object

    constructor(dto: UserPlayDto) {
        this.id = dto.id
        this.gameId = dto.gameId
        this.userId = dto.userId
        this.attempts = dto.attempts
    }
}
