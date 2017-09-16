import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule, JsonpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { SessionService } from './session.service';
import { HomeComponent } from './home/home.component';

@NgModule({
	declarations: [
		AppComponent,
		HomeComponent
	],
	imports: [
		BrowserModule,
		HttpModule,
		JsonpModule
	],
	providers: [SessionService],
	bootstrap: [AppComponent]
})
export class AppModule { }
