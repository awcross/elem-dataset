import test from 'ava';
import jsdom from 'jsdom';

const {JSDOM} = jsdom;
const {window} = new JSDOM('');
const {document} = (new JSDOM('')).window;

global.window = window;
global.document = document;

Object.defineProperty(window.HTMLElement.prototype, 'dataset', {
	get: () => null
});

const dataset = require('.');

function toDashed(name) {
	return name.replace(/([A-Z])/g, u => {
		return `-${u.toLowerCase()}`;
	});
}

test('get values', t => {
	const elem = document.createElement('div');

	elem.setAttribute('data-foo', 'bar');
	elem.setAttribute('data-a-b', 'c');

	t.is(dataset(elem).foo, 'bar');
	t.is(dataset(elem).aB, 'c');
});

test('set values', t => {
	const elem = document.createElement('div');
	let undef;

	elem.setAttribute('data-undef', 'test');
	elem.setAttribute('data-a-b', 'c');
	elem.setAttribute('data-foo', 'bar');

	dataset(elem).undef = undef;
	dataset(elem).aB = 'c';
	dataset(elem).foo = 'baz';

	t.is(elem.getAttribute('data-undef'), null);
	t.is(elem.getAttribute('data-a-b'), 'c');
	t.is(elem.getAttribute('data-foo'), 'baz');
});

test('get multiple values', t => {
	const elem = document.createElement('div');
	const attrs = {
		foo: 'bar',
		aB: 'c',
		true: 'true'
	};

	for (const key in attrs) {
		if (Object.prototype.hasOwnProperty.call(attrs, key)) {
			const name = toDashed(key);
			elem.setAttribute(`data-${name}`, attrs[key]);
		}
	}

	const result = Object.assign({}, dataset(elem));
	t.deepEqual(result, attrs);
});
