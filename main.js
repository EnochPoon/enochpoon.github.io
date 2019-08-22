const musicList = {
    "Johann Sebastian Bach": [
        "All the Brandenburg Concertos",
        "The Well-Tempered Clavier",
        "Mass in B minor",
    ],

    "Ludwig van Beethoven": [
        "Piano Sonatas",
        "Symphonies no. 5 and 9",
    ],

    "Frederic Chopin": [
        'The four Ballades',
        'Polonaise in A flat major, op. 53',
        'Piano Concerto no. 1 in E minor',
    ],

    'Sergei Rachmaninoff': [
        'Piano Concerto no. 2 in C minor',
        'Preludes for piano',
        'Etude-Tableaux'
    ],

    'Gustav Mahler': [
        'Symphonies no. 2, 5, 6, and 8'
    ],

    'Dmitri Shostakovich': [
        'Piano Concerto no. 2 in F major',
        'Symphonies no. 4 and 7'
    ]
}

function generateMusicList() {
    function getColor(str){
        let out = 0;
        for(let i = 0; i < str.length; i++){
            out = out + str.charCodeAt(i);
        }
        //out **= 2;
        console.log(parseInt(out).toString(16));
        return parseInt(out).toString(16);
    }
    for(const composer in musicList){
        const composerDiv = document.createElement('div');
        const composerTitle = document.createElement('h3');
        composerTitle.innerText = composer;
        composerDiv.appendChild(composerTitle);

        const composerList = document.createElement('ul');
        for (const piece of musicList[composer]){
            composerList.innerHTML += `<li>${piece}</li>`
        }
        composerDiv.appendChild(composerList);
        composerDiv.setAttribute("style", `background-color: #${getColor(composer)};`);
        document.getElementById('music-list').appendChild(composerDiv);
    }
}

generateMusicList();