const myFunction = () => {
    let navbar = document.getElementById("navbarid");
    if (navbar.className === "navbar") {
      navbar.className += " responsive";
    } else {
      navbar.className = "navbar";
    }
  }