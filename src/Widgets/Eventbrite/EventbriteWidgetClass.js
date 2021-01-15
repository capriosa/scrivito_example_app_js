import * as Scrivito from 'scrivito';

const EventbriteWidget = Scrivito.provideWidgetClass('EventbriteWidget', {
    attributes: {
        eventbriteId: 'string',
        partnerevent: ['enum', { values: ['yes', 'no'] }],
        headline: 'string',
        description: 'string',
        image: 'reference',
        link: 'string',
        body: 'html',
        location: 'string',
        organizer: 'string',
        street: 'string',
        plzCity: 'string',
        startDate: 'date',
        startTime: 'string',
        endDate: 'date',
        endTime: 'string'

    },
});

export default EventbriteWidget;
