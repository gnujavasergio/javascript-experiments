const cows = 15;

const countCows = new Promise(function (resolve, reject) {
   if (cows > 10) {
      resolve(`We have ${cows} cows on the farm.`);
   } else {
      reject("There is no cows on the farms.");
   }
});
const onError = (error) => console.log(error);

countCows.then((response) => {
   console.log(response);
}).catch(onError).finally(() => console.log('Finally'));