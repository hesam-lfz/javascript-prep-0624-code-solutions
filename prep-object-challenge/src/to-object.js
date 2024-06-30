/* exported toObject */
const toObject = (keyValuePair) => {
  o = {};
  o[keyValuePair[0]] = keyValuePair[1];
  return o;
};
