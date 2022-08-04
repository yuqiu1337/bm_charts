/**
 * @author        levi <levidcd@outlook.com>
 * @date          2022-07-26 16:49:57
 * Copyright © YourCompanyName All rights reserved
 */
export function createData() {
  return Array(7)
    .fill('')
    .map(() => Math.floor(Math.random() * 100));
}
export function createXAxis() {
  return Array(7)
    .fill('')
    .map(() => '_' + Math.random().toString(36).substring(2));
}
export function createPieData() {
  return Array(7)
    .fill('')
    .map(() => {
      return {
        name: '_' + Math.random().toString(36).substring(2),
        category: '_ca_' + Math.random().toString(36).substring(2),
        value: Math.floor(Math.random() * 100),
        value2: Math.floor(Math.random() * 100),
      };
    });
}
