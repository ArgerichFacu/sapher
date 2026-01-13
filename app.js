// ===== EDITAR (datos reales) =====
// WhatsApp: sin + ni espacios. Ejemplo Bariloche: 5492941234567
const WHATSAPP_NUM = "2944535384";
const WA_LABEL = "+54 294-4535384";
const TEL_LABEL = "+54 294-4535384";
const ZONA = "Bariloche - Dina Huapi";
const HORARIOS = "A coordinar";
const EMAIL_TO = "contacto@sapher.com.ar";
// ================================


// ===== Utilidades =====
const waLink = (text = "") =>
  `https://wa.me/${WHATSAPP_NUM}?text=${encodeURIComponent(text)}`;


// ===== Año automático =====
const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = new Date().getFullYear();


// ===== Labels =====
const setText = (id, value) => {
  const el = document.getElementById(id);
  if (el) el.textContent = value;
};

setText("waLabel", WA_LABEL);
setText("telLabel", TEL_LABEL);
setText("zona", ZONA);
setText("zonaLabel", ZONA);
setText("horarios", HORARIOS);


// ===== Botones WhatsApp simples =====
const btnWA1 = document.getElementById("btnWhatsApp");
const btnWA2 = document.getElementById("btnWhatsApp2");

if (btnWA1) btnWA1.href = waLink();
if (btnWA2) btnWA2.href = waLink();


// ===== WhatsApp con formulario =====
const btnWA3 = document.getElementById("btnWhatsApp3");

if (btnWA3) {
  btnWA3.addEventListener("click", () => {
    const name = document.getElementById("qName")?.value.trim() || "____";
    const loc  = document.getElementById("qLocation")?.value.trim() || "____";
    const type = document.getElementById("qType")?.value || "____";
    const time = document.getElementById("qTime")?.value.trim() || "____";

    const msg =
      `Hola, soy ${name}. Necesito coordinar un servicio con SAPHER.\n` +
      `Ubicación: ${loc}\n` +
      `Tipo: ${type}\n` +
      `Horario: ${time}`;

    btnWA3.href = waLink(msg);
  });
}


// ===== Email (forzado a Gmail Web) =====
const btnEmail = document.getElementById("btnEmail");

if (btnEmail) {
  btnEmail.addEventListener("click", (e) => {
    e.preventDefault();

    const name    = document.getElementById("eName")?.value.trim() || "____";
    const phone   = document.getElementById("ePhone")?.value.trim() || "____";
    const subject = document.getElementById("eSubject")?.value.trim() || "Consulta";
    const msg     = document.getElementById("eMsg")?.value.trim() || "____";

    const body =
      `Hola SAPHER,\n\n` +
      `Mi nombre es: ${name}\n` +
      `Teléfono: ${phone}\n\n` +
      `Mensaje:\n${msg}\n`;

    const gmailUrl =
      `https://mail.google.com/mail/?view=cm&fs=1` +
      `&to=${encodeURIComponent(EMAIL_TO)}` +
      `&su=${encodeURIComponent(subject)}` +
      `&body=${encodeURIComponent(body)}`;

    window.open(gmailUrl, "_blank");
  });
}


// ===== Toggle Modo Claro / Oscuro =====
const themeBtn = document.getElementById("theme-toggle");
const body = document.body;

const savedTheme = localStorage.getItem("theme") || "light";
body.setAttribute("data-theme", savedTheme);

const updateThemeIcon = () => {
  if (!themeBtn) return;
  themeBtn.textContent =
    body.getAttribute("data-theme") === "light" ? "🌙" : "☀️";
};

updateThemeIcon();

if (themeBtn) {
  themeBtn.addEventListener("click", () => {
    const current = body.getAttribute("data-theme");
    const next = current === "dark" ? "light" : "dark";

    body.setAttribute("data-theme", next);
    localStorage.setItem("theme", next);
    updateThemeIcon();
  });
}
