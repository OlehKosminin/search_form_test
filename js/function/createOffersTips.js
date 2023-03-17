function offersTips(value) {
  const markup = value
    .map((item) => {
      const title = item.children[0].children[0].innerText;
      const link = item.children[0].attributes.href.value;

      return `<li class="tips-item">
  <a href="${link}" class="tips-link">${title}</a>
    </li>`;
    })
    .join("");

  return markup;
}

export default offersTips;
