const hobbySet = [
    "Reading",
    "Writing",
    "Painting",
    "Drawing",
    "Sculpting",
    "Photography",
    "Cooking",
    "Baking",
    "Gardening",
    "Knitting",
    "Crocheting",
    "Sewing",
    "Embroidery",
    "Woodworking",
    "Pottery",
    "Calligraphy",
    "Scrapbooking",
    "Graphic Design",
    "Web Design",
    "Animation",
    "Video Editing",
    "Filmmaking",
    "Acting",
    "Dancing",
    "Singing",
    "Playing Musical Instruments",
    "Songwriting",
    "DJing",
    "Magic and Illusion",
    "Stand-up Comedy",
    "Podcasting",
    "Blogging",
    "Vlogging",
    "Radio Hosting",
    "Astronomy",
    "Bird Watching",
    "Fossil Hunting",
    "Metal Detecting",
    "Geocaching",
    "Rock Collecting",
    "Antiquing",
    "Coin Collecting",
    "Stamp Collecting",
    "Model Building",
    "Scale Modeling",
    "RC Cars/Boats/Planes",
    "Lego Building",
    "Puzzle Solving",
    "Chess",
    "Board Games",
    "Card Games",
    "Role-Playing Games",
    "Video Gaming",
    "Esports",
    "Table Tennis",
    "Badminton",
    "Tennis",
    "Squash",
    "Golf",
    "Miniature Golf",
    "Bowling",
    "Archery",
    "Fencing",
    "Martial Arts",
    "Boxing",
    "Wrestling",
    "Yoga",
    "Pilates",
    "Aerobics",
    "Zumba",
    "Dance Fitness",
    "Cycling",
    "Mountain Biking",
    "BMX",
    "Skateboarding",
    "Roller Skating",
    "Ice Skating",
    "Skiing",
    "Snowboarding",
    "Surfing",
    "Windsurfing",
    "Kitesurfing",
    "Scuba Diving",
    "Snorkeling",
    "Swimming",
    "Water Skiing",
    "Wakeboarding",
    "Rowing",
    "Canoeing",
    "Kayaking",
    "Sailing",
    "Fishing",
    "Fly Fishing",
    "Ice Fishing",
    "Hunting",
    "Archery",
    "Camping",
    "Hiking",
    "Backpacking",
    "Rock Climbing",
    "Mountaineering",
    "Paragliding",
    "Skydiving",
    "Bungee Jumping",
    "Base Jumping",
    "Hang Gliding",
    "Drone Flying",
    "Traveling",
    "Backpacking",
    "Cruise Travel",
    "Road Tripping",
    "Cultural Exchange",
    "Language Learning",
    "Historical Reenactment",
    "Genealogy",
    "Astrology",
    "Tarot Reading",
    "Numerology",
    "Meditation",
    "Mindfulness",
    "Reiki",
    "Yoga",
    "Tai Chi",
    "Qi Gong",
    "Feng Shui",
    "Herbalism",
    "Aromatherapy",
    "Crystal Healing",
    "Acupuncture",
    "Massage Therapy",
    "Reflexology",
    "Homebrewing",
    "Wine Making",
    "Beer Tasting",
    "Wine Tasting",
    "Coffee Roasting",
    "Tea Tasting",
    "Chocolate Making",
    "Cheese Making",
    "Candy Making",
    "Soap Making",
    "Candle Making",
    "Perfumery",
    "Fashion Design",
    "Jewelry Making",
    "Shoe Making",
    "Hat Making",
    "Tattoo Art",
    "Body Piercing",
    "Hair Styling",
    "Makeup Artistry",
    "Nail Art",
    "Skin Care",
    "Bodybuilding",
    "Weightlifting",
    "CrossFit",
    "Running",
    "Marathon Running",
    "Triathlon",
    "Obstacle Course Racing",
    "Parkour",
    "Calisthenics",
    "Gymnastics",
    "Trampolining",
    "Horse Riding",
    "Polo",
    "Equestrian Sports",
    "Dog Training",
    "Bird Training",
    "Aquarium Keeping",
    "Beekeeping",
    "Butterfly Gardening",
    "Animal Rescue",
    "Wildlife Conservation",
    "Environmental Activism",
    "Sustainable Living",
    "Renewable Energy",
    "Organic Farming",
    "Composting",
    "Recycling",
    "DIY Home Improvement",
    "Furniture Making",
    "Interior Decorating",
    "Home Automation",
    "Robotics",
    "3D Printing",
    "Electronics",
    "Arduino Projects",
    "Raspberry Pi Projects",
    "Computer Programming",
    "Ethical Hacking",
    "Cybersecurity",
    "Blockchain",
    "Cryptocurrency",
    "Stock Market Investing",
    "Forex Trading",
    "Real Estate Investing",
    "Collectible Investing",
    "Philanthropy",
    "Volunteering",
    "Community Service",
    "Political Activism",
    "Social Activism",
    "Public Speaking",
    "Debate",
    "Journalism",
    "Creative Writing",
    "Poetry Writing",
    "Playwriting",
    "Screenwriting",
    "Novel Writing",
    "Short Story Writing",
    "Memoir Writing",
    "Biography Writing",
    "Travel Writing",
    "Food Writing",
    "Science Writing",
    "Technical Writing",
    "Copywriting",
    "Biblical Studies",
    "Theological Studies",
    "Philosophical Studies",
    "Historical Studies",
    "Literary Studies",
    "Cultural Studies",
    "Sociological Studies",
    "Psychological Studies",
    "Political Studies",
    "Economical Studies",
    "Mathematical Studies",
    "Scientific Research",
    "Astronomical Research",
    "Biological Research",
    "Chemical Research",
    "Physics Research",
    "Earth Science Research",
    "Environmental Research",
    "Medical Research",
    "Technological Research",
    "Archaeological Research",
    "Geographical Research",
    "Oceanographic Research",
    "Meteorological Research",
    "Anthropological Research",
    "Linguistic Research",
    "Genealogical Research",
    "Art History",
    "Music History",
    "Film History",
    "Theater History",
    "Dance History",
    "Fashion History",
    "Military History",
    "Sports History",
    "Automotive History",
    "Aviation History",
    "Nautical History",
    "Railway History",
    "Space History",
    "Natural History",
    "Urban Exploration",
    "Rural Exploration",
    "Cave Exploration",
    "Underwater Exploration",
    "Mountain Exploration",
    "Desert Exploration",
    "Polar Exploration",
    "Jungle Exploration",
    "Island Exploration",
    "Volcano Exploration",
    "Glacier Exploration",
    "River Exploration",
    "Lake Exploration",
    "Canyon Exploration",
    "Forest Exploration",
    "Wetland Exploration",
    "Marsh Exploration",
    "Swamp Exploration",
    "Savanna Exploration",
    "Steppe Exploration",
    "Prairie Exploration",
    "Meadow Exploration",
    "Field Exploration",
    "Hill Exploration",
    "Valley Exploration",
    "Plateau Exploration",
    "Basin Exploration",
    "Delta Exploration",
    "Peninsula Exploration",
    "Archipelago Exploration",
    "Atoll Exploration",
    "Reef Exploration",
    "Cliff Exploration",
    "Dune Exploration",
    "Oasis Exploration",
    "Fjord Exploration",
    "Tundra Exploration",
    "Taiga Exploration",
    "Rainforest Exploration",
    "Mangrove Exploration",
    "Coral Reef Exploration",
    "Kelp Forest Exploration",
    "Seagrass Exploration",
    "Alpine Exploration",
    "Subalpine Exploration",
    "Montane Exploration",
    "Temperate Exploration",
    "Tropical Exploration",
    "Arid Exploration",
    "Semi-Arid Exploration",
    "Humid Exploration",
    "Sub-Humid Exploration",
    "Wet Exploration",
    "Dry Exploration",
    "Cold Exploration",
    "Hot Exploration",
    "Mild Exploration",
    "Extreme Exploration",
    "Remote Exploration",
    "Accessible Exploration",
    "Challenging Exploration",
    "Easy Exploration",
    "Adventurous Exploration",
    "Relaxing Exploration",
    "Exciting Exploration",
    "Educational Exploration",
    "Cultural Exploration",
    "Historical Exploration",
    "Natural Exploration",
    "Artificial Exploration",
    "Urban Exploration",
    "Rural Exploration",
    "Coastal Exploration",
    "Inland Exploration",
    "Highland Exploration",
    "Lowland Exploration",
    "Isolated Exploration",
    "Populated Exploration",
    "Developed Exploration",
    "Undeveloped Exploration",
    "Protected Exploration",
    "Unprotected Exploration",
    "Podcasting",
    "Digital Art",
    "Manga Drawing",
    "Anime Watching",
    "Cosplay",
    "Furniture Restoration",
    "Glassblowing",
    "Mosaic Art",
    "Papercraft",
    "Origami",
    "Quilling",
    "Paper Mache",
    "Bookbinding",
    "Leatherworking",
    "Stone Carving",
    "Blacksmithing",
    "Metalworking",
    "Jewelry Engraving",
    "Silversmithing",
    "Goldsmithing",
    "Watchmaking",
    "Clockmaking",
    "Taxidermy",
    "Ceramics",
    "Glass Etching",
    "Stained Glass Making",
    "Lapidary",
    "Gem Cutting",
    "Pearl Stringing",
    "Beadwork",
    "Macrame",
    "Tatting",
    "Lace Making",
    "Felting",
    "Spinning Wool",
    "Weaving",
    "Dyeing Fabric",
    "Quilting",
    "Rug Hooking",
    "Braiding",
    "Candle Making",
    "Soap Making",
    "Perfume Making",
    "Incense Making",
    "Bath Bomb Making",
    "Lotion Making",
    "Lip Balm Making",
    "Herbal Medicine Making",
    "Essential Oil Distillation",
    "Wine Making",
    "Beer Brewing",
    "Mead Making",
    "Cider Making",
    "Sake Brewing",
    "Distilling Spirits",
    "Mixology",
    "Coffee Brewing",
    "Tea Blending",
    "Chocolate Making",
    "Cheese Making",
    "Yogurt Making",
    "Kombucha Brewing",
    "Kimchi Making",
    "Sauerkraut Making",
    "Pickling",
    "Fermenting Vegetables",
    "Bread Making",
    "Pastry Making",
    "Cake Decorating",
    "Sugar Art",
    "Chocolate Sculpting",
    "Ice Sculpting",
    "Butter Sculpting",
    "Sand Sculpting",
    "Balloon Sculpting",
    "Clowning",
    "Mime",
    "Puppetry",
    "Marionette Making",
    "Doll Making",
    "Toy Making",
    "Model Railroad Building",
    "Diorama Making",
    "Miniature Painting",
    "Wargaming",
    "Fantasy Sports",
    "Sports Memorabilia Collecting",
    "Autograph Collecting",
    "Movie Memorabilia Collecting",
    "Comic Book Collecting",
    "Stamp Collecting",
    "Coin Collecting",
    "Banknote Collecting",
    "Postcard Collecting",
    "Sticker Collecting",
    "Button Collecting",
    "Matchbook Collecting",
    "Keychain Collecting",
    "Magnet Collecting",
    "Spoon Collecting",
    "Thimble Collecting",
    "Shot Glass Collecting",
    "Snow Globe Collecting",
    "Action Figure Collecting",
    "Doll Collecting",
    "Teddy Bear Collecting",
    "Vintage Toy Collecting",
    "Model Car Collecting",
    "Diecast Collecting",
    "Model Ship Collecting",
    "Model Plane Collecting",
    "Scale Model Building",
    "Model Kit Building",
    "RC Car Racing",
    "RC Boat Racing",
    "RC Plane Flying",
    "RC Helicopter Flying",
    "Drone Racing",
    "Kite Flying",
    "Kite Making",
    "Kite Surfing",
    "Paragliding",
    "Hang Gliding",
    "Skydiving",
    "Bungee Jumping",
    "Base Jumping",
    "Wingsuit Flying",
    "Parachuting",
    "Hot Air Ballooning",
    "Gliding",
    "Ultra-Light Flying",
    "Gyrocopter Flying",
    "Microlight Flying",
    "Flying Lessons",
    "Flight Simulation",
    "Aircraft Spotting",
    "Bird Watching",
    "Whale Watching",
    "Dolphin Watching",
    "Wildlife Watching",
    "Nature Photography",
    "Landscape Photography",
    "Wildlife Photography",
    "Bird Photography",
    "Macro Photography",
    "Astrophotography",
    "Underwater Photography",
    "Portrait Photography",
    "Fashion Photography",
    "Street Photography",
    "Documentary Photography",
    "Photojournalism",
    "Event Photography",
    "Wedding Photography",
    "Food Photography",
    "Product Photography",
    "Sports Photography",
    "Automotive Photography",
    "Architectural Photography",
    "Real Estate Photography",
    "Travel Photography",
    "Fine Art Photography",
    "Conceptual Photography",
    "Surreal Photography",
    "Abstract Photography",
    "Photographic Editing",
    "Photographic Printing",
    "Darkroom Processing",
    "Digital Art",
    "Graphic Design",
    "Web Design",
    "UI/UX Design",
    "App Design",
    "Game Design",
    "Animation",
    "3D Modeling",
    "3D Animation",
    "Motion Graphics",
    "Video Production",
    "Video Editing",
    "Vlogging",
    "YouTube Channel Creation",
    "Podcasting",
    "Radio Hosting",
    "Voice Acting",
    "Audiobook Narration",
    "Sound Design",
    "Music Production",
    "Music Composition",
    "Songwriting",
    "Singing",
    "Rapping",
    "Beatboxing",
    "DJing",
    "Turntablism",
    "Electronic Music Production",
    "Acoustic Guitar Playing",
    "Electric Guitar Playing",
    "Bass Guitar Playing",
    "Ukulele Playing",
    "Banjo Playing",
    "Mandolin Playing",
    "Harp Playing",
    "Piano Playing",
    "Keyboard Playing",
    "Synthesizer Playing",
    "Organ Playing",
    "Accordion Playing",
    "Melodica Playing",
    "Violin Playing",
    "Viola Playing",
    "Cello Playing",
    "Double Bass Playing",
    "Flute Playing",
    "Piccolo Playing",
    "Clarinet Playing",
    "Oboe Playing",
    "Bassoon Playing",
    "Saxophone Playing",
    "Trumpet Playing",
    "Trombone Playing",
    "French Horn Playing",
    "Tuba Playing",
    "Euphonium Playing",
    "Percussion Playing",
    "Drum Kit Playing",
    "Hand Drumming",
    "Marimba Playing",
    "Xylophone Playing",
    "Vibraphone Playing",
    "Steelpan Playing",
    "Hang Drum Playing",
    "Glockenspiel Playing",
    "Timpani Playing",
    "Tabla Playing",
    "Sitar Playing",
    "Sarod Playing",
    "Veena Playing",
    "Tanpura Playing",
    "Shamisen Playing",
    "Koto Playing",
    "Erhu Playing",
    "Pipa Playing",
    "Guqin Playing",
    "Dizi Playing",
    "Shakuhachi Playing",
    "Hulusi Playing",
    "Kazoo Playing",
    "Theremin Playing",
    "Musical Saw Playing",
    "Glass Harmonica Playing",
    "Waterphone Playing",
    "Musical Spoon Playing",
    "Jug Playing",
    "Washboard Playing",
    "Skiffle Band Playing",
    "Brass Band Playing",
    "Marching Band Playing",
    "Orchestra Playing",
    "Chamber Music Playing",
    "Jazz Band Playing",
    "Rock Band Playing",
    "Pop Band Playing",
    "Funk Band Playing",
    "Reggae Band Playing",
    "Ska Band Playing",
    "Punk Band Playing",
    "Metal Band Playing",
    "Grunge Band Playing",
    "Hip Hop Group Playing",
    "R&B Group Playing",
    "Soul Group Playing",
    "Gospel Choir Singing",
    "Barbershop Quartet Singing",
    "A Cappella Singing",
    "Karaoke Singing",
    "Lip Syncing",
    "Miming",
    "Clowning",
    "Stand-Up Comedy",
    "Improv Comedy",
    "Sketch Comedy",
    "Comedy Writing",
    "Satire Writing",
    "Parody Writing",
    "Spoof Writing",
    "Sarcasm",
    "Joke Telling",
    "Pun Making",
    "Magic Tricks",
    "Illusion Performing",
    "Escapology",
    "Mentalism",
    "Hypnotism",
    "Ventriloquism",
    "Puppetry",
    "Marionette Performing",
    "Shadow Puppetry",
    "Balloon Twisting",
    "Face Painting",
    "Body Painting",
    "Tattoo Art",
    "Henna Art",
    "Graffiti Art",
    "Street Art",
    "Mural Painting",
    "Chalk Art",
    "Sidewalk Art",
    "Sand Art",
    "Land Art",
    "Environmental Art",
    "Installation Art",
    "Performance Art",
    "Body Art",
    "Fashion Design",
    "Clothing Design",
    "Shoe Design",
    "Bag Design",
    "Hat Design",
    "Jewelry Design",
    "Accessory Design",
];

export default hobbySet;