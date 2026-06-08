/* ================================================
   contact.js — Form Validation & Feedback
   ================================================ */

document.addEventListener('DOMContentLoaded', () => {
  initContactForm();
});

function initContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (validateForm(form)) {
      handleSubmit(form);
    }
  });

  // Real-time validation
  form.querySelectorAll('.form-input, .form-textarea').forEach(input => {
    input.addEventListener('blur', () => validateField(input));
    input.addEventListener('input', () => clearError(input));
  });
}

function validateForm(form) {
  let valid = true;
  form.querySelectorAll('[required]').forEach(field => {
    if (!validateField(field)) valid = false;
  });
  return valid;
}

function validateField(field) {
  const val = field.value.trim();
  const id = field.id;
  let error = '';

  if (!val) {
    error = t('contact.form.error.required');
  } else if (id === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val)) {
    error = t('contact.form.error.email');
  } else if (id === 'message' && val.length < 20) {
    error = t('contact.form.error.message');
  }

  const errorEl = document.getElementById(`${id}-error`);
  if (errorEl) {
    errorEl.textContent = error;
    errorEl.style.display = error ? 'block' : 'none';
  }

  field.style.borderColor = error ? '#ef4444' : '';
  return !error;
}

function clearError(field) {
  const errorEl = document.getElementById(`${field.id}-error`);
  if (errorEl) {
    errorEl.textContent = '';
    errorEl.style.display = 'none';
  }
  field.style.borderColor = '';
}

function handleSubmit(form) {
  const btn = form.querySelector('[type="submit"]');
  const originalText = btn.innerHTML;

  btn.disabled = true;
  btn.innerHTML = `<span class="loader-spinner"></span> ${window.t ? t('contact.form.status.sending') : 'Envoi en cours...'}`;

  const formData = new FormData(form);

  // ==============================================================================
  // ⚠️ ATTENTION : POUR QUE CELA FONCTIONNE REELLEMENT ⚠️
  // 1. Allez sur https://formspree.io/ et créez un compte gratuit.
  // 2. Créez un nouveau formulaire ("New form").
  // 3. Remplacez "VOTRE_ID_FORMSPREE" ci-dessous par l'ID fourni par Formspree
  //    (il ressemble généralement à des lettres minscules, ex: "xdoqroez").
  // ==============================================================================
  const FORMSPREE_ENDPOINT = 'https://formspree.io/f/mnjollge';

  fetch(FORMSPREE_ENDPOINT, {
    method: 'POST',
    body: formData,
    headers: {
      'Accept': 'application/json'
    }
  })
    .then(response => {
      if (response.ok) {
        btn.innerHTML = window.t ? t('contact.form.status.sent') : 'Envoyé !';
        btn.style.background = 'linear-gradient(135deg, #16a34a, #4ade80)';
        form.reset();

        if (window.showToast) {
          showToast(window.t ? t('contact.form.status.success') : 'Message envoyé avec succès !', 'success');
        }
      } else {
        throw new Error('Erreur lors de l\'envoi');
      }
    })
    .catch(error => {
      btn.innerHTML = 'Erreur d\'envoi';
      btn.style.background = 'linear-gradient(135deg, #ef4444, #dc2626)';
      if (window.showToast) {
        showToast('Une erreur est survenue lors de l\'envoi.', 'error');
      }
      console.error(error);
    })
    .finally(() => {
      setTimeout(() => {
        btn.innerHTML = originalText;
        btn.disabled = false;
        btn.style.background = '';
      }, 4000);
    });
}
