//==================ARTICLES pictures
import Facebook from "../Assets/fb.png";
import Twitter from "../Assets/tw.png";
import Instagram from "../Assets/insta.png";
import Linkedin from "../Assets/in.png"

export const footerLinks = [
  {
    title: "Pages",
    subLinks: [
      { title: "About Us", url: "/page" },
      { title: "Our Projects", url: "/project" },
       { title: "Our Team", url: "/teams" },
      { title: "Contact", url: "/contact" },
       { title: "Service", url: "/services" },
    ],
  },

  {
    title: "Services",
    subLinks: [
      { title: "Kitchan", url:"/" },
      { title: "Living Area",  url:"/" },
      { title: "Bathroom", url:"/" },
      { title: "Dinning Hall", url:"/" },
      { title: "Bedroom", url:"/" },
    ],
  },
  {
    title: "Contact",
    subLinks: [
      { title: "55 East Birchwood Ave. Brooklyn,\r New York 11201",
      url:""},

      { title: "contact@interno.com", url: "mailto:interno.com" },
       {title: "(123) 456 - 7890", url: "tel:+2347046009964" }
    ],
  },

];

export const social = [
      {
        img: Facebook,
        url: "https://www.facebook.com/",
      },
      {
        img: Twitter,
        url: "https://www.twitter.com",
      },
      { img: Linkedin, url: "https://www.linkedin.com/" },
      {
        img: Instagram,
        url: "https://instagram.com/",
      },
    ];
