import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { HeaderComponent } from './components/static/header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FaqComponent } from './components/static/faq/faq.component';
import { FooterComponent } from './components/static/footer/footer.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FaqComponent,
    FooterComponent
  ],
  imports: [
    SharedModule,
    HttpClientModule,
    RouterModule
  ],
  exports: [
    HeaderComponent,
    FaqComponent,
    FooterComponent
  ]
})
export class CoreModule { }
