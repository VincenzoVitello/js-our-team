//creato array di oggetti con all'interno noe, ruolo e immagine del membro
const team = [
  {
    name: 'Wayne Barnett',
    role: 'Founder & CEO',
    image: 'img/wayne-barnett-founder-ceo.jpg',
  },
  {
    name: 'Angela Caroll',
    role: 'Chief Editor',
    image: 'img/angela-caroll-chief-editor.jpg',
  },
  {
    name: 'Walter Gordon',
    role: 'Office Manager',
    image: 'img/walter-gordon-office-manager.jpg',
  },
  {
    name: 'Angela Lopez',
    role: 'Social Media Manager',
    image: 'img/angela-lopez-social-media-manager.jpg',
  },
  {
    name: 'Scott Estrada',
    role: 'Developer',
    image: 'img/scott-estrada-developer.jpg',
  },
  {
    name: 'Barbara Ramos',
    role: 'Graphic Designer',
    image: 'img/barbara-ramos-graphic-designer.jpg',
  },
];

//dato questo array, devo ora appendere in html ogni oggetto
//creo ciclo for che inserisca in html degli elementi con all'interno gli oggetti
function createDomCard( cardObject )
{
  document.getElementById('team-container').innerHTML += 
                `<div class="team-card">
                    <div class="card-image">
                      <img
                        src="${cardObject.image}"
                        alt=""
                      />
                    </div>
                    <div class="card-text">
                      <h3>${cardObject.name}</h3>
                      <p>${cardObject.role}</p>
                    </div>
                </div>`;
 
} 

for (let index = 1; index < team.length; index++) {
  
  createDomCard( team[index] )
}


//ora devo fare in modo che al click sul pulsante Add si possano aggiungere nuove cards

const addBtn = document.getElementById('addMemberButton');
addBtn.addEventListener('click', getCardData)

function getCardData (){

  let newMemberCard = {};
  newMemberCard.name = document.getElementById('name').value;
  newMemberCard.role = document.getElementById('role').value;
  newMemberCard.image = document.getElementById('image').value;

  createDomCard( newMemberCard );
     
  
}



