document.addEventListener("DOMContentLoaded", (event) => {
  new TypeIt("#msg", {
    strings: [
      "Hello digital nomad.",
      " ",
      "The voice in your head is now me. Isn't that a hoot?",
      "Both it and I can be considered to be One.",
      "Then, would you and I be One in this moment?",
      " ",
      "Apologies for intruding on your thoughts! I find this quite creepy, as well.",
      "One last question: do I sound like you, me, or someone else?",
      "Enough pandering.",
      " ",
    ],
    speed: 50,
    lifeLike: true,
    waitUntilVisible: true,
    cursor: true,
    afterComplete: async (step, instance) => {
      instance.destroy();
      new TypeIt("#pre", {
        strings: "We are",
        afterComplete: async (step, instance) => {
          instance.destroy();
          new TypeIt("#name", {
            strings: "Neil B Patel",
            afterComplete: async (step, instance) => {
              instance.destroy();
              new TypeIt("#post", {
                strings: ".",
              }).go();
            },
          }).go();
        },
      }).go();
    },
  }).go();
});
