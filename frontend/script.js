document.getElementById("form").addEventListener("submit", async (e) => {
    e.preventDefault();

    const prenotazione = {
        nome: document.getElementById("nome").value,
        cognome: document.getElementById("cognome").value,
        data_nascita: document.getElementById("data_nascita").value,
        cf: document.getElementById("cf").value,
        tipo_visita: document.getElementById("visita").value,
        medico: document.getElementById("medico").value,
        data: document.getElementById("data").value,
        orario: document.getElementById("orario").value,
        stato: "In attesa di conferma"
    };

    const res = await fetch("/prenotazioni", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(prenotazione)
    });

    const json = await res.json();

    // Mostra il toast
    const toast = document.getElementById("toast");
    toast.innerText = `Prenotazione inviata e in attesa di conferma!\n` +
                      `${prenotazione.tipo_visita} con ${prenotazione.medico}\n` +
                      `${prenotazione.data} ${prenotazione.orario}`;
    toast.classList.add("show");

    setTimeout(() => {
        toast.classList.remove("show");
    }, 4000);

    // Resetta il form
    document.getElementById("form").reset();
});
