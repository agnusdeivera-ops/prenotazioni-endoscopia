document.getElementById("form").addEventListener("submit", async (e) => {
    e.preventDefault();
    const res = await fetch("/prenotazioni", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({
            nome: document.getElementById("nome").value,
            cognome: document.getElementById("cognome").value,
            data_nascita: document.getElementById("data_nascita").value,
            cf: document.getElementById("cf").value,
            tipo_visita: document.getElementById("visita").value,
            data: document.getElementById("data").value,
            orario: document.getElementById("orario").value,
            medico: "Dr. Rossi"
        })
    });
    const json = await res.json();
    alert(JSON.stringify(json));
});
