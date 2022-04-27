import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from '../model/user';
import { ShareDataService } from '../services/share-data.service';
import { UserRegisterService } from '../services/user-register.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  formValue !: FormGroup;
  formValue1 !: FormGroup;
  userInfo:any;
  id:any;
  user:User = new User();
  retriveImage:any;
  url="";

  constructor(private sharedData:ShareDataService, private userService:UserRegisterService, private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.formValue=this.formBuilder.group({
      userName: ['',Validators.required],
      firstName : ['',Validators.required],
      lastName : ['',Validators.required],
     phnNumber : ['',Validators.required]
    });

    this.formValue1=this.formBuilder.group({
      password: [''],
      newPassword : [''],
      conformPassword : ['']
    });

    this.userInfo = this.sharedData.getUser();
    console.log(this.userInfo);
    this.id = this.userInfo.userId;
    this.getUser();
    console.log(this.user.picName);


    
  }

  getUser(){
    this.userService.findByUserId(this.id).subscribe((response:any)=>{this.user=response;});
  }


  public onFileChanged(event:any) {
    //Select File
    // this.selectedFile = event.target.files[0];
    // console.log(this.selectedFile);
    var reader =new FileReader();
    reader.readAsDataURL(event.target.files[0]);
    reader.onload=(event:any)=>{
      this.url=event.target.result;
      this.user.picName=this.url;}
   
  }
  

  onEdit(){
    this.formValue.controls['userName'].setValue(this.user.userName)
    this.formValue.controls['firstName'].setValue(this.user.firstName)
    this.formValue.controls['lastName'].setValue(this.user.lastName)
    this.formValue.controls['phnNumber'].setValue(this.user.phnNumber)
    this.formValue.controls['picName'].setValue(this.user.picName)
  }

  onUpdate(){
    this.user.userName = this.formValue.value.userName;
    this.user.phnNumber = this.formValue.value.phnNumber;

    this.userService.updateUser(this.user).subscribe(res=>{
      alert("Employee Details Updated")
      this.formValue.reset();
      let ref = document.getElementById("cancle");
      ref?.click();
      this.getUser();
    })

  }

  onDelete(){
    this.userService.deleteUser(this.id).subscribe(res=>{alert("User Details Deleted");
    this.sharedData.setUser(this.user=new User());
    this.getUser();})
  }

  onChangePassword(){
    this.getUser();
  }

  onUpdatePassword(){

    if(this.user.password==this.formValue1.value.password){ 
      if(this.formValue1.value.newPassword==this.formValue1.value.conformPassword){
        this.user.password=this.formValue1.value.newPassword;
        this.userService.updateUser(this.user).subscribe(res=>{
          alert("Employee Password Updated")
          this.formValue1.reset();
          let ref1 = document.getElementById("cancle1");
          ref1?.click();
          this.getUser();
    })}
      else{
        alert('Conform password doesnt match');
      }
    }
    else{
    alert('Old password was wrong')
    }
  }

}
