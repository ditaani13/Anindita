import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators} from '@angular/forms'
import { Student } from 'src/app/model/student';
import { StudentService } from 'src/app/service/student.service';
import {Router} from '@angular/router'; 

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
      //private router: Router...... used for logout routing
  
  studentDetail !: FormGroup;
  studentObj : Student = new Student(); //studentObj is the object of Student Class
  studentList : Student[] = [];

  constructor(private formBuilder : FormBuilder, private studentService : StudentService, private router: Router) {}

  ngOnInit(): void {
    this.getAllStudent();
    
    this.studentDetail =new FormGroup({
      id: new FormControl('',[Validators.required]),
      firstname: new FormControl('',[Validators.required,Validators.pattern('^[A-Za-z]*$')]),
      lastname: new FormControl('',[Validators.required,Validators.pattern('^[A-Za-z]*$')]),
      housename: new FormControl('',[Validators.required,Validators.pattern('^[A-Za-z]*$')]),
      family: new FormControl('',[Validators.required,Validators.pattern('^[A-Za-z]*$')]),
      });
}
clickLogout()
{
  console.log("Successfully Logged out");  
  this.router.navigate (['/logout']);    
}
 // validation .....................................................
loginUser()
{
  console.warn(this.studentDetail.value)
}
get id()
{
  return this.studentDetail.get('id');
}
get firstname()
{
  return this.studentDetail.get('firstname');
}
get lastname()
{
  return this.studentDetail.get('lastname');
}
get housename()
{
  return this.studentDetail.get('housename');
}
get family()
{
  return this.studentDetail.get('family');
}
// ........................................................

  // add student
addStudent()  {
  console.log(this.studentDetail);
  this.studentObj.id = this.studentDetail.value.id;
  this.studentObj.firstname = this.studentDetail.value.firstname;
  this.studentObj.lastname = this.studentDetail.value.lastname;
  this.studentObj.housename = this.studentDetail.value.housename;
  this.studentObj.family = this.studentDetail.value.family;

//declaring the method and passing the student object
  this.studentService.addStudent(this.studentObj).subscribe(res=>{
  console.log(res);
  this.getAllStudent();
  },err=>{
  console.log(err);
  });
}

// get  all student
getAllStudent() {
this.studentService.getAllStudent().subscribe(res=>{
   this.studentList = res;
  },err=>{
  console.log("error while fetching data");
 });
}

// edit student
editStudent(stud : Student)
{
   this.studentDetail.controls['id'].setValue(stud.id);
   this.studentDetail.controls['firstname'].setValue(stud.firstname);
   this.studentDetail.controls['lastname'].setValue(stud.lastname);
   this.studentDetail.controls['housename'].setValue(stud.housename);
   this.studentDetail.controls['family'].setValue(stud.family);
}

// update student
updateStudent(){
  this.studentObj.id = this.studentDetail.value.id;
  this.studentObj.firstname = this.studentDetail.value.firstname;
  this.studentObj.lastname = this.studentDetail.value.lastname;
  this.studentObj.housename = this.studentDetail.value.housename;
  this.studentObj.family = this.studentDetail.value.family;

  this.studentService.updateStudent(this.studentObj).subscribe(res=>{
    console.log(res);
    this.getAllStudent();
  },err=>{
    console.log(err);
  })
}

// delete student
deleteStudent(stud : Student){
  this.studentService.deleteStudent(stud).subscribe(res=>{
    console.log(res);
    alert("student deleted successfully");
    this.getAllStudent();
  },err=>{
    console.log(err);
  });
}

}
