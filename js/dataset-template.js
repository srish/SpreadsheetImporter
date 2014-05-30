this["JST"] = this["JST"] || {};

this["JST"]["templates/dataset.html"] = function (obj) {
    obj || (obj = {});
    var __t, __p = '',
        __e = _.escape,
        __j = Array.prototype.join;

    function print() {
        __p += __j.call(arguments, '')
    }
    with(obj) {

        if ((dataset['Media Type'] == "Video") || (dataset['Media Type'] == "Image")) {

            __p += '<div class="dataset">\n  <div class="details">\n\n    ';

            if (dataset['Media Type'] == "Video") {
                if (dataset['URL for Gallery']) {;
                    __p +=
                        '\n      <iframe width="250" height="200" class="media" src="' +
                        ((__t = (dataset['URL for Gallery'])) == null ? '' : __t) +
                        '"></iframe>\n    ';
                };
                __p += '\n\n    ';

            } else if (dataset['Media Type'] == "Image") {
                if (dataset['URL for Gallery']) {;
                    __p +=
                        '\n      <div class="image-container"><img width="245" height="195" class="media" src="' +
                        ((__t = (dataset['URL for Gallery'])) == null ? '' : __t) +
                        '"></img></div>\n    ';
                };
                __p += '\n\n    ';
            }

            if (dataset['Full Name']) {;
                __p += '\n      <h2><span class="fullname"> <a href="' +
                    ((__t = (dataset['Profile Link'])) == null ? '' : __t) +
                    '" target="_blank">' +
                    ((__t = (dataset['Full Name'])) == null ? '' : __t) +
                    '</a></span></h2>\n    ';
            };
            __p += '\n\n\n\n    ';

            if (dataset['Project']) {;
                if (dataset['Discourse Post Link']) {;
                    __p += '\n      <span class="project-title"> <a href="' +
                        ((__t = (dataset['Discourse Post Link'])) == null ? '' :
                        __t) + '" target="_blank">' +
                        ((__t = (dataset['Project'])) == null ? '' : __t) +
                        '</a></span>\n    ';
                } else {
                    __p += '\n      <span class="project-title">' +
                        ((__t = (dataset['Project'])) == null ? '' : __t) +
                        '</span>\n    ';
                };

            };

            __p += '\n\n    ';

            if (dataset['Profile Picture Link']) {;
                __p +=
                    '\n      <img width="50" height="50" class="profile-picture" src="' +
                    ((__t = (dataset['Profile Picture Link'])) == null ? '' : __t) +
                    '"></img>\n    ';
            };
            __p += '\n\n    ';
        }
    }

    return __p
};