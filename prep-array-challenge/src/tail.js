/* exported tail */
const tail = (array) => {
  r = [];
  for (let i = 1; i < array.length; i++) r.push(array[i]);
  return r;
};
