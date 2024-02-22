import '../../styles/Figure.css'


function Figure(){
    return(
        <figure className="figureFigure">
            <h1>
                <span className='h1Span1'>beautiful</span><span className='droite'> & unique</span> <span className='gauche'>visual </span> <span className='h1Span2'> experiences</span>
            </h1>
            <div className='figureFreelance'>
                <div className='fugureAvalable'>
                    <div className='backLinght'></div>
                    <span className='availFree'></span>
                    <p>AVAILABLE FOR FRELANCE</p>
                </div>
                <div className='figureDescrib'>
                    <p><strong>I create captivating web experiences</strong> that deeply engage users, sparking meaningful interactions and leaving a lasting impact. Through innovative coding and intuitive design, I craft immersive digital environments that resonate with audiences, eliciting genuine emotional responses.</p>
                </div>
            </div>
        </figure>
    )
}
export default Figure