let set = new Set;

let elems = document.querySelectorAll('p');

for (let elem of elems) {
  elem.addEventListener('click', function(){
    set.add(this);
  });
}

let button = document.querySelector('button');
button.addEventListener('click', function(){
  for(let elem of set){
    elem.innerHTML += "!"
  }

  set.clear();
});
