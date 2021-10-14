const addNode = () => {
  let newP = document.createElement("p");
  let textNode = document.createTextNode(" This is a new text node");
  newP.appendChild(textNode);
  document.getElementById("firstP").appendChild(newP);
};
