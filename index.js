function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector("#nested .target");
}

function increaseRankBy(n) {
  let rankedListData = document.querySelectorAll("ul.ranked-list li");
  
  for (let i = 0; i < rankedListData.length; i++) {
    rankedListData[i].innerHTML = parseInt(rankedListData[i].innerHTML) + n;
  }
}

function deepestChild() {
  let currentNode = "#grand-node";
  let query = (node) => { return document.querySelector(node) };
  let currentQuery = query(currentNode);
  let deepestChild = false;
  
  while(currentQuery.innerHTML == "boo!") {
    currentQuery = query(currentNode);
    currentNode = `${currentNode} div`;
  }
  return query(currentNode);
}