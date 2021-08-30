(function () {
    const updateBtnElement = document.querySelectorAll('.update-btn');
    const cancelBtn = document.querySelectorAll('.cancel-btn');

    updateBtnElement.forEach(btn => {

        btn.addEventListener('click', (e) => {
            console.log(e);

            const listItem = e.target.parentElement.parentElement.parentElement;
            listItem.children[1].style.display = 'none';
            listItem.children[2].style.display = 'none';

            listItem.children[0].style.display = 'flex';
            listItem.children[0].children[1].style.display = 'inline-block';
            listItem.children[3].style.display = 'inline-block';
            listItem.children[0].children[0].focus();
        });
    });

    cancelBtn.forEach(btn => {
        console.log(btn);
        btn.addEventListener('click', (e) => {
            const listItem = e.target.parentElement;
            listItem.children[1].style.display = 'inline-block';
            listItem.children[2].style.display = 'flex';

            listItem.children[0].style.display = 'none';
            listItem.children[0].children[1].style.display = 'none';
            listItem.children[3].style.display = 'none';

        });
    });

}());