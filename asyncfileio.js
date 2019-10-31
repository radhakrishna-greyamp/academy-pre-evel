const fs //load any required library
const file //The file name is given as a command line argument

fs.readFile(file, function (err, contents) {
  if (err) {
    return console.log(err)
  }
  //your implementation here
  console.log(lines)
})