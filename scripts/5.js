var uid = '502513';
var wid = '755132';

var pop_tag = document.createElement('script');
pop_tag.src = '//cdn.popcash.net/show.js';
document.body.appendChild(pop_tag);

pop_tag.onerror = function () {
    pop_tag = document.createElement('script');
    pop_tag.src = '//cdn2.popcash.net/show.js';
    document.body.appendChild(pop_tag);
};