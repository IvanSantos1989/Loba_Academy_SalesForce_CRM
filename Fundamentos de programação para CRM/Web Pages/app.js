// Array para guardar todos os Leads
// let leads = [];

// Inicializa o array de leads a partir do armazenamento local
let leads = JSON.parse(localStorage.getItem("leads")) || [];

// Classifica o Lead de acordo com o valor do orçamento apresentado
function qualificar(lead) {
    if (lead.orcamento >= 10000) return "Quente";
    if (lead.orcamento >= 5000) return "Morno";
    return "Frio";
}

// Atualiza a lista e o contador visiveis na página com os dados atuais
function mostrarLeads() {
    let lista = document.getElementById("lista");
    lista.innerHTML = ""; // limpa a lista (string vazia, sem dados do utilizador)
    for (let i = 0; i < leads.length; i++) {
        let li = document.createElement("li");
        // textContent trata o nome como texto, não como HTML, para evitar ataques
        li.textContent = leads[i].nome + " - " + leads[i].orcamento + " - " + "(" + qualificar(leads[i]) + ")";

        let DivAtualizar = document.createElement("div");

        // pede os novos dados e atualiza o lead escolhido
        let botaoEditar = document.createElement("button");
        //botaoEditar.className = "button-editar";
        botaoEditar.textContent = "Editar";
        botaoEditar.type = "button";
        botaoEditar.addEventListener("click", function() {
            let novoNome = prompt("Introduza o novo nome:", leads[i].nome);
            let novoOrc = Number(prompt("Introduza o novo orçamento:", leads[i].orcamento));

            // Atualiza os dados do lead no array
            if (novoNome !== null && novoNome.trim() !== "") {
            leads[i].nome = novoNome;
            }
            if (!isNaN(novoOrc) && novoOrc > 0) {
            leads[i].orcamento = novoOrc;
            }
            guardarLeads(); // atualiza o armazenamento local
            mostrarLeads(); // atualiza a lista visível na página
        });

        // criar um botão para eliminar este lead da lista
        let botaoEliminar = document.createElement("button");
        //botaoEliminar.className = "button-delete";
        botaoEliminar.textContent = "Eliminar";
        botaoEliminar.type = "button";
        botaoEliminar.addEventListener("click", function() {
            leads.splice(i, 1); // remove o lead do array
            guardarLeads(); // atualiza o armazenamento local
            mostrarLeads(); // atualiza a lista visível na página
        });

        DivAtualizar.appendChild(botaoEditar); // adiciona o botão à linha da lista
        DivAtualizar.appendChild(botaoEliminar); // adiciona o botão à linha da lista
        li.appendChild(DivAtualizar);
        lista.appendChild(li);
    }
    // Atualiza o contador de leads
    document.getElementById("total").textContent = "Total de Leads: " + leads.length;
}

// Guardar os leads no navegador para continuarem disponíveis em outra abertura
function guardarLeads() {
    localStorage.setItem("leads", JSON.stringify(leads));
}

// Ligar o formulário a lógica JavaScript
let form = document.getElementById("formLead");
form.addEventListener("submit", function (event) {
    event.preventDefault(); // Evita o envio do formulário (recarregar a página)

    // Ler os valores introduzidos pelo utilizador
    let nome = document.getElementById("nome").value;
    let orc = Number(document.getElementById("orc").value);

    // Fazer push do lead para o array
    leads.push({ nome: nome, orcamento: orc });
    guardarLeads(); // Guarda os leads no navegador
    mostrarLeads(); // Atualiza a lista visível na página
    form.reset(); // Limpa os campos do formulário
});

// função para mostrar os leads ao carregar a página
mostrarLeads();