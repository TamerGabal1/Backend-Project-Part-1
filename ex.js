const express = require('express');
const { request } = require('http');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello there')
})

const courses = [
    {id: 1, name: 'Web Development'},
    {id: 2, name: 'IT'},
    {id: 3, name: 'Cybersecurity'}
]

//http GET request route
app.get('/api/courses', (req, res) => {
    res.send(courses)
})

//request course by ID
app.get('/api/courses/:id', (req, res) => {
    const course = courses.find(c=> c.id === parseInt(req.params.id))
    if(!course){
        res.status(404).send("The course with the given ID was not found");
    }
    res.send(course)
})

app.listen(3000, ()=>{
    console.log('Listening on port 3000')
})