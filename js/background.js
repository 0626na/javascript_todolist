const imgArray = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg"];
const todayBg = imgArray[Math.floor(Math.random() * imgArray.length)];
const bgImg = `img/${todayBg}`;

document.body.style.backgroundImage = `url(${bgImg})`;
