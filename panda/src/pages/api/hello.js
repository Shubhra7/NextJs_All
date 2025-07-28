// http://localhost:3000/api/hello



export default function handler(req, res) {
  if (req.method === 'GET') {
    res.status(200).json({ message: 'GET request success from hello.js backend' });
  } else if (req.method === 'POST') {
    res.status(201).json({ message: 'POST request received from hello.js backend' });
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
