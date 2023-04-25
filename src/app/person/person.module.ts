import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonRoutingModule } from './person-routing.module';
import {MatIconModule} from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { HttpClientModule } from '@angular/common/http';
import { ListService } from '../shared/apis/list.service';
import { ListComponent } from './list/list.component';
// import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import {MatPaginatorModule} from '@angular/material/paginator';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { FlexLayoutModule } from '@angular/flex-layout';






@NgModule({
  declarations: [ListComponent],
  imports: [
    CommonModule,
    PersonRoutingModule,
    MatButtonModule,
    MatTableModule,
    MatIconModule,
    MatCardModule,
    HttpClientModule,
    MatPaginatorModule,
    InfiniteScrollModule,
    FlexLayoutModule,


  ],
  providers: [ListService]
})
export class PersonModule { }
