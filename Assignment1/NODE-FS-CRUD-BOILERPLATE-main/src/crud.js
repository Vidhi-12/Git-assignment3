
const {
    myFileWriter,
    myFileReader,
    myFileUpdater,
    myFileDeleter
  } = require("./index");
  myFileWriter("File.txt","Hello ");
  myFileReader("File.txt");
  myFileUpdater("File.txt", "Everyone");
  myFileReader("File.txt");
  myFileDeleter("File.txt");