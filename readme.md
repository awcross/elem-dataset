# elem-dataset [![Build Status](https://travis-ci.org/awcross/elem-dataset.svg?branch=master)](https://travis-ci.org/awcross/elem-dataset)

> Simple [ponyfill](https://ponyfill.com) for [`HTMLElement.dataset`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/dataset)

*Note that "true" and "false" values are [not allowed on boolean attributes](https://w3c.github.io/html/infrastructure.html#sec-boolean-attributes).*

## Install

```
$ npm install --save elem-dataset
```

## Usage

```js
import elemDataset from 'elem-dataset';

const element = document.querySelector('.foo');
const attributes = elemDataset(element);
```

## License

MIT © [Alex Cross](http://alexcross.io)
