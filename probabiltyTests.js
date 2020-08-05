let rares = new Array(10000).fill().map((item) => (item = new Card("r")));
let uncommuns = new Array(10000).fill().map((item) => (item = new Card("u")));
let communs = new Array(10000).fill().map((item) => (item = new Card("c")));

let uniqueRaresGrades = Array.from(
  new Set(rares.map((item) => item.grade))
).sort((a, b) => b - a);
let uniqueUncommunsGrades = Array.from(
  new Set(uncommuns.map((item) => item.grade))
).sort((a, b) => b - a);
let uniqueCommunsGrades = Array.from(
  new Set(communs.map((item) => item.grade))
).sort((a, b) => b - a);

function getGradeStats() {
  return [
    {
      rarity: "rares",
      grades: uniqueRaresGrades.map((item) => {
        return {
          grade: item,
          percent: `${
            rares.filter((meti) => meti.grade === item).length / 100
          }%`,
        };
      }),
    },
    {
      rarity: "uncommuns",
      grades: uniqueUncommunsGrades.map((item) => {
        return {
          grade: item,
          percent: `${
            uncommuns.filter((meti) => meti.grade === item).length / 100
          }%`,
        };
      }),
    },
    {
      rarity: "communs",
      grades: uniqueCommunsGrades.map((item) => {
        return {
          grade: item,
          percent: `${
            communs.filter((meti) => meti.grade === item).length / 100
          }%`,
        };
      }),
    },
  ];
}

function getCardId() {
  let percentageOfUppercase = 0.6;
  let idSize = 8;
  let id = Math.random().toString(36).substr(2, idSize);
  let result = "";

  for (let i = 0; i < id.length; i++) {
    Math.random() > percentageOfUppercase
      ? (result += id[i].toUpperCase())
      : (result += id[i]);
  }

  return result;
}

function multipleIds(number) {
  if (!number) return "Não aceitamos sem parametros por aqui";
  let result = [];
  for (let i = 0; i < number; i++) {
    result.push(getCardId());
  }
  return result;
}

function simulateGenerateIds(partSampleSize) {
  let a = multipleIds(partSampleSize);
  let b = multipleIds(partSampleSize);
  let c = multipleIds(partSampleSize);
  let d = multipleIds(partSampleSize);
  let e = multipleIds(partSampleSize);
  let F = multipleIds(partSampleSize);
  let h = multipleIds(partSampleSize);
  let g = multipleIds(partSampleSize);
  let i = multipleIds(partSampleSize);
  let j = multipleIds(partSampleSize);

  let sampleSize = partSampleSize * 10;

  function checkDuplicates(array) {
    console.log(array.length, new Set(array).size);

    return !(array.length == new Set(array).size);
  }

  let checkDupes =
    checkDuplicates(a) ||
    checkDuplicates(b) ||
    checkDuplicates(c) ||
    checkDuplicates(d) ||
    checkDuplicates(e) ||
    checkDuplicates(F) ||
    checkDuplicates(h) ||
    checkDuplicates(g) ||
    checkDuplicates(i) ||
    checkDuplicates(j);

  console.error(
    `Checked ${sampleSize} IDs and ${
      !checkDupes ? "didnt " : ""
    }found duplicates.`
  );
}
