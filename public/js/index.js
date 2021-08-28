(function (){
    const updateBtnElement = document.querySelector('.update-btn');
    const taskElement = document.querySelector('.task');
    const updateFieldElement = document.querySelector('.update-field');
    const confirmBtn = document.querySelector('.confirm-btn');
    const cancelBtn = document.querySelector('.cancel-btn');
    const deleteBtn = document.querySelector('.delete-btn');
    
    updateBtnElement.addEventListener('click', (e)=> {
        taskElement.style.display = 'none';
        deleteBtn.style.display ='none';
        updateBtnElement.style.display ='none';
        
        updateFieldElement.style.display = 'inline-block';
        confirmBtn.style.display ='inline-block';
        cancelBtn.style.display ='inline-block';
    });

    cancelBtn.addEventListener('click', (e)=> {
        taskElement.style.display = 'inline-block';
        updateBtnElement.style.display = 'inline-block';
        deleteBtn.style.display ='inline-block';

        confirmBtn.style.display ='none';
        cancelBtn.style.display ='none';
    });
}());