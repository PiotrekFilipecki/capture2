# VML Frontend Skeleton

VML Frontend Skeleton to projekt, który pozwala w prosty sposób rozpocząć pracę nad nowym projektem. Rzeczy, które za każdym razem trzeba tworzyć przy nowym projekcie zostały tutaj już zrobione.

## Style

* Używamy Scss
* Entry point to `app/assets/styles/main.scss`
* W `node_modules` znajduje się [normalize.css][normalize] i [reset.css][reset]. W stylach domyślnie jest podpięty normalize. 
* W stylach znajdują się już podstawowe mixiny i responsywny grid

## Javascript

* Skrypty są kompilowane przez [babel][babel] (transpiler ES6 do ES5)
* Skrypty są bundlowane przez [browserify][browserify]
* Entry point to `app/assets/scripts/app.js`
* Zewnętrzne biblioteki instalujemy za pomocą polecania `npm install nazwa_biblioteki --save-dev`
* Bilblioteki możemy importować przy użyciu `import` lub `require` w następujący sposób:

  ```js
  // ES6 syntax:
  import $ from 'jquery';

  // lub:
  let $ = require('jquery');

  // własne moduły importujemy podając relatywną (od pliku app.js) ścieżkę:
  import MyCustomModule from './modules/myCustomModule';
  ```

  * więcej o [modułach w javascripcie][modules]

### Domyślnie zainstalowa biblioteki

* [jQuery **^2.2.2**][jquery]
* [React **^15.0.2**][react]
* [Redux **^3.5.2**][redux]
* [react-redux][react-redux]


Biblioteki pobierane są do `node_modules`, jednak domyślnie zainportowane jest **tylko [jQuery][jquery]**. 


## HTML

* Pliki HTML znajdują się w `app/assets/views`

## Build i instalacja

* Projekt instalujemy za pomocą polecania `npm install`
* Build system oparty jest o [gulp][gulp]
* Build assetów wykonujemy przez polecenie `gulp build`
* Defaultowy task wykona `build` i odpali `watch` na plikach, odpalamy poleceniem `gulp default` lub w skrócie `gulp`
* Wszystkie assety są kompilowane lub kopiowane do katalogu `web/resources`
* Rootem serwera lokalnego jest katalog `web/`
* Domyślnie włączony jest [BrowserSync][bs], który uruchamia lokalny serwer
    * konfiguracja serwera jest w pliku `gulp/config/server.js`
    * dostępne opcje konfuguracji to:
      * `enabled` (**true**|false) - uruchamianie BrowserSync
      * `browserSyncSPA` (true|**false**) - tryb SPA, kieruje wszystkie ścieżki w URL do /index.html
      * `php` (true|**false**) - serwer php


Pliki tworzymy i edytujemy **tylko** w katalogu `app/`, gulp automatycznie zaktualizuje zawartość katalogu `web/`.

[normalize]:https://necolas.github.io/normalize.css/
[npm]:https://www.npmjs.com/
[gulp]:http://gulpjs.com/
[jquery]:https://jquery.com/
[react]:https://facebook.github.io/react/
[redux]:http://redux.js.org/
[react-redux]:https://github.com/reactjs/react-redux
[angular]:https://angularjs.org/
[babel]:https://babeljs.io/
[browserify]:http://browserify.org/
[modules]:http://www.2ality.com/2014/09/es6-modules-final.html
[modernizr]:https://modernizr.com/
[bs]:https://www.browsersync.io/
[reset]:http://meyerweb.com/eric/tools/css/reset/
