function search() {

  input = document.getElementById('search-txt');
  filter = input.value.toUpperCase();
  li = document.getElementsByClassName('li');

  br = document.getElementsByClassName('br');

  for (i = 0; i < li.length; i++) {
    h1 = li[i].getElementsByTagName("h1")[0];
    txtValue = h1.textContent || h1.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
      br[i].style.display = "";
    } else {
      li[i].style.display = "none";
      br[i].style.display = "none";
    }
  }
}
