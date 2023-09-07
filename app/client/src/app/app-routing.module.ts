import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './features/dashboard/pages/dashboard/dashboard.component';
import { NotFoundComponent } from './shared/not-found/not-found.component';
import { BoardComponent } from './features/kanban/page/board/board.component';
const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'kanban', component: BoardComponent },
  { path: '**', pathMatch: 'full', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
