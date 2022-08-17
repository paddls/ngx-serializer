import { Component } from '@angular/core';
import { NgxSerializerService } from '@paddls/ngx-serializer';
import { Library } from './model/library.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {

  public constructor(serializer: NgxSerializerService) {
    const librariesData: any = [
      {
        name: 'Library 1',
        addr: {
          address: 'Address 1',
          postCode: 'Post Code 1',
          city: 'City 1'
        },
        test: 'Hello',
        opened: false,
        createdAt: '2020-05-02T12:30:51',
        books: [
          {
            title: 'Book 1.1',
            editor: {
              id: 'Editor 1'
            },
            type: 'novel'
          },
          {
            title: 'Book 1.2',
            editor: {
              id: 'Editor 2'
            },
            type: 'comic'
          }
        ]
      },
      {
        name: 'Library 2',
        addr: {
          address: 'Address 2',
          postCode: 'Post Code 2',
          city: 'City 2'
        },
        test: 'Bye bye',
        opened: true,
        createdAt: '2020-05-04T18:51:00',
        books: [
          {
            title: 'Book 2.1',
            editor: {
              id: 'Editor 2'
            },
            type: 'novel'
          },
          {
            title: 'Book 2.2',
            editor: {
              id: 'Editor 3'
            },
            type: 'novel'
          }
        ]
      }
    ];

    console.log(librariesData);
    const libraries: Library[] = serializer.deserializeAll(Library, librariesData);

    console.log(libraries);
    console.log(serializer.serializeAll(libraries));

    console.log('==== WITH GROUPS ====');

    console.log(serializer.deserializeAll(Library, librariesData, {groups: 'justName'}));
    console.log(serializer.serializeAll(libraries, {groups: 'justName'}));
  }
}
