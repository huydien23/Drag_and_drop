var boxes = document.querySelectorAll('.box');
var targetList = document.querySelectorAll('.target');

var currentTarget = null;

targetList.forEach(target => {
    target.addEventListener('dragstart', function(e){
        this.classList.add('dragging');
        currentTarget = this;
    })
    
    target.addEventListener('dragend', function(e){
        this.classList.remove('dragging');
    })
});

boxes.forEach(box=>{
    box.addEventListener('dragover', function (e){
        e.preventDefault();
        // this.appendChild(currentTarget);
    })
    box.addEventListener('drop', function(e){
        if(box.querySelector('.target')){
            return;
        }
        this.appendChild(currentTarget);;
    })  
})
// dragover
