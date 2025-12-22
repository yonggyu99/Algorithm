function solution(survey, choices) {
    var answer = '';
    const scores = {R : 0, T : 0, C : 0, F : 0, J : 0, M : 0, A : 0, N : 0}
    
     for (let i = 0; i < survey.length; i++) {
    const [disagree, agree] = survey[i].split('');
    const choice = choices[i];

    if (choice < 4) {
      const point = 4 - choice;
      scores[disagree] += point;
    } else if (choice > 4) {
      const point = choice - 4
      scores[agree] += point;
    }
  }
  let result = "";

  result += scores["R"] > scores["T"] ? "R"
           : scores["R"] < scores["T"] ? "T"
           : "R" < "T" ? "R" : "T";

  result += scores["C"] > scores["F"] ? "C"
           : scores["C"] < scores["F"] ? "F"
           : "C" < "F" ? "C" : "F";

  result += scores["J"] > scores["M"] ? "J"
           : scores["J"] < scores["M"] ? "M"
           : "J" < "M" ? "J" : "M";

  result += scores["A"] > scores["N"] ? "A"
           : scores["A"] < scores["N"] ? "N"
           : "A" < "N" ? "A" : "N";

  return result;
}