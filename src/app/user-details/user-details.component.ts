import { User } from '../user';
import { UserTask } from '../userTask';
import { Component, OnInit, Input } from '@angular/core';
import { UserService } from '../user.service';
import { UserTaskService } from '../userTask.service';
import { UserListComponent } from '../user-list/user-list.component';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from "rxjs";

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  id: number;
  user: User;
  userTasks: Observable<UserTask[]>;

  constructor(private route: ActivatedRoute,private router: Router,
    private userService: UserService, private userTaskService: UserTaskService) { }

  ngOnInit() {
    this.user = new User();

    this.id = this.route.snapshot.params['id'];
    
    this.userService.getUser(this.id)
      .subscribe(data => {
        console.log(data)
        this.user = data;
      }, error => console.log(error));
      
      
     this.userTaskService.getUserTaskList()
     	.subscribe(data=> {
     		console.log(data)
     		this.userTasks = data;
     }, error => console.log(error));
     
     this.userTasks = this.userTaskService.getUserTaskList();
  }

  list(){
    this.router.navigate(['users']);
  }
}
