import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PlatformModule } from '@angular/cdk/platform';
import { MatIconModule } from '@angular/material/icon';
import { IconsProviderModule } from '../icons-provider.module';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { zh_TW } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { NgApexchartsModule } from "ng-apexcharts";
import { MatTabsModule } from '@angular/material/tabs';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';



registerLocaleData(zh);
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatMenuModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    FlexLayoutModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    PlatformModule,
    MatIconModule,
    NzLayoutModule,
    NzMenuModule,
    IconsProviderModule,
    MatTableModule,
    MatPaginatorModule,
    NgApexchartsModule,
    MatTabsModule,
    MatFormFieldModule,
    MatSelectModule 
  ],
  exports:[
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatMenuModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    FlexLayoutModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    PlatformModule,
    MatIconModule,
    NzLayoutModule,
    NzMenuModule,
    IconsProviderModule,
    MatTableModule,
    MatPaginatorModule,
    NgApexchartsModule,
    MatTabsModule,
    MatFormFieldModule,
    MatSelectModule 
  ],
  providers: [
    HttpClient,
    { provide: NZ_I18N, useValue: zh_TW },
  ]
})
export class SharedModule { }
