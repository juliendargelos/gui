import { GUI, ValueController, GroupController } from '~/index'

const target = {
  lorem: 1,
  ipsum: 'foo',
  dolor: new File([], 'foo.txt'),
  sit: (a: number, b: number) => alert(`${a} + ${b} = ${a + b}`),
  amet: {
    consectetur: false,
    adipisicing: 'rgba(35, 50, 75, 0.5)',
    elit: 'https://picsum.photos/400/200.jpg'
  }
}

const preview = document.createElement('pre')

const gui = new GUI({
  target,
  position: 'top right',
  fixed: true
})
  .add('lorem')
  .add('ipsum')
  .add('dolor')
  .add('sit', { label: 'Add', args: [{ value: 1 }, { value: 2 }] })
  .group('amet', group => group
    .add('consectetur')
    .add('adipisicing')
    .add('elit')
  )

gui.group({ target: gui, label: 'GUI' }, group => group
  .add('scheme', { options: ['auto', 'light', 'dark'] })
  .add('position', {
    options: [
      'none',
      'top left',
      'top right',
      'bottom left',
      'bottom right'
    ]
  })
  .add('fixed')
)

const update = () => {
  preview.textContent = JSON.stringify(target, null, 2)
}

gui.on('update', update)
update()

const style = document.createElement('style')

style.textContent = `
  body {
    background-color: #111;
    margin: 0;
    color: #eee;
  }

  pre {
    padding: 20px;
    margin: 0;
    font-size: 20px;
  }
`

document.head.appendChild(style)
document.body.appendChild(gui)
document.body.appendChild(preview)
