document.getElementById('search-btn').addEventListener('click', function() {
    var searchTerm = document.getElementById('search-box').value.toLowerCase();
    var boxes = document.querySelectorAll('.box');
    
    boxes.forEach(function(box) {
        var title = box.querySelector('h3').textContent.toLowerCase();
        if (title.includes(searchTerm)) {
            box.style.display = 'block';
        } else {
            box.style.display = 'none';
        }
    });
});
