import * as React from 'react'
import * as Scrivito from 'scrivito'
import InPlaceEditingPlaceholder from '../../Components/InPlaceEditingPlaceholder'
import "./SocialLinks.css";
import uniqid from 'uniqid';



Scrivito.provideComponent('SocialLinksWidget', ({ widget }) => {


  if (!widget.get('textToShare').length) {
    return (
      <InPlaceEditingPlaceholder center>
        Add text to share in widget properties.
      </InPlaceEditingPlaceholder>
    )
  }

  return (
    <div className="share">
      <Links widget={widget} />
    </div>
  )

})

function Links({ widget }) {
  const currentPage = Scrivito.currentPage();
  const textToShare = widget.get('textToShare');

  if (!currentPage) return;
  const currentPageUrl = Scrivito.urlFor(currentPage);
  const linkToTwitter = 'https://twitter.com/intent/tweet/?text=' + textToShare + '&url=' + currentPageUrl;
  const linkToFb = 'https://facebook.com/sharer/sharer.php?u=' + currentPageUrl + '&title=' + textToShare;
  const linkToLinkedIn = 'https://www.linkedin.com/shareArticle?mini=true&url=' + currentPageUrl + '&title=' + textToShare + '&summary=' + textToShare + '&source=' + currentPageUrl;
  const linkToWhatsApp = 'whatsapp://send?text' + textToShare;
  const linkToXing = 'https://www.xing.com/social/share/spi?url=' + currentPageUrl + '&title=' + textToShare;

  return widget.get("socialLinks").map(socialNet => {

    switch (socialNet) {
      case "facebook":
        return (
          <FaceBook key={uniqid()} link={linkToFb} />
        );
      case "twitter":
        return (
          <Twitter key={uniqid()} link={linkToTwitter} />
        );
      case "linkedin":
        return (
          <LinkedIn key={uniqid()} link={linkToLinkedIn} />
        );
      case "whatsapp":
        return (
          <WhatsApp key={uniqid()} link={linkToWhatsApp} />
        );
      case "xing":
        return (
          <Xing key={uniqid()} link={linkToXing} />
        );
    }
  }
  )
};


const Twitter = ({ link }) => (

  <div onClick={() => window.open(link, '_blank', 'left=500,top=250,height=400,width=520')} className='resp-sharing-button__link'>

    <div className='resp-sharing-button resp-sharing-button--twitter resp-sharing-button--large'>
      <div aria-hidden='true' className='resp-sharing-button__icon resp-sharing-button__icon--solid'>
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><path d='M23.44 4.83c-.8.37-1.5.38-2.22.02.93-.56.98-.96 1.32-2.02-.88.52-1.86.9-2.9 1.1-.82-.88-2-1.43-3.3-1.43-2.5 0-4.55 2.04-4.55 4.54 0 .36.03.7.1 1.04-3.77-.2-7.12-2-9.36-4.75-.4.67-.6 1.45-.6 2.3 0 1.56.8 2.95 2 3.77-.74-.03-1.44-.23-2.05-.57v.06c0 2.2 1.56 4.03 3.64 4.44-.67.2-1.37.2-2.06.08.58 1.8 2.26 3.12 4.25 3.16C5.78 18.1 3.37 18.74 1 18.46c2 1.3 4.4 2.04 6.97 2.04 8.35 0 12.92-6.92 12.92-12.93 0-.2 0-.4-.02-.6.9-.63 1.96-1.22 2.56-2.14z' /></svg>
      </div>
    </div>

  </div>
)

const FaceBook = ({ link }) => (
  <div onClick={() => window.open(link, '_blank', 'left=500,top=250,height=400,width=520')} className='resp-sharing-button__link'>
    <div className='resp-sharing-button resp-sharing-button--facebook resp-sharing-button--large'>
      <div aria-hidden='true' className='resp-sharing-button__icon resp-sharing-button__icon--solid'>
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><path d='M18.77 7.46H14.5v-1.9c0-.9.6-1.1 1-1.1h3V.5h-4.33C10.24.5 9.5 3.44 9.5 5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4z' /></svg>
      </div>
    </div>
  </div>
)

