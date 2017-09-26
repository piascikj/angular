/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

export function getTypeOf(instance: any /** TODO #9100  id:193 gh:194*/) {
  return instance.constructor;
}

export function instantiateType(type: Function, params: any[] = []) {
  return new (<any>type)(...params);
}
