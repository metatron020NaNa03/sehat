// Adding Tests
const upgardeAddBtn = document.querySelector("#upgrade_add");
const CATEGORY = document.querySelector("#add_category");
const LABEL = document.querySelector("#add-test-name");
const PRICE = document.querySelector("price");
const min = document.querySelector("#min");
const max = document.querySelector("#max");
const UNIT = document.querySelector("#units");
const DESCRIPTION = document.querySelector("#add_Description");
const upgradeAddSubmit = document.querySelector("#upgrade_submit");
const tar = document.querySelector(".tar");

const addContainer = document.querySelector(".upgrade_add-container");
const retrieveContainer = document.querySelector(".upgrade_retrieve-container");

upgardeAddBtn.addEventListener("click", () => {
  addContainer.style.display = "block";
  retrieveContainer.style.display = "none";
  // addContainer.style.visibility = "visible";
  // retrieveContainer.style.opacity = 0;
});

upgradeAddSubmit.addEventListener("click", async () => {
  tar.style.opacity = 0;
  tar.style.visibility = "hidden";
  upgradeAddSubmit.classList.add("upgrade-btn-loading");
  upgradeAddSubmit.style.backgroundColor = "transparent";

  CATEGORY = CATEGORY.value;
  LABEL = LABEL.value;
  PRICE = PRICE.value;
  min = min.value;
  max = max.value;
  UNIT = UNIT.value;
  DESCRIPTION = DESCRIPTION.value;

  data = {
    test: [
      CATEGORY,
      LABEL,
      PRICE,
      (RANGE = {
        min,
        max,
      }),
      UNIT,
      DESCRIPTION,
    ],
  };
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  };
  //   `https://sehat.hyderdevelops.ml/tests/update`,

  const response = await fetch("xyz", options);
  if (response.status === 200) {
    upgradeAddSubmit.classList.remove("upgrade-btn-loading");
    tar.style.opacity = 1;
    tar.textContent = "Submitted";
    window.location.reload();
  }
});

const upgradeRetrieveBtn = document.querySelector("#upgrade_retrieve");
const upgradeTestList = document.querySelector(".upgrade-test-list");

upgradeRetrieveBtn.addEventListener("click", () => {
  retrieveContainer.style.display = "block";
  addContainer.style.display = "none";

  const innerContainer = document.createElement("div");
  innerContainer.classList.add("upgrade_retrieve-inner-container");

  const margSmfCategory = document.createElement("div");
  margSmfCategory.classList.add("margin-small");

  const retrieveCategory = document.createElement("h2");
  retrieveCategory.classList.add("heading-secondary");
  retrieveCategory.setAttribute("id", "retrieve-category");
  retrieveCategory.textContent = "Biotechnology";

  const margSmfTestName = document.createElement("div");
  margSmfTestName.classList.add("margin-small");

  const retrieveTestName = document.createElement("h4");
  retrieveTestName.classList.add("heading-secondary");
  retrieveTestName.setAttribute("id", "retrieve-test-name");
  retrieveTestName.textContent = "Sr-Sodium";

  const minMaxUnits = document.createElement("div");
  minMaxUnits.classList.add("min-max-units");

  const marSmfMinMaxTop = document.createElement("div");
  marSmfMinMaxTop.classList.add("margin-small", "row-configuration");

  const minValueTop = document.createElement("div");
  minValueTop.classList.add("heading-secondary");
  minValueTop.textContent = "Min-value";

  const maxValueTop = document.createElement("div");
  maxValueTop.classList.add("heading-secondary");
  maxValueTop.textContent = "Max-value";

  const unitsTop = document.createElement("div");
  unitsTop.classList.add("heading-secondary");
  unitsTop.textContent = "Units";
  marSmfMinMaxTop.append(minValueTop, maxValueTop, unitsTop);

  const marSmfMinMaxValue = document.createElement("div");
  marSmfMinMaxValue.classList.add("margin-small", "row-configuration");

  const minValue = document.createElement("div");
  minValue.classList.add("heading-secondary");
  minValue.textContent = "1.5";

  const maxValue = document.createElement("div");
  maxValue.classList.add("heading-secondary");
  maxValue.textContent = "2.5";

  const units = document.createElement("div");
  units.classList.add("heading-secondary");
  units.textContent = "g/ml";

  marSmfMinMaxValue.append(minValue, maxValue, units);

  minMaxUnits.append(marSmfMinMaxTop, marSmfMinMaxValue);

  const marSmfPrice = document.createElement("div");
  marSmfPrice.classList.add("margin-small");

  const retrievePrice = document.createElement("div");
  retrievePrice.setAttribute("id", "retrieve-price");
  retrievePrice.textContent = `Price- 500`;

  const marSmfDescription = document.createElement("div");
  marSmfDescription.classList.add("margin-small");

  const retrieveDescription = document.createElement("p");
  retrieveDescription.setAttribute("id", "retrieve-description");
  retrieveDescription.textContent =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugaveniam aliquam neque praesentium quod voluptate?";

  // appending
  margSmfCategory.append(retrieveCategory);
  margSmfTestName.append(retrieveTestName);
  marSmfPrice.append(retrievePrice);
  marSmfDescription.append(retrieveDescription);
  innerContainer.append(
    margSmfCategory,
    margSmfTestName,
    minMaxUnits,
    marSmfPrice,
    marSmfDescription
  );

  upgradeTestList.append(innerContainer);
  retrieveContainer.append(upgradeTestList);
});
