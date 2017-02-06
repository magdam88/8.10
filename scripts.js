var withButtonClass = document.getElementsByClassName('button');
console.log(withButtonClass);
console.log(withButtonClass.length);


for(i=1; i<=withButtonClass.length; i++) {
  var displayText = withButtonClass.innerHTML;
  console.log(displayText);
  alert(displayText);
};
