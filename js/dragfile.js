dragElement(document.getElementById("file"));

function dragElement(element) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById("headerFile" )) {
    document.getElementById("headerFile").onmousedown = dragMouseDown;
  } else {
    element.onmousedown = dragMouseDown;
  }

  function dragMouseDown(event) {
    event = event || window.event;
    event.preventDefault();
   
    pos3 = event.clientX;
    pos4 = event.clientY;
    document.onmouseup = closeDragElement;
   
    document.onmousemove = elementDrag;
  }

  function elementDrag(event) {
    event = event || window.event;
    event.preventDefault();
    pos1 = pos3 - event.clientX;
    pos2 = pos4 - event.clientY;
    pos3 = event.clientX;
    pos4 = event.clientY;

    element.style.top = (element.offsetTop - pos2) + "px";
    element.style.left = (element.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    document.onmouseup = null;
    document.onmousemove = null;
  }
}