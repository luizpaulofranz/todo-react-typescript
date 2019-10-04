import React, { FunctionComponent } from 'react';
import { Task } from '../model/task';

interface Props {
  // here we're forcing the prop (event) type and the name
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onAdd: (event: React.FormEvent<HTMLFormElement>) => void;
  // and here we're just forcing the propname and not the prop type
  //onAdd: (event: any) => void;
  task: Task;
}

export const NewTaskForm: FunctionComponent<Props> = ({
  onChange,
  onAdd,
  task
}) => (
  <form onSubmit={onAdd}>
    <input onChange={onChange} value={task.name} />
    <button type="submit">Add a task</button>
  </form>
);