<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Calculateur Under / Over 7</title>

  <style>
    * {
      box-sizing: border-box;
    }

    body {
      margin: 0;
      font-family: Arial, sans-serif;
      background: linear-gradient(135deg, #101827, #1c2940);
      color: white;
      padding: 20px;
    }

    .container {
      max-width: 1000px;
      margin: auto;
    }

    h1 {
      text-align: center;
      margin-bottom: 10px;
    }

    .warning {
      background: #4a3212;
      border: 1px solid #d99b27;
      color: #ffd98a;
      border-radius: 10px;
      padding: 14px;
      text-align: center;
      margin-bottom: 20px;
    }

    .grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
      gap: 15px;
      margin-bottom: 20px;
    }

    .card {
      background: #202d43;
      border-radius: 14px;
      padding: 20px;
      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.25);
    }

    .card h2 {
      margin-top: 0;
      font-size: 20px;
    }

    .probability {
      font-size: 28px;
      font-weight: bold;
      color: #62d9ff;
    }

    .result-box {
      text-align: center;
      background: #263955;
      border-radius: 14px;
      padding: 25px;
      margin-bottom: 20px;
    }

    .dice {
      font-size: 50px;
      margin: 10px;
    }

    .total {
      font-size: 38px;
      font-weight: bold;
      color: #ffe26b;
    }

    .result {
      font-size: 27px;
      font-weight: bold;
      margin-top: 10px;
    }

    button {
      border: none;
      border-radius: 8px;
      padding: 13px 20px;
      font-size: 16px;
      font-weight: bold;
      cursor: pointer;
      margin: 5px;
    }

    #rollButton {
      background: #20c997;
      color: white;
    }

    #resetButton {
      background: #e05252;
      color: white;
    }

    button:hover {
      opacity: 0.85;
    }

    .stat {
      display: flex;
      justify-content: space-between;
      padding: 10px 0;
      border-bottom: 1px solid #42516a;
    }

    .stat:last-child {
      border-bottom: none;
    }

    .history {
      max-height: 250px;
      overflow-y: auto;
      background: #162235;
      border-radius: 8px;
      padding: 10px;
    }

    .history-item {
      padding: 9px;
      margin-bottom: 7px;
      border-radius: 6px;
      background: #2c3c58;
    }

    .under {
      color: #56b8ff;
    }

    .over {
      color: #5df0a4;
    }

    .seven {
      color: #ffdb58;
    }

    .note {
      color: #c2cede;
      font-size: 14px;
      line-height: 1.5;
    }
  </style>
</head>

