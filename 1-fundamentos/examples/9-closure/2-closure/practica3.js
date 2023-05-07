function createPetList() {
    const pets = [];
    const add = (pet) => {
        if (pet) {
            pets.push(pet);
        }
        return pets;
    }
    return add;
}

const myPetList = createPetList();

myPetList("michi");

myPetList("firulais");

console.log(myPetList());