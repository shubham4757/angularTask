import { Component, ViewChild } from '@angular/core';
import { ListService } from 'src/app/shared/apis/list.service';
import Swal from 'sweetalert2';
import { HttpClient, HttpResponse ,HttpHeaders} from '@angular/common/http';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MediaObserver } from '@angular/flex-layout';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent {
  
  dataSource: any;
  displayedColumns = ['status','quotationAmendmentNumber', 'customerName'];
  

  constructor(private ListService: ListService,public mediaObserver: MediaObserver) {   }
  listArray : string[] = [];
  direction = "";



  ngOnInit() {
    this.getList(this.pageSize);
  }

  getList(num:any) {
    console.log("Shubham");
    this.ListService.getOrderList(num).subscribe(
      (data) => {
        this.dataSource = data;
      },

      (error) => {
        console.log('error');

        Swal.fire({
          icon: 'error',

          text: 'Something went wrong please try after sometime!',
        });
      }
    );
  }

  getListOfClients(querryString: any) {
      throw new Error('Method not implemented.');
     }
    
     querryString(querryString: any) {

      throw new Error('Method not implemented.');
    
     }



     @ViewChild(MatPaginator) paginator!: MatPaginator;

     pageSizeOptions: number[] = [5, 10, 20];
     pageSize: number = 20;
   
     onPageChanged(event: PageEvent) {
       this.pageSize = event.pageSize;
       console.log(this.pageSize)
       console.log('Page size:', this.pageSize);
       this.getList(this.pageSize);
     }


     onScrollDown(ev: any) {
      console.log("scrolled down!!", ev);
      this.pageSize += 5;
      this.getList(this.pageSize);
      this.direction = "scroll down";
    }
  
    
   
  
   

  //    totalItems = 100;
  // itemsPerPage = 10;
  // pageSizeOptions: number[] = [5, 10, 25, 50];

  // pageEvent: PageEvent;

  // // Update data when the user interacts with the paginator
  // onPageChange(event: PageEvent) {
  //   const startIndex = event.pageIndex * event.pageSize;
  //   const endIndex = startIndex + event.pageSize;
     
    }

