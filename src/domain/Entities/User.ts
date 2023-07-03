import { ApiProperty } from '@nestjs/swagger'
import { Group, GroupDto } from './Group'
import { UserPlay, UserPlayDto } from './UserPlay'

export type UserDto = {
  id: string,
  fullName: string,
  username: string,
  password: string,
  avatarSeed: string,
  plays: UserPlayDto[],
  groups: GroupDto[]
}

export class User {
  @ApiProperty({
    type: String,
    required: true,
    description: 'Id',
  })
  id: string

  @ApiProperty({
    type: String,
    required: true,
    description: 'Name of the user',
  })
  fullName: string

  @ApiProperty({
    type: String,
    required: true,
    description: 'Username',
  })
  username: string

  @ApiProperty({
    type: String,
    required: true,
    description: 'Username',
  })
  password: string

  @ApiProperty({
    type: String,
    required: true,
    description: 'Seed for avatar generation',
  })
  avatarSeed: string

  @ApiProperty({
    type: Array,
    required: true,
    description: 'Seed for avatar generation',
  })
  plays: UserPlay[]

  @ApiProperty({
    type: Array,
    required: true,
    description: 'Seed for avatar generation',
  })
  groups: Group[]

  constructor(dto: UserDto) {
    this.id = dto.id
    this.username = dto.username
    this.password = dto.password
    this.fullName = dto.fullName
    this.avatarSeed = dto.avatarSeed
    this.plays = dto.plays
    this.groups = dto.groups
  }
}
