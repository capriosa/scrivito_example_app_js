import * as Scrivito from 'scrivito'

Scrivito.provideEditingConfig('AlertWidget', {
  title: 'Alert Box',
  attributes: {
    color: {
      title: 'Color',
      description: 'Background color. Default: Primary',
      values: [
        { value: 'alert-dark', title: 'Black' },
        { value: 'alert-primary', title: 'Primary' },
        { value: 'alert-secondary', title: 'Secondary' },
        { value: 'alert-success', title: 'Success' },
        { value: 'alert-danger', title: 'Danger' },
        { value: 'alert-warning', title: 'Warning' },
        { value: 'alert-info', title: 'Info' }
      ]
    }
  },
  properties: ['color'],

  initialContent: {
    title: 'Lorem ipsum',
    text: 'Put some text here',
    additionalText: 'Additional text',
    color: 'alert-primary'
  }

})
