


function selecionar(theme){
    switch(theme){
        case 'MATEMÁTICA':
            document.getElementById('projects-grid-0').innerHTML = ''

            let t0 = document.createElement('div');
            t0.className = 'project'
            t0.innerHTML=`
                <img src="img/copilot.png" alt="Projeto Matemática">
                    <h3>O Mundo com Pouco Orçamento</h3>
                    <p>Apresente seus melhores posts de viagem para os parceiros de mídia terem uma ideia do tipo de trabalho que você produz.</p>
            `;
            document.getElementById('projects-grid-0').appendChild(t0);

            break;

        case 'NATUREZA':
            break;

        case 'LINGUAGEM':
            break;

        case 'HUMANAS':
            break;

        case 'SENAI':
            break;
    }
}