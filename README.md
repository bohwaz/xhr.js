# xhr.js

This is the smallest XmlHttpRequest Javascript micro-library ever. EVER!

* Uncompressed: 779 bytes
* Minified: 446 bytes
* Minified + GZ compress: 329 bytes

Supports all browsers:

* Firefox 1.0+
* Chrome 1+
* IE 7+
* Opera
* Safari 1.2+

No support for IE5 and IE6.


## Usage

```
xhr.load('http://web.site/url/', function (data) {
    alert(data);
});
```

You can supply a third parameter for the return format:

* text (default): returns plain text
* json: returns a JSON object (or an error if the JSON is invalid)

And a fourth parameter, as a callback that'll be called when an 
error happens (HTTP code different of 200 OK).

Full example:

```
xhr.load(
    'http://lib.ca.ca/ip.pi/',
    function (data) {
        console.log(data.text);
    },
    'json',
    function (status) {
        alert('HTTP error: '+status);
    }
);
```

## License

Something along the lines of the WTFPL or public domain.

Part of the KD2fw micro-library-nano-framework-thingy: http://dev.kd2.org/kd2fw/
