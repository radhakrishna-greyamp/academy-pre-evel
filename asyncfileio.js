//Problem statement
//Write a program that uses a single asynchronous filesystem operation 
//to read a file and print the number of newlines it contains to the console (stdout), 
//similar to running  wc -l file. Bonus point: extend the program to count words

const fs //load any required library
const file //The file name is given as a command line argument

fs.readFile(file, function (err, contents) {
  if (err) {
    return console.log(err)
  }
  //your implementation here
  console.log(lines)
})