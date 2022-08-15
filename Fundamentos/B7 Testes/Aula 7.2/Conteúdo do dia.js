// Conteúdo

const student1 = {
  Html: "Muito Bom",
  Css: "Bom",
  JavaScript: "Ótimo",
  SoftSkills: "Ótimo",
};

const student2 = {
  Html: "Bom",
  Css: "Ótimo",
  JavaScript: "Ruim",
  SoftSkills: "Ótimo",
  Git: "Bom", // chave adicionada
};

const showSkills = (obj) => {
  const keys = Object.keys(obj);
  const values = Object.values(obj);
  for (let i = 0; i < keys.length; i += 1) {
    console.log(`${keys[i]} Nível: ${values[i]}`);
  }
};

showSkills(student1);
showSkills(student2);
