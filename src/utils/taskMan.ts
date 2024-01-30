import { ITask, ITaskInfo, IUser } from 'src/app/interfaces/i-user';

// export const generateTaskList_ = (arr: IUser): ITask[][] => {
//   if (!arr) return [];

//   const open = arr.tasks.filter((task) => task.status.toLowerCase() === 'open');

//   const pending = arr.tasks.filter(
//     (task) => task.status.toLowerCase() === 'pending'
//   );

//   const inProgress = arr.tasks.filter(
//     (task) => task.status.toLowerCase() === 'in progress'
//   );

//   const completed = arr.tasks.filter(
//     (task) => task.status.toLowerCase() === 'completed'
//   );

//   return [open, pending, inProgress, completed];
// };

export const generateTaskList = (arr: IUser[]): ITaskInfo[][] => {
  if (!arr) return [];

  let open: ITaskInfo[] = [];
  let pending: ITaskInfo[] = [];
  let inProgress: ITaskInfo[] = [];
  let completed: ITaskInfo[] = [];

  if (arr) {
    arr.forEach((user: IUser) => {
      user.tasks.forEach((task: ITask) => {
        const status = task.status;
        switch (status) {
          case 'open':
            open.push({ id: user._id, title: task.title });
            break;
          case 'pending':
            pending.push({ id: user._id, title: task.title });
            break;
          case 'in progress':
            inProgress.push({ id: user._id, title: task.title });
            break;
          case 'completed':
            completed.push({ id: user._id, title: task.title });
            break;
          default:
            break;
        }
      });
    });
  }
  return [open, pending, inProgress, completed];
};

export const createNewTask = (task: ITask) => {
  // check for user info in localstorage
  // if none, id = 0000-0000-0000-0000, full_name = unknown
  // if it exists, get the user's info and push the new task
  const user = getUserData();
  const finalTask = buildUserTask(task, user);
  console.log('final task', finalTask);
  return finalTask;
};

export const getUserData = () => {
  return localStorage.getItem('user');
};

export const buildUserTask = (
  task: ITask,
  user: string | null
): IUser | null => {
  return !task
    ? null
    : {
        _id: user || '00000000-0000-0000-0000-000000000000',
        full_name: user || 'unknown user',
        tasks: [{ ...task }],
      };
};
