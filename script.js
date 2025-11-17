// ===== Shalum Site: Surah Search & Interactive Effects =====

// Get references
const searchInput = document.getElementById('searchInput');
const surahList = document.getElementById('surahList');
const surahs = surahList.getElementsByTagName('li');

// Live search filter
searchInput.addEventListener('keyup', () => {
  const filter = searchInput.value.toLowerCase();

  for (let i = 0; i < surahs.length; i++) {
    const a = surahs[i].getElementsByTagName('a')[0];
    const textValue = a.textContent || a.innerText;
    if (textValue.toLowerCase().indexOf(filter) > -1) {
      surahs[i].style.display = '';
      // Optional smooth appearance
      surahs[i].style.opacity = '1';
      surahs[i].style.transition = 'opacity 0.3s ease';
    } else {
      surahs[i].style.display = 'none';
    }
  }
});

// Optional: Dark/Light hover effect (black-and-white theme)
for (let i = 0; i < surahs.length; i++) {
  surahs[i].addEventListener('mouseenter', () => {
    surahs[i].style.background = '#000'; // black background
    surahs[i].style.color = '#fff';       // white text
    const link = surahs[i].getElementsByTagName('a')[0];
    link.style.color = '#fff';
    surahs[i].style.transform = 'translateY(-3px)';
    surahs[i].style.boxShadow = '0 8px 20px rgba(0,0,0,0.4)';
  });

  surahs[i].addEventListener('mouseleave', () => {
    surahs[i].style.background = '#fff'; // white card
    surahs[i].style.color = '#000';       // black text
    const link = surahs[i].getElementsByTagName('a')[0];
    link.style.color = '#000';
    surahs[i].style.transform = 'translateY(0)';
    surahs[i].style.boxShadow = '0 3px 8px rgba(0,0,0,0.1)';
  });
});

// Optional: Dynamic page title
document.title = "Shalum Site - Quran Surahs";