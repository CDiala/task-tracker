import { ITask, ITaskInfo } from './../interfaces/i-user';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, firstValueFrom, map, tap } from 'rxjs';
import { IUser } from '../interfaces/i-user';

@Injectable({
  providedIn: 'root',
})
export class TasksService {
  private usersURL: string = 'assets/data/store.json';

  constructor(private http: HttpClient) {}

  getUsers(): Observable<IUser[]> {
    return this.http.get(this.usersURL).pipe(
      map((res: any) => {
        if ('users' in res) {
          return res['users'] as IUser[];
        }
        return [];
      })
    );
  }

  async getUsersAsync(): Promise<IUser[]> {
    try {
      const users = await firstValueFrom(this.getUsers());
      return users as IUser[];
    } catch (error) {
      console.error('Error fetching users:', error);
      throw error;
    }
  }

  async getTaskDetails(taskInfo: ITaskInfo): Promise<ITask> {
    try {
      const users = await firstValueFrom(this.getUsers());
      const user: IUser = users.find(
        (user) => user._id === taskInfo.id
      ) as IUser;
      const userTask = user.tasks.find((task) => task.title === taskInfo.title);
      // console.log('user', user);
      // console.log('userTask', userTask);

      return userTask as ITask;
    } catch (error) {
      throw error;
    }
  }
}
