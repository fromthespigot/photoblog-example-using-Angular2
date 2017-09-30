import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api'; /* educational uses only */
import { AppComponent } from './app.component';
import { EntryListComponent, EntryComponent, EntryService, EntryCommentFormComponent } from './entries';
import { InMemoryEntryService } from './backend';
@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        FormsModule,
        InMemoryWebApiModule.forRoot(InMemoryEntryService)
    ],
    /*Providers are for services*/
    providers: [ EntryService ],
    declarations: [
        AppComponent,
        /*always add components from child to parent */
        EntryComponent,
        EntryListComponent,
        EntryCommentFormComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule {

}