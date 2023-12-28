var nome = '';

var nLog = 51;
var nFlu = 51;
var nMen = 100;
var nCri = 51;
var nSat = 100;
var nPer = 100;

$("#send").click(()=>{
    $(".btn-success").text("COPIAR");
    $(".btn-success").addClass("btn-info");
    $(".btn-success").removeClass("btn-success");
    
    var nome = '';

    var nLog = 51;
    var nFlu = 51;
    var nMen = 100;
    var nCri = 51;
    var nSat = 100;
    var nPer = 100;

    nome = $("#nome").val();
    
    pTotal = $("#pTotal").val();
    pConcluido = $("#pConcluido").val();
    pAvaliado = $("#pAvaliado").val();
    qFeito = $("#qFeito").val();


    nFlu += (49/pTotal)*pConcluido;
    nLog += (49/pTotal)*qFeito;
    nMen -= 2 * pAvaliado;
    nCri += (49/pTotal)*pConcluido;
    
    nSat = 100 -  ((pTotal - pConcluido)/pTotal)*100 ;
    nPer = 100 - (pAvaliado*2)

    nFlu = nFlu.toFixed(2);
    nLog = nLog.toFixed(2);
    nMen = nMen.toFixed(2);
    nCri = nCri.toFixed(2);
    nSat = nSat.toFixed(2);
    nPer = nPer.toFixed(2);
    
    $("#logNota").text(nLog)
    $("#criNota").text(nCri)
    $("#fluNota").text(nFlu)

    $("#perNota").text(nPer)
    $("#menNota").text(nMen)
    $("#satNota").text(nSat)
    
    //NOTA DE LÓGICA
    if(nLog >= 90){
        texto = nome + "  desenvolveu ótimo raciocínio lógico e tem bastante conhecimento de lógica de programação até essa etapa."
        $("#logComent").text(texto)
        

    }else if(nLog >= 75){
        texto = nome + " tem grande potencial na área e para atingí-lo, precisa desenvolver mais seu raciocínio lógico se dedicando nos questionários."
        $("#logComent").text(texto)

    }else {
        texto = nome + " fez "+ Math.round( (qFeito/pTotal)*100 )+" % dos questionários e isso prejudicou seu desempenho e aprendizado de lógica de programação."
        $("#logComent").text(texto)
    }
    //NOTA DE CRIATIVIDADE
    if(nCri >= 90){
        texto = nome + " realiza os projetos com criatividade, trazendo algo único e diferente em cada atividade que realiza"
        $("#criComent").text(texto)
        
    }else if(nCri > 60){
        texto = nome + " tem grande potencial criativo para fazer suas próprias criações com o que aprendeu, mas precisa expressar mais suas ideias."
        $("#criComent").text(texto)

    }else {
        texto = nome + "tem expressado bem pouco suas ideias nos projetos que realiza e isso tem prejudicado seu desenvolvimento"
        $("#criComent").text(texto)

    }
    //NOTA DE FLUÊNCIA DE PROGRAMAÇÂO
    if(nFlu >= 90){
        texto = nome + " programa muito bem! Graças a sua dedicação e esforço, até essa etapa, tem ótima fluência de programação."
        $("#fluComent").text(texto)
        
    }else if(nFlu > 60){
        texto = nome + " tem grande potencial na área de programação, mas para atingí-lo precisa praticar mais e realizar as atividades para casa"
        $("#fluComent").text(texto)

    }else {
        texto = nome + " fez "+Math.round( (pConcluido/pTotal)*100 )  +"% dos projetos e isso prejudicou seu desempenho e fluência de  programação"
        $("#fluComent").text(texto)

    }
    
    //NOTA DE PERSISTÊNCIA

    if(nPer >= 90){
        texto = "Diante de grandes desafios, "+nome+" costuma persistir na atividade até encontrar a solução. Graças a isso, teve sucesso nas atividades"
        $("#perComent").text(texto)
        
    }else if(nPer > 60){
        texto = nome + " costuma persistir em aula para encontrar a solução dos desafios e precisa persistir mais ainda nos projetos para aprender programação"
        $("#perComent").text(texto)

    }else {
        texto = nome + " desiste facilmente de programar nos projetos. Tem muito potencial, mas infelizmente, prejudica o próprio aprendizado com sua desistência";
        $("#perComent").text(texto)

    }


    ///NOTA DE MENTALIDADE DE CRESCIMENTO
    if(nMen >= 90){
        texto = nome + " mostra ótima disposição para aprender cada vez mais programação em aula, pois recebe bem as dicas e correções da prof"
        $("#menComent").text(texto)
        

    }else if(nMen >= 75){
        texto = nome + " tem grande potencial, mas precisa se dedicar nas atividades com mais empenho e concentração e fazer as correções necessárias"
        $("#menComent").text(texto)

    }else {
        texto = nome + " tem "+pAvaliado+" projetos a corrigir e isso tem prejudicado seu desempenho nessa competência"
        $("#menComent").text(texto)
    }

    //NOTA DE SATISFAÇÃO ADIADA
    
    if(nSat >= 90){
        texto = nome + " se saiu muito bem na competência, pois programa com atenção e paciência e entrega as atividades dentro do prazo."
        $("#satComent").text(texto)
        
    }else if(nSat > 60){
        texto = nome + " tem grande potencial na área de programação, mas precisa atentar-se mais aos prazos"
        $("#satComent").text(texto)

    }else {
        texto = nome + " tem perdido o prazo de muitas atividades e isso tem prejudicado seu desenvolvimento"
        $("#satComent").text(texto)

    }
    soma = Number(nSat) +  Number(nFlu) +  Number(nCri) +  Number(nLog) +  Number(nPer) +  Number(nMen)
    media = soma /6;

    if(media >= 90){
        texto = nome + " tem grande potencial na área de tecnologia, pois tem paixão por coisas relacionadas a essa área e está ganhando cada vez mais conhecimento em seus estudos e projetos. Se continuar assim, irá se sair cada vez melhor nas próximas etapas e terá um futuro brilhante em programação"

        
    }else if(media > 60){
        texto = nome + " tem grande potencial na área de tecnologia, pois tem paixão por coisas relacionadas a essa área e está ganhando cada vez mais conhecimento em seus estudos e projetos. Se dedicar bastante, irá se sair melhor nas próximas etapas e terá um futuro brilhante em programação"

    }else {
        texto = nome + " tem grande potencial na área de tecnologia, pois tem paixão por coisas relacionadas a essa área e está ganhando cada vez mais conhecimento em seus estudos e projetos. Todavia, precisa se dedicar mais para poder alcançar seu potencial. Se melhorar e se dedicar mais, irá se sair melhor nas próximas etapas e terá um futuro brilhante em programação"
        
    } 
    
    $("#finalComent").text(texto)

    $(".result").fadeIn()
})


function CopyTexto(id, idbtn){
    var r = document.createRange();
    r.selectNode(document.getElementById(id));
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(r);
    try {
        document.execCommand('copy');
        window.getSelection().removeAllRanges();
        console.log('Texto copiado com sucesso. ' + r);
        $("#"+idbtn).text("Copiado com sucesso!");
        $("#"+idbtn).removeClass("btn-info");
        $("#"+idbtn).addClass("btn-success");

    } catch (err) {
        alert('Não foi possível copiar!');
    }

}
