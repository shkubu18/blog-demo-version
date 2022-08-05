function myFunction() {
    var element = document.getElementById("nav");
    if(nav.classList.contains('active')) {
        nav.classList.remove('active')
    } else {
        element.classList.add("active");
    }

  }

  function myFunction1() {
    var element = document.getElementById("item1");
    if(!item1.classList.contains('active')) {
        element.classList.add("active");
        document.getElementById('img1').style.transform = 'rotate(180deg)'
    } else {
        item1.classList.remove('active')
        document.getElementById('img1').style.transform = 'rotate(0deg)'
    }
     

  }

  function myFunction2() {
    var element = document.getElementById("item2");
    if(!item2.classList.contains('active')) {
        element.classList.add("active");
        document.getElementById('img2').style.transform = 'rotate(180deg)'
    } else {
        item2.classList.remove('active')
        document.getElementById('img2').style.transform = 'rotate(0deg)'
    }
     

  }

  function myFunction3() {
    var element = document.getElementById("item3");
    if(!item3.classList.contains('active')) {
        element.classList.add("active");
        document.getElementById('img3').style.transform = 'rotate(180deg)'
    } else {
        item3.classList.remove('active')
        document.getElementById('img3').style.transform = 'rotate(0deg)'
    }
     

  }

  function myFunction4() {
    var element = document.getElementById("item4");
    if(!item4.classList.contains('active')) {
        element.classList.add("active");
        document.getElementById('img4').style.transform = 'rotate(180deg)'
    } else {
        item4.classList.remove('active')
        document.getElementById('img4').style.transform = 'rotate(0deg)'
    }
     

  }


  

 