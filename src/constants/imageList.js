import starryNight from '../assets/starry-night/thumbnail.jpg'
import starryNight2 from '../assets/starry-night/hero-large.jpg'
import starryNight3 from '../assets/starry-night/hero-small.jpg'
import artist1 from '../assets/starry-night/artist.jpg'
import girl from '../assets/girl-with-pearl-earring/thumbnail.jpg'
import girl2 from '../assets/girl-with-pearl-earring/hero-large.jpg'
import girl3 from '../assets/girl-with-pearl-earring/hero-small.jpg'
import artist2 from '../assets/girl-with-pearl-earring/artist.jpg'
import guernica from '../assets/guernica/thumbnail.jpg'
import guernica2 from '../assets/guernica/hero-large.jpg'
import guernica3 from '../assets/guernica/hero-small.jpg'
import artist3 from '../assets/guernica/artist.jpg' 
import magdalene from '../assets/penitent-magdalene/thumbnail.jpg'
import magdalene2 from '../assets/penitent-magdalene/hero-large.jpg'
import magdalene3 from '../assets/penitent-magdalene/hero-small.jpg'
import artist4 from '../assets/penitent-magdalene/artist.jpg'
import storm from '../assets/the-storm-on-the-sea-of-galilee/thumbnail.jpg'
import storm2 from '../assets/the-storm-on-the-sea-of-galilee/hero-large.jpg'
import storm3 from '../assets/the-storm-on-the-sea-of-galilee/hero-small.jpg'
import artist5 from '../assets/the-storm-on-the-sea-of-galilee/artist.jpg'
import wave from '../assets/the-great-wave-off-kanagawa/thumbnail.jpg'
import wave2 from '../assets/the-great-wave-off-kanagawa/hero-large.jpg'
import wave3 from '../assets/the-great-wave-off-kanagawa/hero-small.jpg'
import artist6 from '../assets/the-great-wave-off-kanagawa/artist.jpg'
import gog from '../assets/van-gogh-self-portrait/thumbnail.jpg'
import gog2 from '../assets/van-gogh-self-portrait/hero-large.jpg'
import gog3 from '../assets/van-gogh-self-portrait/hero-small.jpg'
import artist7 from '../assets/van-gogh-self-portrait/artist.jpg'
import gypsy from '../assets/the-sleeping-gypsy/thumbnail.jpg'
import gypsy2 from '../assets/the-sleeping-gypsy/hero-large.jpg'
import gypsy3 from '../assets/the-sleeping-gypsy/hero-small.jpg'
import artist8 from '../assets/the-sleeping-gypsy/artist.jpg'
import lady from '../assets/lady-with-an-ermine/thumbnail.jpg'
import lady2 from '../assets/lady-with-an-ermine/hero-large.jpg'
import lady3 from '../assets/lady-with-an-ermine/hero-small.jpg'
import artist9 from '../assets/lady-with-an-ermine/artist.jpg'
import cafe from '../assets/the-night-cafe/thumbnail.jpg'
import cafe2 from '../assets/the-night-cafe/hero-large.jpg'
import cafe3 from '../assets/the-night-cafe/hero-small.jpg'
import artist10 from '../assets/the-night-cafe/artist.jpg'
import lisa from '../assets/mona-lisa/thumbnail.jpg'
import lisa2 from '../assets/mona-lisa/hero-large.jpg'
import lisa3 from '../assets/mona-lisa/hero-small.jpg'
import artist11 from '../assets/mona-lisa/artist.jpg'
import basket from '../assets/the-basket-of-apples/thumbnail.jpg'
import basket2 from '../assets/the-basket-of-apples/hero-large.jpg'
import basket3 from '../assets/the-basket-of-apples/hero-small.jpg'
import artist12 from '../assets/the-basket-of-apples/artist.jpg'
import boy from '../assets/the-boy-in-the-red-vest/thumbnail.jpg'
import boy2 from '../assets/the-boy-in-the-red-vest/hero-large.jpg'
import boy3 from '../assets/the-basket-of-apples/hero-small.jpg'
import artist13 from '../assets/the-basket-of-apples/artist.jpg'
import arnol from '../assets/arnolfini-portrait/thumbnail.jpg'
import arnol2 from '../assets/arnolfini-portrait/hero-large.jpg'
import arnol3 from '../assets/arnolfini-portrait/hero-small.jpg'
import artist14 from '../assets/arnolfini-portrait/artist.jpg'
import swing from '../assets/the-swing/thumbnail.jpg'
import swing2 from '../assets/the-swing/hero-large.jpg'
import swing3 from '../assets/the-swing/hero-small.jpg'
import artist15 from '../assets/the-swing/artist.jpg'


