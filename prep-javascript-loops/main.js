// create your loops here.
const names1 = ['bob', 'cat', 'zoe']
const names2 = {'bob': 12, 'cat': 10, 'zoe': 5}
for (const key of names1) {
    console.log(key)
}
let o = names1
for (const key in o) {
    console.log(key)
}
o = names2
for (const key in o) {
    console.log(key)
}
names1.forEach(n => console.log(n))