const prenotazioni = []; // mock backend

document.getElementById("form").addEventListener("submit", (e) => {
    e.preventDefault();

    const nuovaPrenotazione = {
        nome: document.getElementById("nome").value,
        cognome: document.getElementById("cognome").value,
        data_nascita: document.getElementById("data_nascita").value,
        cf: document.getElementById("cf").value,
        tipo_visita: document.getElementById("visita").value,
        medico: document.getElementById("medico").value,
        data: document.getElementById("data").value,
        orario: document.getElementById("orario").value,
        stato: "In attesa" // iniziale
    };

    prenotazioni.push(nuovaPrenotazione); // simula invio al backend

    showToast(`Prenotazione inviata e in attesa di conferma:\n${nuovaPrenotazione.tipo_visita} con ${nuovaPrenotazione.medico} il ${nuovaPrenotazione.data} ${nuovaPrenotazione.orario}`);
    renderPrenotazioni();
    document.getElementById("form").reset();
});

// Funzione toast
function showToast(messaggio) {
    const toast = document.getElementById("toast");
    toast.innerText = messaggio;
    toast.classList.add("show");
    setTimeout(() => toast.classList.remove("show"), 4000);
}

// Funzione per mostrare prenotazioni
function renderPrenotazioni() {
    const container = document.getElementById("lista-prenotazioni");
    container.innerHTML = "";
    prenotazioni.forEach(p => {
        const div = document.createElement("div");
        div.classList.add("prenotazione");
        if(p.stato === "In attesa") div.classList.add("in-attesa");
        else if(p.stato === "Confermata") div.classList.add("confermata");
        else if(p.stato === "Rifiutata") div.classList.add("rifiutata");

        div.innerHTML = `<strong>${p.tipo_visita}</strong> con <strong>${p.medico}</strong><br>
                         ${p.data} ${p.orario}<br>
                         Stato: <strong>${p.stato}</strong>`;
        container.appendChild(div);
    });
}

// --- Simuliamo conferma automatica dopo 5 secondi (solo demo) ---
setInterval(() => {
    prenotazioni.forEach(p => {
        if(p.stato === "In attesa") p.stato = "Confermata";
    });
    renderPrenotazioni();
}, 5000);
