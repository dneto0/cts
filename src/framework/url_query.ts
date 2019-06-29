import { IEntry } from './loader.js';
import { ICaseID } from './test_group.js';

export function encodeSelectively(s: string) {
  let ret = encodeURIComponent(s);
  ret = ret.replace(/%20/g, '+'); // Encode space with + (equivalent but more readable)
  ret = ret.replace(/%22/g, '"');
  ret = ret.replace(/%2C/g, ',');
  ret = ret.replace(/%2F/g, '/');
  ret = ret.replace(/%3A/g, ':');
  ret = ret.replace(/%7B/g, '{');
  ret = ret.replace(/%7D/g, '}');
  return ret;
}

export function makeQueryString(entry: IEntry, testcase?: ICaseID): string {
  let s = entry.suite + ':';
  s += entry.path + ':';
  if (testcase) {
    s += testcase.name + ':';
    if (testcase.params) {
      s += JSON.stringify(testcase.params);
    }
  }
  return encodeSelectively(s);
}
