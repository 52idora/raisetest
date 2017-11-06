import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FilesPage } from './files';

@NgModule({
  declarations: [
    FilesPage,
  ],
  imports: [
    IonicPageModule.forChild(FilesPage),
  ],
  exports: [
    FilesPage
  ]
})
export class FilesPageModule {}
