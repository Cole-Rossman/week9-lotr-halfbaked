# The One API

Use [this template repo](https://github.com/alchemycodelab/react-half-baked-lotr) as your template. Your fetch code for films and characters has been provided for you in the `/src/services` folder - you will need to add the code for books. These are the functions you will call when loading your data. Take a close look at the characters code for fetching to determine how to connect it to your state variables.

### Learning Objectives

- On load, use fetch to hit a GET endpoint, get all items, and set state and update the view using the response.
- Use useEffect hook with a dependency array to retrieve data when a component first mounts
- Create the illusion of multiple pages in a Single Page Application routes by using react-router.
- Create navigation on your application by adding `<NavLink>`s

### Description

For this deliverable, you will be fetching data from a Supabase database containing Lord of the Rings data and creating the illusion of multiple pages using React Router.

Your app should include the following routes using React Router

- `/` which should display a home page with a header and nav links
- `/films` which should display the `<Films />` view
- `/characters` which should display the `<Characters />` view
- `/books` which should display the `<Book />` view

_Note -- folder structure has been given to you using `.keep` files -- these only serve to provide empty folders. They can be removed once you have added your component files to those folders_
Your characters page should include the ability to filter the API by race. The possible races are

```html
<option value="All">All</option>
<option value="Dwarf">Dwarf</option>
<option value="Elf">Elf</option>
<option value="Hobbit">Hobbit</option>
<option value="Human">Human</option>
<option value="Maiar">Maiar</option>
<option value="Orc">Orc</option>
```

### Acceptance Criteria

- Users should be displayed a home page with a header and links to each of the individual route pages
- Users should see a list of the LOTR films when they navigate to `/films`
- Users should see a list of the LOTR books when they navigate to `/books`
- Users should see a list of the LOTR characters when they navigate to `/characters`
- Users should be able to filter characters by race on the characters page

### Rubric

| Task                                                                                          | Points |
| --------------------------------------------------------------------------------------------- | ------ |
| PR and preview deploy on Netlify                                                              | 1      |
| React router properly configured in App.js                                                    | 2      |
| Home Page with header and links (using `<NavLink>` components)                                | 2      |
| Films page rendered by React router at `/films` which displays a list of films                | 1      |
| Books page rendered by React router at `/books` which displays a list of books                | 1      |
| books.js file in services calls supabase and returns list of books                            | 1      |
| Characters page rendered by React router at `/characters` which displays a list of characters | 1      |
| Characters can be filtered by race                                                            | 1      |

### Stretch Goals (Up to 2 additional points)

- Allow users to search for characters by name - make sure to only call the API when the user clicks a button, not on every letter typed
- There are images of the films in the `public` folder - use a string method on the film's name to generate the name of the image and display it on the page
