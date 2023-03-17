function createCurentItems(offers, value) {
  const array = [];
  offers.forEach(function (offer) {
    if (value === "") {
      return;
    }
    if (offer.children[0].children[0].innerText.search(value) !== -1) {
      // console.log(offer.children[0].children[0].innerText);
      array.push(offer);
    }
  });

  const markup = array
    .map((item) => {
      const title = item.children[0].children[0].innerText;
      const text = item.children[0].children[1].innerText;
      const link = item.children[0].attributes.href.value;

      return ` <li class='item' id="1">
            <a href="${link}" class="tips-link">
                <h2 class="title">${title}</h2>
                <p class="text">${text}"</p>
            </a>
        </li>`;
    })
    .join("");

  // console.log("markup: ", markup);
  return markup;
}

export default createCurentItems;
