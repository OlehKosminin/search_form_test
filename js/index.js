import { items } from "./colection/first-colection.js";
import createList from "./function/createList.js";
import createOffersTips from "./function/createOffersTips.js";

import sortOffers from "./function/sortOffers.js";
// const list = document.querySelector("..search-list");

const refs = {
  input: document.querySelector(".input"),
  list: document.querySelector(".search-list"),
  form: document.querySelector(".form"),
  offerTips: document.querySelector(".offers"),
};

const markup = createList(items);

refs.list.insertAdjacentHTML("beforeend", markup);

let offers = [];

refs.input.addEventListener("input", (evt) => {
  let targetValue = evt.currentTarget.value;
  let items = document.querySelectorAll(".item");

  const elements = sortOffers(items, targetValue);
  // console.log("elements: ", elements);
  const tips = createOffersTips(elements);
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
