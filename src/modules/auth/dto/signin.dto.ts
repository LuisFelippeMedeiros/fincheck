import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';

export class SigninDto {
  @IsString()
  @IsNotEmpty({ message: 'O e-mail não pode ser vazio' })
  @IsEmail()
  email: string;

  @IsString()
  @IsNotEmpty({ message: 'A senha não pode ser vazio' })
  @MinLength(8)
  password: string;
}
