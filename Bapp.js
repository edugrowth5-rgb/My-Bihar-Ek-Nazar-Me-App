// Bihar: Ek Nazar - Bapp.js

const biharData = {
    "Bihar: Ek Parichay": "• Sthapna: 22 March 1912\n• Rajdhani: Patna (Purana naam: Patliputra)\n• Pratham Mukhyamantri: Shri Krishna Singh\n• Rajyapal: Shri Rajendra Vishwanath Arlekar\n• Lok Sabha Seats: 40\n• Rajya Sabha Seats: 16",

    "Rajkiya Prateek": "• Rajkiya Pashu: Bail (Ox)\n• Rajkiya Pakshi: Goraiya (Sparrow)\n• Rajkiya Phool: Genda (Marigold)\n• Rajkiya Ped: Peepal\n• Rajkiya Chinh: Bodhi Vriksh (Swastik ke saath)",

    "Bhugol aur Nadiyan": "• Kshetrafal: 94,163 sq km\n• Seemayein: North mein Nepal, South mein Jharkhand, East mein West Bengal, West mein UP.\n• Bihar ka Shok: Kosi Nadi\n• Sabse unchi choti: Someshwar Fort (880m)",

    "Bihar Census 2011": "• Kul Jan-sankhya: 10.41 Crore\n• Jan-sankhya Ghantva: 1106 (Bharat mein No. 1)\n• Saaksharta (Literacy): 61.8%\n• Sabse saakshar zila: Rohtas (73.37%)\n• Ling-anupat: 918 mahilaein prati 1000 purush",

    "Chhath Puja": "• Yeh Bihar ka sabse bada lok-parva hai.\n• Yeh Surya Dev aur Chhathi Maiya ko samarpit hai.\n• Isme ugte aur dhalte Surya ko arghya diya jata hai.\n• Yeh shuddhata aur prakriti prem ka prateek hai.",

    "Madhubani Painting": "• Ise Mithila Art bhi kaha jata hai.\n• Yeh prakritik rangon (phool, patti, chawal) se banti hai.\n• Isme mukhya roop se Ramayan aur prakriti ke drishya hote hain.\n• Is kala ko GI Tag bhi prapt hai."
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
