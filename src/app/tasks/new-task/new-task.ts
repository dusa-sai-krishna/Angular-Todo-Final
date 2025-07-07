import {Component, inject, input} from '@angular/core';
import {FloatLabel} from "primeng/floatlabel";
import {InputText} from "primeng/inputtext";
import {Textarea} from "primeng/textarea";
import {DatePicker} from "primeng/datepicker";
import { ButtonDirective} from "primeng/button";
import {AbstractControl, FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {TasksService} from "../tasks.service";
import {NewTask} from "../new-task.model";
import {Router, RouterLink} from "@angular/router";



function isFutureDate(control:AbstractControl){
  let dueDate = new Date(control.value);
  let now = new Date();
  if(dueDate <= now){
    return {NotaFutureDate:true}
  }
  return null
}
function formatDate(date:Date) {
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-based
  const year = date.getFullYear();
  return `${day}-${month}-${year}`;
}

@Component({
  selector: 'app-new-tasks',
  imports: [
    FloatLabel,
    InputText,
    Textarea,
    DatePicker,
    ButtonDirective,
    ReactiveFormsModule,
    RouterLink
  ],
  templateUrl: './new-task.html',
  styleUrl: './new-task.css'
})
export class NewTaskComponent {
  private  _taskService = inject(TasksService)
  private _router = inject(Router)
  userId = input<string>()
  ngForm =  new FormGroup({
    title:new FormControl("",{
      validators: [Validators.required],
    }),
    summary: new FormControl("",{validators: [Validators.required]}),
    dueDate: new FormControl("",{validators: [Validators.required,isFutureDate],}),
  })

  get isTitleInvalid(){
    let titleControl = this.ngForm.get('title');
    if(titleControl){
      return titleControl.invalid && titleControl.touched && titleControl.dirty;
    }
    return false;
  }
  get isSummaryInvalid(){
    let control = this.ngForm.get('summary');
    if(control){
      return control.invalid && control.touched && control.dirty;
    }
    return false;
  }
  get isDateInvalid(){
    let control = this.ngForm.get('dueDate');
    if(control){
      return control.invalid && control.touched && control.dirty;
    }
    return false;
  }

  onSubmit() {
    if(this.ngForm.valid) {

      let title = this.ngForm.value.title!;
      let summary = this.ngForm.value.summary!;
      let dueDate =formatDate(new Date(this.ngForm.value.dueDate!));
      let newTask:NewTask={
        title:title,
        summary:summary,
        dueDate:dueDate,
        userId:this.userId()!
      }
      this._taskService.addTask(newTask)
      this._router.navigate(["users",this.userId(),"tasks"],{
        replaceUrl:true
      }).then(r => console.log(r));
    }
  }

}
