import 'highlight.js/styles/github.css'
import './index.css'
import { GUI, ValueController, GroupController } from '~/index'
import { preview } from './preview'

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

gui.on('update', () => preview(target))
preview(target)

document.body.appendChild(gui)
