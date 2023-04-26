# Laravel Boolfolio

> Realizzazione front-office di un Portfolio

## Tecnologie e Librerie

- HTML
- CSS
- Bootstrap
- Javascript
- Vue
- Vite
- Axios

## Descrizione

Dato un back-office realizzato con `Laravel 9` con all'interno delle API per richiamare i progetti presenti nel DB, realizziamo un front-office con `Vue 3 + Vite`.

## Svolgimento

### MIlestone 1

Nel componente principale della nostra Vue App facciamo una chiamata API all’endpoint costruito nel progetto Laravel recuperando tutti i progetti dal nostro back-end.
Creiamo un nuovo componente `ProjectCard`, che corrisponde ad una card per visualizzare un progetto e lo inseriamo all'interno di un ulteriore componente `ProjectList` Utilizziamo questo componente per visualizzare tutti i progetti ricevuti tramite API.

### Milestone 2

Grazie all'instalazzione di _router_

```php
npm i vue-router@4
```

andremo a definire le diverse rotte del nostro sito, gestendone la navigazione.

```js
// src/router/index.js

import { createRouter, createWebHistory } from "vue-router";

// Import pages file
import HomePage from "../pages/HomePage.vue";
...

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomePage,
    },
    ...
  ],
});

export { router };
```

Ricordandomi di importare il router nel file `main.js`

```js
// src/main.js

import { router } from "./router/index.js";

...
app.use(router);
...
```

Andremo ora a costruire tutti i vari layout per la pagine che ci interessano, utilizzando e sfruttando, qualora possibile, i `Components` precedentemente creati.

### Bonus 1

Gestiamo la paginazione dei risultati con un componente a parte `AppPagination`.

### Bonus 2

Realizzazione di un loader con componente a parte `AppLoader`.

### Bonus 3

Gestione di eventuali errori 404 nelle chiamate axios.
