import { TaskStatus } from '../task.entity';
import {
  IsString,
  IsNotEmpty,
  MinLength,
  IsOptional,
  IsIn,
} from 'class-validator';

export class CreateTaskDto {
  @IsString() //indicamos que el campo debe ser de tipo string
  @IsNotEmpty() //indicamos que el campo no debe estar vacio
  @MinLength(4) //indicamos que el campo debe tener un minimo de 4 caracteres
  title: string;

  @IsString()
  description: string;
}

//todos los campos serian opcionales
export class UpdateTaskDto {
  @IsString()
  @IsOptional() //indicamos que el campo es opcional
  title?: string;

  @IsString()
  @IsOptional()
  description?: string;

  @IsString()
  @IsOptional()
  @IsIn([TaskStatus.PENDING, TaskStatus.IN_PROGRESS, TaskStatus.DONE]) //INDICAMOS QUE SOLO PUEDE SER ESTOS VALORES
  status?: TaskStatus;
}
