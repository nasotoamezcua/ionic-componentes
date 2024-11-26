import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path:'',
    redirectTo: '/tabs/acount',
    pathMatch: 'full'
  },
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path:'acount',
        loadChildren: () => import('../avatar/avatar.module').then(m => m.AvatarPageModule)
      }
    ]
  },
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path:'contact',
        loadChildren: () => import('../list/list.module').then(m => m.ListPageModule)
      }
    ]
  },
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path:'settings',
        loadChildren: () => import('../infinite/infinite.module').then(m => m.InfinitePageModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
