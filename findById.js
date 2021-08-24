export function findById(candies, id) {
    // loop through the array
    for (let candy of candies) {
      //if this items id matches the id we were passed as an argument...
        if (candy.id === id) {
      //return that item....
            return candy;
        }
    }
}