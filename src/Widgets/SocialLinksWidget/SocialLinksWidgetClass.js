import * as Scrivito from 'scrivito'

const SocialLinksWidget = Scrivito.provideWidgetClass('SocialLinksWidget', {
  attributes: {
    socialLinks: [
      "multienum",
      { values: ["facebook", "twitter", "linkedin", "whatsapp", "xing"] },
    ],
    textToShare: 'string'
  }
})

export default SocialLinksWidget
