// var slideIndex = 1;
// showDivs(slideIndex);

// function plusDivs(n) {
//   showDivs(slideIndex += n);
// }

// function showDivs(n) {
//   var i;
//   var x = document.getElementsByClassName("mySlides");
//   if (n > x.length) {slideIndex = 1}
//   if (n < 1) {slideIndex = x.length}
//   for (i = 0; i < x.length; i++) {
//     x[i].style.display = "none";  
//   }
//   x[slideIndex-1].style.display = "block";  
// }
//Bai viet
var counter =1;
setInterval(function() {
    document.getElementById('radio' + counter).checked=true;
    counter++;
    if(counter>3) {
    counter=1;
}
},5000);
//
function toggleStep(stepId) {
  var step = document.getElementById(stepId);
  if (step.style.display === 'none') {
    step.style.display = 'block';
  } else {
    step.style.display = 'none';
  }
}
function copyToClipboard(text) {
  // Tạo một thẻ textarea để chứa đoạn mã cần sao chép
  var textarea = document.createElement("textarea");
  textarea.value = text;
  textarea.setAttribute("readonly", "");
  textarea.style.position = "absolute";
  textarea.style.left = "-9999px";
  document.body.appendChild(textarea);

  // Chọn và sao chép nội dung của thẻ textarea
  textarea.select();
  document.execCommand("copy");

  // Xóa thẻ textarea
  document.body.removeChild(textarea);

  // Thông báo cho người dùng biết đoạn mã đã được sao chép thành công

}
