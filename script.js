const body = document.body;
const header = document.querySelector("[data-header]");
const pageWipe = document.querySelector(".page-wipe");
const menuToggle = document.querySelector("[data-menu-toggle]");
const mobileMenu = document.querySelector("[data-mobile-menu]");
const bookingDialog = document.querySelector("[data-booking-dialog]");
const bookingForm = document.querySelector("[data-booking-form]");
const formMessage = document.querySelector("[data-form-message]");

const setMenuState = (open) => {
  menuToggle.setAttribute("aria-expanded", String(open));
    menuToggle.setAttribute("aria-label", open ? "\u0417\u0430\u043a\u0440\u0438\u0442\u0438 \u043c\u0435\u043d\u044e" : "\u0412\u0456\u0434\u043a\u0440\u0438\u0442\u0438 \u043c\u0435\u043d\u044e");
      mobileMenu.setAttribute("aria-hidden", String(!open));
        mobileMenu.classList.toggle("is-open", open);
          body.classList.toggle("menu-open", open);
          };

          menuToggle.addEventListener("click", () => {
            setMenuState(menuToggle.getAttribute("aria-expanded") !== "true");
            });

            mobileMenu.querySelectorAll("a").forEach((link) => {
              link.addEventListener("click", () => setMenuState(false));
              });

              window.addEventListener(
                "scroll",
                  () => {
                      header.classList.toggle("is-scrolled", window.scrollY > 36);
                        },
                          { passive: true },
                          );

                          const revealObserver = new IntersectionObserver(
                            (entries) => {
                                entries.forEach((entry) => {
                                      if (entry.isIntersecting) {
                                              entry.target.classList.add("is-visible");
                                                      revealObserver.unobserve(entry.target);
                                                            }
                                                                });
                                                                  },
                                                                    { threshold: 0.12, rootMargin: "0px 0px -7% 0px" },
                                                                    );

                                                                    document.querySelectorAll(".reveal").forEach((element) => {
                                                                      revealObserver.observe(element);
                                                                      });

                                                                      document.querySelectorAll("[data-menu-tab]").forEach((tab) => {
                                                                        tab.addEventListener("click", () => {
                                                                            const panelName = tab.dataset.menuTab;

                                                                                document.querySelectorAll("[data-menu-tab]").forEach((item) => {
                                                                                      const active = item === tab;
                                                                                            item.classList.toggle("is-active", active);
                                                                                                  item.setAttribute("aria-selected", String(active));
                                                                                                      });
                                                                                                      
                                                                                                          document.querySelectorAll("[data-menu-panel]").forEach((panel) => {
                                                                                                                const active = panel.dataset.menuPanel === panelName;
                                                                                                                      panel.hidden = !active;
                                                                                                                            panel.classList.toggle("is-active", active);
                                                                                                                                });
                                                                                                                                  });
                                                                                                                                  });
                                                                                                                                  
                                                                                                                                  const openBooking = () => {
                                                                                                                                    if (typeof bookingDialog.showModal === "function") {
                                                                                                                                        bookingDialog.showModal();
                                                                                                                                          } else {
                                                                                                                                              bookingDialog.setAttribute("open", "");
                                                                                                                                                }
                                                                                                                                                  body.classList.add("dialog-open");
                                                                                                                                                    formMessage.textContent = "";
                                                                                                                                                    };
                                                                                                                                                    
                                                                                                                                                    const closeBooking = () => {
                                                                                                                                                      bookingDialog.close();
                                                                                                                                                        body.classList.remove("dialog-open");
                                                                                                                                                        };
                                                                                                                                                        
                                                                                                                                                        document.querySelectorAll("[data-open-booking]").forEach((button) => {
                                                                                                                                                          button.addEventListener("click", openBooking);
                                                                                                                                                          });
                                                                                                                                                          
                                                                                                                                                          document
                                                                                                                                                            .querySelector("[data-close-booking]")
                                                                                                                                                              .addEventListener("click", closeBooking);
                                                                                                                                                              
                                                                                                                                                              bookingDialog.addEventListener("click", (event) => {
                                                                                                                                                                if (event.target === bookingDialog) {
                                                                                                                                                                    closeBooking();
                                                                                                                                                                      }
                                                                                                                                                                      });
                                                                                                                                                                      
                                                                                                                                                                      bookingDialog.addEventListener("cancel", () => {
                                                                                                                                                                        body.classList.remove("dialog-open");
                                                                                                                                                                        });
                                                                                                                                                                        
                                                                                                                                                                        bookingForm.addEventListener("submit", (event) => {
                                                                                                                                                                          event.preventDefault();
                                                                                                                                                                            const name = new FormData(bookingForm).get("name").trim();
                                                                                                                                                                              formMessage.textContent = `${name || "\u0413\u043e\u0441\u0442\u044e"}, \u0446\u0435 \u0434\u0435\u043c\u043e\u043d\u0441\u0442\u0440\u0430\u0446\u0456\u044f: \u0437\u0430\u043f\u0438\u0442 \u043d\u0456\u043a\u0443\u0434\u0438 \u043d\u0435 \u043d\u0430\u0434\u0456\u0441\u043b\u0430\u043d\u043e.`;
                                                                                                                                                                                bookingForm.reset();
                                                                                                                                                                                });
                                                                                                                                                                                
                                                                                                                                                                                window.addEventListener("load", () => {
                                                                                                                                                                                  body.classList.add("is-loaded");
                                                                                                                                                                                    window.setTimeout(() => pageWipe.classList.add("is-hidden"), 250);
                                                                                                                                                                                    });
                                                                                                                                                                                    
