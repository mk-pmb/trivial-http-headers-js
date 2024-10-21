
<!--#echo json="package.json" key="name" underline="=" -->
trivial-http-headers
====================
<!--/#echo -->

<!--#echo json="package.json" key="description" -->
Absolving you from responsibility for choosing a bad HTTP header value that
you thought wouldn&#39;t really matter anyway – until it does.
<!--/#echo -->


Purpose of this module
----------------------

* __Avoid magic numbers:__
  Provide named constants that can actually express the intent behind the
  header value you'll be sending.
* __Delegate responsibility:__
  Trust me, those values are good choices. And if it turns out some weird
  browser in some weird circumstance hates that exact value, you have someone
  else to blame. Make it my problem, and I can fix it for everyone else who
  didn't even know they are affected.
* __Offer a place for discussion:__
  Someone has a weird conspiracy theory about the secret hidden meaning of
  some of the numbers in your HTTP header value? Send them over, have them
  discuss it in _my_ issue tracker so you can close the ticket in yours.




API
---

Just look at [`index.js`](index.js),
it's as trivial as the headers _should_ be.




<!--#toc stop="scan" -->



Known issues
------------

* Needs more/better tests and docs.




&nbsp;


License
-------
<!--#echo json="package.json" key=".license" -->
ISC
<!--/#echo -->
