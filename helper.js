function getYCoordinate(i) {
  if (i <= 2) return 2;
  if (i >= 3 && i <= 5) return 1;
  if (i >= 6) return 0;
}

function createArray(length) {
  var arr = new Array(length || 0),
    i = length;

  if (arguments.length > 1) {
    var args = Array.prototype.slice.call(arguments, 1);
    while (i--) arr[length - 1 - i] = createArray.apply(this, args);
  }

  return arr;
}

function putXInTd(td) {
  putVariableInTd(td, 'X');
}

function putOInTd(td) {
  putVariableInTd(td, 'O');
}

function putVariableInTd(td, variable) {
  const p = document.createElement('P');
  const textnode = document.createTextNode(variable);
  p.appendChild(textnode);
  td.appendChild(p);
}

function clearTd(td) {
  const paras = td.getElementsByTagName('p');
  for (let i = 0; i < paras.length; i++) {
    const element = paras[i];
    element.remove();
  }
}


function showMessage(message) {
  const messageContainer = document.getElementById('messageContainer');
  messageContainer.innerHTML = message;
}
