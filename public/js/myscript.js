// ISSUES OBJECT

let problems = [
{
    name : 'La faim',
    peopleAffected : '100 000',
    rankOfPriority : 1,
    imgUrl : 'public/img/about1.jpg',
    detail : "Besoin urgent d'aide pour les enfants vivant dans les zones des conflits. Aliquam voluptatibus autem consectetur voluptate facere at, omnis ab optio placeat officiis!",
    mostAffectedArea : 'Africa, Asia, north america',
    pageLink : 'faim.html'
},
{
    name : 'La deforestation',
    peopleAffected : '10 000',
    rankOfPriority : 1,
    imgUrl : 'public/img/about3.jpg',
    detail : "Besoin urgent d'aide pour les enfants vivant dans les zones des conflits. Aliquam voluptatibus autem consectetur voluptate facere at, omnis ab optio placeat officiis!",
    mostAffectedArea : 'Africa, Asia, north america',
    pageLink : 'deforestation.html'
},
{
    name : "La protection d'animaux",
    peopleAffected : '80 000',
    rankOfPriority : 2,
    imgUrl : 'public/img/about2.jpg',
    detail : "Besoin urgent d'aide pour les enfants vivant dans les zones des conflits. Aliquam voluptatibus autem consectetur voluptate facere at, omnis ab optio placeat officiis!",
    mostAffectedArea : 'Africa, Asia, north america',
    pageLink : 'animaux.html'
},
{
    name : "La malaria",
    peopleAffected : '110 000',
    rankOfPriority : 1,
    imgUrl : 'public/img/3_004.jpg',
    detail : "Besoin urgent d'aide pour les enfants vivant dans les zones des conflits. Aliquam voluptatibus autem consectetur voluptate facere at, omnis ab optio placeat officiis!",
    mostAffectedArea : 'Africa, Asia, north america',
    pageLink : 'malaria.html'
},
{
    name : "Les enfants en milieu de conflit",
    peopleAffected : '90 000',
    rankOfPriority : 3,
    imgUrl : 'public/img/2_003.jpg',
    detail : "Besoin urgent d'aide pour les enfants vivant dans les zones des conflits. Aliquam voluptatibus autem consectetur voluptate facere at, omnis ab optio placeat officiis!",
    mostAffectedArea : 'Africa, Asia, north america',
    pageLink : 'child.html'
},
{
    name : "La covid19",
    peopleAffected : '1 000 000 000',
    rankOfPriority : 1,
    imgUrl : 'public/img/corona.jpg',
    detail : "Besoin urgent d'aide pour les enfants vivant dans les zones des conflits. Aliquam voluptatibus autem consectetur voluptate facere at, omnis ab optio placeat officiis!",
    mostAffectedArea : 'Africa, Asia, north america',
    pageLink : 'covid19.html'
}
];

 //---------------------------------------   HTML STRUCTURE -----------------------------------------------
/*<div class="problem">
            <div class="photo_problem"><img alt="" src="public/img/about1.jpg">
            </div>
            <div class="problem-infos">
              <div class="titre-problem">
                <h3>La faim</h3>
              </div>
              <div class="problem-description">
                <p>Besoin urgent d'aide pour les enfants vivant dans les zones des conflits. Aliquam voluptatibus autem consectetur voluptate facere at, omnis ab optio placeat officiis!</p>
              </div>
            </div>
            <div class="post-info">
                <p>People Affeted : 27 M</p> 
                <p>Rank : 1</p>
              </div>
              <div class="post-info">
                <b><a href="faim.html">View details...</a></b>
              </div>
 </div>*/

 //---------------------------------------   END OF HTML STRUCTURE  -----------------------------------------------

        for (let i = 0;  i  < problems.length;  i ++) {
            // CREATION OF ELEMENTS
            var   problemDiv = document.createElement('div');
            var   problemPhoto = document.createElement('div');
            var   problemInfos = document.createElement('div');
            var   problemtitre = document.createElement('div');
            var   h3 = document.createElement('h3');
            var   problemDescription = document.createElement('div');
            var   p = document.createElement('p');
            var   p2 = document.createElement('p');
            var   p3 = document.createElement('p');
            var   postInfo = document.createElement('div');
            var   b = document.createElement('b');
            var   a = document.createElement('a');
            var   img = document.createElement('img');
           // END OF ELEMENT CREATION

           // AFFECTATION CSS OF CLASS 
                       problemDiv.setAttribute('class', 'problem');
                       problemPhoto.setAttribute('class', 'photo_problem');
                      
                       problemInfos.setAttribute('class', 'problem-infos');
                       problemtitre.setAttribute('class', 'titre-problem');
                       problemDescription.setAttribute('class', 'problem-description');
                       postInfo.setAttribute('class', 'post-info');
                       
            // END OF AFFECTATION

            // STRUCTURED ELEMENTS AND AFFECTATION OF VALUES
            img.setAttribute('src', problems[i].imgUrl);
            problemPhoto.appendChild(img);
            problemInfos.appendChild(problemtitre).appendChild(h3).innerHTML = problems[i].name;
            problemInfos.appendChild(problemDescription).appendChild(p).innerHTML = problems[i].detail;
            problemDiv.setAttribute('data-content', problems[i].name);
           postInfo.appendChild(p2).innerHTML = 'People Affeted :' + problems[i].peopleAffected;
           postInfo.appendChild(p3).innerHTML = 'Rank :' + problems[i].rankOfPriority;
           a.href = problems[i].pageLink;
           b.appendChild(a).innerHTML = 'View details...'
           postInfo.appendChild(b);

            
            problemDiv.appendChild(problemPhoto);
            problemDiv.appendChild(problemInfos);
            problemDiv.appendChild(postInfo);
            document.getElementById('humanity_problems_items').appendChild(problemDiv);
       
        }
      // FILTER FUNCTION

      function searchByName(){
        let filter = document.getElementById('searchInput').value.toUpperCase();
        let humanityItem = document.getElementById('humanity_problems_items');
        let problemClass = humanityItem.getElementsByClassName('problem');

        for (var i = 0; i < problemClass.length; i++) {
          let hh3 = problemClass[i].getAttribute('data-content');
          if(hh3){
            if(hh3.toUpperCase().indexOf(filter) > -1){
              problemClass[i].style.display = "";
            }else{
              problemClass[i].style.display = "none";
            }
          }
          
        }
      }    
       /* const searchByName = () =>{
          let filter = document.getElementById('searchInput').value.toUpperCase();
          let humanityItem = document.getElementById('humanity_problems_items');
          let problemClass = humanityItem.getElementsByClassName('problem');

          for (var i = 0; i < problemClass.length; i++) {
            let hh3 = problemClass[i].getAttribute('data-content');
            if(hh3){
              if(hh3.toUpperCase().indexOf(filter) > -1){
                problemClass[i].style.display = "";
              }else{
                problemClass[i].style.display = "none";
              }
            }
            
          }
        }*/