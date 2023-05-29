export const data = {
    "story": {
        "title": "The Adventure Begins",
        "start": "chapter1"
    },
    "chapters": {
        "chapter1": {
            "title": "Little Red Riding Hood",
            "text": "Once upon a time there lived in a certain village a little country girl, the prettiest creature who was ever seen. Her mother was excessively fond of her; and her grandmother doted on her still more. This good woman had a little red riding hood made for her. It suited the girl so extremely well that everybody called her Little Red Riding Hood. One day her mother, having made some cakes, said to her, \"Go, my dear, and see how your grandmother is doing, for I hear she has been very ill. Take her a cake, and this little pot of butter. Little Red Riding Hood set out immediately to go to her grandmother, who lived in another village.\"",
            "choices": [{
                "text": "Walk through the woods",
                "goto": "perrault2"
            },
            {
                "text": "Take the path",
                "goto": "sog1"
            }
            ]
        },
        "perrault2": {
            "title": "The Wolf in the Woods",
            "text": "As she was going through the wood, she met with a wolf, who had a very great mind to eat her up, but he dared not, because of some woodcutters working nearby in the forest. He asked her where she was going. The poor child, who did not know that it was dangerous to stay and talk to a wolf, said to him, \"I am going to see my grandmother and carry her a cake and a little pot of butter from my mother.\"\n\"Does she live far off?\" said the wolf.\n\"Oh I say,\" answered Little Red Riding Hood; \"it is beyond that mill you see there, at the first house in the village.\"\n\"Well,\" said the wolf, \"and I'll go and see her too. I'll go this way and go you that, and we shall see who will be there first.\"",
            "choices": [{
                "text": "Race the wolf",
                "goto": "thewoods"
            }]
        },
        "sog1": {
            "title": "The Wolf at the Crossroads",
            "text": "\"So the little girl departed. At the crossway she met the wolf, who said to her: \"Where are you going?\"\\\"I'm taking this hot loaf and bottle of milk to my granny.\"\n\"What path are you taking.\" said the werewolf,\" the path of needles or the path of pins?\"",
            "choices": [{
                "text": "The Path of Needles",
                "goto": "thewoods"
            },
            {
                "text": "The Path of Pins",
                "goto": "thewoods"
            }
            ]
        },
        "thewoods": {
            "title": "The Race",
            "text": "The wolf ran as fast as he could, taking the other path, and the little girl took a roundabout way, entertaining herself by gathering nuts, running after butterflies, and gathering bouquets of little flowers. It was not long before the wolf arrived at the old woman's house. He knocked at the door: tap, tap. \"Who's there?\"\n\"Your grandchild, Little Red Riding Hood,\" replied the wolf, counterfeiting her voice; \"who has brought you a cake and a little pot of butter sent you by mother.\"The good grandmother, who was in bed, because she was somewhat ill, cried out, \"Pull the bobbin, and the latch will go up.\" The wolf pulled the bobbin, and the door opened, and then he immediately fell upon the good woman and ate her up in a moment, for it been more than three days since he had eaten.",
            "choices": [{
                "text": "Arrive at Grandmother's House",
                "goto": "arrival"
            }]
        },
        "arrival": {
            "title": "Arriving at Grandmother's",
            "text": "Little Red Riding Hood, who came some time afterwards and knocked at the door: tap, tap. \n \"Who's there?\" Little Red Riding Hood, hearing the big voice of the wolf, was at first afraid; but believing her grandmother had a cold and was hoarse, answered, \"It is your grandchild Little Red Riding Hood, who has brought you a cake and a little pot of butter mother sends you.\" \nThe wolf cried out to her, softening his voice as much as he could, \"Pull the bobbin, and the latch will go up.\"\n Little Red Riding Hood pulled the bobbin, and the door opened.\n The wolf, seeing her come in, said to her, hiding himself under the bedclothes:",
            "choices": [{
                "text": "Put the cake and the little pot of butter upon the stool, and come get into bed with me.",
                "goto": "bed"
            },
            {
                "text": "Put it in the cupboard, my child. Take some of the meat which is inside and the bottle of wine on the shelf.",
                "goto": "dine"
            },

            ]
        },
        "dine": {
            "title": "Dining at Grandmother's",
            "text": "After she had eaten, there was a little cat which said: \n\"Phooey!... A slut is she who eats the flesh and drinks the blood of her granny.\"\n\"Undress yourself, my child, and come lie down beside me.\"",
            "choices": [{
                "text": "Arrive at Grandmother's House",
                "goto": "bed"
            }]
        },
        "bed": {
            "title": "Getting into Bed",
            "text": "\"Where should I put my apron?\"\n\"Throw it into the fire, my child, you won't be needing it any more.\"\n And each time she asked where she should put all her other clothes, the bodice, the dress, the petticoat, the long stockings, the wolf responded: \n\"Throw them into the fire, my child, you won't be needing them anymore.\"\n When she laid herself down in the bed, the little girl said: \n\"Oh granny, how hairy you are!\"\n\"The better to keep myself warm, my child!\"\n\"Oh granny, what big nails you have!\"\n\"The better to scratch me with, my child!\"\n\"Oh granny, what big shoulders you have!\"\n\"The better to carry the firewood, my child!\"\n\"Oh granny, what big ears you have!\"\n\"The better to hear you with, my child!\"\n\"Oh granny, what big nostrils you have!\"\n\"The better to snuff my tobacco with, my child!\"\n\"Oh granny, what a big mouth you have!\"\n\"The better to eat you with, my child!\"",
            "choices": [{
                "text": "Go to the bathroom",
                "goto": "end1"
            },
            {
                "text": "Be eaten",
                "goto": "dead"
            },
            {
                "text": "Pull out your pistol",
                "goto": "end2"
            }
            ]
        },
        "end1": {
            "title": "Escaping the Wolf",
            "text": "\"Oh granny, I have to go badly. Let me go outside.\"\n\"Do it in the bed, my child!\"\n\"Oh no, granny, I want to go outside.\"\n\"All right, but make it quick.\"\n The werewolf attached a woolen rope to her foot and let her go outside.When the little girl was outside, she tied the end of the rope to a plum tree in the courtyard.The werewolf became impatient and said: \"Are you making a load out there? Are you making a load?\"\nWhen he realized that nobody was answering him, he jumped out of bed and saw that the little girl had escaped.He followed her but arrived at her house just at the moment she entered.",
            "choices": [{
                "text": "You're saved! Try again?",
                "goto": "chapter1"
            }]
        },
        "end2": {
            "title": "Bang!",
            "text": "The small girl smiles. One eyelid flickers.\n She whips a pistol from her knickers.\n She aims it at the creature's head,\nAnd bang bang bang, she shoots him dead.\nA few weeks later, in the wood, \nI came across Miss Riding Hood.\nBut what a change! No cloak of red, \nNo silly hood upon her head.\nShe said, \"Hello, and do please note\n My lovely furry wolfskin coat.\"",
            "choices": [{
                "text": "You're saved! Try again?",
                "goto": "chapter1"
            }]
        },
        "dead": {
            "title": "Eaten",
            "text": "The wolf jumped out of bed, jumped on top of poor Little Red Riding Hood, and ate her up.",
            "choices": [{
                "text": "Take another path?",
                "goto": "chapter1"
            },
            {
                "text": "The hunter walks by...",
                "goto": "hunter"
            },
            ]
        },
        "hunter": {
            "title": "The Hunter",
            "text": "As soon as the wolf had finished this tasty bite, he climbed back into bed, fell asleep, and began to snore very loudly. A huntsman was just passing by. He thought it strange that the old woman was snoring so loudly, so he decided to take a look. He stepped inside, and in the bed there lay the wolf that he had been hunting for such a long time \"He has eaten the grandmother, but perhaps she still can be saved. I won't shoot him,\" thought the huntsman. So he took a pair of scissors and cut open his belly. He had cut only a few strokes when he saw the red cap shining through. He cut a little more, and the girl jumped out and cried: \"Oh, I was so frightened! It was so dark inside the wolf's body!\" And then the grandmother came out alive as well. Then Little Red Riding Hood fetched some large heavy stones. They filled the wolf's body with them, and when he woke up and tried to run away, the stones were so heavy that he fell down dead.\nThe three of them were happy.The huntsman took the wolf's pelt. The grandmother ate the cake and drank the wine that Little Red Riding Hood had brought. And Little Red Riding Hood thought to herself: \"As long as I live, I will never leave the path and run off into the woods by myself if mother tells me not to.\"",
            "choices": [{
                "text": "You're saved! Try again?",
                "goto": "chapter1"
            },]
        },
    },
};