// Talent data structure
const categories = [
  {
    name: "Talents et Compétences",
    children: [
      {
        name: "Art et Création",
        children: [
          { name: "Music", icon: "music.svg" },
          { name: "Art visuel", icon: "art.svg" },
          { name: "Dance", icon: "dance.svg" },
          { name: "Théâtre", icon: "theatre.svg" },
          { name: "Écriture", icon: "wattpad.svg" },
          { name: "Autres...", icon: null },
        ],
      },
      {
        name: "Création Numérique & Tech",
        children: [
          {
            name: "Dev",
            children: [
              { name: "HTML", icon: "html.svg" },
              { name: "CSS", icon: "css.svg" },
              { name: "Swift", icon: "swift.svg" },
              { name: "VSCode", icon: "vs-code.svg" },
              { name: "AppCode", icon: "jb-appcode.svg" },
              { name: "Linux", icon: "linux.svg" },
              { name: "Linux Mint", icon: "linux-mint.svg" },
              { name: "Node JS", icon: "node-js.svg" },
              { name: "Python", icon: "python.svg" },
              { name: "JavaScript", icon: "javascript.svg" },
              { name: "React", icon: "react.svg" },
              { name: "Angular", icon: "angular.svg" },
              { name: "Docker", icon: "docker.svg" },
              { name: "PyCharm", icon: "pycharm.svg" },
              { name: "C++", icon: "cpp.svg" },
              { name: "C#", icon: "csharp.svg" },
            ],
          },
          { name: "IA", icon: "AI.svg" },
          { name: "Bluetooth", icon: "bluetooth.svg" },
          { name: "Blackberry", icon: "blackberry.svg" },
          { name: "Tech", icon: "tech.svg" },
          { name: "Microsoft", icon: "microsoft.svg" },
          { name: "Autres...", icon: null },
        ],
      },
      {
        name: "Sport et Activités",
        children: [
          { name: "Football", icon: "football.svg" },
          { name: "Basketball", icon: "basketbal.svg" },
          { name: "Tennis", icon: "tenis.svg" },
          { name: "Surf", icon: "surf.svg" },
          { name: "Golf", icon: "golf.svg" },
          { name: "Fitness", icon: "fitness.svg" },
          {
            name: "Gaming",
            children: [
              { name: "EpicGames", icon: "epicgames.svg" },
              { name: "Minecraft", icon: "minecraft.svg" },
              { name: "Xbox", icon: "xbox.svg" },
              { name: "Steam", icon: "steam.svg" },
              { name: "PlayStation", icon: "playstation.svg" },
            ],
          },
          { name: "Autres...", icon: null },
        ],
      },
      {
        name: "Sciences et Recherche",
        children: [
          { name: "Math", icon: null },
          { name: "Sciences", icon: "sciences.svg" },
          { name: "Physique", icon: "physics.svg" },
          { name: "Ingénieur", icon: "ingenieur.svg" },
          { name: "Robotique", icon: "robotique.svg" },
          { name: "Médecine", icon: "medecine.svg" },
          { name: "IA", icon: "AI.svg" },
          { name: "Autres...", icon: null },
        ],
      },
      {
        name: "Business et Investissement",
        children: [
          { name: "Entrepreneur", icon: "businessman.svg" },
          { name: "Marketing", icon: "marketing.svg" },
          { name: "Finance", icon: "finance.svg" },
          { name: "Inventeur", icon: "craft.svg" },
          { name: "Ethereum", icon: "etherium.svg" },
          { name: "Bitcoin", icon: "bitcoin.svg" },
          { name: "Autres...", icon: null },
        ],
      },
      {
        name: "Internet, Apps et Logiciels",
        children: [
          {
            name: "Adobe",
            children: [
              { name: "Adobe", icon: "adobe.svg" },
              { name: "Aero", icon: "adobe-aero.svg" },
              { name: "After Effects", icon: "adobe-after-effects.svg" },
              { name: "Animate", icon: "adobe-animate.svg" },
              { name: "Creative Cloud", icon: "adobe-creative-cloud.svg" },
              { name: "Dreamweaver", icon: "adobe-dreamweaver.svg" },
              { name: "Illustrator", icon: "adobe-illustrator.svg" },
              { name: "Lightroom", icon: "adobe-lightroom.svg" },
              { name: "Photoshop", icon: "adobe-photoshop.svg" },
              { name: "Premiere", icon: "adobe-premiere.svg" },
              { name: "XD", icon: "adobe-xd.svg" },
            ],
          },
          { name: "Bitcoin", icon: "bitcoin.svg" },
          {
            name: "Microsoft",
            children: [
              { name: "Word", icon: "ms-word.svg" },
              { name: "Excel", icon: "ms-excel.svg" },
              { name: "OneDrive", icon: "ms-onedrive.svg" },
              { name: "Outlook", icon: "ms-outlook.svg" },
            ],
          },
          {
            name: "Google",
            children: [
              { name: "Google", icon: "google.svg" },
              { name: "Google Calendar", icon: "google-calendar.svg" },
              { name: "Google Docs", icon: "google-docs.svg" },
              { name: "Google Play", icon: "google-play.svg" },
              { name: "Google Pay", icon: "google-pay.svg" },
            ],
          },
          { name: "Angular", icon: "angular.svg" },
          { name: "Android", icon: "android.svg" },
          { name: "Amazon Pay", icon: "amazon-pay.svg" },
          { name: "Apple", icon: "apple.svg" },
          { name: "Apple Pay", icon: "apple-pay.svg" },
          { name: "App Store", icon: "app-store.svg" },
          { name: "Autodesk", icon: "autodesk-.svg" },
          { name: "UC", icon: "uc.svg" },
          { name: "Yahoo", icon: "yahoo.svg" },
          { name: "Opera", icon: "opera.svg" },
          { name: "Safari", icon: "safari.svg" },
          { name: "iOS", icon: "ios.svg" },
          { name: "Figma", icon: "figma.svg" },
          { name: "Finder", icon: "finder.svg" },
          { name: "Go", icon: "go.svg" },
          { name: "Autres...", icon: null },
        ],
      },
      {
        name: "Médias et Communication",
        children: [
          { name: "Blogging et Vlogging", icon: "blogging.svg" },
          { name: "Consulting", icon: "consulting.svg" },
          { name: "Débat", icon: "debat.svg" },
          { name: "Cuisine", icon: "cuisine.svg" },
          { name: "Langues", icon: "langues.svg" },
          { name: "Magie", icon: "magic.svg" },
          { name: "Streaming", icon: "streaming.svg" },
          { name: "Autres...", icon: null },
        ],
      },
    ],
  },
];

