var withButtonClass = document.getElementsByClassName('button');
console.log(withButtonClass);
console.log(withButtonClass.length);


for (var i = 0; i < withButtonClass.length; i++) {
    var displayText = withButtonClass[i].innerHTML;
    console.log(displayText);
    alert(displayText);
};