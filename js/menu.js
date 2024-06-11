var menut = document.querySelectorAll('.i-m')

function selectLink(){
    menut.forEach((item)=>
        item.classList.remove('ativo')
    )
    this.classList.add('ativo')
}
menut.forEach((item)=>
    item.addEventListener('click', selectLink)
)
var bte = document.querySelector('#bt-e')
var menSide = document.querySelector('.menu')

bte.addEventListener('click', function(){
    menSide.classList.toggle('expb')
})
