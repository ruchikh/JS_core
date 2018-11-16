var checkNodeList = document.querySelectorAll(".inbox input");
var last = NaN, firstS;
checkNodeList.forEach((v, i) => {
  v.setAttribute('data-id', i);
  v.addEventListener("click", checkFunc)
});
function checkFunc(e) {
  last = (!e.shiftKey) ? Number(e.target.dataset.id) : last;
  if (e.shiftKey && e.target.checked) {
    firstS = Number(e.target.dataset.id);
    if (last != NaN) {
      for (let i = Math.min(last, firstS); i <= (Math.min(last, firstS) + Math.abs(last - firstS)); i++) {
        checkNodeList[i].checked = true;
      }
    }
  } 
}
