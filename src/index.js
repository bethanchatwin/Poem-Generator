function showAnswer(response) {
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    cursor: null,
    delay: 20,
  });
}
function displayPoem(event) {
  event.preventDefault();
  let apiKey = "0083118ae860436btf146b9cbfb3oc7f";
  let context = "you are a poetic romantic. please keep our response short";
  let prompt = "read me a poem";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;
  let poemElement = document.querySelector("#poem");
  poemElement.innerHTML = "Generating a poem for you ... please wait.";
  axios.get(apiUrl).then(showAnswer);
}
let poemButton = document.querySelector("#button");
poemButton.addEventListener("click", displayPoem);
