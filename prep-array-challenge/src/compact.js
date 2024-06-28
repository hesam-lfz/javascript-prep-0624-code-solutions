/* exported compact */
/* exported tail */
const compact = (array) => {
  r = [];
  for (let e of array) if (e) r.push(e);
  return r;
};
