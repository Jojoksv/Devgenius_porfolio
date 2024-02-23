
import '../../styles/KindWords.css'

const ClientsWords = [
    {name: 'ESMT', desc: 'Hight School Ouagadougou', words: '"We choose DEVGENIUS for expertise, and he delivered beyond our hopes. His collaboration and commitment to our project "'},
    {name: 'LPP', desc: 'Lycée Privé Promotion, Bobo Dioulasso', words: '"DEVGENIUS ability to blend aesthetics and functionality is unparalleled. He not only understood our brand but elevated it trough his design."'},
    {name: 'SIKA COSMETIQUE', desc: 'Vous faire briller', words: '"DEVGENIUS design exceeded our expectations. His strategic approach to user experience significantly improved our sites&apos; performance."'},
    {name: 'Pixel perfect', desc: 'Game Development Company', words: '"DEVGENIUS transforme vos rêves en realités. Notre collaboration exeptionnelle donne satisfaction au developpement de nos jeux"'}
]


function KindWords(){
    return(
        <div className='expeKindWords joseph Kossouvi jojoksv devgenius'>
            <h1 className='expeKindWordsTitle'>Kind Words from Clients</h1>
            <div className='UserExp'>
                <div className='ExpContent'>
                    {ClientsWords.map((item, index) => (
                        <div className='ExperItem' key={index}>
                            <div>
                                <h1>{item.name}</h1>
                                <span>{item.desc}</span>
                            </div>
                            <div>
                                <p>{item.words}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
export default KindWords
