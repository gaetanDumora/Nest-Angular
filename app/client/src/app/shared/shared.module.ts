import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { RouterModule } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [LayoutComponent, NotFoundComponent],
  imports: [CommonModule, RouterModule],
  exports: [LayoutComponent],
})
export class SharedModule {}
