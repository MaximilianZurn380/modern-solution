import mysql.connector
from flask import Flask, request, render_template, redirect, url_for, session
from datetime import timedelta


app = Flask(__name__)

app.secret_key = 'BAD_SECRET_KEY'
app.config['PERMANENT_SESSION_LIFETIME'] = timedelta(minutes=1)


def get_db_connection():
    return mysql.connector.connect(
        host = "10.2.2.245",
        user = "Max@%",
        password = "AX-d120",
        database = "torgersen_db",
        charset = "utf8mb4",
        collation = "utf8mb4_general_ci"
    )


@app.route("/register", methods = ["GET", "POST"])
def register():

    if request.method == "POST":
        email = request.form["email"]
        password = request.form["password"]
        full_name = request.form["full_name"]

        db = get_db_connection()
        cursor = db.cursor()

        cursor.execute("SELECT * FROM customers WHERE email = %s", (email,))
        if cursor.fetchone():
            return "email alredy registered"

        cursor.execute(
            "INSERT INTO customers (email, password, full_name) "
            "VALUES (%s, %s, %s)",
            (email, password, full_name)
        )
        db.commit()
        cursor.close()
        db.close()

        session["email"] = email
        return redirect(url_for("store"))
    return render_template("register.html")


@app.route("/")
@app.route("/login", methods = ["GET", "POST"])
def login():
    if request.method == "POST":
        email = request.form["email"]
        password = request.form["password"]

        db = get_db_connection()
        cursor = db.cursor()

        cursor.execute("SELECT * FROM customers WHERE email = %s "
                        "AND password = %s", (email, password))
        user = cursor.fetchone()

        cursor.close()
        db.close()

        if user:
            session["email"] = email
            return redirect(url_for("store"))
        else:
            session["email"] = email
            return "Wrong e-mail or password"
    else:
        return render_template("index.html")

@app.route("/store", methods = ["GET", "POST"])
def store():
    if "email" in session:
        return render_template("store.html")
    else:
        return redirect(url_for("login"))
    
@app.route("/logout")
def logout():
    session.pop("email", None)
    return redirect(url_for("login"))


if __name__ == "__main__":
    app.run(debug=True)
