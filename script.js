let muscleSelect = document.getElementById("muscleSelect");
let equipmentSelect = document.getElementById("equipmentSelect");
let searchBtn = document.getElementById("searchBtn");
let resultsContainer = document.getElementById("resultsContainer");

searchBtn.addEventListener("click", async () => {
  resultsContainer.innerHTML = "";
  let muscleSelectValue = muscleSelect.value;
  let equipmentSelectValue = equipmentSelect.value;

  let newUrl = "https://wger.de/api/v2/exerciseinfo/";

  if (muscleSelectValue !== "") {
    newUrl = newUrl + "?muscles=" + muscleSelectValue;
  }

  if (equipmentSelectValue !== "") {
    if (muscleSelectValue !== "") {
      newUrl = newUrl + "&equipment=" + equipmentSelectValue;
    }
    if (muscleSelectValue === "") {
      newUrl = newUrl + "?equipment=" + equipmentSelectValue;
    }
  }

  if (muscleSelectValue === "" && equipmentSelectValue === "") {
    newUrl = newUrl + "?language=2";
  }

  if (muscleSelectValue !== "" || equipmentSelectValue !== "") {
    newUrl = newUrl + "&language=2";
  }

  let response = await fetch(newUrl);
  let data = await response.json();

  if (data.results.length === 0) {
    resultsContainer.innerHTML = "<h3 class='noResults'>No exercise found</h3>";
  } else {
    data.results.forEach((exercise) => {
      let newExercise = document.createElement("div");
      newExercise.className = "exerciseCard";

      let englishTranslation = exercise.translations.find(
        (t) => t.language === 2,
      );

      if (englishTranslation) {
        newExercise.textContent = englishTranslation.name;
      } else {
        if (exercise.translations.length !== 0) {
          newExercise.textContent = exercise.translations[0].name;
        } else {
          newExercise.textContent = "nome non disponibile";
        }
      }

      resultsContainer.appendChild(newExercise);
    });
  }
});
