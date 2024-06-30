/* exported getKeys */
const getKeys = (object) => {
  r = [];
  for (let k in object) r.push(k);
  return r;
};
