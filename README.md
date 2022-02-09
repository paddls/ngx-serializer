# NgxSerializer

![ngx-serializer-ci](https://github.com/witty-services/ngx-serializer/workflows/build/badge.svg?branch=master)
[![npm version](https://badge.fury.io/js/%40witty-services%2Fngx-serializer.svg)](https://badge.fury.io/js/%40witty-services%2Fngx-serializer)
![GitHub](https://img.shields.io/github/license/witty-services/ngx-serializer)
![GitHub repo size](https://img.shields.io/github/repo-size/witty-services/ngx-serializer)
![GitHub last commit](https://img.shields.io/github/last-commit/witty-services/ngx-serializer)
![GitHub issues](https://img.shields.io/github/issues/witty-services/ngx-serializer)
![GitHub top language](https://img.shields.io/github/languages/top/witty-services/ngx-serializer)

## Summary

* [Introduction](#introduction)
* [Installation](#installation)
* [How to use](#how-to-use)

## Introduction

NgxSerializer is an angular wrapper of [TsSerializer](https://github.com/witty-services/ts-serializer) library. You can retrieve more documentation on TSSerializer library documentation.

## Installation

```shell script
npm i @paddls/ngx-serializer @paddls/ts-serializer
```

## How to use

```typescript
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgxSerializerModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public constructor(serialize: NgxSerializerService) {
    
  }
}
```
