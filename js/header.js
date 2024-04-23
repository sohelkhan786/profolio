if (document.getElementById("header")) {
  document.getElementById(
    "header"
  ).innerHTML = `   <nav class="navbar navbar-expand-md py-0 bg-black">
        <div class="container">
          <a class="navbar-brand py-3" href="index.html"
            ><img src="images/SOHEL LOGO.svg" class="img-fluid" alt="logo" />
          </a>
          <button
            class="navbar-toggler bg-light"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div
            class="collapse navbar-collapse column-gap-5"
            id="navbarSupportedContent"
          >
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0 column-gap-4">
              <li class="nav-item">
                <a
                  class="nav-link fs-6 fw-semibold navigation text-white"
                  href="index.html"
                  >Home</a
                >
              </li>
              <li class="nav-item">
                <a
                  class="nav-link fs-6 fw-semibold navigation text-white"
                  href="#"
                  >About us</a
                >
              </li>
              <li class="nav-item">
                <a
                  class="nav-link fs-6 fw-semibold navigation text-white"
                  href="https://wa.me/9079828177"
                >
                  contact us
                </a>
              </li>
            </ul>
            <div>
              <a
                href="resume.html"
                class="btn text-white bg-black btn-fill border-2 border-solid rounded-3 cust-btn"
                >Resume</a
              >
            </div>
          </div>
        </div>
      </nav>`;
}
