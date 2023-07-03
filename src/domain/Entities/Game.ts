import { ApiProperty } from '@nestjs/swagger'
import { UserPlay, UserPlayDto } from './UserPlay'

export type GameDto = {
  id: string,
  gameId: string,
  description?: string,
  date: string,
  solution: string,
  userPlays: UserPlayDto[]
}

export class Game {
  @ApiProperty({
    type: String,
    required: true,
    description: 'Id',
  })
  id: string

  @ApiProperty({
    type: String,
    required: true,
    description: 'Game Id',
  })
  gameId: string

  @ApiProperty({
    type: String,
    required: false,
    description: 'Description',
  })
  description: string

  @ApiProperty({
    type: String,
    required: true,
    description: 'date',
  })
  date: string

  @ApiProperty({
    type: String,
    required: true,
    description: 'Solution word of the day`s word',
  })
  solution: string

  @ApiProperty({
    type: Array,
    required: false,
    description: 'Users of the group',
  })
  userPlays: UserPlay[]

  constructor(dto: GameDto) {
    this.id = dto.id
    this.gameId = dto.gameId
    this.description = dto.description
    this.date = dto.date
    this.solution = dto.solution
    this.userPlays = dto.userPlays
  }
}
