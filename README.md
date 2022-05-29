# Assignment

The project has been structured to 3 different parts.
```bash
.
├── Exploratory testing.pdf             # A short description with list of scenarios and further testing areas
├── Automation test by Cypress          # Filter car type test case  
├── Postman test using newman           # Test data, environment and example result from newman
```

You can run it on any tools such as Pycharm, Visual Studio Code or others.
Packages required:

# cypress

### Installation
1. Go to Automation directory `cd "2.1 Automation Test by Cypress"`
2. Install nodejs `brew install node`
3. Check node version `node -v`
4. Install Cypress `npm install cypress@9.3.1 --save-dev`
5. Install Cypress XPATH `npm install cypress-xpath`

### Run the project
```bash
## Run UI mode
Run command in terminal `npm run cypress:open` 

## Run command line mode
Run all test in line mode `npm run cypress:run`
```



# Newman

### Installation
Install Newman with NPM command
```bash
npm install -g newman
```

Install Newman Report as command line
```bash
npm install -g newman-reporter-htmlextra
```

### Usage
```bash
## Example the result as command line
`newman run https://www.getpostman.com/collections/5b9a7b0f29e5d9b04979 testDemo.postman_environment.json -- reporters=cli,htmlextra` 
```