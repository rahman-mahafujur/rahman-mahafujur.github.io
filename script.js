(function () {
  const d = SITE_DATA;

  // ---- Hero ----
  document.getElementById("hero-kicker").textContent = d.person.role;
  document.getElementById("hero-name").textContent = d.person.name;
  document.getElementById("hero-tagline").textContent = d.person.tagline;
  document.getElementById("hero-bio").textContent = d.person.bio;
  document.getElementById("hero-photo").src = d.person.photo;
  document.getElementById("hero-photo").alt = d.person.name;
  document.getElementById("hero-location").textContent = d.person.location;
  document.getElementById("footer-name").textContent = "© " + new Date().getFullYear() + " " + d.person.name;

  const heroLinks = document.getElementById("hero-links");
  const linkDefs = [
    ["Email", "mailto:" + d.contact.email],
    ["ORCID", d.contact.orcidUrl],
    ["Google Scholar", d.contact.scholar],
    ["ResearchGate", d.contact.researchgate],
    ["LinkedIn", d.contact.linkedin]
  ];
  linkDefs.forEach(([label, url]) => {
    if (!url) return;
    const a = document.createElement("a");
    a.href = url;
    a.textContent = label;
    if (!url.startsWith("mailto:")) { a.target = "_blank"; a.rel = "noopener"; }
    heroLinks.appendChild(a);
  });

  // ---- Focus tags ----
  const tagList = document.getElementById("focus-tags");
  d.focusAreas.forEach(tag => {
    const li = document.createElement("li");
    li.textContent = tag;
    tagList.appendChild(li);
  });

  // ---- Now / current work ----
  const nowList = document.getElementById("now-list");
  d.currentWork.forEach(item => {
    const row = document.createElement("div");
    row.className = "now__item";
    row.innerHTML = `
      <div class="now__status"><span class="status-pill" data-status="${item.status}">${item.status}</span></div>
      <div class="now__body">
        <h3>${item.title}</h3>
        <p>${item.description}</p>
      </div>
    `;
    nowList.appendChild(row);
  });

  // ---- Publications ----
  const pubList = document.getElementById("pub-list");
  d.publications.forEach(pub => {
    const item = document.createElement("div");
    item.className = "pub-item";
    item.innerHTML = `
      <div class="pub-item__meta"><span>${pub.tag}</span><span class="dot">·</span><span>${pub.year}</span></div>
      <h3>${pub.title}</h3>
      <p>${pub.authorNote}</p>
    `;
    pubList.appendChild(item);
  });

  // ---- Education ----
  const eduList = document.getElementById("edu-list");
  d.education.forEach(e => {
    const li = document.createElement("li");
    li.innerHTML = `
      <div class="degree">${e.degree}</div>
      <div class="inst">${e.institution}</div>
      <div class="note">${e.note}</div>
    `;
    eduList.appendChild(li);
  });

  // ---- Goal ----
  document.getElementById("goal-headline").textContent = d.goals.headline;
  document.getElementById("goal-text").textContent = d.goals.text;

  // ---- Contact ----
  const emailEl = document.getElementById("contact-email");
  emailEl.href = "mailto:" + d.contact.email;
  emailEl.textContent = d.contact.email;

  const contactRow = document.getElementById("contact-row");
  linkDefs.slice(1).forEach(([label, url]) => {
    if (!url) return;
    const a = document.createElement("a");
    a.href = url;
    a.textContent = label;
    a.target = "_blank";
    a.rel = "noopener";
    contactRow.appendChild(a);
  });
})();
