const navItems = document.getElementById("nav-items");

const menuToggle = () => {
    if (navItems.style.display === "none") {
      navItems.style.display = "flex";

    } else {
      navItems.style.display = "none";

    }
  };

  const navFlex = () => {
    if (document.body.clientWidth > 768) {
      navItems.style.display = "flex";

      console.log("test");
    } else {
      navItems.style.display = "none";

    }
  };
  
  window.onresize = navFlex;