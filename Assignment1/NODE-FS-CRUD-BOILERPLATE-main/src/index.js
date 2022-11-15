var fs = require("fs");
const { resolve } = require("path");
const myFileWriter = async (fileName, fileContent) => {
  await new Promise((resolve) => {
    fs.writeFile(fileName, fileContent, (err) => {
      if (err) {
        console.log(err);
      }
      console.log("File Created");
    });
  });
};
const myFileReader = async (fileName) => {
  await new Promise((resolve) => {
    fs.readFile(fileName, "utf8", function (err, data) {
      console.log(data);
    });
  });
};
const myFileUpdater = async (fileName, fileContent) => {
  await new Promise((resolve) => {
    fs.appendFile(fileName, fileContent, (err) => {
      if (err) {
        console.log(err);
      }
      console.log("File Appended");
    });
  });
};
const myFileDeleter = async (fileName) => {
  fs.unlink(fileName, (err) => {
    if (err) {
      console.log(err);
    }
    console.log("File Deleted");
  });
};
module.exports = { myFileWriter, myFileReader, myFileUpdater, myFileDeleter };


// const fs = require('fs/promises')
// const { resolve } = require("path");
// const myFileWriter = async (fileName, fileContent) => {
// 	// write code here
// 	// dont chnage function name
// 	await new Promise((resolve) => {
// 		fs.writeFile(fileName, fileContent, (err) => {
// 			if (err) console.log(err);
// 			console.log("File Created");
// 		});
// 	  });
// }

// const myFileReader = async (fileName) => {
// 	// write code here
// 	// dont chnage function name
// 	await new Promise((resolve) => {
// 		fs.readFile(fileName, "utf8", function (data) {
// 			console.log(data);
// 		  });
// 	});
// }


// const myFileUpdater = async (fileName, fileContent) => {
// 	// write code here
// 	// dont chnage function name
// 	await new Promise((resolve) => {
// 		fs.appendFile(fileName, fileContent, function (err) {
// 		if (err) throw err;
// 		console.log('Updated!');
// 	  });
// 	});
	
// }

// const myFileDeleter = async (fileName) => {
// 	// write code here
// 	// dont chnage function name
// 	fs.unlink(fileName, function (err) {
// 		if (err) throw err;
// 		console.log('File deleted!');
// 	  });
// }



// module.exports = { myFileWriter, myFileUpdater, myFileReader, myFileDeleter }