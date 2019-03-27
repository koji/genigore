const colors = require('colors');

const menus = {
  main: `
    genignore [command] <options>

    lang................ specify language to create .gitignore
    version ............ show package version
    help ............... show help menu for a command`,

  lang: `
    genignore lang < options >

    dart............... create .gitignore for dart
    julia...............create.gitignore for julia
    kotlin...............create.gitignore for kotlin
    lua...............create.gitignore for lua
    processing...............create.gitignore for processing
    r / R...............create.gitignore for R
    scala / Scala...............create.gitignore for Scala
    node / nodejs...............create.gitignore for node
    py / python / Python...............create.gitignore for python
    go / Go / golang...............create.gitignore for go
    pl / perl...............create.gitignore for perl
    rb / ruby...............create.gitignore for ruby
    cs / csharp...............create.gitignore for csharp
    c / clang...............create.gitignore for clang
    cpp / c++...............create.gitignore for cpp
    angularjs / angular...............create.gitignore for angularjs
    vue / vuejs...............create.gitignore for vuejs
    swift...............create.gitignore for swift
    reactnative...............create.gitignore for reactnative
    objc / obj-c / objective-c / objectivec...............create.gitignore for objc
    java / Java...............create.gitignore for java
    rust / Rust...............create.gitignore for rust
    of / openframeworks...............create.gitignore for openFrameworks
    `,
}

module.exports = (args) => {
  const subCmd = args._[0] === 'help'
    ? args._[1]
    : args._[0]
  
  console.log(menus[subCmd] || menus.main)
}

