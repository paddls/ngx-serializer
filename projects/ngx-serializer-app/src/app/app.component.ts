import {Component} from '@angular/core';
import {NgxSerializerService} from '@witty-services/ngx-serializer';
import {Vehicle} from './model/vehicle.model';
import {Library} from './model/library.model';

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
             }
           },
           {
             title: 'Book 1.2',
             editor: {
               id: 'Editor 2'
             }
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
             }
           },
           {
             title: 'Book 2.2',
             editor: {
               id: 'Editor 3'
             }
           }
         ]
       }
     ];

     const vehicleData: any = [
       {
         name: 'Passat',
         type: 'CAR',
         seatingCapacity: 4
       },
       {
         name: 'Renault Truck',
         type: 'TRUCK',
         payloadCapacity: 3
       }
     ];

     console.log(librariesData);
     const libraries: Library[] = serializer.deserializeAll(Library, librariesData);

     console.log(libraries);
     console.log(serializer.serializeAll(libraries));

     console.log(vehicleData);
     console.log(serializer.deserializeAll(Vehicle, vehicleData));
  }
}
