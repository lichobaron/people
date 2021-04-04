import { Component, OnInit } from '@angular/core';
import { PeopleService } from 'src/app/services/people.service';

@Component({
  selector: 'app-add-person',
  templateUrl: './add-person.component.html',
  styleUrls: ['./add-person.component.css']
})
export class AddPersonComponent implements OnInit {

  person = {
    fullname: "",
    birth: ""
  };
  submitted = false;

  constructor( private peopleService: PeopleService ) { }

  ngOnInit(): void {}

  savePerson(): void {
    const data = {
      fullname: this.person.fullname,
      birth: this.formatDate( this.person.birth )
    };

    this.peopleService.create( data )
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        },
        error => {
          console.error(error);
        }
      );
  }

  newPerson(): void {
    this.submitted = false;
    this.person = {
      fullname: "",
      birth: ""
    };
  };

  private formatDate = ( date: string ) => {
    const fields = date.split("-");

    return {
      year: fields[0],
      month: fields[1],
      day: fields[2],
    };
  };

}
