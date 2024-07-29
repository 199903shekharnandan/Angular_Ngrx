import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-dynamic',
  templateUrl: './dynamic.component.html',
  styleUrls: ['./dynamic.component.css']
})
export class DynamicComponent {
  protected isInitialized = false;
  ngOnInit() {
    // this.isInitialized = true;
  }


  inputType: any = {
    "A.data1": "CAR",
    "B.data1": "BIKE",
    "C.data1": "SHIP",
    "A.data3": "PLANE",
    "B.data2": "TRUCK",
    "A.data2": "TRAIN"
  }

  groupedData: { [key: string]: { [key: string]: string }[] } = {};
  getValues() {
    for (const key in this.inputType) {
      if (this.inputType.hasOwnProperty(key)) {
        const [firstLetter, dataKey] = key.split('.'); // Split the key into the first letter and the data key

        if (!this.groupedData[firstLetter]) {
          this.groupedData[firstLetter] = [];
        }

        // Create an object with the data key and its value
        const entry: { [key: string]: string } = {};
        entry[dataKey] = this.inputType[key];

        this.groupedData[firstLetter].push(entry);
      }
    }
    console.log(this.groupedData);
  }
}

