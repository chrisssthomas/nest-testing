import { IsBoolean, IsDefined, IsOptional, IsString } from 'class-validator';

export class CreateUserDto {
  @IsDefined()
  @IsString()
  public username!: string;

  @IsDefined()
  @IsString()
  public firstName!: string;

  @IsDefined()
  @IsString()
  public lastName!: string;

  @IsOptional()
  @IsBoolean()
  public isActive!: boolean;
}
