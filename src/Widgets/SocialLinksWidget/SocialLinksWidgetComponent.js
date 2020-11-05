import * as React from 'react'
import * as Scrivito from 'scrivito'
import InPlaceEditingPlaceholder from '../../Components/InPlaceEditingPlaceholder'
import "./SocialLinks.css";

Scrivito.provideComponent('SocialLinksWidget', ({ widget }) => {
  const currentPage = Scrivito.currentPage();
  if (!currentPage) return;
  const currentPageUrl = Scrivito.urlFor(currentPage);
  const linkToTwitter = 'https://twitter.com/intent/tweet/?text=' + widget.get('textToShare') + '&url=' + currentPageUrl;
  const linkToFb = 'https://facebook.com/sharer/sharer.php?u=' + currentPageUrl;
  const linkToLinkedIn = 'https://www.linkedin.com/shareArticle?mini=true&url=' + currentPageUrl + '&title=' + widget.get('textToShare') + '&summary=' + widget.get('textToShare') + '&source=https%3A%2F%2Fwww.mdwp.de';
  const linkToWhatsApp = 'whatsapp://send?text' + widget.get('textToShare');
  const linkToXing = 'https://www.xing.com/social/share/spi?url=' + currentPageUrl;


  if (!widget.get('textToShare').length) {
    return (
      <InPlaceEditingPlaceholder center>
        Add text to share in widget properties.
      </InPlaceEditingPlaceholder>
    )
  }

  return widget.get("socialLinks").map(socialNet => {

    switch (socialNet) {
      case "facebook":
        return (
          <FaceBook link={linkToFb} />
        );
      case "twitter":
        return (
          <Twitter link={linkToTwitter} />
        );
      case "linkedin":
        return (
          <LinkedIn link={linkToLinkedIn} />
        );
      case "whatsapp":
        return (
          <WhatsApp link={linkToWhatsApp} />
        );
      case "xing":
        return (
          <Xing link={linkToXing} />
        );
    }
  });


})

const Twitter = ({ link }) => (

  <a href={link} target='_blank' className='resp-sharing-button__link'>

    <div className='resp-sharing-button resp-sharing-button--twitter resp-sharing-button--large'>
      <div aria-hidden='true' className='resp-sharing-button__icon resp-sharing-button__icon--solid'>
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><path d='M23.44 4.83c-.8.37-1.5.38-2.22.02.93-.56.98-.96 1.32-2.02-.88.52-1.86.9-2.9 1.1-.82-.88-2-1.43-3.3-1.43-2.5 0-4.55 2.04-4.55 4.54 0 .36.03.7.1 1.04-3.77-.2-7.12-2-9.36-4.75-.4.67-.6 1.45-.6 2.3 0 1.56.8 2.95 2 3.77-.74-.03-1.44-.23-2.05-.57v.06c0 2.2 1.56 4.03 3.64 4.44-.67.2-1.37.2-2.06.08.58 1.8 2.26 3.12 4.25 3.16C5.78 18.1 3.37 18.74 1 18.46c2 1.3 4.4 2.04 6.97 2.04 8.35 0 12.92-6.92 12.92-12.93 0-.2 0-.4-.02-.6.9-.63 1.96-1.22 2.56-2.14z' /></svg>
      </div>
    </div>

  </a>
)

const FaceBook = ({ link }) => (
  <a href={link} target='_blank' className='resp-sharing-button__link'>
    <div className='resp-sharing-button resp-sharing-button--facebook resp-sharing-button--large'>
      <div aria-hidden='true' className='resp-sharing-button__icon resp-sharing-button__icon--solid'>
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><path d='M18.77 7.46H14.5v-1.9c0-.9.6-1.1 1-1.1h3V.5h-4.33C10.24.5 9.5 3.44 9.5 5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4z' /></svg>
      </div>
    </div>
  </a>
)

const LinkedIn = ({ link }) => (
  <a className='resp-sharing-button__link' href={link} target='_blank' aria-label='Share on LinkedIn'>
    <div className='resp-sharing-button resp-sharing-button--linkedin resp-sharing-button--large'>
      <div aria-hidden='true' className='resp-sharing-button__icon resp-sharing-button__icon--solid'>
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><path d='M6.5 21.5h-5v-13h5v13zM4 6.5C2.5 6.5 1.5 5.3 1.5 4s1-2.4 2.5-2.4c1.6 0 2.5 1 2.6 2.5 0 1.4-1 2.5-2.6 2.5zm11.5 6c-1 0-2 1-2 2v7h-5v-13h5V10s1.6-1.5 4-1.5c3 0 5 2.2 5 6.3v6.7h-5v-7c0-1-1-2-2-2z' /></svg>
      </div>
    </div>
  </a>
)

const WhatsApp = ({ link }) => (
  <a href={link} target='_blank' className='resp-sharing-button__link'>
    <div class="resp-sharing-button resp-sharing-button--whatsapp resp-sharing-button--small"><div aria-hidden="true" class="resp-sharing-button__icon resp-sharing-button__icon--circle">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><circle xmlns="http://www.w3.org/2000/svg" cx="12" cy="12" r="11.5" /><path stroke-width="1px" d="M17.6 6.2c-1.5-1.5-3.4-2.3-5.5-2.3-4.3 0-7.8 3.5-7.8 7.8 0 1.4.4 2.7 1 3.9l-1.1 4 4.1-1.1c1.1.6 2.4.9 3.7.9 4.3 0 7.8-3.5 7.8-7.8.1-2-.7-3.9-2.2-5.4zm-5.5 11.9c-1.2 0-2.3-.3-3.3-.9l-.2-.1-2.4.6.7-2.4-.2-.2c-.6-1-1-2.2-1-3.4 0-3.6 2.9-6.5 6.5-6.5 1.7 0 3.3.7 4.6 1.9 1.2 1.2 1.9 2.8 1.9 4.6-.1 3.5-3 6.4-6.6 6.4zm3.5-4.8c-.2-.1-1.1-.6-1.3-.6-.2-.1-.3-.1-.4.1-.1.2-.5.6-.6.8-.1.1-.2.1-.4 0s-.8-.3-1.6-1c-.6-.5-1-1.2-1.1-1.3-.1-.2 0-.3.1-.4l.3-.3s.1-.2.2-.3c.1-.1 0-.2 0-.3s-.4-1.1-.6-1.4c-.2-.4-.3-.3-.4-.3h-.4s-.3 0-.5.2-.7.7-.7 1.6c0 1 .7 1.9.8 2s1.4 2.1 3.3 2.9c.5.2.8.3 1.1.4.5.1.9.1 1.2.1.4-.1 1.1-.5 1.3-.9.2-.5.2-.8.1-.9 0-.2-.2-.3-.4-.4z" /></svg>
    </div>
    </div>
  </a>
)

const Xing = ({ link }) => (
  <a href={link} target='_blank' className='resp-sharing-button__link'>
    <div class="resp-sharing-button resp-sharing-button--xing resp-sharing-button--small"><div aria-hidden="true" class="resp-sharing-button__icon resp-sharing-button__icon--circle">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><circle cx="12" cy="12" r="11.5" /><path d="M8.4 8.5h-3L7 11.3l-2.2 3.2h3l2.3-3.2zm10-3h-3.2l-5 8.5 3.2 5.5h3.3l-3-5.5z" /></svg>
    </div>
    </div>
  </a>
)
