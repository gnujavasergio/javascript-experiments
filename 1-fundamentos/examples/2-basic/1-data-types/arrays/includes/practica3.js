function filterByTerm(array, term) {
    return array.filter(item => item.includes(term));
}

const result = filterByTerm(["ana", "santi", "nico", "anastasia"], "ana");
console.log(result);