const { createApp } = Vue;

const app = createApp({
  // returns data used
  data() {
    return {
      // stores which page is currently being displayed
      // the website starts on the homepage
      currentPage: "home",

      // stores ids of leesons added to the shopping cart
      // each id represents one space purchased
      cart: [],

      // stores the ten after-school lessons
      lessons: [
        {
          id: 1,
          subject: "Mathematics",
          location: "Edmonton Green",
          price: 25,
          spaces: 5,
          image: "images/mathematics.jpg",
        },

        {
          id: 2,
          subject: "English",
          location: "Enfield Town",
          price: 10,
          spaces: 5,
          image: "images/english.jpg",
        },

        {
          id: 3,
          subject: "Science",
          location: "Waltham Cross",
          price: 25,
          spaces: 5,
          image: "images/science.jpg",
        },

        {
          id: 4,
          subject: "ICT",
          location: "Hertfordshire",
          price: 25,
          spaces: 5,
          image: "images/ict.jpg",
        },

        {
          id: 5,
          subject: "PE",
          location: "Cheshunt",
          price: 10,
          spaces: 5,
          image: "images/pe.jpg",
        },

        {
          id: 6,
          subject: "Drama",
          location: "Edmonton Green",
          price: 10,
          spaces: 5,
          image: "images/drama.jpg",
        },

        {
          id: 7,
          subject: "French",
          location: "Enfield Town",
          price: 10,
          spaces: 5,
          image: "images/french.jpg",
        },

        {
          id: 8,
          subject: "British Sign Language",
          location: "Waltham Cross",
          price: 10,
          spaces: 5,
          image: "images/bsl.jpg",
        },

        {
          id: 9,
          subject: "Art",
          location: "Hertfordshire",
          price: 10,
          spaces: 5,
          image: "images/art.jpg",
        },

        {
          id: 10,
          subject: "Food Tech",
          location: "Cheshunt",
          price: 15,
          spaces: 5,
          image: "images/food.jpg",
        },
      ],
    };
  },

  methods: {
    // changes the page displayed by the application
    // page is the name of the view the user wants to open
    // updating currentpage makes vue display the selected view
    changePage(page) {
      this.currentPage = page;
    },

    // adds one available lesson space tot he shopping cart
    // lesson is object chosen by user
    addToCart(lesson) {
      // checks lesson has available spaces
      if (lesson.spaces > 0) {
        // stores selected lesson id in cart array
        this.cart.push(lesson.id);
        // reduces the remaining avaiblabilty by 1
        lesson.spaces--;
      }
    },
  },
});

// connects the vue application to the html element with id app
app.mount("#app");
