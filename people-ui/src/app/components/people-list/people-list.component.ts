import { Component, OnInit } from '@angular/core';
import { PeopleService } from 'src/app/services/people.service';

const defaultPersonProps = {
  id: "Select a person",
  fullname: "Select a person",
  birth: "Select a person"
};

@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.css']
})
export class PeopleListComponent implements OnInit {
  people: any[] = [];
  currentPerson = defaultPersonProps;
  currentIndex = -1;

  constructor( private peopleService: PeopleService) { }

  ngOnInit(): void {
    this.retrievePeople();
  }

  retrievePeople(): void {
    this.peopleService.getAll()
      .subscribe(
        data => {
          this.people = this.createPeople( data );
        },
        error => {
          console.error(error);
        });
  }

  refreshList(): void {
    this.retrievePeople();
    this.currentPerson = defaultPersonProps;
    this.currentIndex = -1;
  }

  setActivePerson( person: any, index: number ): void {
    this.currentPerson = person;
    this.currentIndex = index;
  }

  private createPeople = ( res: any ) => {
    const peopleRows = res.result;
    let people: { id: any; fullname: any; birth: any; }[] = [];

    peopleRows.forEach( ( row: any ) => {
      const { id, fullname, birth } = row.properties;
      people.push( { id, fullname, birth } );
    });

    return people;
  };

}