const imageList = [
    {   
        id: 1,
        image: starryNight,
        image2: starryNight2,
        image3: starryNight3,
        artist: artist1,
        title: 'Starry Night',
        description: 'Vincent Van Gogh',
        span: { rows: 1, columns: 1 },
        year: 1889,
        descrip: 'Although The Starry Night was painted during the day in Van Goghs ground-floor studio, it would be inaccurate to state that the picture was painted from memory. The view has been identified as the one from his bedroom window, facing east, a view which Van Gogh painted variations of no fewer than twenty-one times, including The Starry Night. "Through the iron-barred window, he wrote to his brother, Theo, around 23 May 1889, I can see an enclosed square of wheat ... above which, in the morning, I watch the sun rise in all its glory.', 
    },
    {
        id: 2,
        image: girl,
        image2: girl2,
        image3: girl3,
        artist: artist2,
        title: 'Girl with a Pearl Earring',
        description: 'Johannes Vermeer',
        span: { rows: 2, columns: 1 },
        year: 1665,
        descrip: 'The painting is a tronie, the Dutch 17th-century description of a head that was not meant to be a portrait. It depicts a European girl wearing an exotic dress, an oriental turban, and what was thought to be a very large pearl as an earring. In 2014, Dutch astrophysicist Vincent Icke raised doubts about the material of the earring and argued that it looks more like polished tin than pearl on the grounds of the specular reflection, the pear shape and the large size of the earring.'
    },
    {
        id: 3,
        image: guernica,
        image2: guernica2,
        image3: guernica3,
        artist: artist3,
        title: 'Guernica',
        description: 'Pablo Picasso',
        span: { rows: 1, columns: 1 },
        year: 1937,
        descrip: 'The scene occurs within a room where, on the left, a wide-eyed bull stands over a grieving woman holding a dead child in her arms. In the center of the room a horse falls in agony with a large gaping hole in its side, as if it had just been run through by a spear or javelin. The horse appears to be wearing chain mail armor, decorated with vertical tally marks arranged in rows. A dead and dismembered soldier lies under the horse. The hand of his severed right arm grasps a shattered sword, from which a flower grows.'
    },
    {
        id: 4,
        image: magdalene,
        image2: magdalene2,
        image3: magdalene3,
        artist: artist4,
        title: 'Penitent Magdalene',
        description: 'Artemisia Gentileschi',
        span: { rows: 1, columns: 1 },
        year: 1625,
        descrip: 'Penitent Magdalene is a painting by the Italian artist Artemisia Gentileschi. It hangs in Seville Cathedral. It has probably been in the cathedral since the late 17th century. The paintings first home was the collection of Fernando Enriquez Afan de Ribera, from 1626 to 1637. She returned to the subject later in the 1620s in Mary Magdalene as Melancholy. ' 
    },
    {
        id: 5,
        image: storm,
        image2: storm2,
        image3: storm3,
        artist: artist5,
        title: 'The Storm on the Sea of Galilee',
        description: 'Rembrandt',
        span: { rows: 1, columns: 1 },
        year: 1633,
        descrip: 'The painting, in vertical format, shows a close-up view of Christs disciples struggling frantically against the heavy storm to regain control of their fishing boat. A huge wave beats the bow and rips the sail. One of the disciples is seen vomiting over the side. Another one, looking directly out at the viewer, is a self-portrait of the artist. Only Christ, depicted on the right, remains calm.'
    },
    {
        id: 6,
        image: wave,
        image2: wave2,
        image3: wave3,
        artist: artist6,
        title: 'The Great Wave off Kanagawa',
        description: 'Hokusai',
        span: { rows: 1, columns: 2 },
        year: 1831,
        descrip: 'The Great Wave off Kanagawa (Japanese: 神奈川沖浪裏, Hepburn: Kanagawa-oki Nami Ura, lit. "Under the Wave off Kanagawa"), also known as The Great Wave or simply The Wave, is a woodblock print by the Japanese ukiyo-e artist Hokusai. It was published sometime between 1829 and 1833 in the late Edo period as the first print in Hokusais series Thirty-six Views of Mount Fuji. The image depicts an enormous wave threatening three boats off the coast in the Sagami Bay (Kanagawa Prefecture) while Mount Fuji rises in the background. ' 
    },
    {
        id: 7,
        image: gog,
        image2: gog2,
        image3: gog3,
        artist: artist7,
        title: 'Van Gogh Self-portrait',
        description: 'Vincent Van Gogh',
        span: { rows: 2, columns: 1 },
        year: 1889,
        descrip: 'This self-portrait was one of about 32 produced over a 10-year period, and these were an important part of his work as a painter; he painted himself because he often lacked the money to pay for models. He took the painting with him to Auvers-sur-Oise, near Paris, where he showed it to Dr. Paul Gachet, who thought it was "absolutely fanatical". Art historians are divided as to whether this painting or Self-portrait without beard is Van Goghs final self-portrait. The art historians Ingo F. Walther and Jan Hulsker consider this to be the last.' 
    },
    {
        id: 8,
        image: gypsy,
        image2: gypsy2,
        image3: gypsy3,
        artist: artist8,
        title: 'The Sleeping Gypsy',
        description: 'Henri Rousseau',
        span: { rows: 1, columns: 1 },
        year: 1897,
        descrip: 'The Sleeping Gypsy (French: La Bohémienne endormie) is an 1897 oil painting by French Naïve artist Henri Rousseau (1844–1910). It is a fantastical depiction of a lion musing over a sleeping woman on a moonlit night. Rousseau first exhibited the painting at the 13th Salon des Indépendants, and tried unsuccessfully to sell it to the mayor of his hometown, Laval. Instead, it entered the private collection of a Parisian charcoal merchant where it remained until 1924, when it was discovered by the art critic Louis Vauxcelles.'    
    },
    {
        id: 9,
        image: lady,
        image2: lady2,
        image3: lady3,
        artist: artist9,
        title: 'Lady with an Ermine',
        description: 'Leonardo da Vinci',
        span: { rows: 2, columns: 1 },
        year: 1489,
        descrip: 'The Lady with an Ermine (Italian Dama con lermellino; Polish Dama z gronostajem) is a portrait painting widely attributed to the Italian Renaissance artist Leonardo da Vinci. Dated to c. 1489–1491, the work is painted in oils on a panel of walnut wood. Its subject is Cecilia Gallerani, a mistress of Ludovico Sforza ("Il Moro"), Duke of Milan; Leonardo was painter to the Sforza court at the time of its execution. It is one of only four surviving portraits of women painted by Leonardo, the others being Ginevra de Benci, La Belle Ferronnière and the Mona Lisa.' 
    },
    {
        id: 10,
        image: cafe,
        image2: cafe2,
        image3: cafe3,
        artist: artist10,
        title: 'The Night Café',
        description: 'Vincent Van Gogh',
        span: { rows: 1, columns: 1 },
        year: 1888,
        descrip: 'The Night Café (French Le Café de nuit) is an oil painting created by Dutch artist Vincent van Gogh in September 1888 in Arles. Its title is inscribed lower right beneath the signature. The painting is owned by Yale University and is currently held at the Yale University Art Gallery in New Haven, Connecticut. The interior depicted is the Café de la Gare, 30 Place Lamartine, run by Joseph-Michel Ginoux and his wife Marie, who in November 1888 posed for Van Goghs and Gauguins Arlésienne; a bit later, Joseph Ginoux evidently posed for both artists, too.' 
    },
    {
        id: 11,
        image: lisa,
        image2: lisa2,
        image3: lisa3,
        artist: artist11,
        title: 'Mona Lisa',
        description: 'Leonardo da Vinci',
        span: { rows: 2, columns: 1 },
        year: 1503,
        descrip: 'The Mona Lisa or Monna Lisa is a half-length portrait painting by Italian artist Leonardo da Vinci. Considered an archetypal masterpiece of the Italian Renaissance, it has been described as "the best known, the most visited, the most written about, the most sung about, the most parodied work of art in the world. The paintings novel qualities include the subjects enigmatic expression, the monumentality of the composition, the subtle modelling of forms, and the atmospheric illusionism.' 
    },
    {
        id: 12,
        image: basket,
        image2: basket2,
        image3: basket3,
        artist: artist12,
        title: 'The Basket of Apples',
        description: 'Paul Cézanne',
        span: { rows: 1, columns: 1 },
        year: 1893,
        descrip: 'The Basket of Apples (French: Le panier de pommes) is a still life oil painting by French artist Paul Cézanne, which he created c. 1893. The painting is particularly remarkable for its creative composition, which rejected realistic representation in favour of distorting objects to create multiple perspectives. This approach eventually influenced other art movements, including Fauvism and Cubism. It belongs to the Helen Birch Bartlett Memorial Collection of the Art Institute of Chicago.' 
    },
    {
        id: 13,
        image: boy,
        image2: boy2,
        image3: boy3,
        artist: artist13,
        title: 'The Boy in the Red Vest',
        description: 'Paul Cézanne',
        span: { rows: 2, columns: 2 },
        year: 1889,
        descrip: 'Cézanne painted four oil portraits of this Italian boy in the red vest, all in different poses, which allowed him to study the relationship between the figure and space. The most famous of the four, and the one commonly referred to by this title, is the one which depicts the boy in a melancholic seated pose with his elbow on a table and his head cradled in his hand. It is currently held in Zürich, Switzerland. The other three portraits, of different poses, are in museums in the US'
    },
    {
        id: 14,
        image: arnol,
        image2: arnol2,
        image3: arnol3,
        artist: artist14,
        title: 'Arnolfini Portrait',
        description: 'Jan van Eyck',
        span: { rows: 2, columns: 1 },
        year: 1434,
        descrip: 'It is considered one of the most original and complex paintings in Western art, because of its beauty, complex iconography, geometric orthogonal perspective, and expansion of the picture space with the use of a mirror. According to Ernst Gombrich in its own way it was as new and revolutionary as Donatellos or Masaccios work in Italy. A simple corner of the real world had suddenly been fixed on to a panel as if by magic ... For the first time in history the artist became the perfect eye-witness in the truest sense of the term' 
    },
    {
        id: 15,
        image: swing,
        image2: swing2,
        image3: swing3,
        artist: artist15,
        title: 'The Swing',
        description: 'Jean-Honoré Fragonard',
        span: { rows: 1, columns: 1 },
        year: 1767,
        descrip: 'The painting depicts an elegant young woman on a swing. A smiling young man, hiding in the bushes on the left, watches her from a vantage point that allows him to see up into her billowing dress, where his arm is pointed with hat in hand. A smiling older man, who is nearly hidden in the shadows on the right, propels the swing with a pair of ropes. The older man appears to be unaware of the young man. As the young lady swings high, she throws her left leg up, allowing her dainty shoe to fly through the air.' 
    }


]

export default imageList