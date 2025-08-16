const scrollableContainer = document.getElementById('scrollable-container');
const lineNumbers = document.getElementById('line-numbers');
const editor = document.getElementById('editor');

const codeLines = [
    '&lt;!<span class="dark-blue">DOCTYPE</span> <span class="light-blue">html</span>&gt;',
        '&lt;<span class="dark-blue">head</span>&gt;',
    '   &lt;<span class="dark-blue">link</span> <span class="light-blue">rel</span><span class="white">=</span><span class="orange">"stylesheet"</span> <span class="light-blue">href</span><span class="white">=</span><span class="orange">"<u>projects.css</u>"</span>&gt;',
    '&lt;/<span class="dark-blue">/head</span>&gt;',
    '&lt;<span class="dark-blue">body</span>&gt;',
    '   &lt;<span class="dark-blue">h1</span>&gt;',
    '<span class="real-text" id="h1-heading">Devon Hill</span>',
    '   &lt;/<span class="dark-blue">h1</span>&gt;',
    '   &lt;<span class="dark-blue">h3</span>&gt;',
    '<span class="real-text" id="h3-heading">&nbsp;&nbsp;Recent Computer Science Graduate</span>',
    '   &lt;/<span class="dark-blue">h3</span>&gt;',
    '   &lt;<span class="dark-blue">h6</span>&gt;',
    '<span class="real-text" id="h6-heading">&nbsp;&nbsp;Curious mind, growing with every line of code.</span>',
    '   &lt;/<span class="dark-blue">h6</span>&gt;',
    '&lt;/<span class="dark-blue">body</span>&gt;',
    '&lt;/<span class="dark-blue">html</span>&gt;',
]

editor.innerHTML = codeLines.map(line => `<div>${line}</div>`).join('');

const updateLineNumbers = () => {
    lineNumbers.innerHTML = '';
    const divs = editor.children;
    let num = 1;
    Array.from(divs).forEach((div, index) => {
        const numberOfLines = div.scrollHeight / parseFloat(getComputedStyle(lineNumbers).lineHeight);
        for(let i = 0; i < numberOfLines; i++) {
            const lineNumber = document.createElement('div');
            lineNumber.textContent = num;
            lineNumbers.appendChild(lineNumber);
            num++;
        }
    });
}

updateLineNumbers();