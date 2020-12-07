const filesvi = [ 'foo.txt ', '.bar', '   ', 'baz.foo' ];
let files = filesvi.filter(function(el) { return el; });
const filePaths = files.reduce((acc, file) => {
  const fileName = file.trim();
  if(fileName) {
    const filePath = `~/cool_app/${fileName}`;
    acc.push(filePath);
  }
  return acc;
}, []);
console.log(filePaths);