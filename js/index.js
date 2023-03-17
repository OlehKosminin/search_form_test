import { items } from "./colection/first-colection.js";
import createList from "./function/createList.js";
import createOffersTips from "./function/createOffersTips.js";
import createCurentItems from "./function/createCurentItems.js";

import sortOffers from "./function/sortOffers.js";

const refs = {
  input: document.querySelector(".input"),
  list: document.querySelector(".search-list"),
  form: document.querySelector(".form"),
  offerTips: document.querySelector(".tips"),
};

// const markup = createList(items);
// refs.list.insertAdjacentHTML("beforeend", markup);

refs.input.addEventListener("input", (evt) => {
  let targetValue = evt.currentTarget.value;
  let items = document.querySelectorAll(".item");

  const elements = sortOffers(items, targetValue);
  const tips = createOffersTips(elements);
  refs.offerTips.innerHTML = tips;
});

refs.form.addEventListener("submit", (evt) => {
  evt.preventDefault();
  let targetValue = evt.currentTarget.children[0].value;
  let items = document.querySelectorAll(".item");

  const currentElements = createCurentItems(items, targetValue);

  refs.list.innerHTML = currentElements;
});
