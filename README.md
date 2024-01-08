# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

1. i should check what type of images added akshaysaini jpg etc

# Higher-order components

- A function that take a component as an argument and return the component
- use of higher-order components is it takes a component as an argument and do the little modification and return a component(example: you tube first card u can see ad card in you tube website)

# Debouncing

- suppose lets take search in flipkart if u see there when u type any letter in search it won't make an api call on each key stroke
- it will call an api dependence on that time u have taken between each keystore
- why should we give suggestion because its users better experience and if user typing slowly means he is expecing suggestion so we can show them suggestions
- so using debouncing we can restrict api call for sometime
- it increase app performence and its a huge optimization
- because for 1 user your restricing api call based on time so assume there are lakhs of people using your api call then how many api calls you are avoiding so try to avoid call api each time ASAP

# LRU cache

- how to check alternative of object.assign
- we can only restrict our cache upto 100 as soon as it reaches 100 start removing from top

# live chat challanges

- get data live(data layer challenge)
- update data UI(Ui layer challenge)

- you have to update your UI efficienet way
- also u have to give better user experience

# 1.web sockets

- websocket connection 2 servers connect to each other now they can send data anytime they want to initial connection takes little time but once connection is setup its like handshake

- its for 2 way connections
- it creates handshake once u create handshake u can quikly send data from either sides
- its bi-directional
- it has no reqular interval means it can send data anytime

# 2. Api polling(long polling)

- its uni-directional (Ui keep pulling data each second or after 10 seconds from server)
- it has reqular intervals
