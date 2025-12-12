// Sample users data
const sampleUsers = [
  {
    name: "Alice Dupont",
    username: "@alice_d",
    avatar: "AD",
    talents: ["Music", "Art visuel", "Dance", "Écriture", "CSS", "JavaScript", "React", "Python"],
    social: ["facebook.svg", "twitter.svg", "behance.svg"],
    mostLikedContent: "Clip de danse urbaine - 1.2k likes"
  },
  {
    name: "Marc Leroy",
    username: "@marc_l",
    avatar: "ML",
    talents: ["Football", "Basketball", "Gaming", "EpicGames", "Minecraft", "Xbox", "Steam", "PlayStation"],
    social: ["x.svg", "youtube.svg", "twitch.svg"],
    mostLikedContent: "Gameplay Fortnite - 3.5k likes"
  },
  {
    name: "Sophie Martin",
    username: "@sophie_m",
    avatar: "SM",
    talents: ["Physique", "Math", "IA", "Python", "C++", "Docker", "Linux", "VSCode"],
    social: ["linkedin.svg", "github.svg", "behance.svg"],
    mostLikedContent: "Tutoriel IA Python - 890 likes"
  },
  {
    name: "Jean Paul",
    username: "@jean_p",
    avatar: "JP",
    talents: ["Entrepreneur", "Marketing", "Finance", "Adobe Photoshop", "Illustrator", "Figma", "Angular", "React"],
    social: ["facebook.svg", "linkedin.svg", "behance.svg"],
    mostLikedContent: "Design UI/UX app mobile - 2.1k likes"
  },
  {
    name: "Emma Bernard",
    username: "@emma_b",
    avatar: "EB",
    talents: ["Blogging et Vlogging", "Cuisine", "Langues", "Streaming", "Adobe Premiere", "After Effects", "YouTube", "TikTok"],
    social: ["youtube.svg", "tiktok.svg", "facebook.svg"],
    mostLikedContent: "Recette cuisine healthy - 4.7k likes"
  },
  {
    name: "Lucas Moreau",
    username: "@lucas_m",
    avatar: "LM",
    talents: ["Robotique", "Ingénieur", "C#", "Unity", "Blender", "3D Modeling", "Game Dev", "AI"],
    social: ["github.svg", "twitch.svg", "discord.svg"],
    mostLikedContent: "Robot Arduino DIY - 1.8k likes"
  },
  {
    name: "Chloé Petit",
    username: "@chloe_p",
    avatar: "CP",
    talents: ["Théatre", "Dance", "Musique", "Écriture", "Adobe Illustrator", "Photoshop", "Canva", "Design"],
    social: ["facebook.svg", "behance.svg", "linkedin.svg"],
    mostLikedContent: "Illustration fantasy - 2.9k likes"
  },
  {
    name: "Antoine Roux",
    username: "@antoine_r",
    avatar: "AR",
    talents: ["Bitcoin", "Ethereum", "Finance", "Trading", "Blockchain", "Crypto", "Investissement", "Entrepreneur"],
    social: ["twitter.svg", "reddit.svg", "telegram.svg"],
    mostLikedContent: "Analyse crypto marché - 5.2k likes"
  },
  {
    name: "Marie Dubois",
    username: "@marie_d",
    avatar: "MD",
    talents: ["Médecine", "Sciences", "Recherche", "Biologie", "Chimie", "Lab Work", "Data Analysis", "Python"],
    social: ["linkedin.svg", "github.svg", "reddit.svg"],
    mostLikedContent: "Étude recherche médicale - 1.5k likes"
  },
  {
    name: "Pierre Garnier",
    username: "@pierre_g",
    avatar: "PG",
    talents: ["Surf", "Fitness", "Football", "Tennis", "Sports Coaching", "Nutrition", "Wellness", "Motivation"],
    social: ["facebook.svg", "youtube.svg", "reddit.svg"],
    mostLikedContent: "Session surf Hawaii - 3.8k likes"
  }
];

// Function to create a talent card
function createTalentCard(user) {
  const card = document.createElement("div");
  card.className = "talent-card";

  // Avatar
  const avatar = document.createElement("div");
  avatar.className = "avatar";
  avatar.style.width = "80px";
  avatar.style.height = "80px";
  avatar.style.borderRadius = "50%";
  avatar.style.background = "linear-gradient(135deg, var(--accent), #ff8a50)";
  avatar.style.display = "flex";
  avatar.style.alignItems = "center";
  avatar.style.justifyContent = "center";
  avatar.style.color = "white";
  avatar.style.fontWeight = "700";
  avatar.style.fontSize = "24px";
  avatar.style.margin = "0 auto 10px";
  avatar.textContent = user.avatar;
  card.appendChild(avatar);

  // Name
  const name = document.createElement("div");
  name.className = "talent-name";
  name.textContent = user.name;
  card.appendChild(name);

  // Username
  const username = document.createElement("div");
  username.className = "talent-type";
  username.textContent = user.username;
  card.appendChild(username);

  // Badges (show first 4 or more)
  const badgesContainer = document.createElement("div");
  badgesContainer.style.display = "flex";
  badgesContainer.style.flexWrap = "wrap";
  badgesContainer.style.gap = "4px";
  badgesContainer.style.marginTop = "8px";

  user.talents.slice(0, 6).forEach(talent => {  // Show up to 6 badges
    const badge = document.createElement("span");
    badge.className = "badge";
    badge.textContent = talent;
    badgesContainer.appendChild(badge);
  });
  card.appendChild(badgesContainer);

  // Most liked content
  const mostLiked = document.createElement("div");
  mostLiked.className = "most-liked";
  mostLiked.style.fontSize = "12px";
  mostLiked.style.color = "var(--muted)";
  mostLiked.style.marginTop = "8px";
  mostLiked.textContent = `⭐ ${user.mostLikedContent}`;
  card.appendChild(mostLiked);

  // Social icons
  const socialRow = document.createElement("div");
  socialRow.className = "social-row";
  user.social.forEach(icon => {
    const img = document.createElement("img");
    img.src = `icons/reseaux/${icon}`;
    img.alt = icon.split('.')[0];
    socialRow.appendChild(img);
  });
  card.appendChild(socialRow);

  // View button
   const viewBtn = document.createElement("button");
   viewBtn.className = "view-btn";
   viewBtn.textContent = "Voir Profil";
   viewBtn.onclick = () => {
     // Navigate to profile page
     window.location.href = "profile.html";
   };
  card.appendChild(viewBtn);

  return card;
}

// Initialize
document.addEventListener("DOMContentLoaded", () => {
  const grid = document.getElementById("discover-grid");
  sampleUsers.forEach(user => {
    const card = createTalentCard(user);
    grid.appendChild(card);
  });
});