import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-counter-output',
  templateUrl: './counter-output.component.html',
  styleUrls: ['./counter-output.component.css']
})
export class CounterOutputComponent {
  constructor(private store: Store<{ counter: { counter: number } }>) {

  }

  counter!: number;
  ngOnInit(): void {
    this.createUserName();
    this.showUserName();

    this.store.select('counter').subscribe((data: any) => {
      console.log(data);
      this.counter = data.counter;
    })

  }
  userName: string = "Bill";
  createUserName() {
    this.userName = "Bill";
    console.log(this.userName);
  }

  showUserName() {
    this.userName = "gggfgff";
    console.log(this.userName);

  }




  // STUDENTS: Student[] = [
  //   {
  //     id: 1,
  //     name: 'Alice Johnson',
  //     age: 20,
  //     grade: 'Junior',
  //     address: '123 Main St, Springfield, IL',
  //     email: 'alice.johnson@example.com',
  //     phoneNumber: '555-1234'
  //   },
  //   {
  //     id: 2,
  //     name: 'Bob Smith',
  //     age: 22,
  //     grade: 'Senior',
  //     address: '456 Oak St, Springfield, IL',
  //     email: 'bob.smith@example.com',
  //     phoneNumber: '555-5678'
  //   },
  //   {
  //     id: 3,
  //     name: 'Charlie Brown',
  //     age: 19,
  //     grade: 'Sophomore',
  //     address: '789 Pine St, Springfield, IL',
  //     email: 'charlie.brown@example.com',
  //     phoneNumber: '555-9012'
  //   },
  //   {
  //     id: 4,
  //     name: 'Diana Prince',
  //     age: 21,
  //     grade: 'Junior',
  //     address: '101 Maple St, Springfield, IL',
  //     email: 'diana.prince@example.com',
  //     phoneNumber: '555-3456'
  //   },
  //   {
  //     id: 5,
  //     name: 'Ethan Hunt',
  //     age: 23,
  //     grade: 'Senior',
  //     address: '202 Birch St, Springfield, IL',
  //     email: 'ethan.hunt@example.com',
  //     phoneNumber: '555-7890'
  //   }


}
