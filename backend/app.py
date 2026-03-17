from flask import Flask, request, jsonify

app = Flask(__name__)

prenotazioni = []

@app.route("/prenotazioni", methods=["GET"])
def get_prenotazioni():
    return jsonify(prenotazioni)

@app.route("/prenotazioni", methods=["POST"])
def crea_prenotazione():
    data = request.json
    # Controllo slot già occupato per stesso medico, data e orario
    for p in prenotazioni:
        if p["data"] == data["data"] and p["orario"] == data["orario"] and p["medico"] == data["medico"]:
            return jsonify({"errore": "Slot già occupato"}), 400
    prenotazioni.append(data)
    return jsonify({"message": "Prenotazione creata"}), 201

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)
