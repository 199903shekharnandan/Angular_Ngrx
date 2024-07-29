//import { signal } from '@angular/signals';
import { Component, ViewChildren } from '@angular/core';
import { DynamicComponent } from 'src/app/dynamic/dynamic.component';
//import { Signal } from '@ngrx/signals/src/deep-signal';
import { FormBuilder, FormGroup, FormArray, FormControl, Validators } from '@angular/forms';
import { ThemePalette } from '@angular/material/core';
import { MatCheckbox } from '@angular/material/checkbox';
export interface Task {
  name: string;
  completed: boolean;
  color: ThemePalette;
  subtasks?: Task[];
}
@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})


export class CounterComponent {

  form!: FormGroup;
  names = ['John', 'Jane', 'Rohan', 'Mohan'];
  name = ['DIV-A', 'DIV-B'];
  selectedCheckboxStates: boolean[] = [];
  selectedNames: any = [];
  @ViewChildren("checkboxes")
  checkboxes!: any[];

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      checkboxes: new FormControl('')
    });
  }

  selectedName: string = '';
  select(value: any) {
    this.selectedName = value;
    console.log(this.selectedName);
  }

  select1(event: any) {
    const inputElement = event.target as HTMLInputElement;
    this.selectedName = inputElement.value;
    console.log(this.selectedName);
  }


  toggleCheckbox(name: any, event: any) {

    this.selectedCheckboxStates[name] = event.checked;

  }


  submit() {
    this.selectedNames = this.names.filter((name: any) => this.selectedCheckboxStates[name]);
    console.log('Selected names: ', this.selectedNames);

    this.checkboxes.forEach((checkbox) => {
      //console.log(checkbox);

      checkbox.checked = false;
    });

  }


  edit() {
    this.checkboxes.forEach((checkbox) => {
      //console.log(checkbox);
      const checkboxName = checkbox._elementRef.nativeElement.innerText.trim();
      checkbox.checked = this.selectedCheckboxStates[checkboxName];
    });
  }


}


