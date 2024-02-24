const express = require('express');
const app = express();
const port = 5000;
const fs = require('fs');
const z = require('zod');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const bodyParser = require('body-parser');
const cors = require('cors');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());


const schema = z.object({
    firstname: z.string(),
    lastname: z.string(),
    age: z.number().int().positive(),
    email: z.string().email(),
    password: z.string().min(8),
});

const hashPassword = async (password) => {
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(password, salt);
};
app.get('/', (req, res) => {
    res.send('HOW TO USE: \n\n1. POST /signup with body {firstname, lastname, age, email, password} to signup \n2. POST /login with body {email, password} to login \n3. GET /users to get all users \n');
});

app.post('/signup', async (req, res) => {
    try {
        const validationResult = schema.safeParse(req.body);
        if (validationResult.success) {
            const newData = req.body;
            newData.password = await hashPassword(newData.password); // Hash the password
            fs.readFile('a.json', (err, data) => {
                if (err) throw err;
                const existingData = JSON.parse(data);
                existingData.push(newData); // Append new data to existing array
                fs.writeFile('a.json', JSON.stringify(existingData, null, 2), (err) => {
                    if (err) throw err;
                    console.log('Data appended and written to file');
                });
            });
            res.send('Signup Success');
        } else {
            res.status(400).send(validationResult.error.errors);
        }
    } catch (err) {
        res.send(err.message);
    }
});

// Verify token middleware
function verifyToken(req, res, next) {
    const token = req.headers['authorization'];
  
    if (typeof token !== 'undefined') {
      jwt.verify(token.split(' ')[1], 'secret', (err, decoded) => {
        if (err) {
          res.status(403).send('Invalid token');
        } else {
          req.user = decoded.user;
          next();
        }
      });
    } else {
      res.status(401).send('Unauthorized');
    }
  }

app.post('/login', (req, res) => {
    const data = req.body;
    fs.readFile('a.json', (err, data1) => {
        if (err) throw err;
        const users = JSON.parse(data1);
        const user = users.find(u => u.email === data.email);
        if (user && bcrypt.compareSync(data.password, user.password)) {
            const token = jwt.sign({ email: user.email },
                'secret',
                { expiresIn: '1h' });
            res.status(200).send({ token });
        } else {
            res.status(400).send('Login Failed');
        }
    });
});

app.get('/users', (req, res) => {
    fs.readFile('a.json', (err, data) => {
        if (err) throw err;
        res.send(JSON.parse(data));
    }
    );
}
);

app.get('/user/:email', verifyToken , (req, res) => {
    fs.readFile('a.json', (err, data) => {
        if (err) throw err;
        const users = JSON.parse(data);
        const user = users.find(u => u.email === req.params.email);
        if (user) {
            const userdata = {
                firstname: user.firstname,
                lastname: user.lastname,
                age: user.age,
                email: user.email
            };
            res.send(userdata);
        } else {
            res.status(404).send('User not found');
        }
    });
});


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
