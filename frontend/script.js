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

    alert(`La tua prenotazione è stata inviata e risulta in attesa di conferma:\n\n` +
          `Nome: ${prenotazione.nome} ${prenotazione.cognome}\n` +
          `Visita: ${prenotazione.tipo_visita}\n` +
          `Medico: ${prenotazione.medico}\n` +
          `Data/Ora: ${prenotazione.data} ${prenotazione.orario}\n` +
          `Stato: ${prenotazione.stato}`);
});
