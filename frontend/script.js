document.getElementById("form").addEventListener("submit", async (e) => {
    e.preventDefault(); // evita che la pagina si ricarichi

    // prendi i valori dal form
    const prenotazione = {
        nome: document.getElementById("nome").value,
        cognome: document.getElementById("cognome").value,
        data_nascita: document.getElementById("data_nascita").value,
        cf: document.getElementById("cf").value,
        tipo_visita: document.getElementById("visita").value,
        medico: document.getElementById("medico").value,
        data: document.getElementById("data").value,
        orario: document.getElementById("orario").value
    };

    // invia la prenotazione al backend
    const res = await fetch("/prenotazioni", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(prenotazione)
    });

    const json = await res.json();

    // mostra notifica semplice
    alert("Prenotazione effettuata:\n" + JSON.stringify(json, null, 2));
});
