import { useState, useEffect } from "react"
import '../../styles/Experience.css'


function Experience(){
    const [items, setItems] = useState([]);

    useEffect(() => {
        const handelScroll = () => {
            for(let i = 0; i< items.length; i++){
                if(isItemView(items[i])){
                    items[i].classList.add("show");
                }
            }
        };

            const isItemView = (item) =>{
            const rect = item.getBoundingClientRect();

            return(
                rect.top >= 0 &&
                rect.left >= 0 &&
                rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
                rect.right <= (window.innerWidth || document.documentElement.clientWidth)
            );
        };

        const items = document.querySelectorAll("li");
        setItems(items);

        window.addEventListener("load", handelScroll);
        window.addEventListener("resize", handelScroll);
        window.addEventListener("scroll", handelScroll);

        return () => {
            window.addEventListener("load", handelScroll);
            window.addEventListener("resize", handelScroll);
            window.addEventListener("scroll", handelScroll);
        };
    }, [])


    return(
        <div className="experience">
            <h1>My <span>Experiences </span>and <span>Competences</span></h1>
            <ul>
                <li>
                    <div>
                        <time>Proficiency in web programming languages</time>
                        <p>"With a deep understanding of HTML, 
                            CSS, php, and JavaScript, I bring web designs 
                            to life with interactive and visually 
                            appealing features. My expertise allows 
                            me to craft clean and efficient code 
                            that ensures optimal performance and 
                            accessibility for users. From responsive 
                            layouts to dynamic animations, I leverage 
                            these languages to create engaging web experiences."</p>
                    </div>
                </li>
                <li>
                    <div>
                        <time>Experience with frameworks and libraries</time>
                        <p>"I have extensive experience working with 
                            popular web frameworks and libraries 
                            such as React.js, tailwind, and Bootstrap. 
                            Leveraging these tools, I&apos;ve built a wide 
                            range of web applications, from single-page 
                            applications to complex enterprise 
                            solutions. By utilizing their components 
                            and features, I streamline development 
                            processes and deliver projects with 
                            enhanced functionality and maintainability."</p>
                    </div>
                </li>
                <li>
                    <div>
                        <time>Understanding of databases and back-end development</time>
                        <p>"My proficiency in back-end development 
                            technologies such as Node.js, Express.js, 
                            and MongoDB enables me to create robust 
                            and scalable web applications with 
                            dynamic data-driven functionality. 
                            With a strong foundation in database 
                            management and server-side scripting, 
                            I design and implement secure APIs, 
                            manage user authentication, and optimize 
                            server performance to deliver seamless 
                            user experiences."</p>
                    </div>
                </li>
                <li>
                    <div>
                        <time>Experience in game development</time>
                        <p>"With a passion for game development, I leverage my expertise in game engines such as Unity and programming languages like C# to create captivating gaming experiences. From 2D platformers to immersive virtual reality simulations, I bring creative visions to life through interactive gameplay mechanics, captivating visuals, and engaging storytelling. With a keen eye for game design principles and a knack for optimization, I deliver games that captivate players and push the boundaries of interactive entertainment."</p>
                    </div>
                </li>
                <li>
                    <div>
                        <time>Ability to problem-solve and debug</time>
                        <p>"As a meticulous problem-solver, I excel at diagnosing and resolving issues within web applications. Leveraging my strong analytical skills and attention to detail, I efficiently debug code to identify root causes and implement effective solutions. Whether it's troubleshooting browser compatibility issues or resolving complex logic errors, I approach each challenge with a methodical mindset to ensure optimal performance and functionality."</p>
                    </div>
                </li>
            </ul>
      
    </div>
    )
}
export default Experience