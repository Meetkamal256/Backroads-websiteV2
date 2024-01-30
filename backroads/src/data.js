import tour1 from "./images/tour-1.jpeg";
import tour2 from "./images/tour-2.jpeg";
import tour3 from "./images/tour-3.jpeg";
import tour4 from "./images/tour-4.jpeg";

export const pageLinks = [
  { id: 1, href: "#home", text: "home" },
  { id: 2, href: "#about", text: "about" },
  { id: 3, href: "#services", text: "services" },
  { id: 4, href: "#tours", text: "tours" },
];

export const socialLinks = [
  { id: 1, href: "https://www.facebook.com", icon: "fab fa-facebook" },
  { id: 2, href: "https://www.twitter.com", icon: "fab fa-twitter" },
  { id: 3, href: "https://www.twitter.com", icon: "fab fa-squarespace" },
];

export const services = [
  {
    id: 1,
    icon: "fas fa-wallet fa-fw",
    title: "Saving Money",
    text: "  Affordable travel experiences tailored to your budget, ensuring you get the most value for your money.",
  },
  {
    id: 2,
    icon: "fas fa-tree fa-fw",
    title: "Endless Hiking",
    text: "Explore breathtaking trails and scenic landscapes with our diverse hiking options suitable for all skill levels.",
  },
  {
    id: 3,
    icon: "fas fa-socks fa-fw",
    title: "Saving Money",
    text: "  Experience comfort like never before with cozy lodgings, well-appointed rooms, and attentive service.",
  },
];

export const tours = [
  {
    id: 1,
    image: tour1,
    date: "August 26th, 2020",
    title: "Tibet Adventure",
    info: " Embark on a soul-stirring journey to the mystical land of Tibet.Traverse through breathtaking landscapes, ancient monasteries, and immerse yourself in the rich Tibetan culture. This 6-day adventure promises an unforgettable experience, blending spirituality with awe-inspiring natural beauty.",
    location: " china",
    duration: "6 days",
    price: "$2100",
  },
  {
    id: 2,
    image: tour2,
    date: "October 1st, 2020",
    title: "Best of Java",
    info: "Discover the enchanting beauty of Java, Indonesia's cultural heart. This 11-day tour takes you through ancient temples, lush landscapes, and vibrant markets. Immerse yourself in the rich Javanese traditions, savor local delicacies, and create lasting memories in this diverse and captivating destination.",
    location: "Indonesia",
    duration: "11 days",
    price: "$1400",
  },
  {
    id: 3,
    image: tour3,
    date: "November 15th, 2020",
    title: "Explore Hong Kong",
    info: " Uncover the magic of Hong Kong in 6 days. From dazzling city scapes to hidden gems, this tour encapsulates the essence of Hong Kong's diverse attractions. Immerse yourself in local culture, indulge in delectable cuisine, and create lasting memories.",
    location: " china",
    duration: "8 days",
    price: "$5000",
  },
  {
    id: 4,
    image: tour4,
    date: "December 31st 2020",
    title: "Kenya Highlights",
    info: "   Embark on a mesmerizing journey through the heart of Kenya. This 6-day tour is designed to showcase the breathtaking landscapes, diverse wildlife, and rich cultural heritage of this East African gem. Witness the Great Migration, explore national parks, and engage with local communities for an unforgettable safari experience.",
    location: "Kenya",
    duration: "20 days",
    price: "$3500",
  },
];
