import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home/home.component';
import { SignInComponent } from './components/auth/sign-in/sign-in.component';
import { AlbumListComponent } from './components/home/album-list/album-list.component';
import { AlbumComponent } from './components/home/album/album.component';
import { AsideComponent } from './components/home/aside/aside.component';
import { AlbumDetailsComponent } from './components/home/album-details/album-details.component';
import { HeaderComponent } from './components/header/header.component';
import { SignUpComponent } from './components/auth/sign-up/sign-up.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { AppRoutingModule } from './app-routing.module';
import { ProgressBarComponent } from './components/home/progress-bar/progress-bar.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SignInComponent,
    AlbumListComponent,
    AlbumComponent,
    AsideComponent,
    AlbumDetailsComponent,
    HeaderComponent,
    SignUpComponent,
    PageNotFoundComponent,
    ProgressBarComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
