function createList(items) {
  const markup = items
    .map(({ id, title, text }) => {
      return `<li class='item' id=${id}  >
                <h2 class="title">${title}</h2>
                <p class="text"> ${text}</p>
            </li>`;
    })
    .join("");

  return markup;
}

export default createList;
