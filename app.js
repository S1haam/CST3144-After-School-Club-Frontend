const { createApp } = Vue;

const app = createApp({
  // returns data used
  data() {
    return {
      // stores info from lesson 1

      lessons: [
        {
          id: 1,
          subject: "Mathematics",
          location: "Edmonton Green",
          price: 25,
          spaces: 5,
          image:"images/mathematics.jpg"
        },

        {
          id: 2,
          subject: "English",
          location: "Enfield Town",
          price: 10,
          spaces: 5,
          image:"images/english.jpg"
        },

        {
          id: 3,
          subject: "Science",
          location: "Waltham Cross",
          price: 25,
          spaces: 5,
          image:"images/science.jpg"
        },

        {
          id: 4,
          subject: "ICT",
          location: "Hertfordshire",
          price: 25,
          spaces: 5,
          image:"images/ict.jpg"
        },

        {
          id: 5,
          subject: "PE",
          location: "Cheshunt",
          price: 10,
          spaces: 5,
          image:"images/pe.jpg"
        },

        {
          id: 6,
          subject: "Drama",
          location: "Edmonton Green",
          price: 10,
          spaces: 5,
          image:"images/drama.jpg"
        },

        {
          id: 7,
          subject: "French",
          location: "Enfield Town",
          price: 10,
          spaces: 5,
          image:"images/french.jpg"
        },

        {
          id: 8,
          subject: "British Sign Language",
          location: "Waltham Cross",
          price: 10,
          spaces: 5,
          image:"images/bsl.jpg"
        },

        {
          id: 9,
          subject: "Art",
          location: "Hertfordshire",
          price: 10,
          spaces: 5,
          image:"images/art.jpg"
        },

        {
          id: 10,
          subject: "Food Tech",
          location: "Cheshunt",
          price: 15,
          spaces: 5,
          image:"images/food.jpg"
        },
      ],
    };
  },
});
// connects vue app to html element app
app.mount("#app");
