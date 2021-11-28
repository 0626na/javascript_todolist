const quotesArray = [
  {
    quote: "포기하면 그 순간이 바로 시합 종료에요",
    author: "슬램덩크",
  },
  {
    quote: "마음만을 가지고 있어서는 안된다. 반드시 실천하여야 한다.",
    author: "이소룡",
  },
  {
    quote:
      "흔히 사람들은 기회를 기다리고 있지만 기회는 기다리는 사람에게 잡히지 않는 법이다. 우리는 기회를 기다리는 사람이 되기 전에 기회를 얻을 수 있는 실력을 갖춰야 한다. 일에 더 열중하는 사람이 되어야한다.",
    author: "도산 안창호",
  },
  {
    quote: "당신이 할수 있다고 믿든 할수 없다고 믿든 믿는 대로 될것이다.",
    author: "헨리 포드",
  },
  {
    quote:
      "노력하면 어떻게든 된다는 보증은 없지만, 노력하지 않으면 아무것도 안된다는 것은 보증할수 있습니다.",
    author: "빙과",
  },
  {
    quote: "재능은 꽃 피우는 것, 센스는 갈고닦는 것",
    author: "하이큐",
  },
];

const quotesContainer = document.querySelector(".quotes");
const quote = quotesContainer.querySelector("span:first-child");
const author = quotesContainer.querySelector("span:last-child");

const todayQuote = quotesArray[Math.floor(Math.random() * quotesArray.length)];

quote.innerText = todayQuote.quote;
author.innerText = todayQuote.author;
