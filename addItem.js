// Define the addItem() function
// to be called through onclick
function addItem() {
  // Get type of element from form
  let type = document.getElementById("type").value;
  // Get the text/value for the tag
  // from the form
  let value = document.getElementById("value").value;
  // createElement() is used for
  // creating a new element
  type = document.createElement(type);
  // Use value as textnode in this example
  type.appendChild(document.createTextNode(value));
  // Append as child to the parent
  // tag i.e. ol
  document.getElementById("parent").appendChild(type);
}