const LinkedIn = ({ link }) => (
  <div onClick={() => window.open(link, '_blank', 'left=500,top=250,height=400,width=520')} className='resp-sharing-button__link' >
    <div className='resp-sharing-button resp-sharing-button--linkedin resp-sharing-button--large'>
      <div aria-hidden='true' className='resp-sharing-button__icon resp-sharing-button__icon--solid'>
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><path d='M6.5 21.5h-5v-13h5v13zM4 6.5C2.5 6.5 1.5 5.3 1.5 4s1-2.4 2.5-2.4c1.6 0 2.5 1 2.6 2.5 0 1.4-1 2.5-2.6 2.5zm11.5 6c-1 0-2 1-2 2v7h-5v-13h5V10s1.6-1.5 4-1.5c3 0 5 2.2 5 6.3v6.7h-5v-7c0-1-1-2-2-2z' /></svg>
      </div>
    </div>
  </div>
)

const WhatsApp = ({ link }) => (
  <div onClick={() => window.open(link, '_blank', 'left=500,top=250,height=400,width=520')} className='resp-sharing-button__link'>
    <div className="resp-sharing-button resp-sharing-button--whatsapp resp-sharing-button--large"><div aria-hidden="true" className="resp-sharing-button__icon resp-sharing-button__icon--solidcircle">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="m12 0c-6.6 0-12 5.4-12 12s5.4 12 12 12 12-5.4 12-12-5.4-12-12-12zm0 3.8c2.2 0 4.2 0.9 5.7 2.4 1.6 1.5 2.4 3.6 2.5 5.7 0 4.5-3.6 8.1-8.1 8.1-1.4 0-2.7-0.4-3.9-1l-4.4 1.1 1.2-4.2c-0.8-1.2-1.1-2.6-1.1-4 0-4.5 3.6-8.1 8.1-8.1zm0.1 1.5c-3.7 0-6.7 3-6.7 6.7 0 1.3 0.3 2.5 1 3.6l0.1 0.3-0.7 2.4 2.5-0.7 0.3 0.099c1 0.7 2.2 1 3.4 1 3.7 0 6.8-3 6.9-6.6 0-1.8-0.7-3.5-2-4.8s-3-2-4.8-2zm-3 2.9h0.4c0.2 0 0.4-0.099 0.5 0.3s0.5 1.5 0.6 1.7 0.1 0.2 0 0.3-0.1 0.2-0.2 0.3l-0.3 0.3c-0.1 0.1-0.2 0.2-0.1 0.4 0.2 0.2 0.6 0.9 1.2 1.4 0.7 0.7 1.4 0.9 1.6 1 0.2 0 0.3 0.001 0.4-0.099s0.5-0.6 0.6-0.8c0.2-0.2 0.3-0.2 0.5-0.1l1.4 0.7c0.2 0.1 0.3 0.2 0.5 0.3 0 0.1 0.1 0.5-0.099 1s-1 0.9-1.4 1c-0.3 0-0.8 0.001-1.3-0.099-0.3-0.1-0.7-0.2-1.2-0.4-2.1-0.9-3.4-3-3.5-3.1s-0.8-1.1-0.8-2.1c0-1 0.5-1.5 0.7-1.7s0.4-0.3 0.5-0.3z" /></svg>
    </div>
    </div>
  </div>
)

const Xing = ({ link }) => (
  <div onClick={() => window.open(link, '_blank', 'left=500,top=250,height=400,width=520')} className='resp-sharing-button__link'>
    <div className="resp-sharing-button resp-sharing-button--xing resp-sharing-button--large"><div aria-hidden="true" className="resp-sharing-button__icon resp-sharing-button__icon--solidcircle">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.6 0 12 0zM7.8 14.5h-3L7 11.3 5.3 8.5h3l1.8 2.8L8 14.5zm9 5h-3.4l-3-5.5L15 5.5h3.2L13.6 14l3 5.5z" /></svg>
    </div>
    </div>
  </div>
)
