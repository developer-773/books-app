const books = [
    {
        "id": [
            0
        ],
        "author": "Chinua Achebe",
        "country": "Nigeria",
        "imageLink": "images/things-fall-apart.jpg",
        "language": "English",
        "link": "https://en.wikipedia.org/wiki/Things_Fall_Apart\n",
        "pages": 209,
        "title": "Things Fall Apart",
        "year": 1958,
        "genre": [
            "Historical Fiction"
        ]
    },
    {
        "id": [
            1
        ],
        "author": "Hans Christian Andersen",
        "country": "Denmark",
        "imageLink": "images/fairy-tales.jpg",
        "language": "Danish",
        "link": "https://en.wikipedia.org/wiki/Fairy_Tales_Told_for_Children._First_Collection.\n",
        "pages": 784,
        "title": "Fairy tales",
        "year": 1836,
        "genre": [
            "Literary Fiction",
            "Poetry"
        ]
    },
    {
        "id": [
            2
        ],
        "author": "Dante Alighieri",
        "country": "Italy",
        "imageLink": "images/the-divine-comedy.jpg",
        "language": "Italian",
        "link": "https://en.wikipedia.org/wiki/Divine_Comedy\n",
        "pages": 928,
        "title": "The Divine Comedy",
        "year": 1315,
        "genre": ["Epic-Poem"]
    },
    {
        "id": [
            3
        ],
        "author": "Unknown",
        "country": "Sumer and Akkadian Empire",
        "imageLink": "images/the-epic-of-gilgamesh.jpg",
        "language": "Akkadian",
        "link": "https://en.wikipedia.org/wiki/Epic_of_Gilgamesh\n",
        "pages": 160,
        "title": "The Epic Of Gilgamesh",
        "year": -1700,
        "genre": [
            "Romance",
            "Fiction"
        ]
    },
    {
        "id": [
            4
        ],
        "author": "Unknown",
        "country": "Achaemenid Empire",
        "imageLink": "images/the-book-of-job.jpg",
        "language": "Hebrew",
        "link": "https://en.wikipedia.org/wiki/Book_of_Job\n",
        "pages": 176,
        "title": "The Book Of Job",
        "year": -600,
        "genre": [
            "Romance",
            "Fiction"
        ]
    },
    {
        "id": [
            5
        ],
        "author": "Unknown",
        "country": "India/Iran/Iraq/Egypt/Tajikistan",
        "imageLink": "images/one-thousand-and-one-nights.jpg",
        "language": "Arabic",
        "link": "https://en.wikipedia.org/wiki/One_Thousand_and_One_Nights\n",
        "pages": 288,
        "title": "One Thousand and One Nights",
        "year": 1200,
        "genre": [
            "Fiction"
        ]
    },
    {
        "id": [
            6
        ],
        "author": "Unknown",
        "country": "Iceland",
        "imageLink": "images/njals-saga.jpg",
        "language": "Old Norse",
        "link": "https://en.wikipedia.org/wiki/Nj%C3%A1ls_saga\n",
        "pages": 384,
        "title": "Nj??l's Saga",
        "year": 1350,
        "genre": [
            "Fiction"
        ]
    },
    {
        "id": [
            7
        ],
        "author": "Jane Austen",
        "country": "United Kingdom",
        "imageLink": "images/pride-and-prejudice.jpg",
        "language": "English",
        "link": "https://en.wikipedia.org/wiki/Pride_and_Prejudice\n",
        "pages": 226,
        "title": "Pride and Prejudice",
        "year": 1813,
        "genre": [
            "Fantasy"
        ]
    },
    {
        "id": [
            8
        ],
        "author": "Honor?? de Balzac",
        "country": "France",
        "imageLink": "images/le-pere-goriot.jpg",
        "language": "French",
        "link": "https://en.wikipedia.org/wiki/Le_P%C3%A8re_Goriot\n",
        "pages": 443,
        "title": "Le P??re Goriot",
        "year": 1835,
        "genre": [
            "Romance",
            "Tragedy"
        ]
    },
    {
        "id": [
            9
        ],
        "author": "Samuel Beckett",
        "country": "Republic of Ireland",
        "imageLink": "images/molloy-malone-dies-the-unnamable.jpg",
        "language": "French, English",
        "link": "https://en.wikipedia.org/wiki/Molloy_(novel)\n",
        "pages": 256,
        "title": "Molloy, Malone Dies, The Unnamable, the trilogy",
        "year": 1952,
        "genre": [
            "Horror",
            "Thriller"
        ]
    },
    {
        "id": [
            10
        ],
        "author": "Jorge Luis Borges",
        "country": "Argentina",
        "imageLink": "images/ficciones.jpg",
        "language": "Spanish",
        "link": "https://en.wikipedia.org/wiki/Ficciones\n",
        "pages": 224,
        "title": "Ficciones",
        "year": 1965,
        "genre": [
            "Action",
            "Adventure"
        ]
    },
    {
        "id": [
            11
        ],
        "author": "Emily Bront??",
        "country": "United Kingdom",
        "imageLink": "images/wuthering-heights.jpg",
        "language": "English",
        "link": "https://en.wikipedia.org/wiki/Wuthering_Heights\n",
        "pages": 342,
        "title": "Wuthering Heights",
        "year": 1847,
        "genre": [
            "Adventure"
        ]
    },
    {
        "id": [
            12
        ],
        "author": "Albert Camus",
        "country": "Algeria, French Empire",
        "imageLink": "images/l-etranger.jpg",
        "language": "French",
        "link": "https://en.wikipedia.org/wiki/The_Stranger_(novel)\n",
        "pages": 185,
        "title": "The Stranger",
        "year": 1942,
        "genre": [
            "Literary Fiction"
        ]
    },
    {
        "id": [
            13
        ],
        "author": "Paul Celan",
        "country": "Romania, France",
        "imageLink": "images/poems-paul-celan.jpg",
        "language": "German",
        "link": "\n",
        "pages": 320,
        "title": "Poems",
        "year": 1952,
        "genre": [
            "Literary Fiction",
            "Romance"
        ]
    },
    {
        "id": [
            14
        ],
        "author": "Louis-Ferdinand C??line",
        "country": "France",
        "imageLink": "images/voyage-au-bout-de-la-nuit.jpg",
        "language": "French",
        "link": "https://en.wikipedia.org/wiki/Journey_to_the_End_of_the_Night\n",
        "pages": 505,
        "title": "Journey to the End of the Night",
        "year": 1932,
        "genre": [
            "Novel",
            "Political Fiction"
        ]
    },
    {
        "id": [
            15
        ],
        "author": "Miguel de Cervantes",
        "country": "Spain",
        "imageLink": "images/don-quijote-de-la-mancha.jpg",
        "language": "Spanish",
        "link": "https://en.wikipedia.org/wiki/Don_Quixote\n",
        "pages": 1056,
        "title": "Don Quijote De La Mancha",
        "year": 1610,
        "genre": [
            "Novel"
        ]
    },
    {
        "id": [
            16
        ],
        "author": "Geoffrey Chaucer",
        "country": "England",
        "imageLink": "images/the-canterbury-tales.jpg",
        "language": "English",
        "link": "https://en.wikipedia.org/wiki/The_Canterbury_Tales\n",
        "pages": 544,
        "title": "The Canterbury Tales",
        "year": 1450,
        "genre": [
            "Novel"
        ]
    },
    {
        "id": [
            17
        ],
        "author": "Anton Chekhov",
        "country": "Russia",
        "imageLink": "images/stories-of-anton-chekhov.jpg",
        "language": "Russian",
        "link": "https://en.wikipedia.org/wiki/List_of_short_stories_by_Anton_Chekhov\n",
        "pages": 194,
        "title": "Stories",
        "year": 1886,
        "genre": [
            "Novel",
            "Literary Fiction"
        ]
    },
    {
        "id": [
            18
        ],
        "author": "Joseph Conrad",
        "country": "United Kingdom",
        "imageLink": "images/nostromo.jpg",
        "language": "English",
        "link": "https://en.wikipedia.org/wiki/Nostromo\n",
        "pages": 320,
        "title": "Nostromo",
        "year": 1904,
        "genre": [
            "Novel",
            "Philosophical Fiction"
        ]
    },
    {
        "id": [
            19
        ],
        "author": "Charles Dickens",
        "country": "United Kingdom",
        "imageLink": "images/great-expectations.jpg",
        "language": "English",
        "link": "https://en.wikipedia.org/wiki/Great_Expectations\n",
        "pages": 194,
        "title": "Great Expectations",
        "year": 1861,
        "genre": [
            "Novel"
        ]
    },
    {
        "id": [
            20
        ],
        "author": "Denis Diderot",
        "country": "France",
        "imageLink": "images/jacques-the-fatalist.jpg",
        "language": "French",
        "link": "https://en.wikipedia.org/wiki/Jacques_the_Fatalist\n",
        "pages": 596,
        "title": "Jacques the Fatalist",
        "year": 1796,
        "genre": [
            "Death Metal"
        ]
    },
    {
        "id": [
            21
        ],
        "author": "Alfred D??blin",
        "country": "Germany",
        "imageLink": "images/berlin-alexanderplatz.jpg",
        "language": "German",
        "link": "https://en.wikipedia.org/wiki/Berlin_Alexanderplatz\n",
        "pages": 600,
        "title": "Berlin Alexanderplatz",
        "year": 1929,
        "genre": [
            "Novel",
            "Philosophical Fiction"
        ]
    },
    {
        "id": [
            22
        ],
        "author": "Fyodor Dostoevsky",
        "country": "Russia",
        "imageLink": "images/crime-and-punishment.jpg",
        "language": "Russian",
        "link": "https://en.wikipedia.org/wiki/Crime_and_Punishment\n",
        "pages": 551,
        "title": "Crime and Punishment",
        "year": 1866,
        "genre": [
            "Novel",
            "Historical Fiction"
        ]
    },
    {
        "id": [
            23
        ],
        "author": "Fyodor Dostoevsky",
        "country": "Russia",
        "imageLink": "images/the-idiot.jpg",
        "language": "Russian",
        "link": "https://en.wikipedia.org/wiki/The_Idiot\n",
        "pages": 656,
        "title": "The Idiot",
        "year": 1869,
        "genre": [
            "Novel",
            "Literary Fiction"
        ]
    },
    {
        "id": [
            24
        ],
        "author": "Fyodor Dostoevsky",
        "country": "Russia",
        "imageLink": "images/the-possessed.jpg",
        "language": "Russian",
        "link": "https://en.wikipedia.org/wiki/Demons_(Dostoyevsky_novel)\n",
        "pages": 768,
        "title": "The Possessed",
        "year": 1872,
        "genre": [
            "Tragedy"
        ]
    },
    {
        "id": [
            25
        ],
        "author": "Fyodor Dostoevsky",
        "country": "Russia",
        "imageLink": "images/the-brothers-karamazov.jpg",
        "language": "Russian",
        "link": "https://en.wikipedia.org/wiki/The_Brothers_Karamazov\n",
        "pages": 824,
        "title": "The Brothers Karamazov",
        "year": 1880,
        "genre": [
            "Novel",
            "Historical Fiction"
        ]
    },
    {
        "id": [
            26
        ],
        "author": "George Eliot",
        "country": "United Kingdom",
        "imageLink": "images/middlemarch.jpg",
        "language": "English",
        "link": "https://en.wikipedia.org/wiki/Middlemarch\n",
        "pages": 800,
        "title": "Middlemarch",
        "year": 1871,
        "genre": [
            "Novel",
            "Southern Gothic"
        ]
    },
    {
        "id": [
            27
        ],
        "author": "Ralph Ellison",
        "country": "United States",
        "imageLink": "images/invisible-man.jpg",
        "language": "English",
        "link": "https://en.wikipedia.org/wiki/Invisible_Man\n",
        "pages": 581,
        "title": "Invisible Man",
        "year": 1952,
        "genre": [
            "Novel",
            "Literary Fiction"
        ]
    },
    {
        "id": [
            28
        ],
        "author": "Euripides",
        "country": "Greece",
        "imageLink": "images/medea.jpg",
        "language": "Greek",
        "link": "https://en.wikipedia.org/wiki/Medea_(play)\n",
        "pages": 104,
        "title": "Medea",
        "year": -431,
        "genre": [
            "Novel",
            "Literary Fiction"
        ]
    },
    {
        "id": [
            29
        ],
        "author": "William Faulkner",
        "country": "United States",
        "imageLink": "images/absalom-absalom.jpg",
        "language": "English",
        "link": "https://en.wikipedia.org/wiki/Absalom,_Absalom!\n",
        "pages": 313,
        "title": "Absalom, Absalom!",
        "year": 1936,
        "genre": [
            "Poetry"
        ]
    },
    {
        "id": [
            30
        ],
        "author": "William Faulkner",
        "country": "United States",
        "imageLink": "images/the-sound-and-the-fury.jpg",
        "language": "English",
        "link": "https://en.wikipedia.org/wiki/The_Sound_and_the_Fury\n",
        "pages": 326,
        "title": "The Sound and the Fury",
        "year": 1929,
        "genre": [
            "Novel",
            "Fantasy"
        ]
    },
    {
        "id": [
            31
        ],
        "author": "Gustave Flaubert",
        "country": "France",
        "imageLink": "images/madame-bovary.jpg",
        "language": "French",
        "link": "https://en.wikipedia.org/wiki/Madame_Bovary\n",
        "pages": 528,
        "title": "Madame Bovary",
        "year": 1857,
        "genre": [
            "Novel",
            "Romance",
            "Literary Fiction"
        ]
    },
    {
        "id": [
            32
        ],
        "author": "Gustave Flaubert",
        "country": "France",
        "imageLink": "images/l-education-sentimentale.jpg",
        "language": "French",
        "link": "https://en.wikipedia.org/wiki/Sentimental_Education\n",
        "pages": 606,
        "title": "Sentimental Education",
        "year": 1869,
        "genre": [
            "Tragedy"
        ]
    },
    {
        "id": [
            33
        ],
        "author": "Federico Garc??a Lorca",
        "country": "Spain",
        "imageLink": "images/gypsy-ballads.jpg",
        "language": "Spanish",
        "link": "https://en.wikipedia.org/wiki/Gypsy_Ballads\n",
        "pages": 218,
        "title": "Gypsy Ballads",
        "year": 1928,
        "genre": [
            "Novel",
            "Literary Fiction"
        ]
    },
    {
        "id": [
            34
        ],
        "author": "Gabriel Garc??a M??rquez",
        "country": "Colombia",
        "imageLink": "images/one-hundred-years-of-solitude.jpg",
        "language": "Spanish",
        "link": "https://en.wikipedia.org/wiki/One_Hundred_Years_of_Solitude\n",
        "pages": 417,
        "title": "One Hundred Years of Solitude",
        "year": 1967,
        "genre": [
            "Historical Fiction",
            "Novel",
            "Political Fiction"
        ]
    },
    {
        "id": [
            35
        ],
        "author": "Gabriel Garc??a M??rquez",
        "country": "Colombia",
        "imageLink": "images/love-in-the-time-of-cholera.jpg",
        "language": "Spanish",
        "link": "https://en.wikipedia.org/wiki/Love_in_the_Time_of_Cholera\n",
        "pages": 368,
        "title": "Love in the Time of Cholera",
        "year": 1985,
        "genre": [
            "Literary Fiction"
        ]
    },
    {
        "id": [
            36
        ],
        "author": "Johann Wolfgang von Goethe",
        "country": "Saxe-Weimar",
        "imageLink": "images/faust.jpg",
        "language": "German",
        "link": "https://en.wikipedia.org/wiki/Goethe%27s_Faust\n",
        "pages": 158,
        "title": "Faust",
        "year": 1832,
        "genre": [
            "Action",
            "Science Fiction",
            "Thriller",
            "Adventure"
        ]
    },
    {
        "id": [
            37
        ],
        "author": "Nikolai Gogol",
        "country": "Russia",
        "imageLink": "images/dead-souls.jpg",
        "language": "Russian",
        "link": "https://en.wikipedia.org/wiki/Dead_Souls\n",
        "pages": 432,
        "title": "Dead Souls",
        "year": 1842,
        "genre": [
            "Nautical Fiction",
            "Novel"
        ]
    },
    {
        "id": [
            38
        ],
        "author": "G??nter Grass",
        "country": "Germany",
        "imageLink": "images/the-tin-drum.jpg",
        "language": "German",
        "link": "https://en.wikipedia.org/wiki/The_Tin_Drum\n",
        "pages": 600,
        "title": "The Tin Drum",
        "year": 1959,
        "genre": [
            "Poetry"
        ]
    },
    {
        "id": [
            39
        ],
        "author": "Jo??o Guimar??es Rosa",
        "country": "Brazil",
        "imageLink": "images/the-devil-to-pay-in-the-backlands.jpg",
        "language": "Portuguese",
        "link": "https://en.wikipedia.org/wiki/The_Devil_to_Pay_in_the_Backlands\n",
        "pages": 494,
        "title": "The Devil to Pay in the Backlands",
        "year": 1956,
        "genre": [
            "Poetry"
        ]
    },
    {
        "id": [
            40
        ],
        "author": "Knut Hamsun",
        "country": "Norway",
        "imageLink": "images/hunger.jpg",
        "language": "Norwegian",
        "link": "https://en.wikipedia.org/wiki/Hunger_(Hamsun_novel)\n",
        "pages": 176,
        "title": "Hunger",
        "year": 1890,
        "genre": [
            "Modern Tragedy"
        ]
    },
    {
        "id": [
            41
        ],
        "author": "Ernest Hemingway",
        "country": "United States",
        "imageLink": "images/the-old-man-and-the-sea.jpg",
        "language": "English",
        "link": "https://en.wikipedia.org/wiki/The_Old_Man_and_the_Sea\n",
        "pages": 128,
        "title": "The Old Man and the Sea",
        "year": 1952,
        "genre": [
            "Literary Fiction",
            "Novel"
        ]
    },
    {
        "id": [
            42
        ],
        "author": "Homer",
        "country": "Greece",
        "imageLink": "images/the-iliad-of-homer.jpg",
        "language": "Greek",
        "link": "https://en.wikipedia.org/wiki/Iliad\n",
        "pages": 608,
        "title": "Iliad",
        "year": -735,
        "genre": [
            "Short Story",
            "Literary Fiction"
        ]
    },
    {
        "id": [
            43
        ],
        "author": "Homer",
        "country": "Greece",
        "imageLink": "images/the-odyssey-of-homer.jpg",
        "language": "Greek",
        "link": "https://en.wikipedia.org/wiki/Odyssey\n",
        "pages": 374,
        "title": "Odyssey",
        "year": -800,
        "genre": [
            "Philosophical Fiction",
            "Novel"
        ]
    },
    {
        "id": [
            44
        ],
        "author": "Henrik Ibsen",
        "country": "Norway",
        "imageLink": "images/a-Dolls-house.jpg",
        "language": "Norwegian",
        "link": "https://en.wikipedia.org/wiki/A_Doll%27s_House\n",
        "pages": 68,
        "title": "A Doll's House",
        "year": 1879,
        "genre": [
            "Comedy",
            "Novel",
            "Philosophical Fiction",
            "Political Fiction"
        ]
    },
    {
        "id": [
            45
        ],
        "author": "James Joyce",
        "country": "Irish Free State",
        "imageLink": "images/ulysses.jpg",
        "language": "English",
        "link": "https://en.wikipedia.org/wiki/Ulysses_(novel)\n",
        "pages": 228,
        "title": "Ulysses",
        "year": 1922,
        "genre": [
            "Drama"
        ]
    },
    {
        "id": [
            46
        ],
        "author": "Franz Kafka",
        "country": "Czechoslovakia",
        "imageLink": "images/stories-of-franz-kafka.jpg",
        "language": "German",
        "link": "https://en.wikipedia.org/wiki/Franz_Kafka_bibliography#Short_stories\n",
        "pages": 488,
        "title": "Stories",
        "year": 1924,
        "genre": [
            "Literary Fiction",
            "Novel"
        ]
    },
    {
        "id": [
            47
        ],
        "author": "Franz Kafka",
        "country": "Czechoslovakia",
        "imageLink": "images/the-trial.jpg",
        "language": "German",
        "link": "https://en.wikipedia.org/wiki/The_Trial\n",
        "pages": 160,
        "title": "The Trial",
        "year": 1925,
        "genre": [
            "Literary Fiction",
            "Novel"
        ]
    },
    {
        "id": [
            48
        ],
        "author": "Franz Kafka",
        "country": "Czechoslovakia",
        "imageLink": "images/the-castle.jpg",
        "language": "German",
        "link": "https://en.wikipedia.org/wiki/The_Castle_(novel)\n",
        "pages": 352,
        "title": "The Castle",
        "year": 1926,
        "genre": [
            "Autobiography"
        ]
    },
    {
        "id": [
            49
        ],
        "author": "K??lid??sa",
        "country": "India",
        "imageLink": "images/the-recognition-of-shakuntala.jpg",
        "language": "Sanskrit",
        "link": "https://en.wikipedia.org/wiki/Abhij%C3%B1%C4%81na%C5%9B%C4%81kuntalam\n",
        "pages": 147,
        "title": "The recognition of Shakuntala",
        "year": 150,
        "genre": [
            "Novel",
            "Literary Fiction"
        ]
    },
    {
        "id": [
            50
        ],
        "author": "Yasunari Kawabata",
        "country": "Japan",
        "imageLink": "images/the-sound-of-the-mountain.jpg",
        "language": "Japanese",
        "link": "https://en.wikipedia.org/wiki/The_Sound_of_the_Mountain\n",
        "pages": 288,
        "title": "The Sound of the Mountain",
        "year": 1954,
        "genre": [
            "Poetry"
        ]
    },
    {
        "id": [
            51
        ],
        "author": "Nikos Kazantzakis",
        "country": "Greece",
        "imageLink": "images/zorba-the-greek.jpg",
        "language": "Greek",
        "link": "https://en.wikipedia.org/wiki/Zorba_the_Greek\n",
        "pages": 368,
        "title": "Zorba the Greek",
        "year": 1946,
        "genre": [
            "Psychological"
        ]
    },
    {
        "id": [
            52
        ],
        "author": "D. H. Lawrence",
        "country": "United Kingdom",
        "imageLink": "images/sons-and-lovers.jpg",
        "language": "English",
        "link": "https://en.wikipedia.org/wiki/Sons_and_Lovers\n",
        "pages": 432,
        "title": "Sons and Lovers",
        "year": 1913,
        "genre": [
            "Chidldren's",
            "Literary Fiction"
        ]
    },
    {
        "id": [
            53
        ],
        "author": "Halld??r Laxness",
        "country": "Iceland",
        "imageLink": "images/independent-people.jpg",
        "language": "Icelandic",
        "link": "https://en.wikipedia.org/wiki/Independent_People\n",
        "pages": 470,
        "title": "Independent People",
        "year": 1934,
        "genre": [
            "Short Story"
        ]
    },
    {
        "id": [
            54
        ],
        "author": "Giacomo Leopardi",
        "country": "Italy",
        "imageLink": "images/poems-giacomo-leopardi.jpg",
        "language": "Italian",
        "link": "\n",
        "pages": 184,
        "title": "Poems",
        "year": 1818,
        "genre": [
            "Literary Fiction",
            "Novel"
        ]
    },
    {
        "id": [
            55
        ],
        "author": "Doris Lessing",
        "country": "United Kingdom",
        "imageLink": "images/the-golden-notebook.jpg",
        "language": "English",
        "link": "https://en.wikipedia.org/wiki/The_Golden_Notebook\n",
        "pages": 688,
        "title": "The Golden Notebook",
        "year": 1962,
        "genre": [
            "Literary Fiction",
            "Novel"
        ]
    },
    {
        "id": [
            56
        ],
        "author": "Astrid Lindgren",
        "country": "Sweden",
        "imageLink": "images/pippi-longstocking.jpg",
        "language": "Swedish",
        "link": "https://en.wikipedia.org/wiki/Pippi_Longstocking\n",
        "pages": 160,
        "title": "Pippi Longstocking",
        "year": 1945,
        "genre": [
            "Literary Fiction",
            "Novel",
            "Modern Literature"
        ]
    },
    {
        "id": [
            57
        ],
        "author": "Lu Xun",
        "country": "China",
        "imageLink": "images/diary-of-a-madman.jpg",
        "language": "Chinese",
        "link": "https://en.wikipedia.org/wiki/A_Madman%27s_Diary\n",
        "pages": 389,
        "title": "Diary of a Madman",
        "year": 1918,
        "genre": [
            "Nautical Fiction",
            "Adventure"
        ]
    },
    {
        "id": [
            58
        ],
        "author": "Naguib Mahfouz",
        "country": "Egypt",
        "imageLink": "images/children-of-gebelawi.jpg",
        "language": "Arabic",
        "link": "https://en.wikipedia.org/wiki/Children_of_Gebelawi\n",
        "pages": 355,
        "title": "Children of Gebelawi",
        "year": 1959,
        "genre": [
            "Essay"
        ]
    },
    {
        "id": [
            59
        ],
        "author": "Thomas Mann",
        "country": "Germany",
        "imageLink": "images/buddenbrooks.jpg",
        "language": "German",
        "link": "https://en.wikipedia.org/wiki/Buddenbrooks\n",
        "pages": 736,
        "title": "Buddenbrooks",
        "year": 1901,
        "genre": [
            "Literary Fiction",
            "Novel"
        ]
    },
    {
        "id": [
            60
        ],
        "author": "Thomas Mann",
        "country": "Germany",
        "imageLink": "images/the-magic-mountain.jpg",
        "language": "German",
        "link": "https://en.wikipedia.org/wiki/The_Magic_Mountain\n",
        "pages": 720,
        "title": "The Magic Mountain",
        "year": 1924,
        "genre": [
            "Literary Fiction",
            "Novel"
        ]
    },
    {
        "id": [
            61
        ],
        "author": "Herman Melville",
        "country": "United States",
        "imageLink": "images/moby-dick.jpg",
        "language": "English",
        "link": "https://en.wikipedia.org/wiki/Moby-Dick\n",
        "pages": 378,
        "title": "Moby Dick",
        "year": 1851,
        "genre": [
            "Historical Fiction",
            "Novel"
        ]
    },
    {
        "id": [
            62
        ],
        "author": "Michel de Montaigne",
        "country": "France",
        "imageLink": "images/essais.jpg",
        "language": "French",
        "link": "https://en.wikipedia.org/wiki/Essays_(Montaigne)\n",
        "pages": 404,
        "title": "Essays",
        "year": 1595,
        "genre": [
            "Literary Fiction",
            "Novel"
        ]
    },
    {
        "id": [
            63
        ],
        "author": "Elsa Morante",
        "country": "Italy",
        "imageLink": "images/history.jpg",
        "language": "Italian",
        "link": "https://en.wikipedia.org/wiki/History_(novel)\n",
        "pages": 600,
        "title": "History",
        "year": 1974,
        "genre": [
            "Historical Fiction",
            "Novel",
            "Philosophical Fiction"
        ]
    },
    {
        "id": [
            64
        ],
        "author": "Toni Morrison",
        "country": "United States",
        "imageLink": "images/beloved.jpg",
        "language": "English",
        "link": "https://en.wikipedia.org/wiki/Beloved_(novel)\n",
        "pages": 321,
        "title": "Beloved",
        "year": 1987,
        "genre": [
            "Novel",
            "Literary Fiction"
        ]
    },
    {
        "id": [
            65
        ],
        "author": "Murasaki Shikibu",
        "country": "Japan",
        "imageLink": "images/the-tale-of-genji.jpg",
        "language": "Japanese",
        "link": "https://en.wikipedia.org/wiki/The_Tale_of_Genji\n",
        "pages": 1360,
        "title": "The Tale of Genji",
        "year": 1006,
        "genre": [
            "Science Fiction",
            "Political Fiction"
        ]
    },
    {
        "id": [
            66
        ],
        "author": "Robert Musil",
        "country": "Austria",
        "imageLink": "images/the-man-without-qualities.jpg",
        "language": "German",
        "link": "https://en.wikipedia.org/wiki/The_Man_Without_Qualities\n",
        "pages": 365,
        "title": "The Man Without Qualities",
        "year": 1931,
        "genre": [
            "Poetry"
        ]
    },
    {
        "id": [
            67
        ],
        "author": "Vladimir Nabokov",
        "country": "Russia/United States",
        "imageLink": "images/lolita.jpg",
        "language": "English",
        "link": "https://en.wikipedia.org/wiki/Lolita\n",
        "pages": 317,
        "title": "Lolita",
        "year": 1955,
        "genre": [
            "Novel",
            "Autobiography"
        ]
    },
    {
        "id": [
            68
        ],
        "author": "George Orwell",
        "country": "United Kingdom",
        "imageLink": "images/nineteen-eighty-four.jpg",
        "language": "English",
        "link": "https://en.wikipedia.org/wiki/Nineteen_Eighty-Four\n",
        "pages": 272,
        "title": "Nineteen Eighty-Four",
        "year": 1949,
        "genre": [
            "Literary Fiction",
            "Mystery"
        ]
    },
    {
        "id": [
            69
        ],
        "author": "Ovid",
        "country": "Roman Empire",
        "imageLink": "images/the-metamorphoses-of-ovid.jpg",
        "language": "Classical Latin",
        "link": "https://en.wikipedia.org/wiki/Metamorphoses\n",
        "pages": 576,
        "title": "Metamorphoses",
        "year": 100,
        "genre": [
            "Philosophical Fiction",
            "Autobiography"
        ]
    },
    {
        "id": [
            70
        ],
        "author": "Fernando Pessoa",
        "country": "Portugal",
        "imageLink": "images/the-book-of-disquiet.jpg",
        "language": "Portuguese",
        "link": "https://en.wikipedia.org/wiki/The_Book_of_Disquiet\n",
        "pages": 272,
        "title": "The Book of Disquiet",
        "year": 1928,
        "genre": [
            "Literary Fiction"
        ]
    },
    {
        "id": [
            71
        ],
        "author": "Edgar Allan Poe",
        "country": "United States",
        "imageLink": "images/tales-and-poems-of-edgar-allan-poe.jpg",
        "language": "English",
        "link": "https://en.wikipedia.org/wiki/Edgar_Allan_Poe_bibliography#Tales\n",
        "pages": 842,
        "title": "Tales",
        "year": 1950,
        "genre": [
            "Literary Fiction",
            "Novel"
        ]
    },
    {
        "id": [
            72
        ],
        "author": "Marcel Proust",
        "country": "France",
        "imageLink": "images/a-la-recherche-du-temps-perdu.jpg",
        "language": "French",
        "link": "https://en.wikipedia.org/wiki/In_Search_of_Lost_Time\n",
        "pages": 2408,
        "title": "In Search of Lost Time",
        "year": 1920,
        "genre": [
            "Poetry"
        ]
    },
    {
        "id": [
            73
        ],
        "author": "Fran??ois Rabelais",
        "country": "France",
        "imageLink": "images/gargantua-and-pantagruel.jpg",
        "language": "French",
        "link": "https://en.wikipedia.org/wiki/Gargantua_and_Pantagruel\n",
        "pages": 623,
        "title": "Gargantua and Pantagruel",
        "year": 1533,
        "genre": [
            "Historical Fiction",
            "Novel"
        ]
    },
    {
        "id": [
            74
        ],
        "author": "Juan Rulfo",
        "country": "Mexico",
        "imageLink": "images/pedro-paramo.jpg",
        "language": "Spanish",
        "link": "https://en.wikipedia.org/wiki/Pedro_P%C3%A1ramo\n",
        "pages": 124,
        "title": "Pedro P??ramo",
        "year": 1955,
        "genre": [
            "Poetry"
        ]
    },
    {
        "id": [
            75
        ],
        "author": "Rumi",
        "country": "Sultanate of Rum",
        "imageLink": "images/the-masnavi.jpg",
        "language": "Persian",
        "link": "https://en.wikipedia.org/wiki/Masnavi\n",
        "pages": 438,
        "title": "The Masnavi",
        "year": 1236,
        "genre": [
            "Literary Fiction",
            "Novel"
        ]
    },
    {
        "id": [
            76
        ],
        "author": "Salman Rushdie",
        "country": "United Kingdom, India",
        "imageLink": "images/midnights-children.jpg",
        "language": "English",
        "link": "https://en.wikipedia.org/wiki/Midnight%27s_Children\n",
        "pages": 536,
        "title": "Midnight's Children",
        "year": 1981,
        "genre": [
            "Post-apocalytic"
        ]
    },
    {
        "id": [
            77
        ],
        "author": "Saadi",
        "country": "Persia, Persian Empire",
        "imageLink": "images/bostan.jpg",
        "language": "Persian",
        "link": "https://en.wikipedia.org/wiki/Bustan_(book)\n",
        "pages": 298,
        "title": "Bostan",
        "year": 1257,
        "genre": [
            "Tragedy",
            "Drama"
        ]
    },
    {
        "id": [
            78
        ],
        "author": "Tayeb Salih",
        "country": "Sudan",
        "imageLink": "images/season-of-migration-to-the-north.jpg",
        "language": "Arabic",
        "link": "https://en.wikipedia.org/wiki/Season_of_Migration_to_the_North\n",
        "pages": 139,
        "title": "Season of Migration to the North",
        "year": 1966,
        "genre": [
            "Tragedy"
        ]
    },
    {
        "id": [
            79
        ],
        "author": "Jos?? Saramago",
        "country": "Portugal",
        "imageLink": "images/blindness.jpg",
        "language": "Portuguese",
        "link": "https://en.wikipedia.org/wiki/Blindness_(novel)\n",
        "pages": 352,
        "title": "Blindness",
        "year": 1995,
        "genre": [
            "Tragedy"
        ]
    },
    {
        "id": [
            80
        ],
        "author": "William Shakespeare",
        "country": "England",
        "imageLink": "images/hamlet.jpg",
        "language": "English",
        "link": "https://en.wikipedia.org/wiki/Hamlet\n",
        "pages": 432,
        "title": "Hamlet",
        "year": 1603,
        "genre": [
            "Tragedy"
        ]
    },
    {
        "id": [
            81
        ],
        "author": "William Shakespeare",
        "country": "England",
        "imageLink": "images/king-lear.jpg",
        "language": "English",
        "link": "https://en.wikipedia.org/wiki/King_Lear\n",
        "pages": 384,
        "title": "King Lear",
        "year": 1608,
        "genre": [
            "Novel",
            "Psychological"
        ]
    },
    {
        "id": [
            82
        ],
        "author": "William Shakespeare",
        "country": "England",
        "imageLink": "images/othello.jpg",
        "language": "English",
        "link": "https://en.wikipedia.org/wiki/Othello\n",
        "pages": 314,
        "title": "Othello",
        "year": 1609,
        "genre": [
            "Novel",
            "Humorious Fiction"
        ]
    },
    {
        "id": [
            83
        ],
        "author": "Sophocles",
        "country": "Greece",
        "imageLink": "images/oedipus-the-king.jpg",
        "language": "Greek",
        "link": "https://en.wikipedia.org/wiki/Oedipus_the_King\n",
        "pages": 88,
        "title": "Oedipus the King",
        "year": -430,
        "genre": [
            "Novel",
            "Literary Fiction"
        ]
    },
    {
        "id": [
            84
        ],
        "author": "Stendhal",
        "country": "France",
        "imageLink": "images/le-rouge-et-le-noir.jpg",
        "language": "French",
        "link": "https://en.wikipedia.org/wiki/The_Red_and_the_Black\n",
        "pages": 576,
        "title": "The Red and the Black",
        "year": 1830,
        "genre": [
            "Novel",
            "Chidldren's",
            "Science Fiction",
            "Adventure",
            "Fantasy"
        ]
    },
    {
        "id": [
            85
        ],
        "author": "Laurence Sterne",
        "country": "England",
        "imageLink": "images/the-life-and-opinions-of-tristram-shandy.jpg",
        "language": "English",
        "link": "https://en.wikipedia.org/wiki/The_Life_and_Opinions_of_Tristram_Shandy,_Gentleman\n",
        "pages": 640,
        "title": "The Life And Opinions of Tristram Shandy",
        "year": 1760,
        "genre": [
            "Novel",
            "Historical Fiction",
            "Romance",
            "Philosophical Fiction"
        ]
    },
    {
        "id": [
            86
        ],
        "author": "Italo Svevo",
        "country": "Italy",
        "imageLink": "images/confessions-of-zeno.jpg",
        "language": "Italian",
        "link": "https://en.wikipedia.org/wiki/Zeno%27s_Conscience\n",
        "pages": 412,
        "title": "Confessions of Zeno",
        "year": 1923,
        "genre": [
            "Novel",
            "Fiction"
        ]
    },
    {
        "id": [
            87
        ],
        "author": "Jonathan Swift",
        "country": "Ireland",
        "imageLink": "images/gullivers-travels.jpg",
        "language": "English",
        "link": "https://en.wikipedia.org/wiki/Gulliver%27s_Travels\n",
        "pages": 178,
        "title": "Gulliver's Travels",
        "year": 1726,
        "genre": [
            "Fiction",
            "Novella"
        ]
    },
    {
        "id": [
            88
        ],
        "author": "Leo Tolstoy",
        "country": "Russia",
        "imageLink": "images/war-and-peace.jpg",
        "language": "Russian",
        "link": "https://en.wikipedia.org/wiki/War_and_Peace\n",
        "pages": 1296,
        "title": "War and Peace",
        "year": 1867,
        "genre": [
            "Novel",
            "Chidldren's",
            "Adventure"
        ]
    },
    {
        "id": [
            89
        ],
        "author": "Leo Tolstoy",
        "country": "Russia",
        "imageLink": "images/anna-karenina.jpg",
        "language": "Russian",
        "link": "https://en.wikipedia.org/wiki/Anna_Karenina\n",
        "pages": 864,
        "title": "Anna Karenina",
        "year": 1877,
        "genre": [
            "Novel",
            "Fiction"
        ]
    },
    {
        "id": [
            90
        ],
        "author": "Leo Tolstoy",
        "country": "Russia",
        "imageLink": "images/the-death-of-ivan-ilyich.jpg",
        "language": "Russian",
        "link": "https://en.wikipedia.org/wiki/The_Death_of_Ivan_Ilyich\n",
        "pages": 92,
        "title": "The Death of Ivan Ilyich",
        "year": 1886,
        "genre": [
            "Poetry",
            "Fantasy"
        ]
    },
    {
        "id": [
            91
        ],
        "author": "Mark Twain",
        "country": "United States",
        "imageLink": "images/the-adventures-of-huckleberry-finn.jpg",
        "language": "English",
        "link": "https://en.wikipedia.org/wiki/Adventures_of_Huckleberry_Finn\n",
        "pages": 224,
        "title": "The Adventures of Huckleberry Finn",
        "year": 1884,
        "genre": [
            "Novel",
            "Fiction"
        ]
    },
    {
        "id": [
            92
        ],
        "author": "Valmiki",
        "country": "India",
        "imageLink": "images/ramayana.jpg",
        "language": "Sanskrit",
        "link": "https://en.wikipedia.org/wiki/Ramayana\n",
        "pages": 152,
        "title": "Ramayana",
        "year": -450,
        "genre": [
            "Non-readable"
        ]
    },
    {
        "id": [
            93
        ],
        "author": "Virgil",
        "country": "Roman Empire",
        "imageLink": "images/the-aeneid.jpg",
        "language": "Classical Latin",
        "link": "https://en.wikipedia.org/wiki/Aeneid\n",
        "pages": 442,
        "title": "The Aeneid",
        "year": -23,
        "genre": [
            "Novel",
            "Psychological"
        ]
    },
    {
        "id": [
            94
        ],
        "author": "Vyasa",
        "country": "India",
        "imageLink": "images/the-mahab-harata.jpg",
        "language": "Sanskrit",
        "link": "https://en.wikipedia.org/wiki/Mahabharata\n",
        "pages": 276,
        "title": "Mahabharata",
        "year": -700,
        "genre": [
            "Non-readable"
        ]
    },
    {
        "id": [
            95
        ],
        "author": "Walt Whitman",
        "country": "United States",
        "imageLink": "images/leaves-of-grass.jpg",
        "language": "English",
        "link": "https://en.wikipedia.org/wiki/Leaves_of_Grass\n",
        "pages": 152,
        "title": "Leaves of Grass",
        "year": 1855,
        "genre": [
            "Historical Fiction",
            "Novel",
            "Philosophical Fiction"
        ]
    },
    {
        "id": [
            96
        ],
        "author": "Virginia Woolf",
        "country": "United Kingdom",
        "imageLink": "images/mrs-dalloway.jpg",
        "language": "English",
        "link": "https://en.wikipedia.org/wiki/Mrs_Dalloway\n",
        "pages": 216,
        "title": "Mrs Dalloway",
        "year": 1925,
        "genre": [
            "Novel",
            "Literary Fiction"
        ]
    },
    {
        "id": [
            97
        ],
        "author": "Virginia Woolf",
        "country": "United Kingdom",
        "imageLink": "images/to-the-lighthouse.jpg",
        "language": "English",
        "link": "https://en.wikipedia.org/wiki/To_the_Lighthouse\n",
        "pages": 209,
        "title": "To the Lighthouse",
        "year": 1927,
        "genre": [
            "Novel",
            "Fiction"
        ]
    },
    {
        "id": [
            98
        ],
        "author": "Marguerite Yourcenar",
        "country": "France/Belgium",
        "imageLink": "images/memoirs-of-hadrian.jpg",
        "language": "French",
        "link": "https://en.wikipedia.org/wiki/Memoirs_of_Hadrian\n",
        "pages": 408,
        "title": "Memoirs of Hadrian",
        "year": 1951,
        "genre": [
            "Fiction"
        ]
    }
]