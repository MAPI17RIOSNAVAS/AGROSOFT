import { IsEmail, IsPositive, IsString, MaxLength, MinLength } from "class-validator";

export class CreateUsuarioDto {
    
    @IsString()
    @MinLength(1)
    name:string

    @IsString()
    @MinLength(1)
    apellido:string;

    @IsEmail()
    correo:string;

    @IsString()
    @MaxLength(20)
    tel: string;

    @IsString()
    @MinLength(8)
    password:string
}
