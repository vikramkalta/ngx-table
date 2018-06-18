import {
  Component,
  OnInit,
  OnChanges,
  SimpleChanges,
  Input
} from '@angular/core';

@Component({
  selector: 'ngx-table',
  templateUrl: './lib.component.html',
  styleUrls: ['./lib.component.scss']
})
export class LibComponent implements OnInit, OnChanges {
  // columns name
  @Input() columns: Array<any>;
  // set flag for handling methods server or client side
  @Input() renderer: boolean;
  // data for the table
  // @Input() tableData: any;
  @Input() dataSource: any;
  // number of pages
  @Input() totalPages: Array<number>;

  // store actual pages in the following property
  // actualPages: number;
  // adding data source to the table
  // dataSource: any[];
  // columns
  // displayedColumns: Array<string>;

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    // changes in the table data
    if (this.dataSource) {
      console.log('changes.data source', this.dataSource);

      this.dataSource = this.dataSource;

      // actual pages
      // this.actualPages = this.tableData.TotalPages;

      // set the columns name
      // this.displayedColumns = this.columns;

      // this.onSelectPage = this.totalPages[0];

      // setting the data source property
      // this.dataSource = this.tableData.Data;
    }
  }
}
