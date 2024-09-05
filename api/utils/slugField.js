const slugify = require('slugify');

const options = {
    replacement: '-',
    remove: undefined,
    lower: true,
    strict: false,
    locale: 'en',
    trim: true
};

exports.slugField = str => {
    if (typeof str !== 'string') {
        console.error(`slugField: expected a string but received ${typeof str}`);
        return '';
    }
    return slugify(str, options);
};
