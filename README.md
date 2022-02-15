# NgxSerializer

![ngx-serializer-ci](https://github.com/paddls/ngx-serializer/workflows/build/badge.svg?branch=master)
[![npm version](https://badge.fury.io/js/%40paddls%2Fngx-serializer.svg)](https://badge.fury.io/js/%40paddls%2Fngx-serializer)
![GitHub](https://img.shields.io/github/license/paddls/ngx-serializer)
![GitHub repo size](https://img.shields.io/github/repo-size/paddls/ngx-serializer)
![GitHub last commit](https://img.shields.io/github/last-commit/paddls/ngx-serializer)
![GitHub issues](https://img.shields.io/github/issues/paddls/ngx-serializer)
![GitHub top language](https://img.shields.io/github/languages/top/paddls/ngx-serializer)

## Informations

> :warning: Since version 1.0.7, ```ngx-serializer``` and ```ts-serializer``` have been published under ```@paddls``` namespace. We continue to maintain ```@witty-services``` namespace, but now, ```ngx-serializer``` depends on ```@paddls/ts-serializer```

## Summary

* [Introduction](#introduction)
* [Installation](#installation)
* [How to use](#how-to-use)

## Introduction

NgxSerializer is an angular wrapper of [TsSerializer](https://github.com/paddls/ts-serializer) library. You can retrieve more documentation on TSSerializer library documentation.

## Installation

```shell script
npm i @paddls/ngx-serializer @paddls/ts-serializer
```
or
```shell script
npm i @witty-services/ngx-serializer @witty-services/ts-serializer
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
