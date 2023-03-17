function sortOffers(offers, value) {
  const array = [];

  offers.forEach(function (offer) {
    if (value === "") {
      return;
    }
    if (offer.children[0].children[0].innerText.search(value) !== -1) {
      array.push(offer);
    }
  });
  return array;
}
export default sortOffers;
