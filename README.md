# genigore
[![npm version](http://img.shields.io/npm/v/REPO.svg?style=flat)](https://www.npmjs.com/package/@kojikanao/gengitignore)     
genignore is a cli tool to create `.gitignore` file with one line command.

## install
`via yarn`
```zsh
$ yarn global add @kojikanao/gengitignore
```

`via npm`
```zsh
$ npm i -g @kojikanao/gengitignore
```

`via gitclone`
```zsh
$ git clone https://github.com/koji/genigore.git
$ npm link
```

## Use without installing



### help command
```zsh
$ genignore

    genignore [command] <options>

    lang................ specify language to create .gitignore
    version ............ show package version
    help ............... show help menu for a command
    
$ genignore version or genignore -v
v0.1.0

$ genignore help / genignore -h

    genignore [command] <options>

    lang................ specify language to create .gitignore
    version ............ show package version
    help ............... show help menu for a command

```

#### Current options
```zsh
$ genignore help lang

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
```

### generate `.gitignore`
```zsh
$ genignore lang nodejs
nodejs
Successfully create .gitignore
Please check /Users/koji.kanao/Desktop/genignore
```

![result](https://github.com/koji/genigore/blob/master/result.png)
