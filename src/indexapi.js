const addListItem = (element, item) => {
  element.innerHTML += "<li>" + item.firstName + "</li>";
}

module.exports = {
  addListItem
}
