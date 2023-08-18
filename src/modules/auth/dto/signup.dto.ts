import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';

export class SignupDto {
  @IsString()
  @IsNotEmpty({ message: 'O nome não pode ser vazio' })
  name: string;

  @IsString()
  @IsNotEmpty({ message: 'O e-mail não pode ser vazio' })
  @IsEmail()
  email: string;

  @IsString()
  @IsNotEmpty({ message: 'A senha não pode ser vazio' })
  @MinLength(8)
  password: string;
}
