// Приховати елемент за допомогою CSS (display: none)
function hideWithCSS() {
  document.getElementById("myBlock1").style.display = "none";
}

// Приховати елемент за допомогою JS (видалення елементу)
function hideWithJS() {
  const block = document.getElementById("myBlock1");
  if (block) {
    block.remove();
  }
}

// Приховати елемент за допомогою CSS+JS (додавання класу hidden)
function hideWithClass() {
  document.getElementById("myBlock1").classList.add("hidden");
}

// Тогл елемент: приховати/показати елемент за допомогою CSS+JS
function toggleBlock() {
  const blocks = document.getElementsByClassName("myBlock1");
  for (const block of blocks) {
    block.classList.toggle("hidden");
  }
}

function toggleFiveBlocks() {
  const blocks = document.getElementsByClassName("myBlock2");
  for (const block of blocks) {
    block.classList.toggle("hidden");
  }
}

// Приховати блок за CSS селектором
function hideSelected() {
  const selector = document.getElementById("cssSelector").value;
  const elements = document.querySelectorAll(selector);
  elements.forEach((el) => el.classList.add("hidden"));
}

// Жовтий блок з alert і приховуванням
let clickedOnce = false;
document.getElementById("yellowBlock").addEventListener("click", function () {
  if (!clickedOnce) {
    alert("Привіт");
    clickedOnce = true;
  } else {
    this.classList.add("hidden");
  }
});

// Червоний блок з hover ефектом
const redBlock = document.getElementById("redBlock");
const hoverButton = document.getElementById("hoverButton");

hoverButton.addEventListener("mouseenter", () => {
  redBlock.classList.remove("hidden");
});

hoverButton.addEventListener("mouseleave", () => {
  redBlock.classList.add("hidden");
});

// Зелений прямокутник з фокусом і ввідом
const focusInput = document.getElementById("focusInput");
const greenRect = document.getElementById("greenRect");

focusInput.addEventListener("focus", () => {
  greenRect.classList.remove("hidden");
});

focusInput.addEventListener("input", () => {
  greenRect.classList.add("hidden");
});

// Додавання зображення за введеним URL
function showImage() {
  const imageUrl = document.getElementById("imageUrl").value;
  const imageContainer = document.getElementById("imageContainer");
  imageContainer.innerHTML = `<img src="${imageUrl}" alt="User image" />`;
}

//
function showImages() {
  const imagesUrls = document.getElementById("imagesUrls").value.split("\n");
  const imagesContainer = document.getElementById("imagesContainer");
  imagesContainer.innerHTML = "";
  imagesUrls.forEach((imageUrl) => {
    imagesContainer.innerHTML += `<img src="${imageUrl}" alt="User image" />`;
  });
}

//
const coordinates = document.getElementById("coordinates");

document.addEventListener("mousemove", (event) => {
  coordinates.innerText = `X: ${event.clientX}, Y: ${event.clientY}`;
});

//
document.getElementById("languageDiv").innerText =
  "Language: " + navigator.language;

//
if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition((position) => {
    document.getElementById(
      "coordinatesUser"
    ).innerText = `Широта: ${position.coords.latitude}, Довгота ${position.coords.longitude}`;
  });

  // 1. LocalStorage
  const localStorageBlock = document.getElementById("localStorageBlock");
  localStorageBlock.innerText = localStorage.getItem("localText") || "";

  localStorageBlock.addEventListener("input", () => {
    localStorage.setItem("localText", localStorageBlock.innerText);
  });

  // 2. Cookies
  const cookiesBlock = document.getElementById("cookiesBlock");

  const getCookie = (name) => {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    return parts.length === 2 ? parts.pop().split(";").shift() : "";
  };

  window.onload = () => {
    cookiesBlock.innerText = getCookie("cookieText") || "";
  };

  cookiesBlock.addEventListener("input", () => {
    const date = new Date();
    date.setTime(date.getTime() + 365 * 24 * 60 * 60 * 1000); // Кука на 1 рік
    const expires = `expires=${date.toUTCString()}`;

    if (cookiesBlock.innerText === "") {
      document.cookie = `cookieText=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
    } else {
      document.cookie = `cookieText=${cookiesBlock.innerText}; ${expires}; path=/; SameSite=Lax;`;
    }
  });

  // 3. SessionStorage
  const sessionStorageBlock = document.getElementById("sessionStorageBlock");
  sessionStorageBlock.innerText = sessionStorage.getItem("sessionText") || "";

  sessionStorageBlock.addEventListener("input", () => {
    sessionStorage.setItem("sessionText", sessionStorageBlock.innerText);
  });
}
