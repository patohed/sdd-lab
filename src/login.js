// Login demo — Spec-Driven Development
// Ejecutar: node src/login.js
// Probar:   curl -X POST http://localhost:3000/login -H "Content-Type: application/json" -d "{\"email\":\"ana@test.com\",\"password\":\"12345\"}"

const http = require('http');
const crypto = require('crypto');

// --- Store de usuarios en memoria ---------------------------------------
// NOTA (rules.md > Seguridad): el password debería estar hasheado.
// Pseudo-hash de referencia (NO usar en producción, usar bcrypt/argon2):
//   const hash = crypto.createHash('sha256').update(salt + password).digest('hex');
// Para mantener la demo simple guardamos el password en claro.
const users = [
  { email: 'ana@test.com',  password: '12345' },
  { email: 'beto@test.com', password: 'hola123' },
];

// --- Validaciones -------------------------------------------------------
const EMAIL_RE = /^\S+@\S+\.\S+$/;

function validate(email, password) {
  if (!email || !password) return { error: 'BAD_REQUEST',      status: 400, message: 'Email y password son requeridos' };
  if (!EMAIL_RE.test(email)) return { error: 'INVALID_EMAIL',    status: 400, message: 'Formato de email inválido' };
  if (password.length < 5)   return { error: 'INVALID_PASSWORD', status: 400, message: 'Password debe tener al menos 5 caracteres' };
  return null;
}

// --- Auth ---------------------------------------------------------------
function generateToken() {
  return crypto.randomBytes(16).toString('hex');
}

// --- Handler de login ---------------------------------------------------
function login({ email, password }) {
  const invalid = validate(email, password);
  if (invalid) {
    return { status: invalid.status, body: { error: invalid.error, message: invalid.message } };
  }

  const user = users.find(u => u.email === email);
  // Mismo error para "no existe" y "password incorrecto" (rules.md)
  if (!user || user.password !== password) {
    return {
      status: 401,
      body: { error: 'INVALID_CREDENTIALS', message: 'Email o password incorrectos' },
    };
  }

  return { status: 200, body: { token: generateToken() } };
}

// --- Server HTTP --------------------------------------------------------
const server = http.createServer((req, res) => {
  if (req.url !== '/login') {
    res.writeHead(404, { 'Content-Type': 'application/json' });
    return res.end(JSON.stringify({ error: 'NOT_FOUND', message: 'Ruta no encontrada' }));
  }
  if (req.method !== 'POST') {
    res.writeHead(405, { 'Content-Type': 'application/json' });
    return res.end(JSON.stringify({ error: 'METHOD_NOT_ALLOWED', message: 'Solo se acepta POST' }));
  }

  let raw = '';
  req.on('data', chunk => { raw += chunk; });
  req.on('end', () => {
    let body;
    try {
      body = raw ? JSON.parse(raw) : {};
    } catch {
      res.writeHead(400, { 'Content-Type': 'application/json' });
      return res.end(JSON.stringify({ error: 'BAD_REQUEST', message: 'JSON inválido' }));
    }

    try {
      const { status, body: out } = login(body);
      res.writeHead(status, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify(out));
    } catch {
      res.writeHead(500, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ error: 'INTERNAL_ERROR', message: 'Error inesperado' }));
    }
  });
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Login demo escuchando en http://localhost:${PORT}/login`);
});
