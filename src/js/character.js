// const parm = {
//     name: "Маг",
//     health: 90,
//   };

export const charactersStatus = [
  { name: "мечник", health: 10 },
  { name: "маг", health: 100 },
  { name: "лучник", health: 80 },
];

charactersStatus.sort((a, b) => {
  return b.health - a.health;
});

export default function character(parm) {
  if (parm.health > 50) {
    return "healthy";
  } else if (parm.health <= 50 && parm.health >= 15) {
    return "wounded";
  } else {
    return "critical";
  }
}
