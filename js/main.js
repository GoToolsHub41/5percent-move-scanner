// Main JavaScript file for ToolGalaxyHub
document.addEventListener('DOMContentLoaded', () => {
    console.log('ToolGalaxyHub is ready!');

    // A simple router to initialize tool-specific logic
    const page = document.body.id || '';

    switch (page) {
        case 'word-counter-page':
            initializeWordCounter();
            break;
        // Add more cases for other tools as they are created
    }
});

function initializeWordCounter() {
    const textInput = document.getElementById('text-input');
    const wordCountResults = document.getElementById('word-count-results');

    if (textInput && wordCountResults) {
        textInput.addEventListener('input', () => {
            const text = textInput.value;

            // Word count
            const words = text.trim().split(/\s+/).filter(word => word.length > 0);
            const wordCount = words.length;

            // Character count
            const charCount = text.length;

            // Sentence count
            const sentences = text.split(/[.!?]+/).filter(sentence => sentence.trim().length > 0);
            const sentenceCount = sentences.length;

            wordCountResults.innerHTML = `
                <p>Words: ${wordCount}</p>
                <p>Characters: ${charCount}</p>
                <p>Sentences: ${sentenceCount}</p>
            `;
        });
    }
}