<body>
  <div class="container">

    <h1>Calculateur de probabilités Under / Over 7</h1>

    <div class="warning">
      Simulation éducative uniquement. Les résultats sont aléatoires et ne permettent pas
      de prédire les résultats d’une plateforme de paris.
    </div>

    <div class="grid">
      <div class="card">
        <h2>Under 7</h2>
        <div class="probability">41,67 %</div>
        <p>Somme comprise entre 2 et 6.</p>
      </div>

      <div class="card">
        <h2>Égal à 7</h2>
        <div class="probability">16,67 %</div>
        <p>Somme égale à 7.</p>
      </div>

      <div class="card">
        <h2>Over 7</h2>
        <div class="probability">41,67 %</div>
        <p>Somme comprise entre 8 et 12.</p>
      </div>
    </div>

    <div class="result-box">
      <h2>Dernier lancer</h2>

      <div>
        <span id="dice1" class="dice">⚀</span>
        <span id="dice2" class="dice">⚀</span>
      </div>

      <div>Total : <span id="total" class="total">-</span></div>
      <div id="result" class="result">Aucun lancer effectué</div>

      <br>

      <button id="rollButton" onclick="rollDice()">
        Lancer les dés
      </button>

      <button id="resetButton" onclick="resetStats()">
        Réinitialiser
      </button>
    </div>

    <div class="grid">
      <div class="card">
        <h2>Statistiques observées</h2>

        <div class="stat">
          <span>Parties jouées</span>
          <strong id="games">0</strong>
        </div>

        <div class="stat">
          <span>Under 7</span>
          <strong id="underCount">0</strong>
        </div>

        <div class="stat">
          <span>Over 7</span>
          <strong id="overCount">0</strong>
        </div>

        <div class="stat">
          <span>Égal à 7</span>
          <strong id="sevenCount">0</strong>
        </div>
      </div>

      <div class="card">
        <h2>Pourcentages observés</h2>

        <div class="stat">
          <span>Under 7</span>
          <strong id="underPercent">0 %</strong>
        </div>

        <div class="stat">
          <span>Over 7</span>
          <strong id="overPercent">0 %</strong>
        </div>

        <div class="stat">
          <span>Égal à 7</span>
          <strong id="sevenPercent">0 %</strong>
        </div>

        <p class="note">
          Plus le nombre de lancers augmente, plus les pourcentages observés
          peuvent se rapprocher des probabilités théoriques.
        </p>
      </div>
    </div>

    <div class="card">
      <h2>Historique des lancers</h2>
      <div id="history" class="history">
        Aucun résultat pour le moment.
      </div>
    </div>

  </div>

  <script>
    let games = 0;
    let underCount = 0;
    let overCount = 0;
    let sevenCount = 0;

    const diceSymbols = ["⚀", "⚁", "⚂", "⚃", "⚄", "⚅"];

    function randomDice() {
      return Math.floor(Math.random() * 6) + 1;
    }

    function rollDice() {
      const dice1 = randomDice();
      const dice2 = randomDice();
      const total = dice1 + dice2;

      games++;

      let resultText = "";
      let resultClass = "";

      if (total < 7) {
        underCount++;
        resultText = "UNDER 7";
        resultClass = "under";
      } else if (total > 7) {
        overCount++;
        resultText = "OVER 7";
        resultClass = "over";
      } else {
        sevenCount++;
        resultText = "ÉGAL À 7";
        resultClass = "seven";
      }

      document.getElementById("dice1").textContent = diceSymbols[dice1 - 1];
      document.getElementById("dice2").textContent = diceSymbols[dice2 - 1];
      document.getElementById("total").textContent = total;

      const resultElement = document.getElementById("result");
      resultElement.textContent = resultText;
      resultElement.className = "result " + resultClass;

      updateStats();
      addHistory(dice1, dice2, total, resultText, resultClass);
    }

    function updateStats() {
      document.getElementById("games").textContent = games;
      document.getElementById("underCount").textContent = underCount;
      document.getElementById("overCount").textContent = overCount;
      document.getElementById("sevenCount").textContent = sevenCount;

      if (games === 0) return;

      const underPercent = (underCount / games * 100).toFixed(2);
      const overPercent = (overCount / games * 100).toFixed(2);
      const sevenPercent = (sevenCount / games * 100).toFixed(2);

      document.getElementById("underPercent").textContent =
        underPercent + " %";

      document.getElementById("overPercent").textContent =
        overPercent + " %";

      document.getElementById("sevenPercent").textContent =
        sevenPercent + " %";
    }

    function addHistory(dice1, dice2, total, resultText, resultClass) {
      const history = document.getElementById("history");

      if (games === 1) {
        history.innerHTML = "";
      }

      const item = document.createElement("div");
      item.className = "history-item";

      item.innerHTML = `
        Partie ${games} :
        ${diceSymbols[dice1 - 1]} + ${diceSymbols[dice2 - 1]}
        = <strong>${total}</strong>
        — <span class="${resultClass}">${resultText}</span>
      `;

      history.prepend(item);
    }

    function resetStats() {
      games = 0;
      underCount = 0;
      overCount = 0;
      sevenCount = 0;

      document.getElementById("dice1").textContent = "⚀";
      document.getElementById("dice2").textContent = "⚀";
      document.getElementById("total").textContent = "-";

      const resultElement = document.getElementById("result");
      resultElement.textContent = "Aucun lancer effectué";
      resultElement.className = "result";

      document.getElementById("history").innerHTML =
        "Aucun résultat pour le moment.";

      updateStats();

      document.getElementById("underPercent").textContent = "0 %";
      document.getElementById("overPercent").textContent = "0 %";
      document.getElementById("sevenPercent").textContent = "0 %";
    }
  </script>
</body>
</html># Quiz-Game-With-HTML-CSS-JS
Une application de quiz interactive pour tester vos connaissances en programmation, construite avec HTML, CSS et JavaScript.

Description

LM-Code Quiz App est une application simple et élégante permettant aux utilisateurs de répondre à des questions sur différents langages de programmation (PHP, Python, JavaScript, PowerShell, et Java). Les utilisateurs peuvent choisir un sujet, répondre à une série de questions, et voir leur score avec un feedback motivant. L'objectif est de rendre l'apprentissage ludique et engageant !
------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

Fonctionnalités

    Sélectionnez un langage de programmation à partir d'une liste d'options.
    Répondez à une série de questions dynamiques avec des réponses mélangées.
    Affichage d'un score final et d'un feedback motivant en fonction des résultats.
    Design responsive et utilisation d'icônes pour améliorer l'expérience utilisateur.
-------------------------------------------------------------------------------------------------

Outils et technologies

    HTML : Structure de la page.
    CSS : Stylisation de l'interface utilisateur.
    JavaScript : Gestion de la logique, des interactions, et des animations.
    Bootstrap : Pour un design moderne et responsive.
    Images et Icônes : Pour personnaliser les sujets du quiz.
--------------------------------------------------------------------------------------------------------
Structure du projet
/quiz-app
│
├── /images
│   ├── logo.png
│   ├── php.svg
│   ├── python.svg
│   ├── js.svg
│   ├── terminal.svg
│   └── java.svg
│
├── index.html    # Fichier principal de la structure HTML
├── style.css     # Styles de l'application
└── script.js     # Logique du quiz
-------------------------------------------------------------------------------------------------------
Installation

    Clonez le repository :
    git clone https://github.com/LM-Code/Quiz-Game-With-HTML-CSS-JS.git
Ouvrez le fichier index.html dans votre navigateur préféré.
------------------------------------------------------------------------------------------------------
Comment jouer ?

    Lancez l'application en ouvrant le fichier index.html.
    Choisissez un sujet de quiz en cliquant sur l'icône correspondante.
    Répondez aux questions en cliquant sur les propositions.
    Recevez votre score et un feedback motivant.
--------------------------------------------------------------------------------------------------------
Contributions

Les contributions sont les bienvenues ! Si vous souhaitez ajouter des fonctionnalités ou améliorer le projet, n'hésitez pas à soumettre une Pull Request. Nous vous attendons sur lm-code.be
---------------------------------------------------------------------------------------------------------
Auteur

    LM-Code
    https://lm-code.be
