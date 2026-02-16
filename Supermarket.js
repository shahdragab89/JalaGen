const brokenPipe = document.getElementById("brokenPipe");
const winMessage = document.getElementById("winMessage");

brokenPipe.onclick = function(){

  // اختفاء البايب المكسورة
  brokenPipe.style.opacity = "0";

  // إظهار رسالة الفوز
  winMessage.style.display = "block";

};
