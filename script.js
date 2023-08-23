
  // Funzione per verificare se il footer è visibile nella finestra
  function isFooterVisible() {
    const footer = document.querySelector('footer');
    const rect = footer.getBoundingClientRect();
    return rect.top <= window.innerHeight && rect.bottom >= 0;
  }

  // Funzione per gestire l'animazione del footer
  function handleFooterAnimation() {
    if (isFooterVisible()) {
      document.querySelector('footer').classList.add('show-footer');
    }
  }

  // Aggiungi un listener per l'evento di scroll
  window.addEventListener('scroll', handleFooterAnimation);

  // Esegui l'animazione al caricamento della pagina se il footer è già visibile
  window.addEventListener('load', handleFooterAnimation);
// Aggiungi una classe attiva al pulsante cliccato
document.querySelectorAll('.contact-button').forEach(button => {
    button.addEventListener('click', () => {
      // Rimuovi la classe attiva da tutti i pulsanti
      document.querySelectorAll('.contact-button').forEach(btn => {
        btn.classList.remove('active');
      });
  
      // Aggiungi la classe attiva al pulsante cliccato
      button.classList.add('active');
    });
  });
// Funzione per gestire il clic sulle stelle delle abilità
function handleSkillRating(skillItem, rating) {
    const skillRating = skillItem.querySelector('.skill-rating');
    const stelle = skillRating.querySelectorAll('.stella');
  
    stelle.forEach((stella, index) => {
      if (index < rating) {
        stella.classList.add('active');
      } else {
        stella.classList.remove('active');
      }
    });
  }
  
  // Aggiungi un listener di evento per il clic sulle stelle delle abilità
  document.querySelectorAll('.skill-item').forEach(skillItem => {
    const stelle = skillItem.querySelectorAll('.stella');
  
    stelle.forEach((stella, index) => {
      stella.addEventListener('click', () => {
        handleSkillRating(skillItem, index + 1);
      });
    });
  });

  // Aggiungi questo JavaScript al tuo file "script.js" o in una sezione <script> nel tuo HTML

// Funzione per gestire la visualizzazione del div in base alla dimensione dello schermo
function gestisciDimensioniSchermo() {
  const overlay2 = document.getElementById("overlay2");
  const fotosfondo = document.getElementById("fotosfondo");

  // Ottieni la larghezza dello schermo corrente
  const larghezzaSchermo = window.innerWidth;

  // Modifica la visualizzazione in base alla larghezza dello schermo
  if (larghezzaSchermo <= 768) {
    overlay2.style.display = "block";
    fotosfondo.style.display = "none";
  } else {
    overlay2.style.display = "none";
    fotosfondo.style.display = "block";
  }
}

// Esegui la funzione inizialmente e ogni volta che la finestra viene ridimensionata
gestisciDimensioniSchermo();
window.addEventListener("resize", gestisciDimensioniSchermo);

    
