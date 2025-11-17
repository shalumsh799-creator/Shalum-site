// ===== Search Talifah =====
const searchInput = document.getElementById('searchInput');
const talifahList = document.getElementById('talifahList');
const talifahs = talifahList.getElementsByTagName('li');

searchInput.addEventListener('keyup', function() {
    const filter = searchInput.value.toLowerCase();
    for (let i = 0; i < talifahs.length; i++) {
        const a = talifahs[i].getElementsByTagName('a')[0];
        const textValue = a.textContent || a.innerText;
        talifahs[i].style.display = textValue.toLowerCase().indexOf(filter) > -1 ? '' : 'none';
    }
});