function selecionar(theme) {
    switch (theme) {
        case 'MATEMÁTICA':
            document.getElementById('projects-grid-0').innerHTML = ''

            var t0 = document.createElement('div');
            t0.className = 'project'
            t0.innerHTML = `
                <img src="img/teste_probabilidade.jpeg" alt="Projeto Matemática" class = "clickerv">
                    <h3>Teste Probabilístico</h3>
                    <p>Teste para testar o conhecimento referente a probabilidade, na qual éderivado do principio fundamental da contagem.
                    </p>
            `;
            var t1 = document.createElement('div');
            t1.className = 'project'
            t1.innerHTML = `
                <img src="img/curriculo.png" alt="Projeto Matemática" class = "clicker" onclick = "window.open('https://www.canva.com/design/DAGAiWDKRvA/PfNlptdBDc6SHErIkUWV9A/edit?utm_content=DAGAiWDKRvA&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton')">
                    <h3>Curriculum Vitae</h3>
                    <p>Criação de curriculo e sobre espaços amostrais não equiparáveis.
                    </p>
            `;
            var t2 = document.createElement('div');
            t2.className = 'project'
            t2.innerHTML = `
                <img src="img/avalia-mat1.png" alt="Projeto Matemática" class = "clickerv">
                    <h3>Avalia-sesi-enem-1</h3>
                    <p>Primeira nota do avalia-sesi enem do ano.
                    </p>
            `;
            document.getElementById('projects-grid-0').appendChild(t0);
            document.getElementById('projects-grid-0').appendChild(t1);
            document.getElementById('projects-grid-0').appendChild(t2);

            break;

        case 'NATUREZA':
            document.getElementById('projects-grid-0').innerHTML = ''

            var t0 = document.createElement('div');
            t0.className = 'project'
            t0.innerHTML = `
                <img src="img/teste_probabilidade.jpeg" alt="Projeto Matemática" class = "clickerv">
                <h3>Mapa-Ondulatórias</h3>
                <p>Mapa mental criado com intuito de ampliarmos o conhecimento sobre ondulatoria.
                </p>
                `;
            var t1 = document.createElement('div');
            t1.className = 'project'
            t1.innerHTML = `
                <img src="img/teste_probabilidade.jpeg" alt="Projeto Matemática" class = "clickerv">
                <h3>Relatorio-Fenômenos-Ondulatórios</h3>
                <p>Elaborado para pesquisar mais sobre fenômenos advindos de ondas.
                </p>
                `;

            document.getElementById('projects-grid-0').appendChild(t0);
            document.getElementById('projects-grid-0').appendChild(t1);
            break;

        case 'LINGUAGEM':
            break;

        case 'HUMANAS':
            document.getElementById('projects-grid-0').innerHTML = ''

            var t0 = document.createElement('div');
            t0.className = 'project'
            t0.innerHTML = `
                <img src="img/humanas/qimo_kids.png" class= "clicker" alt="Projeto Humanas" onclick="window.open('https://www.canva.com/design/DAGwbCFS3g8/OcQv5hb87S5Mn8mAnbhnRw/edit?utm_content=DAGwbCFS3g8&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton','_blank')">
                    <h3>Qimo-kids</h3>
                    <p>A solução para a adultização de crianças.</p>
            `;
            var t1 = document.createElement('div');
            t1.className = 'project'
            t1.innerHTML = `
                <img src="img/humanas/arvores.png" alt="Projeto Humanas">
                    <h3>Arvores da problematização</h3>
                    <p>Dois problemas socias, um deles é adultização das crianças.</p>
            `;

            document.getElementById('projects-grid-0').appendChild(t0);
            document.getElementById('projects-grid-0').appendChild(t1);
            break;

        case 'SENAI':
            document.getElementById('projects-grid-0').innerHTML = ''

            var t0 = document.createElement('div');
            t0.className = 'project'
            t0.innerHTML = `
            <img src="img/senai/shark_tank.png" class= "clicker" alt="Projeto Humanas" onclick="window.open('https://www.canva.com/design/DAGwm4aKF68/Lm--Km6DFPzH4UbOB3PjIQ/edit','_blank')">
            <h3>Shark tank - Propostas</h3>
            <p>Propostas criadas pelos alunos para aperfeiçoar o famoso reality show 'shark tank'.</p>
            `;
            document.getElementById('projects-grid-0').appendChild(t0);
            break;
    }
}