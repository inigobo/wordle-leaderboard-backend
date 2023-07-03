import { ApiProperty } from '@nestjs/swagger'
import { User, UserDto } from './User'

export type GroupDto = {
  id: string,
  name: string,
  users: UserDto[]
}

export class Group {
  @ApiProperty({
    type: String,
    required: true,
    description: 'Id',
  })
  id: string

  @ApiProperty({
    type: String,
    required: false,
    description: 'Name of the group',
  })
  name: string

  @ApiProperty({
    type: Array,
    required: false,
    description: 'Users of the group',
  })
  users: User[]

  constructor(dto: GroupDto) {
    this.id = dto.id
    this.name = dto.name
    this.users = dto.users
  }
}
