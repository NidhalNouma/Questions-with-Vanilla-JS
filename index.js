const qanda = [
  {
    question: "In 1768, Captain James Cook set out to explore which ocean?",
    answers: [
      "A. Pacific Ocean",
      "B. Atlantic Ocean",
      "C. Indian Ocean",
      "D. Arctic Ocean",
    ],
    correct: [0, 1],
  },

  {
    question: "In 1768, Captain James Cook set out to explore which ocean?",
    answers: [
      "A. Pacific Ocean",
      "B. Atlantic Ocean",
      "C. Indian Ocean",
      "D. Arctic Ocean",
    ],
    correct: [1, 2],
  },

  {
    question: "In 1768, Captain James Cook set out to explore which ocean?",
    answers: [
      "A. Pacific Ocean",
      "B. Atlantic Ocean",
      "C. Indian Ocean",
      "D. Arctic Ocean",
    ],
    correct: [3],
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
