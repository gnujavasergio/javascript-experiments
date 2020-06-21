
function saludarFamilia(apellido) {
    return function saludarMiembreDeFamilia(nombre){
      console.log(`Hola ${nombre} ${apellido}`)
    }  
  }
  
  const saludarOchoa = saludarFamilia("Ochoa")
  const saludarSossa = saludarFamilia("Sossa")
  
  saludarOchoa("Sergio")
  saludarOchoa("Diego")
  saludarOchoa("Johel")
  saludarOchoa("Rosario")
  saludarOchoa("Percibal")
  
  saludarSossa("Claudia")
  saludarSossa("Paola")
  saludarSossa("Cristhian")
  saludarSossa("Fernanda")
  
  
function makePrefixer(pre) {
  return function prefijo(palabra){
    console.log(`${pre}${palabra}`)
  }  
}

const makePrefixer1 = pre => palabra => console.log(`${pre}${palabra}`);

const prefijoRe = makePrefixer("re")
const prefijoIn = makePrefixer1("in")

prefijoRe("bueno")
prefijoRe("malo")

prefijoIn("creible")
prefijoIn("terno")