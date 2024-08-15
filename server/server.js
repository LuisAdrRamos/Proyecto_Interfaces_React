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
      const userID = result[0].id;
      return res.status(200).json({ success: true, message: "Inicio de sesión exitoso", userID });
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

app.get("/perfil/:id", (req, res) => {
  const { id } = req.params;
  const sql = "SELECT * FROM datos_users WHERE id = ?";
  db.query(sql, [id], (err, result) => {
    if (err) return res.status(500).json({ message: "Server error" });
    if (result.length === 0) return res.status(404).json({ message: "User not found" });
    return res.json(result[0]);
  });
});

app.put('/perfil/:id', (req, res) => {
  const { id } = req.params;
  const { correo, user, contraseña } = req.body;

  const sql = "UPDATE datos_users SET correo = ?, user = ?, contraseña = ? WHERE id = ?";
  db.query(sql, [correo, user, contraseña, id], (err, result) => {
    if (err) {
      return res.status(500).json({ message: "Error del servidor" });
    }
    return res.status(200).json({ success: true, message: "Datos actualizados exitosamente" });
  });
});

app.delete('/perfil/:id', (req, res) => {
  const { id } = req.params;

  const sql = "DELETE FROM datos_users WHERE id = ?";
  db.query(sql, [id], (err, result) => {
    if (err) {
      return res.status(500).json({ message: "Error del servidor" });
    }
    if (result.affectedRows === 0) {
      return res.status(404).json({ message: "Usuario no encontrado" });
    }
    return res.status(200).json({ success: true, message: "Cuenta borrada exitosamente" });
  });
});

app.post('/guardar-compra', (req, res) => {
  const { userID, productos, total } = req.body;

  const sql = "INSERT INTO compras (user_id, productos, total, fecha) VALUES (?, ?, ?, NOW())";
  const productosJSON = JSON.stringify(productos);
  db.query(sql, [userID, productosJSON, total], (err, result) => {
    if (err) {
      console.error("Error al guardar la compra:", err);
      return res.status(500).json({ success: false, message: "Error al guardar la compra" });
    }
    return res.status(201).json({ success: true, message: "Compra guardada exitosamente" });
  });
});

app.get('/compras/:userID', (req, res) => {
  const { userID } = req.params;
  const sql = "SELECT * FROM compras WHERE user_id = ? ORDER BY fecha DESC";

  db.query(sql, [userID], (err, result) => {
    if (err) {
      console.error("Error al obtener las compras:", err);
      return res.status(500).json({ success: false, message: "Error al obtener las compras" });
    }
    return res.status(200).json(result);
  });
});

app.delete('/eliminar-compra/:id', (req, res) => {
  const { id } = req.params;

  const sql = "DELETE FROM compras WHERE id = ?";
  db.query(sql, [id], (err, result) => {
    if (err) {
      console.error("Error al eliminar la compra:", err);
      return res.status(500).json({ success: false, message: "Error al eliminar la compra" });
    }
    if (result.affectedRows === 0) {
      return res.status(404).json({ success: false, message: "Compra no encontrada" });
    }
    return res.status(200).json({ success: true, message: "Compra eliminada exitosamente" });
  });
});