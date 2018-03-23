# Chuck Starter kit

[![dependencies Status](https://david-dm.org/d9767192/chuck-starterkit/master/status.svg)](https://david-dm.org/d9767192/chuck-starterkit/master)
[![devDependencies Status](https://david-dm.org/d9767192/chuck-starterkit/master/dev-status.svg)](https://david-dm.org/d9767192/chuck-starterkit/master?type=dev)

## Features

*  👏 **Hot reloading**
*  👏 **Code splitting**
*  👏 **Redux devtool is supported**
*  👏 **Integration with lint testing, unit testing and coverage testing**
*  👏 **Integration with browser compatibility**
*  👏 **Less and css is supported**
*  👏 **Integration complex settings with one file**
*  👏 **Nice flexibility for extension**
*  👏 **Using modern plug-ins (React-router, React etc.)**

## Introduction

<div align="justify">Chuck starter kit is a environment for establishing your project quickly. There are many build-in features, like hot-reload, code splitting etc. If you want to adjust starter kit for fit your scenario, it retains many flexibility for you. </div>

## Requirements

node \^5.0.0

yarn \^0.23.0 or npm \^3.0.0

## Installation

Use git command:
```
git clone https://github.com/d9767192/chuck-starterkit.git
```

## Running the Project

After completing the installation step, you're ready to start the project!

```
npm start  # Start the development server (or `yarn start`)
```

While developing, you will probably rely mostly on npm start; however, there are additional scripts at your disposal:

|      Script (also yarn)       |                     Description                           |
|:------------------|:----------------------------------------------------------------------|
|     start         |  Start compile your project. The default serve url would be: http://localhost:3000|
|     build         |  Build your project as production (minify, hash etc). The default output root is dist|
|     build:lib     |  Build your library as production (cjs, umd format). The default location is src|
|     build:lib:cjs |  Build your library as common javascript. The default output root is lib|
|     build:lib:copy|  Copy files into lib folder, such as README.md, package.json etc.|
|     build:lib:umd |  Build your library as universal module definition. The default output root is lib/minify.|
|     test          |  Testing your codes. This command will run lint testing and unit testing at same time|
|     test:unit     |  Run unit testing alone                                               |
|   test:unit:watch | Run unit testing in watching mode (Trace your changing in testing immediately)|
|   test:lint       |  Run lint testing alone                                               |
|   test:lint:fix   | Run lint testing with automatically fixing errors                 |
|  test:lint:report | Run lint testing and output result as a report. The default path of report is reports |
|  test:coverage    | Run coverage testing and output report in reports directory       |
|  release          | Auto generate changelog|

Besides, there are many options you can attach after your command:

|    Option       |                              Description                                    |
|:----------------|:----------------------------------------------------------------------------|
|   --indir       | The entry directory of your main codes in your project. Default is `src`.   |
|   --main        | The file name of the application's entry point. Default is `main`           |
|   --outdir      | The name of the directory in which to emit compiled assets. Default is `dist`|
|   --testdir     | The name of the testing entry directory. Default is `tests`                 |
|   --reportdir   | The name of the testing output report directory. Default is `reports`       |
|   --template    | The template of html. It will be used if the configuration of html is true. Default is index.html|
|   --globalless  | The location of global less library. The default location is utils/style.less|
|   --libname     | Library name. The default is your project name|
|   --libdir      | The name of the library directory |
|   --port        | The port of the server. Default is 3000.                                    |
|   --publicpath  | The base path for all projects assets (relative to the website root). Default is '/'|
|   --sourcemaps  | Whether to generate sourcemaps. Default is false                            |
|   --externals   | A hash map of keys that the compiler should treat as external to the project. Default is {}|
|   --globals     | A hash map of variables and their values to expose globally. Default is {}  |
|   --outputlint  | Whether to output the lint report. Default is false.                        |
|   --fixlint     | Whether to fix the lint error automatically. Default is false.              |
|   --verbose     | Whether to enable verbose logging. Default is false.                        |
|   --dsiableless | Whether to disable less loader. Default is false.                           |
|   --dsiablecss  | Whether to disable css loader. Default is false.                            |
|   --dsiabletext | Whether to disable text loader. Default is false.                           |
|  --dsiableimage | Whether to disable image loader. Default is false.                          |
|   --dsiablefont | Whether to disable font loader. Default is false.                               |
|   --dsiablehtml | Whether to disable html loader. Default is false.                               |
|   --polyfill    | Assign the location of polyfill. By default, the babel-polyfill will be used.|
|   --imagesize   | The limit of image size. Default is 8192.                                   |
|   --fontsize    | The limit of font size. Default is 10000.                                   |
|   --threshold   | The setting of the coverage threshold. Default is { statements: 50, branches: 50, functions: 50, lines: 50}|
|   --config      | Webpack configuration file    |

All of default setting can be modified in project.config.js of root.

## Project structure

The project structure is designed by functionality of Redux-React. For more introduction of this structure can visit the offical website of Redux: [connect](hhttps://redux.js.org/docs/introduction/LearningResources.html). If you want to modify the folder structure, please feel free to do that. There is no constraint in project structure of our starter kit.

```
.
├── build                      # All build-related code
│   |── configs                # All configuration files
│   │   ├── jest.config.js     # The configuration of Jest
│   │   └── postcss.config.js  # You can put your settings here to do some post css prefix
│   |── lib                    # All libraries used in scripts
│   │   ├── logger.js          # A logger script for printing pretty log
│   │   └── path.js            # A path script for handling path issue in script
│   |── scripts                # All build-related scripts
│   │   ├── compile.js         # A script for handling code compiling
│   │   ├── eslint.js          # A script for handling lint checking
│   │   └── start.js           # A script for starting building server
│   |── server                 # Express application that provides webpack middleware
│   │   └── main.js            # Server application entry point
│   │── umd.webpack.config.js  # Configuration of webpack for umd version
│   └── webpack.config.js      # Configuration of webpack
├── public                     # Static public assets (not imported anywhere in source code)
├── src                        # Application source code
└── tests                      # Unit tests
```

## Testing

To add a unit test, create a `.spec.js` file anywhere inside of `./tests`. Jest and webpack will automatically find these files, and Enzyme will be available within your test without the need to import them.

## License

This project is licensed under the terms of the [MIT license](https://github.com/d9767192/chuck-starterkit/blob/master/LICENSE)
