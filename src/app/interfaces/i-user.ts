export interface IUser {
  _id: string;
  full_name: string | null;
  tasks: ITask[];
}

export interface ITask {
  title: string;
  description: string;
  due_date: string;
  status: 'open' | 'pending' | 'in progress' | 'completed';
  [key: string]: string;
}

export interface ITaskInfo {
  id: string;
  title: string;
}
