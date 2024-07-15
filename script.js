
let currentStep = 0;
const formSteps = document.querySelectorAll('.form-page');
const questionIndicator = document.getElementById('questionIndicator');
const progressBars = document.querySelectorAll('.progress-bar');

function updateQuestionIndicator() {
    questionIndicator.textContent = `QUESTION ${currentStep + 1} / ${formSteps.length}`;
}

function updateProgressBar() {
    progressBars.forEach((progressBar, index) => {
        if (index <= currentStep) {
            progressBar.style.width = "100%";
        } else {
            progressBar.style.width = "0%";
        }
    });
}

function showStep(step) {
    formSteps.forEach((formStep, index) => {
        formStep.style.display = index === step ? 'block' : 'none';
    });
    updateQuestionIndicator();
    updateProgressBar();
}

function nextPage() {
    if (currentStep < formSteps.length - 1) {
        currentStep++;
        showStep(currentStep);
    }
}

function previousStep() {
    if (currentStep > 0) {
        currentStep--;
        showStep(currentStep);
    }
}
function exitInterview() {
    console.log('Exiting interview');
    alert('Exiting the interview');
    window.location.href = 'exitPage.html'; // replace with the actual URL you want to redirect to
}

// Initialize the indicator and progress bar on page load
updateQuestionIndicator();
updateProgressBar();
showStep(currentStep);
      





// Add event listeners for option buttons
document.querySelectorAll('.option').forEach(button => {
    button.addEventListener('click', () => {
        button.classList.toggle('selected');
    });
});

// Initialize the first page
document.getElementById('page-1').style.display = 'block';



function selectOption3(selectedOption) {
    const options = document.querySelectorAll('.option');
    options.forEach(option => {
        option.classList.remove('selected');
    });
    selectedOption.classList.add('selected');
}
function selectOption(selectedOption) {
    const options = document.querySelectorAll('.selection-option');
    options.forEach(option => {
        option.classList.remove('selected');
    });
    selectedOption.classList.add('selected');
}


