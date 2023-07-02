import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDto, UpdateTaskDto } from './dto/task.dto';

@Controller('tasks')
export class TasksController {
  constructor(private tasksService: TasksService) {}

  @Get() // no poner es lo mismo que -> @Get('/')
  traerTodasLasTareas() {
    return this.tasksService.getAllTasks();
  }

  @Post()
  creaNuevaTarea(@Body() nuevaTarea: CreateTaskDto) {
    // aqui arriba se esta usando el decorador @Body() para obtener el body de la peticion
    // y lo guardamos en la variable -> "nuevaTarea"
    // para tipar esto, creamos un DTO, en este caso se creo el archivo ./dto/task.dto.ts
    // y luego usado "nuevaTarea", podemos sacar los valores enviados en el body

    return this.tasksService.createTask(
      nuevaTarea.title,
      nuevaTarea.description,
    );
  }

  @Delete(':id')
  eliminaTarea(@Param('id') id: string) {
    // aqui usando el decorador @param para sacar el id de la url, y lo guardamos
    // en la variable -> "id"
    return this.tasksService.deleteTask(id);
  }

  @Patch(':id')
  actualizaTarea(
    @Param('id') id: string,
    @Body() updatedFields: UpdateTaskDto,
  ) {
    //sacamos el id de la url y los campos actualizados del body de la peticion
    return this.tasksService.updateTask(id, updatedFields);
  }
}
