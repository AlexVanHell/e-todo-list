import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FileUploadComponent } from './file-upload.component';
import { FileItemComponent } from './file-item/file-item.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SharedModule } from '../../shared.module';
import { DropBlockComponent } from './drop-block/drop-block.component';
import { FileUploadService } from './service/file-upload.service';

@NgModule({
  declarations: [FileUploadComponent, FileItemComponent, DropBlockComponent],
  imports: [
    CommonModule,
    FontAwesomeModule,
    SharedModule
  ],
  exports: [
    FileUploadComponent
  ],
  providers: [
    FileUploadService
  ]
})
export class FileUploadModule { }
