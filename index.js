const qanda = [
  {
    question: "I want to generate a random secure hex token of 32 bytes to reset the password, which method should I use",
    answers: [
      "A. secrets.hexToken(32)",
      "B. secrets.hex_token(32)",
      "C. secrets.tokenHex(32)",
      "D. secrets.token_hex(32)",
    ],
    correct: [1],
  },

  {
    question: "str = “PYnative”. Choose the correct function to pick a single character from a given string randomly.",
    answers: [
      "A. random.sample(str)",
      "B. random.choice(str)",
      "C. random.get(str, 1)",
    ],
    correct: [1, 2],
  },

  {
    question: "To generate a random secure Universally unique ID which method should I use",
    answers: [
      "A. uuid.uuid4()",
      "B. uuid.uuid3()",
      "C. uuid.uuid2()",
      "D. uuid.uuid()",
    ],
    correct: [0],
  },

  {
    question: "The random.seed() method is used to initialize the pseudorandom number generator. The random module uses the seed value as a base to generate a random number. If seed value is not present, it takes the system’s current time.",
    answers: [
      "A. True",
      "B. False",
    ],
    correct: [0],
  },
];

function createQuestion(q, i) {
  const main = document.getElementById("main");
  const quesDiv = document.createElement("div");
  quesDiv.id = "div" + i;
  const ques = document.createElement("h3");
  ques.innerHTML = i + 1 + ". " + q.question;
  quesDiv.appendChild(ques);

  q.answers.forEach(function (answer, index) {
    const p = document.createElement("p");
    const ans = document.createElement("input");
    ans.type = "checkbox";
    ans.name = answer;
    ans.id = index + "," + i;
    const lbl = document.createElement("label");
    lbl.innerHTML = answer;
    lbl.htmlFor = index + "," + i;

    p.appendChild(ans);
    p.appendChild(lbl);
    quesDiv.appendChild(p);
  });

  main.appendChild(quesDiv);
}

function correctQuestion(q, i) {
  const main = document.getElementById("main");
  const quesDiv = document.createElement("div");
  quesDiv.id = "div" + i;
  const ques = document.createElement("h3");
  ques.innerHTML = i + 1 + ". " + q.question;
  quesDiv.appendChild(ques);

  q.answers.forEach(function (answer, index) {
    const p = document.createElement("p");
    const ans = document.createElement("h4");
    const find = q.correct.find((c) => c === index);
    console.log(find, answer);
    ans.innerHTML = answer;

    if (find !== undefined) ans.style.color = "green";

    p.appendChild(ans);
    quesDiv.appendChild(p);
  });

  main.appendChild(quesDiv);
}

function main() {
  const main = document.getElementById("main");
  main.innerHTML = "";
  const back = document.getElementById("back");
  const btns = document.getElementById("btns");
  back.style.display = "none";
  btns.style.display = "block";

  qanda.forEach((q, i) => createQuestion(q, i));
}

function correct() {
  const main = document.getElementById("main");
  main.innerHTML = "";
  const back = document.getElementById("back");
  const btns = document.getElementById("btns");
  btns.style.display = "none";
  back.style.display = "block";

  qanda.forEach((q, i) => correctQuestion(q, i));
}

function effacer() {
  console.log("effacer ...");
  const inputs = document.getElementsByTagName("input");

  for (var i = 0; i < inputs.length; i++) {
    const input = inputs[i];
    if (input.type === "checkbox") input.checked = false;
  }
}

function correction() {
  console.log("correction ...");
  let cc = "Correction  \n \n";
  qanda.forEach((q, i) => {
    const c = checkAnswers(q, i) ? "correct" : "incorrect";
    cc += "Question " + (i + 1) + " is " + c + " \n";
  });
  alert(cc);
}

function checkAnswers(q, i) {
  const div = document.getElementById("div" + i);
  const inputs = div.getElementsByTagName("input");

  for (let j = 0; j < inputs.length; j++) {
    const input = inputs[j];
    if (input.type === "checkbox") {
      const id = input.getAttribute("id").split(",")[0];
      const find = q.correct.find((c) => c.toString() === id);
      //  console.log(id, find, q.correct);
      if (input.checked && find === undefined) return false;
      if (!input.checked && find !== undefined) return false;
    }
  }

  return true;
}

main();
