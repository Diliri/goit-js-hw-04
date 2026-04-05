function slugify(title) {
  return title.toLowerCase().trim().split(' ').join('-');
}

// 🔍 Як це працює:
// toLowerCase() → робимо всі літери маленькими
// split(" ") → розбиваємо рядок на масив слів
// join("-") → збираємо назад у рядок через -

console.log(slugify('Arrays for beginners')); // "arrays-for-beginners"
console.log(slugify('English for developer')); // "english-for-developer"
console.log(slugify('Ten secrets of JavaScript')); // "ten-secrets-of-javascript"
console.log(slugify('How to become a JUNIOR developer in TWO WEEKS')); // "how-to-become-a-junior-developer-in-two-weeks"
