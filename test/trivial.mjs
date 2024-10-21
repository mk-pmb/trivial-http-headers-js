// -*- coding: utf-8, tab-width: 2 -*-
/* eslint-disable object-property-newline */

import assert from 'assert';

import thh from '../index.js';


(function expires() {
  const pastGmt = thh.expires.aLongLongTimeAgo;
  assert.strictEqual(pastGmt.slice(-4), ' GMT');
  const pastDate = new Date(pastGmt);
  assert.ok((+pastDate) > 1);
  assert.strictEqual(pastGmt, (new Date(+pastDate)).toGMTString());

  const futureGmt = thh.expires.farFuture;
  assert.strictEqual(futureGmt.slice(-4), ' GMT');
  const futureDate = new Date(futureGmt);
  assert.ok((+futureDate) > 1);
  assert.strictEqual(futureGmt, (new Date(+futureDate)).toGMTString());
  assert.ok((+futureDate) > (+pastDate));
}());


console.info('+OK trivial test passed.');
