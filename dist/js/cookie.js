//增  改
function setCookie(key, val, n) {
  let oDate = new Date();
  oDate.setDate(oDate.getDate() + n);
  //document.cookie = key + "=" + val + ";expires=" + oDate;
  document.cookie = `${key}=${val};expires=${oDate}`;
}
//查
function getCookie(key) {
  let str = document.cookie;
  let arr = str.split("; ");
  /* let res = 0;
  arr.forEach(item => {
    let brr = item.split("=");
    if (brr[0] == key) {
      res = brr[1];
    }
  }) 
  return res;
  */

  for (let i = 0; i < arr.length; i++) {
    let brr = arr[i].split("=");
    if (brr[0] == key) {
      return brr[1];
    }
  }

}
//删
function removeCookie(key) {
  setCookie(key, 1, -1)
}