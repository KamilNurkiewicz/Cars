## Problems ⁉️
***
📓 

1.Problem with webpack-dev-server
***
Originaly  should be "webpack-dev-server" but with webpack v5 and webpack-cli v4 it doesn't work. It lead to this error

Error ❗ 

Cannot find module 'webpack-cli/bin/config-yargs' 

Solution 🙋 

For me it was changing "webpack-dev-server" to "webpack serve'. You can check it below 

![Solution](https://i.imgur.com/GCfnqXv.png)
***

2.Problem with "Live Reloading" in Webpack 5
***
In Webpack 4 it works perfectly. When you save changes in your files, your "webpack-dev-server" reloads also the page in the browser. Webpack 5 got a little bit problem with that.

Error ❗ 

Live reload is crashed.

Solution 🙋

For me it was very simple but i need to read around 1 hour about that. You need to add <u> target: 'web' <u> to the webpack.config.js