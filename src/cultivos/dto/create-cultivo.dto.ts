import {  IsPositive, IsString, MinLength } from "class-validator";

export class CreateCultivoDto {
    
    @IsString()
    @MinLength(1)
    name:string

    @IsString()
    fechai:string

    @IsPositive()
    tamaño: number;

    @IsString()
    estado:string

}

