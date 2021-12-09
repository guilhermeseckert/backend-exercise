# Backend

<br/>

<h1 align="center"><strong>Backend / Server - Node.js with Typescript</strong></h1>
<br/>

<h2><strong>Some of the tools used in the development: </strong></h2>
<br>
- [Node.js](https://nodejs.org/en/)
- [TypeScript](https://www.typescriptlang.org/)
- [Typeorm](https://typeorm.io/#/)
- [Jest](https://jestjs.io/)
- [Sqlite](https://www.sqlite.org/index.html)
- [Celebrate](https://www.npmjs.com/package/celebrate)

<br>
<h2><strong>Improviments to be made in the application</strong></h2>
<br>
<p> Added more tests in each usecase, other validations in the routes, like i did in the create route. Also, create a table department and sort all the jobs by department. also some refactory in the folders as well to be easy to keep track</p>

<h2>🏗 <strong>Build and Run Instructions</strong></h2>
<br>

<p>
After cloning the project, navigate to the backend folder inside the project
and execute the following sequence of commands:
<p>

<br>

<p>Installation:</p>

```javascript
$ npm install
```

<p>or alternatively,</p>

```javascript
$ yarn install
```

<br>

<p>* Execute the following command exhibit on the Database section below for the migration </p>

<br>

<p>Running the tests:</p>

```javascript
$ npm run test
```

<p>or alternatively,</p>

```javascript
$ yarn test
```

<p>Running de code:</p>

```javascript
$ npm run start
```

<p>or alternatively,</p>

```javascript
$ yarn start
```

<hr>
<br>

<h2>💾 <strong>Database</strong></h2>
<br>
<h3>Typeorm: <h3>

For your confort, the database chosed was sqlite.

<p>Run the the migration:</p>

```javascript
$ yarn typeorm migration:run
```

<hr>
<br>

<h2>☞ <strong>Insomnia Users</strong></h2>

<br/>

<p>There is a <a href="./InsomniaRoutes.JSON">InsomniaRoutes.json</a> within the folder system with all the current routes and configurations.</p>
