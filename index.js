
// In-memory database of questions
// static questions data
const QUESTIONS = [];

// Create your initial store
// tracks progress over time
const STORE = {
    // Current question
    // User's answer choice(s)
    // Current view
    // Score? Anything else?
};

// Template generators
// generates HTML based on data
function generateAnswerList(answers) {}

// Rendering functions
// reads STORE, calls generators, then adds HTML to DOM
function renderQuestionText() {}

// Event handlers
// get user input, update STORE, then call renderers
function handleAnswerSubmitted() {
  $('.user-controls').on('click', '.submit-answer', () => {
    // Retrieve answer identifier of user-checked radio button
    // Perform check: User answer === Correct answer?
    // Update STORE and render appropriate section
  });
}

// initialize event listeners when DOM is ready
$(function(){
    handleAnswerSubmitted();
});