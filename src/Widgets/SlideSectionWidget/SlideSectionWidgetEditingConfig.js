import * as Scrivito from 'scrivito'
import sectionWidgetIcon from '../../assets/images/section_widget.svg'
import * as ScrivitoPicks from 'scrivito-picks'

Scrivito.provideEditingConfig('SlideSectionWidget', {
  title: 'Image Section',
  thumbnail: sectionWidgetIcon,

  propertiesGroups: [
    {
      title: 'Background Color',
      component: ScrivitoPicks.createComponent([

        {
          attribute: 'backgroundColor',
          values: [
            { value: 'aqua', title: 'Aqua', previewStyle: { width: '100%', height: '70px', background: 'aqua' } },
            { value: 'brown', title: 'Brown', previewStyle: { width: '100%', height: '70px', background: 'brown' } },
            { value: 'beige', title: 'Beige', previewStyle: { width: '100%', height: '70px', background: 'beige' } },
            { value: 'crimson', title: 'Crimson', previewStyle: { width: '100%', height: '70px', background: 'crimson' } },
            { value: 'deeppink', title: 'Deeppink', previewStyle: { width: '100%', height: '70px', background: 'deeppink' } },
            { value: 'deepskyblue', title: 'Deepskyblue', previewStyle: { width: '100%', height: '70px', background: 'deepskyblue' } },
            { value: 'darkviolet', title: 'Darkviolet', previewStyle: { width: '100%', height: '70px', background: 'darkviolet' } },
            { value: 'green', title: 'Green', previewStyle: { width: '100%', height: '70px', background: 'green' } },
            { value: 'ghostwhite', title: 'Ghostwhite', previewStyle: { width: '100%', height: '70px', background: 'ghostwhite' } },
            { value: 'hotpink', title: 'Hotpink', previewStyle: { width: '100%', height: '70px', background: 'hotpink' } },
            { value: 'indigo', title: 'Indigo', previewStyle: { width: '100%', height: '70px', background: 'indigo' } },
            { value: 'khaki', title: 'Khaki', previewStyle: { width: '100%', height: '70px', background: 'khaki' } },
            { value: 'lawngreen', title: 'Lawngreen', previewStyle: { width: '100%', height: '70px', background: 'lawngreen' } },
            { value: 'magenta', title: 'Magenta', previewStyle: { width: '100%', height: '70px', background: 'magenta' } },
            { value: 'maroon', title: 'Maroon', previewStyle: { width: '100%', height: '70px', background: 'maroon' } },
            { value: 'navy', title: 'Navy', previewStyle: { width: '100%', height: '70px', background: 'navy' } },
            { value: 'olive', title: 'Olive', previewStyle: { width: '100%', height: '70px', background: 'olive' } },
            { value: 'orangered', title: 'Orangered', previewStyle: { width: '100%', height: '70px', background: 'orangered' } },
            { value: 'purple', title: 'Purple', previewStyle: { width: '100%', height: '70px', background: 'purple' } },
            { value: 'red', title: 'Red', previewStyle: { width: '100%', height: '70px', background: 'red' } },
            { value: 'royalblue', title: 'Royalblue', previewStyle: { width: '100%', height: '70px', background: 'royalblue' } },
            { value: 'saddlebrown', title: 'Saddlebrown', previewStyle: { width: '100%', height: '70px', background: 'saddlebrown' } },
            { value: 'slateblue', title: 'Slateblue', previewStyle: { width: '100%', height: '70px', background: 'slateblue' } },
            { value: 'violet', title: 'Violet', previewStyle: { width: '100%', height: '70px', background: 'violet' } },
            { value: 'yellow', title: 'Yellow', previewStyle: { width: '100%', height: '70px', background: 'yellow' } }

          ]

        }

      ])
    }
  ],

  attributes: {
    firstImage: {
      title: 'First image'
    },
    firstTitle: {
      title: 'Title'
    },
    midImage: {
      title: 'Middle image'
    },
    midTitle: {
      title: 'Title'
    },
    lastImage: {
      title: 'Last image'
    },
    lastTitle: {
      title: 'Title'
    },
    text: {
      title: 'Infotext'
    }
  },
  properties: [
    'firstImage',
    'firstTitle',
    'midImage',
    'midTitle',
    'lastImage',
    'lastTitle',
    'text'
  ]

})
