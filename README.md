This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Notes on testing in Codesandbox

On my test suite I have used jest.mock, however Codesandbox seems to have a bug since 2018 that prevents the use of it:
https://github.com/codesandbox/codesandbox-client/issues/513
All the test passed on my localhost, however Codesandbox seems to be dealing with test erratically. Tests fail from time to time due to bugs on Codesandbox. I recommend cloning the project from github and trying the tests in localhost: https://github.com/andreupifarre/twitter-like-feed

Also Codesandbox wouldn't read my setupTests.js so I had to import that file manually on each test file :(

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Other Considerations

- IE10 works only on a production built environment, running `yarn build`, due to some bugs with the pollifil library.
