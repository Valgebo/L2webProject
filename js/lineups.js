document.addEventListener('DOMContentLoaded', function() {
    var titles = document.querySelectorAll('.gametitle');
    
    titles.forEach(function(title) {
        title.addEventListener('click', function() {
            var nextElement = title.nextElementSibling;

            if (nextElement && nextElement.classList.contains('lineup_img')) {
                if (nextElement.classList.contains('show')) {
                    nextElement.classList.remove('show');
                    nextElement.style.display = 'none';
                } else {
                    nextElement.style.display = 'block';
                    setTimeout(() => {
                        nextElement.classList.add('show');
                    }, 10);
                }
            }
        });
    });
});