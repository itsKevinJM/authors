const express = require('express');
const app = express();

const port = 5000;

var Authors = [
    {
        name: "Lawrence Nowell",
        nationality: "UK",
        books: ["Beowulf"]
    },
    {
        name: "William Shakespeare",
        nationality: "UK",
        books: ["Hamlet", "Othello", "Romeo and Juliet", "MacBeth"]
    },
    {
        name: "Charles Dickens",
        nationality: "US",
        books: ["Oliver Twist", "A Christmas Carol"]
    },
    {
        name: "Oscar Wilde",
        nationality: "UK",
        books: ["The Picture of Dorian Gray", "The Importance of Being Earnest"]
    },
]


app.get('/', (req,  res,) => {
res.send('Authors API')
});

app.get('/authors/:id', (req,res) => {
    let author = req.params.id
    let name = ""
    let nationality = ""

    switch (author) {
        case "1":
            name = "Lawrence Nowell"
            nationality = "UK"
            break;
        
        case "2":
            name = "William Shakespeare"
            nationality = "UK"
            break;

        case "3":
            name = "Charles Dickens"
            nationality = "US"
            break;

        case "4":
            name = "Charles Dickens"
            nationality = "US"
            break;

        default:
            name = ""
            break;
    }

    res.json({
        // author: `${name}`,
        author: name,
        nationality: nationality,
    });
});

// app.get('/authors/1/', (req,  res) => {
// res.send('Lawrence Nowell, UK')
// });

// app.get('/authors/2/', (req,  res) => {
// res.send('William Shakespeare, UK')
// });

// app.get('/authors/3/', (req,  res) => {
// res.send('Charles Dickens, US')
// });

// app.get('/authors/4/', (req,  res) => {
// res.send('Oscar Wilde, UK')
// });

app.get('/authors/:id/books', (req,res) => {
    let author = req.params.id
    let title = ""

    switch (author) {
        case "1":
            title = "Beowulf"
            break;
        
        case "2":
            title = "Hamlet, Othello, Romeo and Juliet, MacBeth"
            break;

        case "3":
            title = "Oliver Twist, A Christmas Carol"
            break;

        case "4":
            title = "The Picture of Dorian Gray, The Importance of Being Earnest"
            break;

        default:
            title = title
            break;
    }

    res.json({
        books: title
    });
});

app.get('*', (req,res) => {
    res.send('ERROR 404')
})

app.listen(port, () => {
    console.log('Server started on port: ' + port);
});
