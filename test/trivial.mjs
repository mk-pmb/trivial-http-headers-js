// -*- coding: utf-8, tab-width: 2 -*-
/* eslint-disable object-property-newline */

import assert from 'assert';

import thh from '../index.js';


(function expires() {
  const pastGmt = thh.Expires.aLongLongTimeAgo;
  assert.strictEqual(pastGmt.slice(-4), ' GMT');
  const pastDate = new Date(pastGmt);
  assert.ok((+pastDate) > 1);

  const futureGmt = thh.Expires.farFuture;
  assert.strictEqual(futureGmt.slice(-4), ' GMT');
  const futureDate = new Date(futureGmt);
  assert.ok((+futureDate) > 1);
  assert.ok((+futureDate) > (+pastDate));
}());


console.info('+OK usage test passed.');
