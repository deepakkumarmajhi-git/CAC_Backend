
import express from 'express';

const app = express();
app.use((express.static('dist')));


app.get('/', (req, res) => {
    res.send("server is ready")
});

app.get('/api/jokes', (req, res) => {
    const jokes = [
        {
            "id": "1",
            "title": "What did the fish say when it hit the wall?",
            "content": "Dam."
        },
        {
            "id": "2",
            "title": "How do you make a tissue dance?",
            "content": "You put a little boogie on it."
        },
        {
            "id": "3",
            "title": "What's Forrest Gump's password?",
            "content": "1Forrest1"
        },
        {
            "id": "4",
            "title": "What do you call a belt made out of watches?",
            "content": "A waist of time."
        },
        {
            "id": "5",
            "title": "Why can't bicycles stand on their own?",
            "content": "They are two tired"
        },
        {
            "id": "6",
            "title": "How does a train eat?",
            "content": "It goes chew, chew"
        },
        {
            "id": "7",
            "title": "What do you call a singing Laptop?",
            "content": "A Dell"
        },
        {
            "id": "8",
            "title": "How many lips does a flower have?",
            "content": "Tulips"
        },
        {
            "id": "9",
            "title": "What kind of shoes does a thief wear?",
            "content": "Sneakers"
        },
        {
            "id": "10",
            "title": "What's the best time to go to the dentist?",
            "content": "Tooth hurty."
        },
        {
            "id": "11",
            "title": "Knock knock. \n Who's there? \n A broken pencil. \n A broken pencil who?",
            "content": "Never mind. It's pointless."
        }];
        res.send(jokes);
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`server is running at ${port}`)
})