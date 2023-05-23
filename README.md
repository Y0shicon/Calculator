# Calculator
Trying to make a calculator while learning sass, typescript and npm

## Sass
**Sass** Documentation can be read by using this [link](https://sass-lang.com/guide)

TLDR, 
Use this code to start watching for changes in the scss files

```
sass --watch 'inputDir' 'outputDir'
```
Examples :

```
sass --watch input.scss output.css
sass --watch sass/input.scss css/output.css
```

Explore the rest on the documentation folder

##Typescript
**Typescript** is a superset of javascript and introduces static typing in the code which allows for better intellisense.
This avoids redundant and poorly written code to some extent.

Installation documentation is available [here](https://www.typescriptlang.org/download) but it very incomprehensible.

Only use the documentation for [references](https://www.typescriptlang.org/docs/).

###Steps:
1. In the terminal, run
	`npm innit` to initialize an npm project
2. Initialize a typescript project using the following code in the terminal :
```
tsc --init --sourceMap --rootDir "[directory]" --outDir "[directory]"
```
Example :
```
tsc --init --sourceMap --rootDir "src/ts" --outDir "src/js"
```
In this `src/ts` is the directory of all the typescript files and `src/js` is the output directory where all the ts files are compiled to
3. Try `tsc` in the terminal
4. If it gives an error about `include` and `exclude`, then go to the `tsconfig.json` file and add the following lines of code at the end :
```
{
"compilerOptions": {
//Lots of properties
},"include": ["src/ts"],
  "exclude": ["node_modules"]
  }
```
5. To add a watch file, run the following command in the terminal
```
npm install --save-devs typescript
```
6. Press `cmd+shift+P` and search for `>Tasks:Configure Default Build Task`
In the new options list, choose:
`tsc: watch - tsconfig.json`
7. A new file `tasks.json` will be created in the `.vscode` folder
8. Press `cmd+shift+P` and search for `>Tasks:Run Build Task`


If there are still any doubts, go and watch [this](https://www.youtube.com/watch?v=4zdBk6wisxc) video which goes through the intricities of this process.