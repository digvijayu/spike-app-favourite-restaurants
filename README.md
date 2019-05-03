# spike-app-favourite-restaurants
Displays list of restaurants. Built using React, Redux and CSS-in-JS

## Live Demo
https://spike-app-favourite-restaurants.digvijayu.now.sh/

## How to run in Local
1. Install the dependencies using `npm install`
2. Go to file `src/utils/constants` and replace the string `ENTER_GOOGLE_MAPS_KEY_HERE` with your google maps key
2. Go to file `public/index.html` and replace the string `ENTER_GOOGLE_MAPS_KEY_HERE` with your google maps key
3. Start the server using `npm start`

## Available Scripts

In the project directory, you can run:

### `npm install`

Installs the dependencies

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm test`

Launches the test runner in the interactive watch mode.

### `npm run cypress-browser`

Launches the end to end test runner in the browser.

### `npm run cypress`

Launches the end to end test runner in the headless browser.

### `npm run build`

Builds the app for production to the `build` folder.


### Notes
- The code will be formatted automatically before the commit
- The application is deployed using [Now](https://zeit.co/now) on below link
  https://spike-app-favourite-restaurants-k6g93jcy1.now.sh/

## Demo Videos
### Adding a favourite restaurant
![Adding a favourite restaurant](docs/May-03-2019 03-05-50.gif)
![Adding a favourite restaurant](docs/May-03-2019 03-05-33.gif)

### Cypress Tests
![Cypress Tests](docs/CypressTests.gif)
