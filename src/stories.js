export const data = {
    "story": {
        "title": "The Adventure Begins",
        "start": "chapter1"
    },
    "chapters": {
        "chapter1": {
            "title": "Little Red Riding Hood",
            "text": "Once upon a time there lived in a certain village a little country girl, the prettiest creature who was ever seen. Her mother was excessively fond of her; and her grandmother doted on her still more. This good woman had a little red riding hood made for her. It suited the girl so extremely well that everybody called her Little Red Riding Hood. One day her mother, having made some cakes, said to her, \"Go, my dear, and see how your grandmother is doing, for I hear she has been very ill. Take her a cake, and this little pot of butter. Little Red Riding Hood set out immediately to go to her grandmother, who lived in another village.\"",
            "choices": [
                {
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
            "choices": [
                {
                    "text": "Race the wolf",
                    "goto": "thewoods"
                }
            ]
        },
        "sog1": {
            "title": "The Wolf at the Crossroads",
            "text": "\"So the little girl departed. At the crossway she met the wolf, who said to her: \"Where are you going?\"\\\"I'm taking this hot loaf and bottle of milk to my granny.\"\n\"What path are you taking.\" said the werewolf,\" the path of needles or the path of pins?\"",
            "choices": [
                {
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
            "choices": [
                {
                    "text": "Arrive at Grandmother's House",
                    "goto": "arrival"
                }
            ]
        },
        "arrival": {
            "title": "The Wolf in the Woods",
            "text": "Little Red Riding Hood, who came some time afterwards and knocked at the door: tap, tap. \n \"Who's there?\" Little Red Riding Hood, hearing the big voice of the wolf, was at first afraid; but believing her grandmother had a cold and was hoarse, answered, \"It is your grandchild Little Red Riding Hood, who has brought you a cake and a little pot of butter mother sends you.\" \nThe wolf cried out to her, softening his voice as much as he could, \"Pull the bobbin, and the latch will go up.\"\n Little Red Riding Hood pulled the bobbin, and the door opened.\n The wolf, seeing her come in, said to her, hiding himself under the bedclothes:",
            "choices": [
                {
                    "text": "Put the cake and the little pot of butter upon the stool, and come get into bed with me.",
                    "goto": "bed"
                },
                {
                    "text": "Put it in the cupboard, my child. Take some of the meat which is inside and the bottle of wine on the shelf.",
                    "goto": "dine"
                },
                {
                    "text": "Come a little closer, won't you?",
                    "goto": "dine"
                },
            ]
        },
        "thewoods2": {
            "title": "The Race",
            "text": "The wolf ran as fast as he could, taking the other path, and the little girl took a roundabout way, entertaining herself by gathering nuts, running after butterflies, and gathering bouquets of little flowers. It was not long before the wolf arrived at the old woman's house. He knocked at the door: tap, tap. \"Who's there?\"\n\"Your grandchild, Little Red Riding Hood,\" replied the wolf, counterfeiting her voice; \"who has brought you a cake and a little pot of butter sent you by mother.\"The good grandmother, who was in bed, because she was somewhat ill, cried out, \"Pull the bobbin, and the latch will go up.\" The wolf pulled the bobbin, and the door opened, and then he immediately fell upon the good woman and ate her up in a moment, for it been more than three days since he had eaten.",
            "choices": [
                {
                    "text": "Arrive at Grandmother's House",
                    "goto": "arrival"
                }
            ]
        },
    }
};