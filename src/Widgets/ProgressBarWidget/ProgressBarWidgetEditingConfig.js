import * as Scrivito from 'scrivito'

Scrivito.provideEditingConfig('ProgressBarWidget', {
  title: 'Progress Bar',
  attributes: {
    percent: {
      title: 'Percent'
    },
    type: {
      title: 'Type',
      description:
        'Default: Bar',
      values: [
        { value: 'bar', title: 'Bar' },
        { value: 'circle', title: 'Circle' }

      ]
    },
    status: {
      title: 'Type',
      description:
        'Default: Success',
      values: [
        { value: 'success', title: 'Success' },
        { value: 'active', title: 'Active' },
        { value: 'error', title: 'Error' }

      ]
    }
  },
  initialContent: {
    percent: 50,
    type: 'bar',
    status: 'active'
  },
  properties: ['percent', 'type', 'status']

})
