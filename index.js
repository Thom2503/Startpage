messageDivId = "hello";
messageId = "hellotext";

window.onload = function() {
  this.initSearchBar()
}

function initSearchBar() {
  document.getElementById("search-bar-input").value = ""
  document.getElementById("search-bar-input").focus()

  document.getElementById("search-bar-input").addEventListener("keypress", (event) => {
    if (event.key != 'Enter') return

    SearchUrl = "https://duckduckgo.com/?q="
    query = document.getElementById("search-bar-input").value.replace(/\ /g, "+")
    document.location = SearchUrl + query
  })
}

//for some reason this code doesn't work and I don't know how :(
function greeting() {
  t = new Date();
  hour = t.getHours();
  minute = t.getMinutes();

  currentTime = hour + (0.01 * minute);
  if (inRange(currentTime, 0, 2.59))
    return "おやすみなさい!";
  if (inRange(currentTime, 3, 8.59))
    return "おはよう!";
  if (inRange(currentTime, 9, 11.59))
    return "こんにちは!";
  if (inRange(currentTime, 12, 16.59))
    return "こんにちは!";
  if (inRange(currentTime, 17, 19.59))
    return "こんばんは!";
  if (inRange(currentTime, 20, 22.59))
    return "こんばんは!";
  if (inRange(currentTime, 23, 23.59))
    return "おやすみなさい!";
  else
    return "";
}

function inRange(number, min, max) {
  return (number >= min && number <= max);
}

function displayMSG() {
  msg = greeting();
  msg = `${msg}`;
  document.getElementById(messageId).texContent = msg;
}
displayMSG();
