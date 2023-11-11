document.addEventListener("DOMContentLoaded", function () {
  const projectsList = document.getElementById("projects-list");
  const filterButtons = document.querySelectorAll(".filterBtn");
  let data;
  // Function to handle filter button click
  function handleFilterClick(button) {
    filterButtons.forEach((btn) => btn.classList.remove("active"));
    button.classList.add("active");

    const filter = button.getAttribute("data-filter");
    const filteredProjects = data.filter((project) => {
      if (filter === "all") {
        return true; // Show all projects
      } else {
        return project.category === filter;
      }
    });

    displayProjects(filteredProjects);
  }

  // Load JSON data (assuming you have a JSON file with project data)
  fetch("data.json")
    .then((response) => response.json())
    .then((jsonData) => {
      data = jsonData;
      displayProjects(data);

      filterButtons.forEach((button) => {
        button.addEventListener("click", () => {
          handleFilterClick(button);
        });
      });
    })
    .catch((error) => {
      console.error("Error loading JSON data:", error);
    });

  function displayProjects(projects) {
    projectsList.innerHTML = "";
    projects.forEach((project) => {
      const projectItem = document.createElement("div");
      projectItem.innerHTML = `
      <div class="item">
                  <iframe src="${project.video}"></iframe>
                  <h3>${project.title}</h3>
                 <p>${project.category}</p>
                </div>
          `;
      projectsList.appendChild(projectItem);
    });
  }
});

window.onscroll = function () {
  scrollFunction();
};
function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("header").style.padding = "8px 5vw";
  } else {
    document.getElementById("header").style.padding = "25px 8vw";
  }
}

// Typing Text    ************************

const words = ["Video Editor", "Photo Editor"];
let j = 0;
let timer;

function typingEffect() {
  let word = words[j].split("");
  var loopTyping = function () {
    if (word.length > 0) {
      document.getElementById("word").innerHTML += word.shift();
    } else {
      deletingEffect();
      return false;
    }
    timer = setTimeout(loopTyping, 200);
  };
  loopTyping();
}

function deletingEffect() {
  let word = words[j].split("");
  var loopDeleting = function () {
    if (word.length > 0) {
      word.pop();
      document.getElementById("word").innerHTML = word.join("");
    } else {
      if (words.length > j + 1) {
        j++;
      } else {
        j = 0;
      }
      typingEffect();
      return false;
    }
    timer = setTimeout(loopDeleting, 100);
  };
  loopDeleting();
}

typingEffect();

// -------------------------   Contact Form   -------------------------------------

window.onbeforeunload = () => {
  document.getElementById("name").value = "";
  document.getElementById("email").value = "";
  document.getElementById("desc").value = "";
};
