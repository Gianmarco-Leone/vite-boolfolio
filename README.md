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

Nel componente principale della nostra Vue App facciamo una chiamata API all’endpoint costruito nel progetto Laravel recuperiamo tutti i progetti dal nostro back-end.
Creiamo un nuovo componente `ProjectCard`, che corrisponde ad una card per visualizzare un progetto e lo inseriamo all'interno di un ulteriore componente `ProjectList` Utilizziamo questo componente per visualizzare tutti i progetti ricevuti tramite API.

### Bonus 1

Gestiamo la paginazione dei risultati con un componente a parte `AppPagination`.

### Bonus 2

Realizzazione di un loader con componente a parte `AppLoader`.
