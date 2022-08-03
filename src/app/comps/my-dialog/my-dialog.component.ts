import { Component, Inject, OnInit, Optional, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { JsonEditorComponent, JsonEditorOptions } from "ang-jsoneditor";
import { FormBuilder } from '@angular/forms';

interface CustomerFormat {
  customerFormatId: string;
  customerFormatName: string;
}

@Component({
  selector: 'app-my-dialog',
  templateUrl: './my-dialog.component.html',
  styleUrls: ['./my-dialog.component.scss']
})

export class MyDialogComponent implements OnInit {

  public editorOptions: JsonEditorOptions | any;
  public data2: any;
  public showData: any;
  public EditedData: any;
  public show = false;
  fromPage!: string;
  fromDialog!: string;

  constructor(
    public dialogRef: MatDialogRef<MyDialogComponent>,
    public dialog: MatDialog, 
    public fb: FormBuilder,
    @Optional() @Inject(MAT_DIALOG_DATA) public mydata: any
  ) { 
    this.editorOptions = new JsonEditorOptions()
    this.editorOptions.mode = 'code'
  }

  customerFormats: CustomerFormat[] = [
    {customerFormatId: 'T1', customerFormatName: 'Toyota-Format-1'},
    {customerFormatId: 'T2', customerFormatName: 'Toyota-Format-2'},
    {customerFormatId: 'T3', customerFormatName: 'Toyota-Format-3'},
    {customerFormatId: 'S1', customerFormatName: 'Suzuki-Format-1'},
    {customerFormatId: 'S2', customerFormatName: 'Suzuki-Format-2'},
    {customerFormatId: 'S3', customerFormatName: 'Suzuki-Format-3'},
  ];



  @ViewChild("editorTwo") editorTwo: JsonEditorComponent | any;
  public form: any;
  public formData: any;


  ngOnInit() {
    this.fromDialog = "I am from dialog land...";
    this.data2 = {
      products: [
        {
          name: "car",
          product: [
            {
              name: "honda",
              model: [
                { id: "civic", name: "civic" },
                { id: "accord", name: "accord" },
                { id: "crv", name: "crv" },
                { id: "pilot", name: "pilot" },
                { id: "odyssey", name: "odyssey" }
              ]
            }
          ]
        }
      ]
    };

    this.form = this.fb.group({
      myinput: [this.data2],
    });
  }

  changeLog(event = null) {
    console.log(event);
    console.log("change2:", this.editorTwo);
  }

  changeEvent(event: any) {
    console.log(event);
  }
  print(v: any) {
    return JSON.stringify(v, null, 2);
  }

  submit() {
    this.formData = JSON.stringify(this.form.value, null, 2);
    console.log(this.form.value);
  }

  showJson(d: any) {
    console.log(d);
    this.EditedData = JSON.stringify(d, null, 2);
  }

  makeOptions = () => {
    return new JsonEditorOptions();
  };
  closeDialog() { 
    this.dialogRef.close({ event: 'close', data: this.fromDialog }); 
  }

  save() {
    this.dialogRef.close(this.form.value);
  }

  close() {
      this.dialogRef.close();
  }
}