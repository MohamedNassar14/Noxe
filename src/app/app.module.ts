import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { MoviesComponent } from './movies/movies.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { PeopleComponent } from './people/people.component';
import { TvComponent } from './tv/tv.component';
import { HttpClientModule } from '@angular/common/http';
import { MoviedetailsComponent } from './moviedetails/moviedetails.component';
import { MediaitemComponent } from './mediaitem/mediaitem.component';
import { WatchPipe } from './watch.pipe';
import { SeemorePipe } from './seemore.pipe';
import { FormsModule } from '@angular/forms';
import { SearchPipe } from './search.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { HomeHeaderComponent } from './home-header/home-header.component';
import { LoadingComponent } from './loading/loading.component';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    MoviesComponent,
    NavbarComponent,
    NotfoundComponent,
    PeopleComponent,
    TvComponent,
    MoviedetailsComponent,
    MediaitemComponent,
    WatchPipe,
    SeemorePipe,
    SearchPipe,
    HomeHeaderComponent,
    LoadingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    CarouselModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
