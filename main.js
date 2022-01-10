//creato array di oggetti con all'interno noe, ruolo e immagine del membro
const team = [
  {
    name: 'Wayne Barnett',
    role: 'Founder & CEO',
    image: 'wayne-barnett-founder-ceo.jpg',
  },
  {
    name: 'Angela Caroll',
    role: 'Chief Editor',
    image: 'angela-caroll-chief-editor.jpg',
  },
  {
    name: 'Walter Gordon',
    role: 'Office Manager',
    image: 'walter-gordon-office-manager.jpg',
  },
  {
    name: 'Angela Lopez',
    role: 'Social Media Manager',
    image: 'angela-lopez-social-media-manager.jpg',
  },
  {
    name: 'Scott Estrada',
    role: 'Developer',
    image: 'scott-estrada-developer.jpg',
  },
  {
    name: 'Barbara Ramos',
    role: 'Graphic Designer',
    image: 'barbara-ramos-graphic-designer.jpg',
  },
];

//dato questo array, devo ora appendere in html ogni oggetto
//creo ciclo for che inserisca in html degli elementi con all'interno gli oggetti
for (let index = 1; index < team.length; index++) {
  let newCard = `<div class="team-card">
                <div class="card-image">
                  <img
                    src="img/${team[index].image}"
                    alt=""
                  />
                </div>
                <div class="card-text">
                  <h3>${team[index].name}</h3>
                  <p>${team[index].role}</p>
                </div>
              </div>`;
              document.getElementById('team-container').innerHTML += newCard

}


