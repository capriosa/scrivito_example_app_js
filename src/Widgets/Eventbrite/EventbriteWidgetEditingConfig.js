import * as Scrivito from 'scrivito';

Scrivito.provideEditingConfig('EventbriteWidget', {
    title: 'Eventbrite',
    attributes: {
        eventbriteId: {
            title: "ID",
            description: "ID of the event"
        },
        attribute: {
            title: 'Partnerevent',
            description: 'Default: false',

        },
        headline: {
            title: "Headline"
        },
        description: {
            title: "Description"
        },
        link: {
            title: "URL zur Anmeldung"
        },
        image: {
            title: "Image"
        },
        body: {
            title: "Body"
        },
        location: {
            title: "Location"
        },
        organizer: {
            title: "Organizer"
        },
        street: {
            title: "Street/Nr."
        },
        plzCity: {
            title: "PLZ/City"
        },
        startDate: {
            title: "Start Date"
        },
        startTime: {
            title: "Start Time",
            description: "Format: HH:MM 18:00"
        },
        endDate: {
            title: "End Date"
        },
        endTime: {
            title: "End Time",
            description: "Format: HH:MM 20:30"
        },

    },


    properties: [
        'eventbriteId',
        'partnerevent',
        'headline',
        'description',
        'link',
        'image',
        'body',
        'location',
        'organizer',
        'street',
        'plzCity',
        'startDate',
        'startTime',
        'endDate',
        'endTime'
    ],

    initialContent: {
        ikt: 'false',
        partnerevent: 'no',
        hideFromList: 'false',
    },
});