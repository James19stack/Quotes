import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuotesComponent } from './quotes/quotes.component';
import { QuotesDetailsComponent } from './quotes-details/quotes-details.component';
import { QuoteFormComponent } from './quote-form/quote-form.component';
import { QuoteDetailsComponent } from './quote-details/quote-details.component';
import { VotesDirective } from './votes.directive';
import { CustomDatePipe } from './custom-date.pipe';

@NgModule({
  declarations: [
    AppComponent,
    QuotesComponent,
    QuotesDetailsComponent,
    QuoteFormComponent,
    QuoteDetailsComponent,
    VotesDirective,
    CustomDatePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
