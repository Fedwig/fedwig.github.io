document.addEventListener('DOMContentLoaded', function () {
    // Fade in the content smoothly when page loads
    const content = document.querySelector('.main-container');
    content.style.opacity = 0;
    setTimeout(() => {
        content.style.opacity = 1;
    }, 200);

    // Optional: Add subtle background movement on mouse move
    document.body.addEventListener('mousemove', (e) => {
        let x = e.clientX / window.innerWidth * 100;
        let y = e.clientY / window.innerHeight * 100;
        document.body.style.backgroundPosition = `${x}% ${y}%`;
    });

    // Delay the typewriter effect by 2 seconds
    setTimeout(() => {
        consoleText(['FEDWIG', 'B T K B T K'], 'text', ['#d90000']);
    }, 2000);  // Delay starts after 2 seconds
});

// function([string1, string2], target id, [color1, color2])
function consoleText(words, id, colors) {
    if (colors === undefined) colors = ['#fff'];
    var visible = true;
    var con = document.getElementById('console');
    var letterCount = 1;
    var x = 1;
    var waiting = false;
    var target = document.getElementById(id);
    target.setAttribute('style', 'color:' + colors[0]);

    window.setInterval(function() {
        if (letterCount === 0 && waiting === false) {
            waiting = true;
            target.innerHTML = words[0].substring(0, letterCount);
            window.setTimeout(function() {
                var usedColor = colors.shift();
                colors.push(usedColor);
                var usedWord = words.shift();
                words.push(usedWord);
                x = 1;
                target.setAttribute('style', 'color:' + colors[0]);
                letterCount += x;
                waiting = false;
            }, 1000);
        } else if (letterCount === words[0].length + 1 && waiting === false) {
            waiting = true;
            window.setTimeout(function() {
                x = -1;
                letterCount += x;
                waiting = false;
            }, 1000);
        } else if (waiting === false) {
            target.innerHTML = words[0].substring(0, letterCount);
            letterCount += x;
        }
    }, 120);

    window.setInterval(function() {
        if (visible === true) {
            con.className = 'console-underscore hidden';
            visible = false;
        } else {
            con.className = 'console-underscore';
            visible = true;
        }
    }, 400);
}
