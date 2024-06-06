# NgxSerializer

![ngx-serializer-ci](https://github.com/paddls/ngx-serializer/workflows/build/badge.svg?branch=master)
[![npm version](https://badge.fury.io/js/%40paddls%2Fngx-serializer.svg)](https://badge.fury.io/js/%40paddls%2Fngx-serializer)
![GitHub](https://img.shields.io/github/license/paddls/ngx-serializer)
![GitHub repo size](https://img.shields.io/github/repo-size/paddls/ngx-serializer)
![GitHub last commit](https://img.shields.io/github/last-commit/paddls/ngx-serializer)
![GitHub issues](https://img.shields.io/github/issues/paddls/ngx-serializer)
![GitHub top language](https://img.shields.io/github/languages/top/paddls/ngx-serializer)

## Informations

> :warning: Since version 1.0.7, ```ngx-serializer``` and ```ts-serializer``` have been published under ```@paddls```
> namespace. We continue to maintain ```@witty-services``` namespace, but now, ```ngx-serializer``` depends
> on ```@paddls/ts-serializer```

## Summary

* [Introduction](#introduction)
* [Installation](#installation)
* [How to use](#how-to-use)

## Introduction

NgxSerializer is an angular wrapper of [ts-serializer](https://github.com/paddls/ts-serializer) library.
You can get more infos on TS Serializer library documentation page.

## Installation

```shell script
npm i @paddls/ngx-serializer
```

### Recommended Angular versions

| `Angular`          | `NgxSerializer`   |
|--------------------|-------------------|
| `18.0.0` and above | `6.0.0` and above |
| `17.0.0` and above | `5.0.0` and above |
| `16.0.0` and above | `4.0.0` and above |
| `15.0.0` and above | `3.0.0` and above |
| `14.0.0` and above | `2.0.0` and above |
| `8.0.0` and above  | `1.0.0` and above |

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

**You can also use `serialize`, `serializeAll`, `deserialize` and `deserializeAll` rxJS operators in your observables.**
