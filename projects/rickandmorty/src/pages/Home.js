import getData from "../utils/getData";
import Format from "text";

const Home = async () => {
    const characters = await getData();
    const view = `        
        <div class="characters">
        ${characters.results.map(character => `
            <article class="character-item">
                <a href="#/${character.id}/">
                    <img src="${character.image}" alt="${character.name}">
                    <h2>${Format.upperText(character.name)}</h2>                    
                </a>
            </article>
        `).join('')}            
        </div>
    `;
    return view;
};

export default Home;