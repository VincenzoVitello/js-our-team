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

for (let index = 1; index < team.length; index++) {
  let newCard = `<div class="team-card">
                <div class="card-image">
                  <img
                    src="img/${image}"
                    alt=""
                  />
                </div>
                <div class="card-text">
                  <h3>${name}</h3>
                  <p>${role}</p>
                </div>
              </div>`;
              document.getElementById('team-container').innerHTML += newCard

}
// let newCard = `<div class="team-card">
//                 <div class="card-image">
//                   <img
//                     src="img/wayne-barnett-founder-ceo.jpg"
//                     alt="Wayne Barnett"
//                   />
//                 </div>
//                 <div class="card-text">
//                   <h3>Wayne Barnett</h3>
//                   <p>Founder & CEO</p>
//                 </div>
//               </div>`;

