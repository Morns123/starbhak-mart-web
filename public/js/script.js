let products = document.querySelectorAll("#product");
let productsName = document.querySelectorAll("#product-name");
let price = document.querySelectorAll("#price");
let cardShopping = document.querySelectorAll("#card-shopping");
let bill = document.querySelector(".bill");
let total = document.getElementById("total");
let disc = document.getElementById("discount");
let getTax = document.getElementById("tax");
let plus, minus, trashIcon;

// search item

let searchItem = () => {
  let filter = search.value.trim().toLowerCase();
  let found = false;

  productsName.forEach((item, index) => {
    let productName = item.innerText.toLowerCase();
    let parentDiv = item.parentElement.parentElement;

    if (productName.includes(filter)) {
      parentDiv.style.display = '';
      found = true;
    } else {
      parentDiv.style.display = 'none';
    }
  });

  let notFoundContainer = document.querySelector('.not-found-container');

  if (!found) {
    if (notFoundContainer) {
      while (notFoundContainer.firstChild) {
        notFoundContainer.removeChild(notFoundContainer.firstChild);
      }

      let notFoundParagraph = document.createElement("p");
      notFoundParagraph.textContent = "Item not found";
      notFoundContainer.appendChild(notFoundParagraph);
      notFoundContainer.style.display = 'block';
    }
  } else {
    if (notFoundContainer) {
      notFoundContainer.style.display = 'none';
    }
  }
};
search.addEventListener("keyup", searchItem);

cardShopping.forEach((e, i) => {
  e.addEventListener("click", (e) => {
    // alert("test");
    disc.style.display = "inline";
    getTax.style.display = "inline";

    let div = document.createElement("div");
    div.setAttribute("id", "bill");
    div.classList.add("bill-child");
    bill.append(div);

    let h2 = document.createElement("h2");
    h2.innerHTML = productsName[i].innerText;
    h2.setAttribute("id", "h2bill");
    h2.style.fontWeight = "bold";
    h2.style.fontSize = "16px";

    div.append(h2);

    let pBill = document.createElement("p");
    let numb = 1;
    pBill.innerHTML = numb;

    h2.after(pBill);

    minus = document.createElement("span");
    minus.innerHTML = '<i class="fa-solid fa-minus"></i>';

    pBill.before(minus);

    plus = document.createElement("span");
    plus.innerHTML = '<i class="fa-solid fa-plus"></i>';

    pBill.after(plus);

    let spanNew = document.createElement("span");
    spanNew.textContent = "Rp.";
    spanNew.style.display = "inline-block";
    h2.after(spanNew);

    let h3 = document.createElement("h3");
    h3.innerHTML = price[i].innerText;
    h3.classList.add("bill-childH3");

    spanNew.append(h3);

    trashIcon = document.createElement("span");
    trashIcon.innerHTML = '<i class="fa-solid fa-trash" style="color: #c62a51;"></i>';

    div.append(trashIcon);

    div.style.display = "flex";
    div.style.justifyContent = "space-between";



    trashIcon.addEventListener("click", (e, i) => {
      div.remove();

      totalAmount();
    });

    plus.addEventListener("click", () => {
      numb += 1;
      pBill.innerHTML = numb;
      console.log(price);

      var curP = price[i].textContent * parseInt(numb);
      console.log(price[i].textContent);
      h3.innerText = curP;

      totalAmount();
    });

    minus.addEventListener("click", () => {
      numb -= 1;
      pBill.innerHTML = numb;

      var curP = price[i].textContent * numb;
      console.log(price[i].textContent);

      h3.innerText = curP;

      totalAmount()

      if (numb < 1) {
        div.remove();
      }
    });

    totalAmount();
  });
});

let totalAmount = (e, i) => {
  let h3ol = document.querySelectorAll(".bill-childH3");
  let jumlah = 0;

  // console.log(document.querySelectorAll(".bill-childH3"));
  h3ol.forEach((v, i) => {
    let tax = 200;
    let discPersen = ((5 / 100) * parseInt(v.textContent));
    let hasil = ((parseInt(v.textContent) - discPersen) + tax);

    jumlah += hasil;
  });

  total.innerHTML = jumlah;
};

// name of item

productsName.forEach((e, i) => {
  nameProduct = ["Coca Cola", "Green Tea", "Burger", "Ramen", "Milk Tea", "Cup Cake", "Sushi"];

  e.innerText = nameProduct[i];
});


// price of item
price.forEach((e, i) => {
  let prices = [7000, 8000, 10000, 45000, 24000, 13000, 28000];
  e.innerHTML = prices[i];
});




// payment info
let payment = () => {
  let billDiv = document.querySelectorAll("#bill");
  let totalAll = document.querySelectorAll("#total")
  let totalAllNew;

  totalAll.forEach((e, i) => {
    totalAllNew = e.textContent;
  })

  billDiv.forEach((e, i) => {
    if (i.length === 0) {
      return
    } else {
      Swal.fire({
        position: "center",
        icon: "success",
        title: `Payment has been successful of Rp.${totalAllNew}`,
        showConfirmButton: false,
        timer: 1500
      });


    }

  });
}



