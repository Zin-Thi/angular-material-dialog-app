import { Component } from "@angular/core";
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import { MyDialogComponent } from "./comps/my-dialog/my-dialog.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = "This is dialog testing app."

  constructor(private dialog: MatDialog) {}

  openDialog() {

      const dialogConfig = new MatDialogConfig();

      dialogConfig.disableClose = true;
      dialogConfig.autoFocus = true;
      dialogConfig.width = '90%'
      dialogConfig.height = '98%'
      dialogConfig.backdropClass = 'backdropBackground'
      
      dialogConfig.position = {
        top: '0.5%',
        left: '5%'
      };

      const dialogRef = this.dialog.open(MyDialogComponent, dialogConfig);

      dialogRef.afterClosed().subscribe(
        data => console.log("Dialog output:", data)
    ); 
  }
}