// State for open/closed
const openState = {};

// Render the tree
function renderTree(container, nodes, path = "", level = 0) {
  nodes.forEach((node) => {
    const currentPath = path + node.name;
    const hasChildren = node.children && node.children.length > 0;

    const itemDiv = document.createElement("div");
    itemDiv.className = level === 0 ? "talent-category" : level === 1 ? "subcategory" : "talent-item";

    const headerDiv = document.createElement("div");
    if (level === 0) {
      headerDiv.className = "category-header";
    } else if (level === 1) {
      headerDiv.className = "subcategory-header";
    } else {
      headerDiv.className = "talent-item";
    }

    if (hasChildren) {
      const toggleSpan = document.createElement("span");
      toggleSpan.className = level === 0 ? "category-toggle" : "subcategory-toggle";
      toggleSpan.textContent = openState[currentPath] ? "▼" : "▶";
      headerDiv.appendChild(toggleSpan);

      headerDiv.addEventListener("click", () => {
        openState[currentPath] = !openState[currentPath];
        toggleSpan.textContent = openState[currentPath] ? "▼" : "▶";
        const childrenDiv = headerDiv.nextElementSibling;
        if (childrenDiv) {
          childrenDiv.classList.toggle("hidden");
        }
      });
    } else {
      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.className = "talent-checkbox";
      checkbox.name = "talent";
      checkbox.value = node.name;
      headerDiv.appendChild(checkbox);

      if (node.icon) {
        const iconImg = document.createElement("img");
        iconImg.src = `icons/${node.icon}`;
        iconImg.className = "talent-icon";
        headerDiv.appendChild(iconImg);
      }
    }

    const nameSpan = document.createElement("span");
    if (level === 0) {
      nameSpan.className = "category-name";
    } else if (level === 1) {
      nameSpan.className = "subcategory-name";
    } else {
      nameSpan.className = "talent-name";
    }
    nameSpan.textContent = node.name;
    headerDiv.appendChild(nameSpan);

    itemDiv.appendChild(headerDiv);

    if (hasChildren) {
      const childrenDiv = document.createElement("div");
      childrenDiv.className = openState[currentPath] ? "" : "hidden";
      renderTree(childrenDiv, node.children, currentPath, level + 1);
      itemDiv.appendChild(childrenDiv);
    }

    container.appendChild(itemDiv);
  });
}

// Initialize
document.addEventListener("DOMContentLoaded", () => {
  const treeContainer = document.getElementById("talent-tree");
  renderTree(treeContainer, categories);

  // Form submission
  document.getElementById("talent-form").addEventListener("submit", (e) => {
    e.preventDefault();
    const selected = Array.from(document.querySelectorAll('input[name="talent"]:checked')).map(cb => cb.value);
    localStorage.setItem("userTalents", JSON.stringify(selected));
    alert("Compte créé ! Redirection vers le profil...");
    window.location.href = "profile.html";
  });
});