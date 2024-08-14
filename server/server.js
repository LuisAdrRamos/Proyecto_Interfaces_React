const express = require("express");
const mysql2 = require("mysql2");
const cors = require("cors");
const path = require("path");

const app = express();

app.use(express.static(path.join(__dirname, "public")));
app.use(cors());
app.use(express.json());

app.listen(5000, () => {
  console.log(`listening`);
});

const db = mysql2.createConnection({
  host: 'localhost',
  user: 'root',
  password: '12345',
  database: 'usuarios',
  port: '3308'
});  

db.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err.message);
    return;
  }
  console.log('Connected to the database!');
});

app.get('/', (re, res) => {
  return res.json("Form Backend Side of users")
})

app.get("/datos_users", (req, res) => {
  const sql = "SELECT * FROM datos_users";
  db.query(sql, (err, result) => {
    if (err) res.json({ message: "Server error" });
    return res.json(result);
  });
});

app.post('/login', (req, res) => {
  const { user, pass } = req.body;
  const sql = "SELECT * FROM datos_users WHERE user = ? AND contraseña = ?";

  db.query(sql, [user, pass], (err, result) => {
    if (err) {
      return res.status(500).json({ message: "Error del servidor" });
    }

    if (result.length > 0) {
      return res.status(200).json({ success: true, message: "Inicio de sesión exitoso" });
    } else {
      return res.status(401).json({ success: false, message: "Usuario o contraseña incorrectos" });
    }
  });
});

app.post('/register', (req, res) => {
  const { correo, username, password } = req.body;
  const checkUserQuery = "SELECT * FROM datos_users WHERE user = ?";
  db.query(checkUserQuery, [username], (err, result) => {
    if (err) {
      return res.status(500).json({ message: "Error del servidor" });
    }

    if (result.length > 0) {
      return res.status(400).json({ success: false, message: "El usuario ya existe" });
    } else {
      const insertQuery = "INSERT INTO datos_users (correo, user, contraseña) VALUES (?, ?, ?)";
      db.query(insertQuery, [correo, username, password], (err, result) => {
        if (err) {
          return res.status(500).json({ message: "Error al guardar el usuario" });
        }
        return res.status(201).json({ success: true, message: "Registro exitoso" });
      });
    }
  });
});