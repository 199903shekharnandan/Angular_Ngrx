import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';



@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent {
  // form!: FormGroup;
  // studentFormDetails: any[] = [];
  // constructor(private fb: FormBuilder) {
  //   this.form = this.fb.group({
  //     ID: ['', Validators.required],
  //     Name: ['', Validators.required],
  //     Email: ['', Validators.required],
  //     Phone: ['', Validators.required],
  //     Address: ['', Validators.required],
  //     Date: ['', Validators.required]


  //   })
  // }


  // submit() {
  //   if (this.form.value !== '') {
  //     this.studentFormDetails.push(this.form.value);
  //     this.form.reset();
  //   }
  //   //console.log(this.studentFormDetails);
  // }

  // editData(item: any) {
  //   Swal.fire({
  //     title: '<div class="cust-title d-flex justify-content-between">Edit Table!</div>',
  //     html: `
  //      <div class="form-group">
  //         <input type="text" readonly id="ID" class="form-control" value="${item.ID}" placeholder="ID">
  //       </div>
  //       <div class="form-group">
  //         <input type="text" id="name" class="form-control" value="${item.Name}" placeholder="Name">
  //       </div>
  //       <div class="form-group">
  //         <input type="text" id="email" class="form-control" value="${item.Email}" placeholder="Email">
  //       </div>
  //       <div class="form-group">
  //         <input type="text" id="phone" class="form-control" value="${item.Phone}" placeholder="Phone">
  //       </div>
  //       <div class="form-group">
  //         <input type="text" id="address" class="form-control" value="${item.Address}" placeholder="Address">
  //       </div>
  //       <div class="form-group">
  //         <input type="date" id="date" class="form-control" value="${item.Date}" placeholder="Address">
  //       </div>

  //     `,
  //     showCancelButton: true,
  //     cancelButtonText: 'Cancel',
  //     showConfirmButton: true,
  //     focusConfirm: false,
  //     preConfirm: () => {

  //       const idValue = (document.getElementById('id') as HTMLInputElement)?.value;
  //       const nameValue = (document.getElementById('name') as HTMLInputElement)?.value;
  //       const emailValue = (document.getElementById('email') as HTMLInputElement)?.value;
  //       const phoneValue = (document.getElementById('phone') as HTMLInputElement)?.value;
  //       const addressValue = (document.getElementById('address') as HTMLInputElement)?.value;
  //       const date = (document.getElementById('date') as HTMLInputElement)?.value;



  //       return {
  //         ID: idValue,
  //         Name: nameValue,
  //         Email: emailValue,
  //         Phone: phoneValue,
  //         Address: addressValue,
  //         date: date
  //       };
  //     }
  //   }).then((result) => {
  //     if (result.isConfirmed) {
  //       console.log(result);
  //       const { ID, Name, Email, Phone, Address, Date } = result.value;
  //       // const
  //       const existingIndex = this.studentFormDetails.findIndex(detail => detail.ID === ID);
  //       if (existingIndex !== -1) {
  //         this.studentFormDetails[existingIndex] = { ID, Name, Email, Phone, Address, Date };
  //       }
  //       // console.log('Updated studentFormDetails:', this.studentFormDetails);
  //       Swal.fire('Success!', 'Data updated successfully!', 'success');
  //     }

  //   });
  // }

  // deleteData(item: any) {
  //   let index = this.studentFormDetails.findIndex(id => id.ID == item);
  //   if (index !== -1) {
  //     this.studentFormDetails.splice(index, 1)
  //   }
  // }

  // keyPress(event: KeyboardEvent) {
  //   const pattern = /[0-9]/;
  //   const inputChar = String.fromCharCode(event.charCode);
  //   if (!pattern.test(inputChar)) {
  //     // invalid character, prevent input
  //     event.preventDefault();
  //   }
  // }


}
