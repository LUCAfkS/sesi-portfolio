function criar_elemento(img,h3,p,classes,link=""){
    if(link){
        var link = `onclick = "window.open('${link}', '_blank')"`
    }
    var elemento = document.createElement('div');
            elemento.className = 'project'
            elemento.innerHTML = `
                <img src=${img} alt="Projeto Matemática" class = ${classes} ${link} >
                    <h3>${h3}</h3>
                    <p>${p}
                    </p>
            `;
    return(elemento)
}
// var t0 = criar_elemento(
//     img = "",
//     h3 = "",
//     p = "",
//     classes = "",
//     link = ""
// )

function selecionar(theme) {
    switch (theme) {
        case 'MATEMÁTICA':
            document.getElementById('projects-grid-0').innerHTML = ''

            document.getElementById('desgostei').innerHTML = `
            <img src="img/nao-gosto.png" alt="Atrações Imperdíveis">
                    <div class="topic-content">
                        <h3>Não gostei</h3>
                        <p>Pelo contrário, nada a reclamar.</p>
                    </div>`

            document.getElementById('superação').innerHTML = `
            <img src="img/gostar.png" alt="Atrações Imperdíveis">
                    <div class="topic-content">
                        <h3>Superações</h3>
                        <p>No Desenvolvimento em probabilidade e estatisticas.</p>
                    </div>`
            
            document.getElementById('gostei').innerHTML = `
            <img src="img/gostar (1).png" alt="Atrações Imperdíveis">
                    <div class="topic-content">
                        <h3>Gostei</h3>
                        <p>Do Blackjack.</p>
                    </div>`
            



            var t0 = criar_elemento(
                img = "img/teste_probabilidade.jpeg",
                h3 = "Teste Probabilístico",
                p = "Teste para testar o conhecimento referente a probabilidade, na qual éderivado do principio fundamental da contagem.",
                
                classes = "clickerv"
            )
            var t1 = criar_elemento(
                img = "img/curriculo.png",
                h3 = "Curriculum Vitae",
                p = "Criação de curriculo e sobre espaços amostrais não equiparáveis.",
                classes = "clicker",
                link = "https://www.canva.com/design/DAGAiWDKRvA/PfNlptdBDc6SHErIkUWV9A/edit?utm_content=DAGAiWDKRvA&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"
            )
            var t2 = criar_elemento(
                img = "img/avalia-mat1.png",
                h3 = "Avalia-sesi-enem-1",
                p = "Primeira nota do avalia-sesi enem do ano.",
                
                classes = "clickerv"
            )
            var t3 = criar_elemento(
                img = "img/sc21.png",
                h3 = "Orgulho-Sesi",
                p = "Sala de jogos digitais, produzi minha maior criação até hoje.<br>OBS: O code fonte esta na aba de senai.",
                
                classes = "clickerv"
            )
            var t4 = criar_elemento(
                img = "img/aposta.jpeg",
                h3 = "Blackjack",
                p = "Apostar muito, contar carta e fazer calculos Probabilísticos.",
                
                classes = "clickerv"
            )
        
            document.getElementById('projects-grid-0').appendChild(t0);
            document.getElementById('projects-grid-0').appendChild(t1);
            document.getElementById('projects-grid-0').appendChild(t2);
            document.getElementById('projects-grid-0').appendChild(t3);
            document.getElementById('projects-grid-0').appendChild(t4);
            
            break;
            
            case 'NATUREZA':
                document.getElementById('projects-grid-0').innerHTML = ''

                document.getElementById('desgostei').innerHTML = `
            <img src="img/nao-gosto.png" alt="Atrações Imperdíveis">
                    <div class="topic-content">
                        <h3>Não gostei</h3>
                        <p>Da falta de biologia, gosto bastante, principalmente maritima. Apesar do ultimo assunto dado tenha sido Histologia.</p>
                    </div>`

            document.getElementById('superação').innerHTML = `
            <img src="img/gostar.png" alt="Atrações Imperdíveis">
                    <div class="topic-content">
                        <h3>Superações</h3>
                        <p>Significantes, nenhuma.</p>
                    </div>`
            
            document.getElementById('gostei').innerHTML = `
            <img src="img/gostar (1).png" alt="Atrações Imperdíveis">
                    <div class="topic-content">
                        <h3>Gostei</h3>
                        <p>Do filme Arrival.</p>
                    </div>`

                
                var t0 = criar_elemento(
                    img = "img/mapondu.jpeg",
                    h3 = "Mapa-Ondulatórias",
                    p = "Mapa mental criado com intuito de ampliarmos o conhecimento sobre ondulatoria.",
                    classes = "clickerv"
                )
                var t1 = criar_elemento(
                    img = "img/relatorio.png",
                    h3 = "Relatorio-Fenômenos-Ondulatórios",
                    p = `Elaborado para pesquisar mais sobre fenômenos advindos de ondas.`,
                    classes = "clicker",
                    link = "https://www.canva.com/design/DAGqh3GFpEM/xfyC5vvYRLtfki-P8rWJTQ/edit?utm_content=DAGqh3GFpEM&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"
                )
                var t2 = criar_elemento(
                    "img/pesquisa.jpeg",
                    "Pesquisa-Artifícios",
                    "pesquisa sobre o fogos de artifício.",
                    "clickerv"
                )
                var t3 = criar_elemento(
                    "img/atv.jpeg",
                    "Atividade-75",
                    "Para reforçar o conhecimento sobre radiações nucleares: Beta,Alpha,Gama.",
                    "clickerv"
                )

            document.getElementById('projects-grid-0').appendChild(t0);
            document.getElementById('projects-grid-0').appendChild(t1);
            document.getElementById('projects-grid-0').appendChild(t2);
            document.getElementById('projects-grid-0').appendChild(t3);
            break;

        case 'LINGUAGEM':
                document.getElementById('projects-grid-0').innerHTML = ''

                document.getElementById('desgostei').innerHTML = `
            <img src="img/nao-gosto.png" alt="Atrações Imperdíveis">
                    <div class="topic-content">
                        <h3>Não gostei</h3>
                        <p>Pelo contrário, nada a reclamar.</p>
                    </div>`

            document.getElementById('superação').innerHTML = `
            <img src="img/gostar.png" alt="Atrações Imperdíveis">
                    <div class="topic-content">
                        <h3>Superações</h3>
                        <p>Red1000 apesar denão ter sido 1000.</p>
                    </div>`
            
            document.getElementById('gostei').innerHTML = `
            <img src="img/gostar (1).png" alt="Atrações Imperdíveis">
                    <div class="topic-content">
                        <h3>Gostei</h3>
                        <p>Do café literário.</p>
                    </div>`

                var t0 = criar_elemento(
                    "img/red08.png",
                    "Red1000-08",
                    "Tema: A literatura como meio de denúncia social da natureza<br><br>Nota:760",
                    "clickerv"
                )
                var t1 = criar_elemento(
                    "img/red09.png",
                    "Red1000-09",
                    "Tema: Caminhos para uma comunicação não violenta no Brasil<br><br>Nota:840",
                    "clickerv"
                )
                var t2 = criar_elemento(
                    "img/cafe.jpeg",
                    "Café-Literário",
                    "Discurssão a respeito do livro Dom Casmurro.",
                    "clickerv"
                )

                document.getElementById('projects-grid-0').appendChild(t0);
                document.getElementById('projects-grid-0').appendChild(t1);
                document.getElementById('projects-grid-0').appendChild(t2);
            break;

        case 'HUMANAS':
            document.getElementById('projects-grid-0').innerHTML = ''

                document.getElementById('desgostei').innerHTML = `
            <img src="img/nao-gosto.png" alt="Atrações Imperdíveis">
                    <div class="topic-content">
                        <h3>Não gostei</h3>
                        <p>Pelo contrário, nada a reclamar.</p>
                    </div>`

            document.getElementById('superação').innerHTML = `
            <img src="img/gostar.png" alt="Atrações Imperdíveis">
                    <div class="topic-content">
                        <h3>Superações</h3>
                        <p>No simulado, pois acredito que tenha acertado maior parte das questões.</p>
                    </div>`
            
            document.getElementById('gostei').innerHTML = `
            <img src="img/gostar (1).png" alt="Atrações Imperdíveis">
                    <div class="topic-content">
                        <h3>Gostei</h3>
                        <p>Da apresentação do Qimo-Kids. O slide ficou show.</p>
                    </div>`

                var t0 = criar_elemento(
                    "img/qimo.png",
                    "Qimo-kids",
                    "A solução para a adultização de crianças.",
                    "clicker",
                    "https://www.canva.com/design/DAGwbCFS3g8/OcQv5hb87S5Mn8mAnbhnRw/edit?utm_content=DAGwbCFS3g8&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"
                )
                var t1 = criar_elemento(
                    "img/arvore.jpeg",
                    "Arvores da problematização",
                    "Dois problemas socias, um deles é adultização das crianças.",
                    "clickerv",
                )
                var t2 = criar_elemento(
                    "img/colombia.png",
                    "Ditadura-Colombiana",
                    "Explicar a ditadura colombiana e o governo de Gustavo Rojas Pinilla. ",
                    "clicker",
                    "https://www.canva.com/design/DAGyfGqSq9Y/wW20iMMFYU1QJQD2GVxDJA/edit?utm_content=DAGyfGqSq9Y&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"
                )


            document.getElementById('projects-grid-0').appendChild(t0);
            document.getElementById('projects-grid-0').appendChild(t1);
            document.getElementById('projects-grid-0').appendChild(t2);
            break;

        case 'SENAI':
            document.getElementById('projects-grid-0').innerHTML = ''

                document.getElementById('desgostei').innerHTML = `
            <img src="img/nao-gosto.png" alt="Atrações Imperdíveis">
                    <div class="topic-content">
                        <h3>Não gostei</h3>
                        <p>Da progressão um pouco lenta dos assuntos, sinto que o aprendizado poderia ser maior e mais rapido.</p>
                    </div>`

            document.getElementById('superação').innerHTML = `
            <img src="img/gostar.png" alt="Atrações Imperdíveis">
                    <div class="topic-content">
                        <h3>Superações</h3>
                        <p>Na criação de um projeto grande, contudo, o resultado não foi de meu total agrado, talvez recomece ele do zero.</p>
                    </div>`
            
            document.getElementById('gostei').innerHTML = `
            <img src="img/gostar (1).png" alt="Atrações Imperdíveis">
                    <div class="topic-content">
                        <h3>Gostei</h3>
                        <p>Da mini hackathon, fazer trabalhos assim é legal, mas as vezes você depende mais dos outros, para um produto interessante. </p>
                    </div>`

            var t0 = criar_elemento(
                "img/onças.png",
                "Shark-tank-Propostas",
                `Propostas criadas pelos alunos para aperfeiçoar o famoso reality show 'shark tank'.</p>`,
                "clicker",
                "https://www.canva.com/design/DAGwm4aKF68/Lm--Km6DFPzH4UbOB3PjIQ/edit?utm_content=DAGwm4aKF68&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"          
            )
            var t1 = criar_elemento(
                "img/github.png",
                "Portfolio-de-Projetos",
                `Meu github.`,
                "clicker",
                "https://github.com/LUCAfkS"
            )   
            

            document.getElementById('projects-grid-0').appendChild(t0);
            document.getElementById('projects-grid-0').appendChild(t1);
            break;
    }
}

window.onload = selecionar('MATEMÁTICA')