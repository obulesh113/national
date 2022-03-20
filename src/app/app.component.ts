
import { state } from '@angular/animations';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Template driven forms';
 
  countryList:country[] = [
    new country("1", "India"),
    new country('2', 'USA'),
    new country('3', 'England')
  ];

  categoryList:category[] = [
    new category("1","Private Instituion"),
    new category("2","Government Instituion")
    
  ];

  stateList:states[] = [
    new states("1","Andhra Pradesh"),
    new states("2","Telangana"),
    new states("3","Tamil Nadu"),
    new states("4","Karnataka"),
    new states("5","Mumbai"),
    new states("6","Delhi"),
    new states("7","others")

  ];

  districtList:district[] = [
    new district("1","Anantapur"),
    new district("2","kurnool"),
    new district("3","kadapa"),
    new district("4","Nandyal"),
    new district("5","Chennai"),
    new district("6","Bengaluru"),
    new district("7","others")

  ];

  itypeList:itype[] = [
    new itype("1","Central University"),
    new itype("2","State Universities"),
    new itype("3","Affiliated Colleges"),
    new itype("4","Autonomus Colleges"),
    new itype("5","Other University")
  ];

  astateList:astate[] = [
    new astate("1","Andhra Pradesh"),
    new astate("2","Telangana"),
    new astate("3","Tamil Nadu"),
    new astate("4","Karnataka"),
    new astate("5","Mumbai"),
    new astate("6","Delhi"),
    new astate("7","Bihar"),
    new astate("8","Uttar Pradesh"),
    new astate("9","others")

  ];

  ayearList:ayear[] = [
    new ayear("1","1"),
    new ayear("2","2"),
    new ayear("3","3"),
    new ayear("4","4"),
    new ayear("5","5"),
    new ayear("6","6"),
    new ayear("7","7")

  ];

  onSubmit(contactForm: { value: any; }) {
    console.log(contactForm.value);
  }

  reset(contactForm :NgForm) {
    contactForm.resetForm();
  }
}
 
export class country {
  id:string;
  name:string;
 
  constructor(id:string, name:string) {
    this.id=id;
    this.name=name;
  }
}

export class category{
  id:string;
  name:string;

  constructor(id:string, name:string){
    this.id=id;
    this.name=name;
  }
}


export class states{
  id:string;
  name:string;

  constructor(id:string, name:string){
    this.id=id;
    this.name=name;
  }
}


export class district{
  id:string;
  name:string;

  constructor(id:string, name:string){
    this.id=id;
    this.name=name;
  }
}


export class itype{
  id:string;
  name:string;

  constructor(id:string, name:string){
    this.id=id;
    this.name=name;
  }
}
export class astate{
  id:string;
  name:string;

  constructor(id:string, name:string){
    this.id=id;
    this.name=name;
  }
}


export class ayear{
  id:string;
  name:string;

  constructor(id:string, name:string){
    this.id=id;
    this.name=name;
  }
}
