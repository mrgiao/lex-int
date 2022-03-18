class AppMain {
  constructor() {
    this.initGlobalJqueryEvents();
  }

  private initGlobalJqueryEvents = (): void => {
    const menuTogglers = document.getElementsByClassName("js-nav-main-toggle");

    if (menuTogglers)
      for (let i = 0; i < menuTogglers.length; i++) {
        menuTogglers[i].addEventListener("click", () => {
          {
            const c = document.getElementsByClassName("is-nav-main-active")
              .length;
            if (c === 0) {
              document
                .getElementById("body")
                ?.classList.add("is-nav-main-active");
            } else {
              document
                .getElementById("body")
                ?.classList.remove("is-nav-main-active");
            }
          }
        });
      }
  };
}

// @ts-ignore
const app = new AppMain();
