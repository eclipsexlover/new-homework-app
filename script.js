document.getElementById('testButton').addEventListener('click', function() {
    document.getElementById('output').textContent = 'Button clicked at ' + new Date().toLocaleTimeString();
});

function testApp() {
    return true;
}
