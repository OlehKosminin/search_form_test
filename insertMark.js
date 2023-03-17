function insertmark(string, pos, len) {
  return (
    string.slice(0, pos) +
    `<mark>` +
    string.slice(pos, pos + len) +
    `</mark>` +
    string.slice(pos + len)
  );
}
