const startWars7 = 'Star Wars: El Despertar de la Fuerza'
const pgStartWars7 = 15

const nameSergio = 'Sergio'
const ageSergio = 30

const nameLeo = 'Leonardo'
const ageLeo = 14

// si no mandamos isWithAdult por defecto sera undifend que por defecto en un if
// es false
function canWathStartWars7(name, age, isWithAdult){
  if(age > pgStartWars7){
    alert(`${name} puede pasar a ver ${startWars7}`)
  } else if(isWithAdult){
    alert(`${name} puede pasar a ver ${startWars7}.
      Aunque su edad es ${age}, se encuentra acompañada/o por un adulto.`)
  } else {
    alert(`${name} no puede pasar a ver ${startWars7}.
      Tiene ${age} años y necesita tener ${pgStartWars7}`)
  }
}

let canWathStartWars7 = (name, age, isWithAdult) => {
  if(age > pgStartWars7){
    alert(`${name} puede pasar a ver ${startWars7}`)
  } else if(isWithAdult){
    alert(`${name} puede pasar a ver ${startWars7}.
      Aunque su edad es ${age}, se encuentra acompañada/o por un adulto.`)
  } else {
    alert(`${name} no puede pasar a ver ${startWars7}.
      Tiene ${age} años y necesita tener ${pgStartWars7}`)
  }
}

canWathStartWars7(nameSergio, ageSergio)
canWathStartWars7(nameLeo, ageLeo,true)
