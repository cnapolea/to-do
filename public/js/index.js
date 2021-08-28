(function (){
    const taskContainerElement = document.querySelector('.task-btn');
    const task = document.querySelector('.task');
    const updateBtnElement = document.querySelector('.update-btn');
    const updateFormElement = document.querySelector('.update-form');
    const updateFieldElement = document.getElementById('update-field');
    const cancelBtn = document.querySelector('.cancel-btn');
    const confirmBtn = document.querySelector('.confirm-btn');
    
    updateBtnElement.addEventListener('click', (e)=> {
        taskContainerElement.style.display = 'none';
        task.style.display = 'none';
         
        updateFormElement.style.display = 'flex';
        updateFieldElement.focus();
        cancelBtn.style.display = 'inline-block';
        confirmBtn.style.display = 'inline-block';
    });
    
    cancelBtn.addEventListener('click', (e)=> {
        taskContainerElement.style.display ='flex';
        task.style.display = 'block';
        
        confirmBtn.style.display = 'none';
        cancelBtn.style.display = 'none';
        updateFormElement.style.display = 'none';
    });
}());