# Telemetry-WebApp-2021

Web application for storing and visualizing rover performance data from the UPRM Moonbuggy Engineering Team.

## Getting Started

These instructions will give you a copy of the project up and running on
your local machine for development and testing purposes. See deployment
for notes on deploying the project on a live system.

### Prerequisites

Requirements for the software and other tools to build, test and push 
- [yarn](https://classic.yarnpkg.com/lang/en/docs/install/#debian-stable)
- [nvm (node version manager)](https://www.linode.com/docs/guides/how-to-install-use-node-version-manager-nvm/)
- [git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)

### Installing

A step by step series of examples that tell you how to get a development
environment running

1. Clone the repository into a new folder.
    ```
    git clone https://github.com/UPRM-Moonbuggy-Telemetry/Telemetry-WebApp-2021.git 
    ```
2. After the repository is downloaded, switch into the development branch to get the most updated code.
    ```
    git switch development
    ```
3. Change directory into the 'Client' folder.
    ```
    cd ~/client
    ```
4. Add the enviromental variables file into the root of the client folder

    The file will be given by a team member. (The file name should be .env)

5. Install the node modules. It will ask to choose a axios version please use version 1.0.0.
    ```
    yarn install
    ```   
6. Check that the enviroment is working by starting the web app.
    ```
    yarn start
    ```  
If an error occurs it might be because of your npm version, you can change to another version with nvm to npm version 14 LTS.

### Contributing

When starting to develop features, fix bugs and such please create a branch from the development branch and the naming convention.
Should be the first letter of your name and your complete last name, with a '-' and the name of the feature or bug.

    Example
        Name: Pedro Sanchez
        Feature: Create Vibration Widget
        
        branch name: psanchez-vibraWidget


// !!!! UNDER CONSTRUCTION !!!!

## Deployment

Add additional notes to deploy this on a live system

## Authors

  - **UPRM MoonBuggy Telemetry Team** - *Created Web App* -
