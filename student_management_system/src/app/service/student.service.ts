import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Student } from '../model/student';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  studentDetail(stud: Student) {
    throw new Error('Method not implemented.');
  }
  getStudentById(id: number) {
    throw new Error('Method not implemented.');
  }
  
 addStudentURL : string;
 getStudentURL : string;
 updateStudentURL : string;
 deleteStudentURL : string;
//  getStudentDetailsURL : string; 

  constructor(private http : HttpClient) { 
    this.addStudentURL = 'http://localhost:9090/stud/addStudent';
    this.getStudentURL = 'http://localhost:9090/stud/students';
    this.updateStudentURL = 'http://localhost:9090/stud/updateStudent';
    this.deleteStudentURL = 'http://localhost:9090/stud/deleteStudentById';
    // this.getStudentDetailsURL = 'http://localhost:9090/stud/getStudentByID'; 
  }
  // add student
   addStudent(stud : Student): Observable<Student> {
    return this.http.post<Student>(this.addStudentURL,stud);
  }

  // get student
  getAllStudent(): Observable<Student[]> {
   return this.http.get<Student[]>(this.getStudentURL);
  }

// update student
 updateStudent(stud : Student): Observable<Student> {
  return this.http.put<Student>(this.updateStudentURL, stud);
}

// delete student
 deleteStudent(stud : Student): Observable<Student> {
  return this.http.delete<Student>(this.deleteStudentURL+ '/'+ stud.id);
}

}
