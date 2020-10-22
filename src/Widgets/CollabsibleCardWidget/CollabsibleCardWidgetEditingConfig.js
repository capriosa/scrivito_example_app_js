import * as Scrivito from 'scrivito'

Scrivito.provideEditingConfig('CollabsibleCardWidget', {
  title: 'Collabsible Card',
  attributes: {
    icon: {
      title: 'Icon'
    }
  },
  properties: ['icon'],
  initialContent: {
    headline: 'Lorem Ipsum',
    teaser: 'Eiusmod aliquip aliquip esse nisi. Lorem fugiat commodo aute tempor irure esse sunt.',
    body:
    'Eiusmod aliquip aliquip esse nisi. Lorem fugiat commodo aute tempor irure esse sunt. Incididunt irure dolore eiusmod qui pariatur id sunt officia irure ad.'
  }
})
