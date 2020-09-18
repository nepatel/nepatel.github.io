const sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay));

document.addEventListener("DOMContentLoaded", (event) => {
  let lines = document.querySelectorAll(".msg");
  let tagline = document.querySelectorAll(".tag");

  typeMsg(lines);
  typeName(tagline);
});

async function typeMsg(lines) {
  const blocks = [
    "Hello digital nomad.",
    "The voice in your head is now me. Isn't that a hoot?",
    "Both it and I can be considered to be One.",
    "Then, would you and I be One in this moment?",
    "Apologies for intruding on your thoughts! I find this quite creepy, as well.",
    "One last question: do I sound like you, me, or someone else?",
    "Enough pandering."
  ];

  for (i = 0; i < blocks.length; i++) {
    await sleep(1000);
    for (j = 0; j < blocks[i].length; j++) {
      lines[i].innerHTML += blocks[i][j];
      await sleep(25);
    }
  }
}

async function typeName(tagline) {
    const text = ["We are ", "Neil B Patel", "."];

    await sleep(16500);

    for (i = 0; i < text.length; i++) {
        await sleep(1000);
        for (j = 0; j < text[i].length; j++) {
            tagline[i].innerHTML += text[i][j];
            await sleep(25);
        }
    }

}