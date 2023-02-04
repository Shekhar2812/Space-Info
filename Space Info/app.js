let menu = document.querySelector("#menu-btn");
let navbar = document.querySelector(".navbar");
console.log(navbar);

menu.onclick = () => {
  menu.classList.toggle("fa-times");
  navbar.classList.toggle("active");
};

window.onscroll = () => {
  menu.classList.remove("fa-times");
  navbar.classList.remove("active");
};

const reviews = [
  {
    id: 1,
    name: "1969: Apollo 11 - First Man on the Moon",
    job: "Nasa",
    img: "mission/1.jpg",
    text: "Four days after launching from Cape Kennedy in Florida, Neil Armstrong took “one small step for a man, one giant leap for mankind” on July 20, 1969, and became the first human to walk on the moon as part of the Apollo 11 mission. Less than 20 minutes later, Buzz Aldrin, who piloted the lunar module, joined his commander. The two explored the moon on foot for three hours while conducting experiments and collecting samples. After rejoining fellow astronaut Michael Collins, who also made the voyage, Armstrong and Aldrin returned to Earth on July 24.",
  },
  {
    id: 2,
    name: "1970: Apollo 13 - A Daring Rescue",
    job: "Nasa",
    img: " mission/2.jpg",
    text: "Apollo 13 launched without incident on April 11, 1970, but just 56 hours into the mission, things took a turn. Minutes after a live television broadcast in which Jim Lovell, Jack Swigert, and Fred Haise communicated with people back home, an explosion within the craft made it clear that the crew would not be exploring the Fra Mauro area on the moon, as was initially planned. Due to malfunctioning oxygen tanks, both the crew and everyone in ground control had to come up with numerous on-the-fly fixes to combat lack of power, heat, water, and excess carbon monoxide to get everyone back to Earth safely. Despite the odds, on April 17, they did.",
  },
  {
    id: 3,
    name: "1996: Mars Pathfinder - First Rover on Mars",
    job: "Nasa",
    img: "mission/3.jpg",
    text: "After departing Earth on December 4, 1996, Mars Pathfinder didn’t reach its namesake until July 4, 1997. When the 23-pound Sojourner rover reached Mars, becoming the first to ever reach another planet, it explored the Ares Vallis area of the red planet and analyzed its atmosphere, climate, and geology. There were concerns about how to land safely on Mars, but a creative approach that surrounded the rover in airbags was successful. The mission collected evidence suggesting that Mars once had flowing water and that the atmosphere is heated by the planet’s surface. Sojourner made its final transmission in September 1997, but by then it was already considered a great success.",
  },
  {
    id: 4,
    name: "2015:Falcon 9 Lands Safely",
    job: "Space X",
    img: "mission/4.jpeg",
    text: "In December 2015, SpaceX successfully landed its Falcon 9 first stage back on Earth. The landing launched a new era in spaceflight, one that made the goal of reaching orbit a cheaper, sustainable effort accessible to the masses. Looking back, it’s incredible to see how far the industry has come. On March 14, 2021, SpaceX launched a Falcon 9 first stage for the ninth time, setting a record that would have seemed inconceivable decades ago. The company just surpassed Boeing in NASA funding, with $2.04 billion in fiscal year 2022 and is expected to lead crew flights in the coming year.",
  },

  {
    id: 5,
    name: "2021:James Webb Space Telescope",
    job: "Nasa",
    img: "mission/5.jpeg",
    text: "Launched to a gravitationally stable point between the Earth and Sun on Christmas Day 2021, the James Webb Space Telescope represents a turning point in our view of the cosmos. On July 12, 2022, Webb’s near-infrared and mid-infrared instruments revealed the first clear glimpses of thousands of galaxies in an unprecedented deep-field view. Webb’s far vision can reveal more than we ever knew about star and galaxy formation, as well as the composition of exoplanets. The oldest galaxy we’ve ever identified—forming only 235 million years after the Big Bang—emerged from Webb’s sight. CEERS-93316 is an astounding 35 billion light-years away. Webb was built to last up to ten years, but the precise alignment of its mirrors and other apparatus means it may keep providing data and spectacular images of celestial phenomena for longer.",
  },
];
// select items

const img = document.getElementById("person-img");
const mission = document.getElementById("mission");
const agency = document.getElementById("agency");
const info = document.getElementById("info");
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
let currentItem = 0;

// load intial item

window.addEventListener("DOMContentLoaded", function () {
  //   console.log("shake and bake");
  showPerson();
});

function showPerson() {
  const item = reviews[currentItem];
  img.src = item.img;
  mission.textContent = item.name;
  agency.textContent = item.job;
  info.textContent = item.text;
}
// show next person

nextBtn.addEventListener("click", function () {
  currentItem++;
  if (currentItem > reviews.length - 1) {
    currentItem = 0;
  }
  showPerson();
});

// show prev person
prevBtn.addEventListener("click", function () {
  currentItem--;
  if (currentItem < 0) {
    currentItem = reviews.length - 1;
  }
  showPerson();
});

function readMore(agency) {
  let dots = document.querySelector(
    `.service-box[data-info="${agency}"] .dots`
  );
  let moreText = document.querySelector(
    `.service-box[data-info="${agency}"] .more`
  );
  let btnText = document.querySelector(
    `.service-box[data-info="${agency}"] .myBtn`
  );

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.textContent = "Read more";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.textContent = "Read less";
    moreText.style.display = "inline";
  }
}
