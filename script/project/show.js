export const showProject = ((project) => (
  `<div class="col">
      <div
        class="card card-cover h-100 overflow-hidden text-white bg-dark rounded-5 shadow-lg"
        style="
          background-image: url('./img/1c39c81fccba10c48869ce903c533845.png');
          background-size: 100% 100%;
          background-repeat: no-repeat;
        "
      >
        <div
          class="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1"
        >
          <h2 class="pt-5 mt-5 mb-4 lh-1 fw-bold">Telegram Bot</h2>
          <ul
            class="d-flex justify-content-between align-items-center list-unstyled mt-auto"
          >
            <li class="d-flex">
              <div class="d-flex align-items-center me-2">
                <img
                  class="dev-icon me-2"
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ruby/ruby-plain.svg"
                  alt=""
                />
                <small>Ruby</small>
              </div>
            </li>
            <li class="d-flex align-items-center">
              <!-- Button -->
              <button
                type="button"
                class="btn text-white"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal2"
              >
                <i class="bi bi-arrows-fullscreen"></i>
              </button>

              <!-- Modal -->
              <div
                class="modal fade text-dark"
                id="exampleModal2"
                tabindex="-1"
                aria-labelledby="exampleModal2"
                aria-hidden="true"
              >
                <div class="modal-dialog">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5
                        class="modal-title text-dark"
                        id="“exampleModalLabel"
                      >
                        Telegram Bot Paddy
                      </h5>
                      <button
                        type="button"
                        class="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div class="modal-body">
                      <img class="w-100" src=${project.modal[0].photo} alt="" />
                      <p>${project.modal[0].description}</>
                    </div>
                    <div class="modal-footer">
                      <a
                        href="${project.modal[0].githubUrl}"
                        class="btn btn-primary"
                        >Github</a
                      >
                    </div>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>`
));

export default showProject;
