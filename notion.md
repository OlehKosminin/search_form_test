items.forEach(function (item) {
let value = item.children[0].innerText;
if (value.search(targetValue) === -1) {
// item.classList.add("hide");
const index = offers.indexOf(item);
} else {
// тут я отримую елемент який я шукаюі пушу його
console.log(item);
if (!offers.includes(item)) {
offers.push(item);

        console.log("offers: ", offers);
        // console.log(item);
      }
    }

})
