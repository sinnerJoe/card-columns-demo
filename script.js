
var lastId = 2;
function startDraggingCard(e){
    e.dataTransfer.setData('cardid', e.target.id);
    e.dataTransfer.setData('cardobj', e.target);
    e.dataTransfer.dropEffect = "move";
    console.log("start dragging: ", e.target)
}

function onDrop(e) {
    var movedElement = document.getElementById(e.dataTransfer.getData("cardid"));
    (e.currentTarget || e.target).appendChild(movedElement);
}

function init(){

        var n= document.getElementsByClassName("card");
        console.log(n)
        for (var i=0; i<n.length; i++){
            n[i].addEventListener('dragstart', startDraggingCard, false);
        }
   }

function dragOver(ev) {
 ev.preventDefault();
 ev.dataTransfer.dropEffect = "move"
}
function addCard(){
    var val = document.getElementById('text-input').value;
    var element = document.createElement('div');
    element.className = 'card';
    element.id = lastId++;
    element.textContent = val;
    element.draggable = true;
    document.getElementsByClassName('column')[0].appendChild(element);
    init();
}