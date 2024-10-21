/* -*- tab-width: 2 -*- */
'use strict';

const EX = {

  expires: {

    aLongLongTimeAgo: 'Mon, 01 Jan 1990 00:00:00 GMT', /*
      Taking the blame for whether to pad the day with zero or space,
      and whether it really was a Monday. You're welcome.
      Also we won't use unixtime 0 because some clients will consider
      that as "empty/no value".
      */

    farFuture: 'Fri, 31 Dec 9999 23:59:59 GMT', /*
      In theory, we could go up to 'Sat, 13 Sep 275760 00:00:00 GMT'[1]
      but some clients will probably use bad RegExps that expect
      exactly 4 digits in the year.
      Bug reports for the name becoming a lie will be accepted starting
      Mon, 01 Jan 9990 00:00:00 GMT.

      [1] Because someone will probably check this with JavaScript, and
          JavaScript's Date range ends way below Number.MAX_SAFE_INTEGER.
          See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date
      */

  },

};


module.exports = EX;
