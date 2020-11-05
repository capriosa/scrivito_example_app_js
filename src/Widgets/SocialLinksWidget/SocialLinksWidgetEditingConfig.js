import * as Scrivito from 'scrivito'
import boxWidgetIcon from '../../assets/images/box_widget.svg'

Scrivito.provideEditingConfig('SocialLinksWidget', {
  title: 'Social Links',
  thumbnail: boxWidgetIcon,
  attributes: {
    socialLinks: {
      title: "Social links buttons",
      description: "Social link buttons to display",
      values: [
        { value: "facebook", title: "Facebook" },
        { value: "twitter", title: "Twitter" },
        { value: "linkedin", title: "LinkedIn" },
        { value: "whatsapp", title: "Whats App" },
        { value: "xing", title: "Xing" },
      ],
    },
    textToShare: {
      title: 'Text',
      description: 'Text you want to share'

    }
  },
  properties: [
    'socialLinks',
    'textToShare'
  ]
})
