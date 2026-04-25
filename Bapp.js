// Bihar: Ek Nazar - Bapp.js

const biharData = {
    "Bihar: An Introduction": "• Establishment: Bihar was formed on 22nd March 1912 (celebrated as Bihar Diwas).\n• Capital: Patna (Historically known as Pataliputra).\n• First Chief Minister: Shri Krishna Singh.\n• Current Governor: Shri Rajendra Vishwanath Arlekar.\n• Political Structure: Bihar has 40 Lok Sabha seats and 16 Rajya Sabha seats.",

    "State Symbols": "• State Animal: Ox (Gaur) - Symbol of hard work and strength.\n• State Bird: House Sparrow - Known for its friendly presence around homes.\n• State Flower: Marigold - Frequently used in festivals and celebrations.\n• State Tree: Peepal - Sacred tree under which Lord Buddha gained enlightenment.\n• State Emblem: Bodhi Tree - Depicted with two rosaries (Swastika) on either side.\n• State Fish: Mangur (Walking Catfish).",

    "Geography & Rivers": "• Total Area: 94,163 sq km (13th largest state by area).\n• Boundaries: Shared with Nepal to the North, Jharkhand to the South, West Bengal to the East, and Uttar Pradesh to the West.\n• Major Rivers: The Ganges (Ganga), Kosi, Gandak, Son, and Bagmati.\n• Sorrow of Bihar: Kosi River (known for frequent and devastating floods).\n• Highest Point: Someshwar Fort Peak (880 meters) in West Champaran.",

    "Bihar Census 2011": "• Total Population: Approximately 10.41 Crore.\n• Population Density: 1,106 persons per sq km (Highest in India).\n• Literacy Rate: 61.8% overall.\n• Most Literate District: Rohtas (73.37%).\n• Sex Ratio: 918 females per 1,000 males.",

    "Ancient History": "• Center of Power: Home to the powerful Magadha Empire and Maurya Dynasty.\n• Nalanda University: One of the world's oldest residential universities and a global center of learning.\n• First Republic: Vaishali is considered the world's first democratic republic.\n• Great Rulers: Chandragupta Maurya, Emperor Ashoka (The Great), and Sher Shah Suri.",

    "Religions & Spirituality": "• Buddhism: Lord Buddha attained enlightenment under the Bodhi tree in Bodh Gaya.\n• Jainism: Lord Mahavira, the 24th Tirthankara, was born in Vaishali and attained Nirvana in Pawapuri.\n• Sikhism: Guru Gobind Singh Ji, the 10th Sikh Guru, was born in Patna Sahib.\n• Hinduism: Important sites like Gaya (Vishnupad Temple) and Mithila (birthplace of Goddess Sita).",

    "Major Tourist Attractions": "• Mahabodhi Temple: A UNESCO World Heritage site in Bodh Gaya.\n• Golghar: A massive granary in Patna built by the British.\n• Vishwa Shanti Stupa: A magnificent white Peace Pagoda in Rajgir.\n• Tomb of Sher Shah Suri: A stunning sandstone mausoleum in Sasaram located in the middle of a lake.\n• Kakolat Waterfall: A beautiful natural waterfall in Nawada.",

    "Art & Culture": "• Madhubani Painting: Traditional Mithila art using natural dyes and rice paste.\n• Chhath Puja: The biggest folk festival dedicated to the Sun God (Surya Dev).\n• Litti Chokha: The most famous and traditional dish of Bihar.\n• Languages: Hindi (Official), Maithili (8th Schedule), Bhojpuri, Magahi, and Angika.",

    "Great Personalities": "• Dr. Rajendra Prasad: The first President of Independent India (born in Ziradei).\n• Aryabhata: The great ancient mathematician who invented 'Zero'.\n• Loknayak Jayaprakash Narayan: Leader of the 'Total Revolution' movement.\n• Ramdhari Singh 'Dinkar': Renowned Hindi poet known as the 'Rashtrakavi'.",

    "Administrative Divisions": "• Number of Districts: 38 Districts in total.\n• Administrative Divisions (9): Patna, Tirhut, Saran, Kosi, Darbhanga, Purnia, Bhagalpur, Munger, and Magadh.\n• Largest District: West Champaran (by area).\n• Smallest District: Sheohar (by area).",
    
    "Agriculture & Produce": "• Main Occupation: About 80% of Bihar's population is engaged in agriculture.\n• Key Crops: Paddy (Rice), Wheat, Maize, and Pulses.\n• Cash Crops: Sugarcane, Tobacco, and Jute.\n• Special Fruit: Shahi Litchi (Muzaffarpur) and Jardalu Mango (Bhagalpur) are world-famous and hold GI tags.\n• Makhana: Bihar produces 90% of the world's Foxnuts (Makhana).",

    "Modern Infrastructure": "• Mahatma Gandhi Setu: One of the longest river bridges in India, connecting Patna and Hajipur.\n• Atal Path: A high-speed expressway in Patna improving city connectivity.\n• Power Generation: Major plants include Barauni Thermal Power Station and Kanti Thermal Power Plant.\n• Airports: Jay Prakash Narayan International Airport (Patna) and Gaya Airport.",

    "Education & Institutes": "• IIT Patna: A premier institute for engineering and technology.\n• IIM Bodh Gaya: Established to provide world-class management education.\n• NIT Patna: One of the oldest engineering colleges in India (formerly PCE).\n• AIIMS Patna: A top-tier medical research and healthcare institute.\n• Chanakya National Law University: A specialized university for legal studies.",

    "Sports & Entertainment": "• Major Stadiums: Moin-ul-Haq Stadium (Patna) for Cricket and Patliputra Sports Complex (Patna) for Indoor sports.\n• Traditional Games: Kabaddi and Kho-Kho are very popular in rural areas.\n• Cinema: The Bhojpuri film industry is a significant part of Bihar's cultural and economic landscape.\n• Folk Theater: Bidesiya and Nautanki are famous traditional performance arts.",

    "Natural Sanctuaries": "• Valmiki National Park: The only National Park and Tiger Reserve in Bihar, located in West Champaran.\n• Kanwar Lake: Asia's largest freshwater oxbow lake and a famous bird sanctuary in Begusarai.\n• Vikramshila Gangetic Dolphin Sanctuary: Located in Bhagalpur, dedicated to protecting the National Aquatic Animal of India.",

    "Bihar's Global Contributions": "• The Concept of Zero: Pioneered by Aryabhata, who lived and worked in Taregna, Bihar.\n• Non-Violence (Ahimsa): The birthplace of the global movements of Buddhism and Jainism.\n• Satyagraha: Mahatma Gandhi started his first non-violence movement from Champaran in 1917.",
    
    "Social & Freedom Movements": "• Champaran Satyagraha (1917): Mahatma Gandhi's first civil disobedience movement in India started from Bihar.\n• Quit India Movement (1942): Huge participation from Bihar, notably the 'Seven Martyrs' (Sapt Murti) at Patna Secretariat.\n• JP Movement (1974): Also known as the 'Total Revolution', led by Jayaprakash Narayan against corruption and for social change.",

    "Fairs & Festivals": "• Sonepur Mela: Asia's largest cattle fair, held annually at the confluence of the Ganges and Gandak rivers.\n• Pitrapaksha Mela (Gaya): A world-famous pilgrimage where people from across India come to perform 'Pind Daan' for their ancestors.\n• Rajgir Mahotsav: A colorful festival of dance and music celebrating the cultural heritage of Rajgir.\n• Vishwa Shanti Stupa Anniversary: Attracts Buddhist monks and tourists from across the globe.",

    "Flora & Fauna": "• State Tree: Peepal (Sacred Fig).\n• Rare Species: The Gangetic Dolphin, India's National Aquatic Animal, is found in the Ganges stretch of Bihar.\n• Bird Migration: Millions of migratory birds visit the wetlands of Bihar (like Kanwar Lake) during winter.\n• Vegetation: Tropical deciduous forests are common in the foothills of the Himalayas (Terai region).",

    "Minerals & Industries": "• Mineral Resources: Bihar has deposits of Pyrites, Mica, Limestone, and Quartzite.\n• Industrial Hubs: Barauni is famous for its Oil Refinery and Fertilizer plant.\n• Silk City: Bhagalpur is globally known for its 'Tussar Silk' (Bhagalpuri Silk).\n• Sugar Industry: Primarily located in the North Bihar districts like Bagaha and Motihari.",

    "Women Empowerment & Schemes": "• Jeevika: A successful rural livelihood project that has empowered millions of women in Bihar.\n• Cycle Yojana: Bihar was the first state to provide free bicycles to school-going girls, significantly increasing literacy.\n• 50% Reservation: Bihar was the first state in India to give 50% reservation to women in Panchayati Raj institutions.",

    "Bihar's Cuisine Specialities": "• Sweets: Silao ka Khaja (GI Tag), Maner ka Laddoo, and Gaya ka Tilkut.\n• Traditional Snacks: Anarsa, Thekua (the soul of Chhath Puja), and Dhuska.\n• Summer Drink: Sattu Sharbat, often called the 'Natural Protein Shake' of Bihar."
};

