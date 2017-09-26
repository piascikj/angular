/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import {describe, expect, it} from '@angular/core/testing/src/testing_internal';

export function main() {
  describe('Shim', () => {

    it('should provide correct function.name ', () => {
      const functionWithoutName = identity(() => function(_: any /** TODO #9100  id:181 gh:182*/) {});
      function foo(_: any /** TODO #9100  id:113 gh:114*/) {}

      expect((<any>functionWithoutName).name).toBeFalsy();
      expect((<any>foo).name).toEqual('foo');
    });

  });
}

function identity(a: any /** TODO #9100  id:297 gh:298*/) {
  return a;
}
