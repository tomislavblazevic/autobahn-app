import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AutobahnApp';

  displayedColumns: string[] = ['position', 'make', 'model', 'year'];
  dataSource = new MatTableDataSource([
    { position: 1, make: 'Audi', model: 'A4', year: 2016 },
    { position: 2, make: 'BMW', model: 'X5', year: 2013 },
    { position: 3, make: 'Chrysler', model: 'Town & Country', year: 2011 },
    { position: 4, make: 'Honda', model: 'Accord', year: 2018 },
    { position: 5, make: 'Jaguar', model: 'XF', year: 2017 },
    { position: 6, make: 'Mercedes-Benz', model: 'C-Class', year: 2018 }
  ]);
}
