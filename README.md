<p align="center">
  <img height="256px" width="256px" style="text-align: center;" src="https://cdn.rawgit.com/vikramkalta/ngx-table/master/demo/src/assets/logo.svg">
</p>

# ngx-table - Angular library built with ❤ using ngx-library yeoman generator.

[![npm version](https://badge.fury.io/js/ngx-table.svg)](https://badge.fury.io/js/ngx-table),
[![Build Status](https://travis-ci.org/vikramkalta/ngx-table.svg?branch=master)](https://travis-ci.org/vikramkalta/ngx-table)
[![Coverage Status](https://coveralls.io/repos/github/vikramkalta/ngx-table/badge.svg?branch=master)](https://coveralls.io/github/vikramkalta/ngx-table?branch=master)
[![dependency Status](https://david-dm.org/vikramkalta/ngx-table/status.svg)](https://david-dm.org/vikramkalta/ngx-table)
[![devDependency Status](https://david-dm.org/vikramkalta/ngx-table/dev-status.svg?branch=master)](https://david-dm.org/vikramkalta/ngx-table#info=devDependencies)

## Demo

View all the directives in action at https://vikramkalta.github.io/ngx-table

## Dependencies
* [Angular](https://angular.io) (*requires* Angular 2 or higher, tested with 2.0.0)

## Installation
Install above dependencies via *npm*. 

Now install `ngx-awesome-table` via:
```shell
npm install --save ngx-awesome-table
```

---
##### SystemJS
>**Note**:If you are using `SystemJS`, you should adjust your configuration to point to the UMD bundle.
In your systemjs config file, `map` needs to tell the System loader where to look for `ngx-awesome-table`:
```js
map: {
  'ngx-awesome-table': 'node_modules/ngx-awesome-table/bundles/ngx-awesome-table.umd.js',
}
```
---

Once installed you need to import the main module:
```js
import { LibModule } from 'ngx-awesome-table';
```
The only remaining part is to list the imported module in your application module. The exact method will be slightly
different for the root (top-level) module for which you should end up with the code similar to (notice ` LibModule .forRoot()`):
```js
import { LibModule } from 'ngx-awesome-table';

@NgModule({
  declarations: [AppComponent, ...],
  imports: [LibModule.forRoot(), ...],  
  bootstrap: [AppComponent]
})
export class AppModule {
}
```

Other modules in your application can simply import ` LibModule `:

```js
import { LibModule } from 'ngx-awesome-table';

@NgModule({
  declarations: [OtherComponent, ...],
  imports: [LibModule, ...], 
})
export class OtherModule {
}
```

## Usage



## License

Copyright (c) 2018 vikram. Licensed under the MIT License (MIT)

