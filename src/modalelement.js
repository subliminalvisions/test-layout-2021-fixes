// modal script 
export default () => {
      let testInfo = `
      <div class="modal-dialog">
      <header class="modal-header">
        <button class="close-modal" aria-label="close modal" data-close>
          ✕  
        </button>
      </header>
      <section class="modal-content">
        <h3 class="modal-title">Member Login</h3>
        <form>
            <input type="text" name="email" placeholder="EMAIL">
            <input type="text" name="password" placeholder="PASSWORD" >
            <p class="text-center options"><a href="#" c>FORGOT YOUR PASSWORD?</a>
            </p>
        </form>
      </section>

      <footer class="modal-footer">
      <button class="close-modal btn secondary" data-register >
          REGISTER 
      </button>
      <button class="close-modal btn primary " data-signin >
          SIGN IN  
      </button>
      </footer>
      </div>
    `;

    const isVisible = "is-visible";
      const element = document.createElement("div");
      element.id = "modal1";
      element.classList.add("modal");
      // element.classList.add("is-visible");
      element.setAttribute("data-animation", "slideInOutDown");
  
      element.innerHTML = testInfo;
      const closeEls = element.querySelectorAll("[data-close]");
      for (const el of closeEls) {
        el.addEventListener("click", function() {
          this.parentElement.parentElement.parentElement.classList.remove(isVisible);
        });
      }
      return element;
    };
    
  