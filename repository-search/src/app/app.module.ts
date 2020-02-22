import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
  import { MatCardModule } from '@angular/material/card';
  import { MatProgressSpinnerModule} from '@angular/material/progress-spinner';
  import { MatIconModule } from "@angular/material/icon"

  import {FormsModule} from '@angular/forms';  
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RepositorySearchComponent } from './components/repository-search/repository-search.component';
import {HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TopContributorsComponent } from './components/top-contributors/top-contributors.component';
import { RepositoryService } from './services/repository.service';

@NgModule({
  declarations: [
    AppComponent,
    RepositorySearchComponent,
    TopContributorsComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatIconModule
  ],
  providers: [RepositoryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
