<img alt="Preview" src="media/preview.png" align="right" width="50%">

# GUI

[![test](https://github.com/juliendargelos/gui/workflows/test/badge.svg?branch=master)](https://github.com/juliendargelos/gui/actions?workflow=test)
[![build](https://github.com/juliendargelos/gui/workflows/build/badge.svg?branch=master)](https://github.com/juliendargelos/gui/actions?workflow=build)
[![version](https://img.shields.io/github/package-json/v/juliendargelos/gui)](https://github.com/juliendargelos/gui)

*Light and expressive GUI with web components*<br>
**[Repository](https://github.com/juliendargelos/gui)** | **[Documentation](https://juliendargelos.com/gui)** | **[Demo](https://juliendargelos.com/gui/demo)**

```typescript
const target = {
  lorem: 1,
  ipsum: 'foo',
  dolor: new File([], 'foo.txt'),
  sit: (name: string) => alert(`Hey ${name}`),
  amet: {
    consectetur: false,
    adipisicing: 'rgba(35, 50, 75, 0.5)',
    elit: 'https://picsum.photos/400/200.jpg'
  }
}

const gui = new GUI({ target })
  .add('lorem')
  .add('ipsum')
  .add('dolor')
  .add('sit', { args: [{ value: 'Bob' }] })
  .group('amet', group => group
    .add('consectetur')
    .add('adipisicing')
    .add('elit')
  )
```

### Install

```bash
npm install @juliendargelos/gui --save
```

```bash
yarn add @juliendargelos/gui
```

### Usage

*Documentation coming soon*
