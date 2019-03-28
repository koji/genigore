const path = require('path');
const fs = require('fs');
const exec = require('child_process').exec;
const cwd = process.cwd();
const colors = require('colors');

const readFileAndCreateGitignore = (fileName) => {
  // read file 
  const filePath = `${__dirname}/src/${fileName}.txt`;
  // console.log(filePath);
  fs.readFile(filePath, (err, buf) => {
    if(err) {
      console.log(colors.red.underline(`loading file - something wrong: ${err}`));
    } else {
      // console.log(buf.toString());
      const data = buf.toString();
      // write file as .gitignore
      // console.log(`pwd : ${process.cwd()}`);
      fs.writeFile(`${cwd}/.gitignore`, data, (err, data) => {
        if (err) {
          console.log(colors.red.underline(`writing file - something wrong: ${err}`));
        } else {
          console.log(colors.rainbow(`Successfully created .gitignore for ${fileName}`));
          console.log(colors.green.underline(`Please check ${cwd}`));
        }
      });
    }
  });
}

module.exports = (args) => {
  const language = !args._[1] ? "default" : (args._[1]).toLowerCase();
  console.log(language);
  // ToDo 
  // find out a better way instead of long switch statement
  switch (language) {
    case "dart":
      readFileAndCreateGitignore("dart");
      break;

    case "julia":
      readFileAndCreateGitignore("julia");
      break;

    case "kotlin":
      readFileAndCreateGitignore("kotlin");
      break;

    case "lua":
      readFileAndCreateGitignore("lua");
      break;

    case "processing":
      readFileAndCreateGitignore("processing");
      break;

    case "r":
      readFileAndCreateGitignore("r");
      break;

    case "scala":
      readFileAndCreateGitignore("scala");
      break;

    case "node":
    case "nodejs":
      readFileAndCreateGitignore("node");
      break;

    case "python":
    case "py":
      readFileAndCreateGitignore("python");
      break;

    case "perl":
    case "pl":
      readFileAndCreateGitignore("perl");
      break;

    case "ruby":
    case "rb":
      readFileAndCreateGitignore("ruby");
      break;

    case "cs":
    case "csharp":
      readFileAndCreateGitignore("cs");
      break;

    case "c":
    case "clang":
      readFileAndCreateGitignore("c");
      break;

    case "cpp":
    case "c++":
      readFileAndCreateGitignore("cpp");
      break;

    case "angularjs":
    case "angular":
      readFileAndCreateGitignore("angularjs");
      break;

    case "vuejs":
    case "vue":
      readFileAndCreateGitignore("vue");
      break;

    case "swift":
      readFileAndCreateGitignore("swift");
      break;

    case "reactnative":
      readFileAndCreateGitignore("reactnative");
      break;

    case "objc":
    case "obj-c":
    case "objective-c":
    case "objectivec":
      readFileAndCreateGitignore("objc");
      break;

    case "java":
      readFileAndCreateGitignore("java");
      break;

    case "go":
    case "golang":
    case "go-lang":
      readFileAndCreateGitignore("go");
      break;

    case "rust":
      readFileAndCreateGitignore("rust");
      break;

    case "of":
    case "openframeworks":
      readFileAndCreateGitignore("of");
      break;
      
/*
    case ""
      readFileAndCreateGitignor("");
      break;
*/  
    default:
      readFileAndCreateGitignore("default");
      break;
  }
}