let currentFontSize = 20;
let synth = window.speechSynthesis;

// App shuru hote hi topics load karein
window.onload = () => {
    const list = document.getElementById('topicsList');
    for (let topic in biharData) {
        let div = document.createElement('div');
        div.className = 'topic-btn';
        div.innerText = topic;
        div.onclick = () => loadContent(topic);
        list.appendChild(div);
    }
};

function toggleSidebar() {
    document.getElementById('sidebar').classList.toggle('collapsed');
}

function loadContent(topic) {
    stopReading(); // Purana narration band karein
    document.getElementById('titleDisplay').innerText = topic;
    document.getElementById('textDisplay').innerText = biharData[topic];
    
    // Tablet par sidebar band karein load hone ke baad (choti screens ke liye)
    if(window.innerWidth < 768) toggleSidebar();
}

// Text to Speech logic
function startReading() {
    const text = document.getElementById('textDisplay').innerText;
    if (text.length < 10) return;
    
    synth.cancel(); // Safety reset
    let utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'hi-IN';
    utterance.rate = 0.9;
    synth.speak(utterance);
}

function stopReading() {
    synth.cancel();
}

// Font Controls
function changeFontSize(type) {
    if (type === 'plus') currentFontSize += 2;
    else currentFontSize -= 2;
    
    if(currentFontSize < 12) currentFontSize = 12;
    document.getElementById('textDisplay').style.fontSize = currentFontSize + "px";
}

// Fullscreen Logic
function toggleFullScreen() {
    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen();
    } else {
        document.exitFullscreen();
    }
}

// Share Feature
function shareContent() {
    const title = document.getElementById('titleDisplay').innerText;
    const text = document.getElementById('textDisplay').innerText;
    
    if (navigator.share) {
        navigator.share({
            title: title,
            text: text,
            url: window.location.href
        }).catch(console.error);
    } else {
        alert("Aapka browser sharing support nahi karta.");
    }
}

// Google Search Logic
function googleSearch() {
    const query = document.getElementById('gSearchInput').value;
    if (query) {
        window.open(`https://www.google.com/search?q=${encodeURIComponent(query)}`, '_blank');
    }
}
