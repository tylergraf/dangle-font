/* Load this script using conditional IE comments if you need to support IE 7 and IE 6. */

window.onload = function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'Dangle\'">' + entity + '</span>' + html;
	}
	var icons = {
			'fs-icons-toggle-down' : '&#x44;',
			'fs-icons-start' : '&#x53;',
			'fs-icons-settings' : '&#x73;',
			'fs-icons-ruby' : '&#x43;',
			'fs-icons-reward' : '&#x52;',
			'fs-icons-redeem' : '&#x74;',
			'fs-icons-profile' : '&#x50;',
			'fs-icons-comments' : '&#x63;',
			'fs-icons-check-mark' : '&#x65;',
			'fs-icons-calendar' : '&#x6c;',
			'fs-icons-back' : '&#x42;',
			'fs-icons-add' : '&#x41;',
			'fs-icons-toggle-up' : '&#x55;',
			'fs-icons-grabber' : '&#x47;',
			'fs-icons-circlePlus' : '&#x21;',
			'fs-icons-repeat-round' : '&#x22;',
			'fs-icons-flask' : '&#x23;',
			'fs-icons-repeat-square' : '&#x24;',
			'fs-icons-band-aid' : '&#x33;',
			'fs-icons-lady-bug' : '&#x32;',
			'fs-icons-tank' : '&#x51;',
			'fs-icons-x' : '&#x25;',
			'fs-icons-coins' : '&#x26;',
			'fs-icons-check' : '&#x30;',
			'fs-icons-remind' : '&#x28;',
			'fs-icons-edit' : '&#x29;',
			'fs-icons-headphones' : '&#x2a;',
			'fs-icons-lock' : '&#x2b;',
			'fs-icons-check-mark-2' : '&#x25e4;',
			'fs-icons-nav' : '&#x25ba;',
			'fs-icons-arrow-right' : '&#x25b6;',
			'fs-icons-arrow-left' : '&#x25c3;'
		},
		els = document.getElementsByTagName('*'),
		i, attr, html, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		attr = el.getAttribute('data-icon');
		if (attr) {
			addIcon(el, attr);
		}
		c = el.className;
		c = c.match(/fs-icons-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
};