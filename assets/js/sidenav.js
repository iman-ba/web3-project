function sidenavItemHandler(element) {
  const id = element.id;
  console.log((document.querySelector(`#${id} ul`)));
  if ((document.querySelector(`#${id} ul`)) != null) {
      if (document.querySelector(`#${id} ul`).classList.contains('active') == false) {
        for (i = 0; i < document.querySelectorAll(`#mySidenav ul`).length; i++) {
          document.querySelectorAll(`#mySidenav ul`)[i].classList.remove("active");
        }
        document.querySelector(`#${id} ul`).classList.add('active');
          // document.querySelector(`#${id} svg`).style.transform = "rotate(180deg)"
      } else {
          document.querySelector(`#${id} ul`).classList.remove('active');
          // document.querySelector(`#${id} svg`).style.transform = "rotate(180deg)"

      }
  };
}


function toggleNav(){
  document.getElementById('mySidenav').classList.toggle('toggleClass');
}
// function openNav() {
//   document.getElementById("mySidenav").style.width = "250px";
//   document.getElementById("main").style.marginLeft = "250px";
// }
// function closeNav() {
//   document.getElementById("mySidenav").style.width = "0";
//   document.getElementById("main").style.marginLeft= "0";
// }