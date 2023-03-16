function sortOffers(offers, value, index) {
  const array = [];

  offers.forEach(function (offer) {
    if (value === "") {
      return;
    }
    if (offer.children[0].innerText.search(value) !== -1) {
      console.log(offer);
      array.push(offer);
    }
  });
  return array;
}
export default sortOffers;
