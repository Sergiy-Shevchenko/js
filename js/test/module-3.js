const atTheOldToad = {
    potions: [
      { name: "Speed potion", price: 460 },
      { name: "Dragon breath", price: 780 },
      { name: "Stone skin", price: 520 },
    ],
    // Change code below this line
    getPotions() {
     return this.potions;
    },
    addPotion(newPotion) {
        const {name} = newPotion
       
        for(let el of this.potions) {
         if (el.name === name) 
            return `Error! Potion ${name} is already in your inventory!`;
        }    
      this.potions.push(newPotion);      
    },

    removePotion(potionName) {

    for(let el of this.potions) {
    const {name} = el  
    if (name === potionName) {
        this.potions.splice(this.potions.indexOf(el), 1)
        return `Potion ${potionName} is not in inventory!`;
    }; 
    };      
    },

    updatePotionName(oldName, newName) {

        for (let el of this.potions) { 
            if(el.name === oldName) {
                el.name = newName
            }
        }
    },
  
    // Change code above this line
  };

  
  atTheOldToad.getPotions()
  //[ { name: "Speed potion", price: 460 }, { name: "Dragon breath", price: 780 }, { name: "Stone skin", price: 520 } ]
  atTheOldToad.addPotion({ name: "Invisibility", price: 620 })
  atTheOldToad.addPotion({ name: "Power potion", price: 270 })
  atTheOldToad.addPotion({ name: "Dragon breath", price: 700 })
  atTheOldToad.addPotion({ name: "Stone skin", price: 240 })
  atTheOldToad.addPotion({ name: "Dragon breath", price: 700 })
// "Error! Potion Dragon breath is already in your inventory!"
atTheOldToad.addPotion({ name: "Stone skin", price: 240 })
// "Error! Potion Stone skin is already in your inventory!"
atTheOldToad.removePotion("Dragon breath")
// [ { name: "Speed potion", price: 460 }, { name: "Stone skin", price: 520 } ]
atTheOldToad.removePotion("Speed potion")
//[ { name: "Dragon breath", price: 780 }, { name: "Stone skin", price: 520 }]
atTheOldToad.updatePotionName("Dragon breath", "Polymorth")
// [{ name: "Speed potion", price: 460 }, { name: "Polymorth", price: 780 }, { name: "Stone skin", price: 520 } ]
atTheOldToad.updatePotionName("Stone skin", "Invulnerability potion")
//[{ name: "Speed potion", price: 460 }, { name: "Dragon breath", price: 780 }, { name: "Invulnerability potion", price: 520 } ]