const fs = require('fs');

fs.writeFileSync('./index.html',
`
<!DOCTYPE html>
<html lang="ru">
  <head>
    <meta charset="UTF-8">
    <title>Document</title>
  </head>
  <body></body>
</html>
`
,()=>{

});
fs.mkdir('./styles', () => { });
fs.writeFileSync('./styles/style.css',`
* {
	padding: 0px;
	margin: 0px;
	border: none;
}
`,()=>{});

setTimeout(()=>{
fs.writeFile('./index.js',
`
const lodash = require('lodash');
let arr = [1, 2, 3, 4];
let sum = lodash.sum(arr);
console.log(sum); 
`
,()=>{});
}
,2000);

