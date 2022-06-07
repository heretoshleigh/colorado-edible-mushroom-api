const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000

app.use(cors())

const mushrooms = {
    'january': [
        {
            'Common Name': 'Wild Enoki',
            'Scientific Name': 'Flammulina velutipes',
            'Season': 'fringe'
        },
        {
            'Common Name': 'Aspen Enoki',
            'Scientific Name': 'Flammulina populicola',
            'Season': 'fringe'
        },
        {
            'Common Name': 'Woodear',
            'Scientific Name': 'Auricularia americana',
            'Season': 'fringe'
        }
    ],
    'february':  [
        {
            'Common Name': 'Wild Enoki',
            'Scientific Name': 'Flammulina velutipes',
            'Season': 'fringe'
        },
        {
            'Common Name': 'Aspen Enoki',
            'Scientific Name': 'Flammulina populicola',
            'Season': 'fringe'
        },
        {
            'Common Name': 'Woodear',
            'Scientific Name': 'Auricularia americana',
            'Season': 'fringe'
        }
    ],
    'march':  [
        {
            'Common Name': 'Wild Enoki',
            'Scientific Name': 'Flammulina velutipes',
            'Season': 'fringe'
        },
        {
            'Common Name': 'Aspen Enoki',
            'Scientific Name': 'Flammulina populicola',
            'Season': 'fringe'
        },
        {
            'Common Name': 'Oyster',
            'Scientific Name': 'Pleurotus pulmonarius',
            'Season': 'fringe'
        },
        {
            'Common Name': 'Woodear',
            'Scientific Name': 'Auricularia americana',
            'Season': 'fringe'
        }
    ],
    'april': [
        {
            'Common Name': 'Agaricus',
            'Scientific Name': 'Agaricus spp.',
            'Season': 'fringe'
        },
        {
            'Common Name': 'Button agaricus',
            'Scientific Name': 'Agaricus bisporus',
            'Season': 'fringe'
        },
        {
            'Common Name': 'Field agaricus',
            'Scientific Name': 'Agaricus campestris',
            'Season': 'fringe'
        },
        {
            'Common Name': 'Salt-loving agaricus',
            'Scientific Name': 'Agaricus bernardi',
            'Season': 'fringe'
        },
        {
            'Common Name': 'Torq agaricus',
            'Scientific Name': 'Agaricus bitorquis',
            'Season': 'fringe'
        },
        {
            'Common Name': 'Dryad\'s saddle',
            'Scientific Name': 'Cerioporus squamosus',
            'Season': 'fringe'
        },
        {
            'Common Name': 'Wild Enoki',
            'Scientific Name': 'Flammulina velutipes',
            'Season': 'peak'
        },
        {
            'Common Name': 'Aspen Enoki',
            'Scientific Name': 'Flammulina populicola',
            'Season': 'fringe'
        },
        {
            'Common Name': 'Fairy ring',
            'Scientific Name': 'Marasmius oreades',
            'Season': 'fringe'
        },
        {
            'Common Name': 'Half-free morel',
            'Scientific Name': 'Morchella populiphila',
            'Season': 'peak'
        },
        {
            'Common Name': 'Yellow morel',
            'Scientific Name': 'Morchella americana',
            'Season': 'peak'
        },
        {
            'Common Name': 'Oyster',
            'Scientific Name': 'Pleurotus pulmonarius',
            'Season': 'peak'
        },
        {
            'Common Name': 'Elm oyster',
            'Scientific Name': 'Hypsizygus ulmarius',
            'Season': 'fringe'
        },
        {
            'Common Name': 'Shaggy mane',
            'Scientific Name': 'Coprinus comatus group',
            'Season': 'fringe'
        },
        {
            'Common Name': 'Woodear',
            'Scientific Name': 'Auricularia americana',
            'Season': 'fringe'
        }
    ],
    'may': {

    },
    'june': {

    },
    'july': {

    },
    'august': {

    },
    'september': {

    },
    'october': {

    },
    'november': {

    },
    'december': {

    },
}

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

app.get('/api/:month', (req, res) => {
    const month = req.params.month.toLowerCase()
    res.json(mushrooms[month])
})

app.listen(process.env.PORT || PORT, () => {
    console.log(`The server is now running on port ${PORT}! Betta go catch it!`)
})