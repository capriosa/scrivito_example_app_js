import * as Scrivito from 'scrivito';

const UnsplashWidget = Scrivito.provideWidgetClass('UnsplashWidget', {
    attributes: {
        image: 'string',
        keyword: 'string'
    },
});

export default UnsplashWidget;