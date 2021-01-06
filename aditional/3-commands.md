<h3> Commands examples </h3>
<h5>Run</h5>
<p> Define a script task for it in your package.json </p>
<code> 
"scripts": {
  "compodoc": "npx compodoc -p tsconfig.json documentation -o -s"
}
</code>

<h5> Change Theme</h5>
<p> You can see the different themes avaible on the <a href="https://compodoc.app/guides/themes.html">web </a></p>
<code> 
"scripts": {
  "compodoc": "npx compodoc -p tsconfig.json documentation -o -s --theme material"
}
</code>

<h5> Create new section</h5>
<p> If you need to add more information about your project, you can create a <a href="https://compodoc.app/guides/themes.html">custom section.</a></p>
<lu>
<li> 
Add new line in package.json
<code> 
"scripts": {
  "additional": "npx compodoc -p tsconfig.app.json -d documentation -o -s --includes ./additional -w",
}
</code>
</li>
<li> Run in a terminal
<code> > npm run additional</code>
</li>
<li> Finally to add files for subsections and add contect, follow the <a href="https://compodoc.app/guides/tips-and-tricks.html">tips and tricks section</a> </li>
</lu>
<p>  </p>
