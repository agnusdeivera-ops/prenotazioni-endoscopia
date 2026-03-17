document.getElementById("form").addEventListener("submit", async (e) => {
  e.preventDefault();
  const res = await fetch("http://localhost:5000/prenotazioni", {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({
      nome: document.getElementById("nome").value,
      tipo_visita: document.getElementById("visita").value,
      data: document.getElementById("data").value,
      orario: document.getElementById("orario").value,
      medico: "Dr. Rossi"
    })
  });
  const json = await res.json();
  alert(JSON.stringify(json));
});
