(function () {
  var STORAGE_KEY = "guide-sidebar-collapsed";
  var MENU_ICON =
    '<svg viewBox="0 0 24 24"><path d="M4 4h16a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1zm5 2H5v12h4V6zm2 0v12h9V6h-9z"/></svg>';

  function applyState(collapsed) {
    document.body.classList.toggle("sidebar-collapsed", collapsed);
  }

  function isCollapsed() {
    try {
      return localStorage.getItem(STORAGE_KEY) === "true";
    } catch (e) {
      return false;
    }
  }

  function setCollapsed(collapsed) {
    try {
      localStorage.setItem(STORAGE_KEY, collapsed ? "true" : "false");
    } catch (e) {
      /* localStorage unavailable, state just won't persist across pages */
    }
    applyState(collapsed);
  }

  function insertToggleButton() {
    if (document.querySelector(".sidebar-toggle-btn")) return;

    var header = document.querySelector(".md-header__inner");
    if (!header) return;

    var button = document.createElement("button");
    button.type = "button";
    button.className = "sidebar-toggle-btn";
    button.setAttribute("aria-label", "Toggle navigation sidebar");
    button.title = "Toggle navigation sidebar";
    button.innerHTML = MENU_ICON;

    button.addEventListener("click", function () {
      setCollapsed(!document.body.classList.contains("sidebar-collapsed"));
    });

    header.insertAdjacentElement("afterbegin", button);
  }

  applyState(isCollapsed());

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", insertToggleButton);
  } else {
    insertToggleButton();
  }

  if (typeof document$ !== "undefined" && document$.subscribe) {
    document$.subscribe(function () {
      insertToggleButton();
      applyState(isCollapsed());
    });
  }
})();
