/*
const express = require('express');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const cors = require('cors');
const bcrypt = require('bcrypt');
const { MongoClient } = require('mongodb');

const uri = "mongodb+srv://anshadrazakk:Asdrzkknt%40123@cluster0.qyxtmlr.mongodb.net/cluster0?retryWrites=true&w=majority&appName=Cluster0";
const client = new MongoClient(uri);

const app = express();
const PORT = process.env.PORT || 5000;
const SECRET_KEY = 'your_secret_key'; // Replace with a secure key in production

async function connectToDb() {
    if (!client.topology || !client.topology.isConnected()) {
        await client.connect();
    }
}

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
app.post('/login', async (req, res) => {
    try {
        const { username, password } = req.body;

        await connectToDb();

        const user = await client.db("Transactions").collection("All").findOne({ name: username });
        if (!user) {
            return res.status(401).json({ message: 'Invalid username or password' });
        }

        const passwordMatch = await bcrypt.compare(password, user.password);
        if (passwordMatch) {
            const token = jwt.sign({ id: user._id, username: user.name }, SECRET_KEY, { expiresIn: '1h' });
            res.json({ token });
            console.log(token, 'for ', user.name)
        } else {
            return res.status(401).json({ message: 'Invalid username or password' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

app.post('/signup', async (req, res) => {
    try {
        const { username, password, age, gender } = req.body;

        await connectToDb();
        const hashedPassword = await bcrypt.hash(password, 10);
        const count = await client.db('Transactions').collection('All').countDocuments();
        const result = await client.db('Transactions').collection('All').insertOne({_id: count ,name: username, password: hashedPassword, age: age, gender: gender})
        res.status(201).json({ message: 'User created successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

app.get('/profile', authenticateToken, async (req, res) => {
    try {
        await connectToDb();
        const { username } = req.user;

        const user = await client.db('Transactions').collection('All').findOne({ name: username });
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        res.json({ username: user.name, gender: user.gender, age: user.age });
    } catch (error) {
        console.error('Error at /profile:', error.message);
        res.status(500).send(error.message);
    }
});

// Middleware to authenticate JWT token
function authenticateToken(req, res, next) {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (!token) {
        return res.status(401).json({ message: 'Unauthorized' });
    }

    jwt.verify(token, SECRET_KEY, (err, user) => {
        if (err) {
            return res.status(403).json({ message: 'Forbidden' });
        }

        req.user = user;
        next();
    });
}

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
*/

const { MongoClient, ObjectId } = require('mongodb'); // Import ObjectId
const express = require('express');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const app = express();
const port = process.env.PORT || 5000;
const bcrypt = require('bcryptjs');
const SECRET_KEY = 'your_secret_key';

const uri = "mongodb+srv://anshadrazakk:Asdrzkknt%40123@cluster0.qyxtmlr.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

async function connectToDb() {
    try {
        await client.connect();
        console.log('Connected to MongoDB');
    } catch (err) {
        console.error('Error connecting to MongoDB:', err);
    }
}

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.get('/projects', async (req, res) => {
    try {
        await connectToDb();
        console.log('Fetching projects from database');

        const projects = await client.db("places").collection("dets").find({}).toArray();
        console.log('Projects fetched:', projects);

        if (projects.length > 0) {
            res.json(projects);
        } else {
            res.status(404).send('No projects found');
        }
    } catch (e) {
        console.error('Error fetching projects:', e.message);
        res.status(500).send(e.message);
    }
});

app.post('/userprojects', async (req, res) => {
    try {
        await connectToDb();

        const {username} = req.body;
        console.log('Fetching projects from database');

        const projects = await client.db("places").collection("dets").find({username: username}).toArray();
        console.log('Projects fetched:', projects);

        if (projects.length > 0) {
            res.json(projects);
        } else {
            res.status(404).send('No projects found');
        }
    } catch (e) {
        console.error('Error fetching projects:', e.message);
        res.status(500).send(e.message);
    }
});

app.post('/add', async (req, res) => {
    try {
        const { username ,name, address,phonenumber, price, link} = req.body;

        await connectToDb();
        const result = await client.db('places').collection('dets').insertOne({username: username,name: name, address: address,phonenumber, price: price, link:link})
        res.status(201).json({ message: 'User created successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

app.get('/details/:id', async (req, res) => {
    try {
        const { id } = req.params;  // Get the ID from the route parameters
        console.log(id)

        if (!id) {
            return res.status(400).send('ID is required');
        }

        await connectToDb();
        console.log('Fetching details from the database');

        const project = await client.db("places").collection("dets").findOne({ _id: new ObjectId(id) }); // Convert ID to ObjectId
        console.log('Project fetched:', project);

        if (project) {
            res.json(project);
        } else {
            res.status(404).send('No project found');
        }
    } catch (e) {
        console.error('Error fetching details:', e.message);
        res.status(500).send(e.message);
    }
});

app.post('/login', async (req, res) => {
    try {
        const { username, password } = req.body;
        console.log(username,password)

        await connectToDb();

        const user = await client.db("places").collection("users").findOne({ name: username });
        if (!user) {
            return res.status(401).json({ message: 'Invalid username or password' });
        }

        const passwordMatch = await bcrypt.compare(password, user.password);
        if (passwordMatch) {
            const token = jwt.sign({ id: user._id, username: user.name }, SECRET_KEY, { expiresIn: '1h' });
            res.json({ token });
            console.log(token, 'for ', user.name)
        } else {
            return res.status(401).json({ message: 'Invalid username or password' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

app.post('/signup', async (req, res) => {
    try {
        const { username, password, age, gender } = req.body;

        await connectToDb();
        const hashedPassword = await bcrypt.hash(password, 10);
        const result = await client.db('places').collection('users').insertOne({name: username, password: hashedPassword, age: age, gender: gender})
        res.status(201).json({ message: 'User created successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

app.post('/delete', async (req, res) => {
    try {
        const { _id } = req.body;
        console.log(_id)

        await connectToDb();
        const result = await client.db('places').collection('dets').findOne({_id: new ObjectId(_id)})
        console.log(result)
        res.status(201).json({ message: 'User created successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
});



// Start server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
