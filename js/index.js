import { items } from "./colection/first-colection.js";
import createList from "./function/createList.js";

// const list = document.querySelector("..search-list");

const refs = {
  input: document.querySelector(".input"),
  list: document.querySelector(".search-list"),
  form: document.querySelector(".form"),
};

const markup = createList(items);

refs.list.insertAdjacentHTML("beforeend", markup);

let offers = [];

refs.input.addEventListener("input", (evt) => {
  console.log(evt.currentTarget.value);
  let targetValue = evt.currentTarget.value;

  let items = document.querySelectorAll(".item");

  items.forEach(function (item) {
    let value = item.children[0].innerText;
    // console.log("value: ", value);
    if (value.search(targetValue) === -1) {
      item.classList.add("hide");
    } else {
      console.log(item);
    }
  });
});

// let acc = null;
// function onSubmite(evt) {
//   evt.preventDefault();

//   let items = document.querySelectorAll(".item");

//   if (acc !== "") {
//     items.forEach(function (item) {
//       let inName = item.children[0].innerText;
//       if (inName.search(acc) === -1) {
//         item.classList.add("hide");
//       } else {
//         item.classList.remove("hide");
//       }
//     });
//   }

//   acc = "";
// }

// refs.form.addEventListener("submit", onSubmite);

// refs.input.addEventListener("input", (evt) => {
//   //   console.log("evt: ", evt.currentTarget.value);
//   if (!evt.currentTarget.value) {
//     return;
//   }
//   acc = evt.currentTarget.value.trim();
//   console.log("acc: ", typeof acc);
// });
