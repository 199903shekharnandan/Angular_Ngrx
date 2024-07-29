import { Component, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  list!: [{ Q: any; a: any; a1: any; b: any }][];


  ngOnInit(): void {
    setTimeout(() => {
      console.log(this.message);
    }, 1000);
  }

  message: string = '';
  isClicked = false;
  getMessage() {
    this.isClicked = !this.isClicked;
    if (this.isClicked) {
      this.message = 'Welcome to GFG!!!';
    } else {
      this.message = '';
    }
  }



  onClick(): void {
    const counter = (() => {
      let count = 0;
      return () => {
        count++;
        console.log(`Button clicked ${count} times`);
      };
    })();

    counter(); // Button clicked 1 times
    counter(); // Button clicked 2 times
  }
  // timeoutId: any;
  // intervalId: any;

  // constructor() {
  //   this.startTimeout();
  //   this.startInterval();
  // }

  // startTimeout() {
  //   this.timeoutId = setTimeout(() => {
  //     console.log('Timeout executed');
  //   }, 2000);
  // }

  // startInterval() {
  //   this.intervalId = setInterval(() => {
  //     console.log('Interval executed');
  //   }, 2000);
  // }

  // ngOnDestroy() {
  //   clearTimeout(this.timeoutId);
  //   clearInterval(this.intervalId);
  // }


  checke() {
    var row = 3;
    //outer loop for rows
    for (let i = 0; i < row; i++) {
      //inner loop for columns
      for (let j = 0; j < i; j++) {
        //prints stars
        console.log("*");
      }
      console.log()
    }



  }

}
