function offersTips(value) {
  console.log("value: ", value);

  const markup = value.map((item) => {
    console.log(item.children[0].innerText);
  });

  return `<li>
  <a href=""></a>
    </li>`;
}

export default offersTips;
