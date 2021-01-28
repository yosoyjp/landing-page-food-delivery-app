window.onload = function () {
    let togleMenu = false;
    const menuList = document.getElementById('list-options-header');
    const menuTogleButton = document.getElementsByClassName('toggle-menu')[0];
    menuTogleButton.addEventListener('click', function () {
            togleMenu = !togleMenu;
            hidden(menuTogleButton.children [togleMenu ? 0 : 1]);
            show(menuTogleButton.children [!togleMenu ? 0 : 1]);
            if(togleMenu) menuList.classList.add('show');
            else menuList.classList.remove('show');
        });
};

function hidden(element){
    element.classList.add('hidden');
    setTimeout(() => element.classList.add('none'), 200);
}

function show(element){
    setTimeout(() => element.classList.remove('none'), 200);
    element.classList.remove('hidden');
}