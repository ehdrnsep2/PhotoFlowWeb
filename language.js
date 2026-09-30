(function () {
  const preferenceKey = "photoflow-language";
  const current = document.documentElement.lang.toLowerCase().startsWith("ko") ? "ko" : "en";
  const preferred = (navigator.languages || [navigator.language || "en"])
    .map((value) => String(value).toLowerCase())
    .some((value) => value.startsWith("ko")) ? "ko" : "en";
  const path = window.location.pathname;
  const page = path.endsWith("privacy.html") || path.endsWith("privacy-ko.html")
    ? "privacy" : path.endsWith("terms.html") || path.endsWith("terms-ko.html") ? "terms" : "index";
  const saved = window.localStorage.getItem(preferenceKey);

  document.querySelectorAll(".language-switch a").forEach((link) => {
    link.addEventListener("click", () => {
      window.localStorage.setItem(preferenceKey, link.href.includes("-ko.html") ? "ko" : "en");
    });
  });

  if (saved !== "ko" && saved !== "en") {
    const target = preferred === "ko" ? `${page}-ko.html` : `${page}.html`;
    if (current !== preferred) window.location.replace(target);
  }
})();
