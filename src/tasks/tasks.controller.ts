import { Body, Controller, Get, Post } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDto } from './dto/task.dto';

@Controller('tasks')
export class TasksController {
  constructor(private tasksService: TasksService) {}

  @Get() // no poner es lo mismo que -> @Get('/')
  traerTodasLasTareas() {
    return this.tasksService.getAllTasks();
  }

  @Post()
  creaNuevaTarea(@Body() nuevaTarea: CreateTaskDto) {
    // aqui arriba se esta usando el decorador @Body() para obtener el body de la peticion y lo guardamos en "nuevaTarea"
    // para tipar esto, crear un DTO, en este caso se creo el archivo task.dto.ts
    // y luego desde el "nuevaTarea", podemos sacar los valores enviados en el body

    return this.tasksService.createTask(
      nuevaTarea.title,
      nuevaTarea.description,
    );
  }
}
