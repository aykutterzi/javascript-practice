function stringFromObject(obj) {
  let finalStr = "";
  for (let key in obj) {
    finalStr += key + " = " + obj[key] + ", ";
  }
  return finalStr.slice(0, -2);
}
