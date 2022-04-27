import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ShareDataService } from '../services/share-data.service';
import { UserRegisterService } from '../services/user-register.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {

  public loginForm !: FormGroup;
  constructor(private formBuilder:FormBuilder, private userService:UserRegisterService,
    private router:Router, private sharedData:ShareDataService) { }

  ngOnInit(): void {

    this.loginForm = this.formBuilder.group({
      email: [''],
      password: ['']
    })

  }

  onLogIn(){
    this.userService.getAllUsers()
    .subscribe(res=>{
      const user = res.find((a:any)=>{ 
        return a.email == this.loginForm.value.email && a.password == this.loginForm.value.password
      });
      if(user){
        res.find((a:any)=>{ 
          if (a.email == this.loginForm.value.email && a.password == this.loginForm.value.password){
            this.sharedData.setUser(a.userId);
          }
        });
        alert("Login success");
        this.sharedData.setComment('true');
        this.loginForm.reset();
        this.router.navigate(['profile']);
      }else{
        alert("User Not Found");
      }
    }, err=>{
      alert("Something Went Wrong");
    }
    )
  }

}
