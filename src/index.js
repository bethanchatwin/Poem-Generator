function displayPoem(response) {
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    cursor: null,
    delay: 80,
  });
}
function generatePoem(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "0083118ae860436btf146b9cbfb3oc7f";
  let context =
    "you are a poetic Christian in religion. your response should be a religious poem based on the christian teachings. please keep your response fairly short";
  let prompt = `User instructions: Generate a Christian poem about ${instructionsInput.value}`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let poemElement = document.querySelector("#poem");
  poemElement.classList.remove("hidden");
  poemElement.innerHTML = `<div class="generating">Generating a poem about ${instructionsInput.value} <div class="heart">🖤</div>`;

  axios.get(apiUrl).then(displayPoem);
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
