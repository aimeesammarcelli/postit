    let id = 1;

  document.querySelectorAll('.post-it-note').forEach((item, index) => {
    item.onclick = function () {

      var ok = true;
  
      if (ok === true) {
        var div = document.createElement('a');
        div.style.backgroundColor = "#ffd707";
        div.style.left = "50px";
        div.style.top = "50px";
        div.style.padding = "20px";
        div.style.borderRadius = "100%";
        div.style.borderColor = " black";
        // div.style.cursor = 'pointer';
        div.setAttribute('draggable', 'true')
        div.setAttribute('ondragstart','drag(event)')
        div.setAttribute('href', '#popup' + id);
        div.setAttribute('class', 'button')
        div.setAttribute('class', 'post-it-note')
        div.setAttribute('ondragstart', 'dragstart_handler(event)')
        div.setAttribute('draggable', 'true')
        div.setAttribute('id','p'+id)
        
        
        document.getElementsByTagName('article')[0].appendChild(div); 

        let newPopup = document.createElement('div');
        newPopup.setAttribute('id','popup'+id)
        newPopup.setAttribute('class','overlay')
        newPopup.innerHTML = `<div class="popup">
             <div class="edit" contenteditable></div>
             <a class="close" href="#">&times;</a>
          </div>`

          document.getElementById('postIt').appendChild(newPopup);
        


        id++;
      }
    };
  })


  function dragstart_handler(ev) {
    // On ajoute l'identifiant de l'élément cible à l'objet de transfert
    ev.dataTransfer.setData("index.html", ev.target.id);
    ev.dataTransfer.dropEffect = "move";
   }
   function dragover_handler(ev) {
    ev.preventDefault();
    ev.dataTransfer.dropEffect = "move"
   }
   function drop_handler(ev) {
    ev.preventDefault();
    // On obtient l'identifiant de la cible et on ajoute l'élément déplacé
    // au DOM de la cible
    var data = ev.dataTransfer.getData("index.html");
    ev.target.appendChild(document.getElementById(data));
   }
   