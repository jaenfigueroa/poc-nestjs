import { TaskStatus } from '../task.entity';

export class CreateTaskDto {
  title: string;
  description: string;
}

export class UpdateTaskDto {
  //todos los campos serian opcionales
  title?: string;
  description?: string;
  status?: TaskStatus;
}
