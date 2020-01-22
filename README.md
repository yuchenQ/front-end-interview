## Create React Typescript

### Features

| Tool                | Description                    | Branch                           |
| ------------------- | ------------------------------ | -------------------------------- |
| Git                 | Version Control                | Git, Husky                       |
| Webpack             | Bundler                        | Mode, Server, Debugger, Analyzer |
| Typescript          | Transpiler and Static Testing  | babel-loader, decorator          |
| React               | Component Web                  | Hot Load                         |
| Test                | Test code                      | Jest, Enzyme                     |
| Code Formatter      | Format code                    | Prettier                         |
| Code Error Detector | Detect potential error of code | ESLint                           |

### Prepare

- **Step 1**: `git clone git@github.com:yuchenQ/ts-react-starter.git project_folder_name`
- **Step 2**: `cd project_folder_name && rm -rf .git`

### Install

```sh
# or
npm install
```

### Start

```sh
# or
npm run start
```

### Build

```sh
# or
npm run build
```

### Build when update react or styled-components

```sh
npm run build:dll
```

### Hot Load

```javascript
...
import { hot } from 'react-hot-loader';
@hot(module)
class App extends ...
```

```sh
yarn start:hot
```

### Important

- Don't forget install [@types/package](https://microsoft.github.io/TypeSearch/)
- Don't forget to add [webpack loader](https://webpack.js.org/loaders/).
- Don't forget to add `type declaration` in `typings` folder

## References

[Typescript+React](https://www.jianshu.com/p/5b9d330c3740)

[ESLint for Typescript](https://zhuanlan.zhihu.com/p/62401626)

[Typescript Docs](https://typescript.bootcss.com/generics.html)

[Typescript Configs](https://github.com/hstarorg/HstarDoc/blob/master/%E5%89%8D%E7%AB%AF%E7%9B%B8%E5%85%B3/TypeScript%E9%85%8D%E7%BD%AE%E6%96%87%E4%BB%B6tsconfig%E7%AE%80%E6%9E%90.md)

## License

Create React App is open source software licensed as `MIT`
