import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './components/main/main.component';


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,

    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
                    
    //  {path: '', redirectTo: 'investorList', pathMatch: 'full' },
    
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
