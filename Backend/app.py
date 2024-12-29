from flask import Flask, request, jsonify
from flask_mail import Mail, Message
from flask_cors import CORS
import logging

app = Flask(__name__)
CORS(app)

# Configuring Flask-Mail with provided credentials
app.config['MAIL_SERVER'] = 'smtp.gmail.com'
app.config['MAIL_PORT'] = 587
app.config['MAIL_USE_TLS'] = True
app.config['MAIL_USERNAME'] = 'emailsenderforsanat@gmail.com'
app.config['MAIL_PASSWORD'] = 'nbjf gqeb fylq bttp'

mail = Mail(app)

# Set up logging
logging.basicConfig(level=logging.DEBUG)

@app.route('/send_email', methods=['POST'])
def send_email():
    try:
        data = request.get_json()
        app.logger.debug(f"Received data: {data}")
        name = data['name']
        email = data['email']
        message = data['message']

        msg = Message(
            subject=f"Message from {name}",
            sender=email,
            recipients=['misrasanat123@gmail.com'],
            body=f"{message}\n\nFrom: {name}\nEmail: {email}"
        )

        mail.send(msg)
        return jsonify({"message": "Email sent successfully"}), 200
    except Exception as e:
        app.logger.error(f"Error occurred: {e}")
        return jsonify({"message": "Failed to send email", "error": str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True, port=5000)
