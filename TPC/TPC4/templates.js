exports.gera = function(tasks_l,data,editar){
    pagHTML = `
    <html>
    <head>
        <title>Gestor de Tarefas</title>
        <meta charset="utf-8"/>
        <link rel="icon" href="public/favicon.png"/>
        <link rel="stylesheet" href="public/w3.css"/>
        <link rel="stylesheet" href="public/template.css"/>
    </head>
    <body>
        <div class="w3-card-4">
            <header class="w3-container w3-teal">
                <h1>Gestor de Tarefas</h1>
            </header>
        
            <div class="w3-container" contextmenu="charset='utf-8'" style="color: darkcyan; position: relative; width: 100%;" >
                <form class="w3-ul w3-card-4" style="width:100%;  position: relative;" method="post">
                    <label for="user">Quem realiza a tarefa: </label><input placeholder="Digite aqui...">
                    <label for="descrição"> Qual é a descrição da tarefa: </label><input  placeholder="Digite aqui...">
                    <label for="date">Data para terminar a tarefa: </label><input placeholder="Digite aqui...">
                    <button type="submit" style="border-style: hidden;margin-left: 10px; align-self:flex-start;">Submit</button>
                    </form> 
                    </div>
            `
            if(editar){
                pagHTML += `
                    <div class="w3-container" contextmenu="charset='utf-8'" style="color: darkcyan; position: relative; width: 100%;" >
                    <form class="w3-ul w3-card-4" style="width:100%;  position: relative;" method="post">
                        
                        <label for="user">Quem realiza a tarefa: </label><input placeholder="Digite aqui...">
                        <label for="descrição">Qual é a descrição da tarefa: </label><input placeholder="Digite aqui...">
                        <label for="date">Data para terminar a tarefa: </label><input placeholder="Digite aqui...">
                        <button type="submit" style="border-style: hidden;margin-left: 10px; align-self:flex-start;">Submit</button>
                    </form> 
                        </div>
            `
            }
        
            pagHTML+=`   </div>
                <div class="row">
                    <div class="column">
                      <table>
                        <tr>
                          <th>Id</th>
                          <th>Nome</th>
                          <th>Descrição</th>
                          <th>Data</th>
                        </tr>
                    `
                    for(let i=0;i<tasks_l.length;i++){
                            pagHTML += `
                        <tr>
                            <td>${tasks_l[i].id}</td>
                            <td>${tasks_l[i].nome}</td>
                            <td>${tasks_l[i].descrição}</td>
                            <td>${tasks_l[i].data}</td>
                            <td><button style="border-style: hidden;margin-left: 10px; align-self:flex-start;" href="http://localhost:3000/tasks/edit/${tasks_l[i].id}">Editar</button></td>
                            <td><button style="border-style: hidden;margin-left: 10px; align-self:flex-start;" href="http://localhost:3000/tasks/delete/${tasks_l[i].id}">Eliminar</button></td>
                            <td><button style="border-style: hidden;margin-left: 10px; align-self:flex-start;" href="http://localhost:3000/tasks/done/${tasks_l[i].id}">Fazer</button></td>
                        </tr>
                        `
                    }
                    
                    pagHTML+= `  </table>
                    </div>
                    <div class="column">
                    
                        <table>
                          <tr>
                            <th>Id</th>
                            <th>Nome</th>
                            <th>Descrição</th>
                            <th>Data</th>
                          </tr>
                          `
                        for(let i=0;i<tasks_l.length;i++){
                            pagHTML += `
                        <tr>
                            <td>${tasks_l[i].id}</td>
                            <td>${tasks_l[i].nome}</td>
                            <td>${tasks_l[i].descrição}</td>
                            <td>${tasks_l[i].data}</td>
                            <td><button style="border-style: hidden;margin-left: 10px; align-self:flex-start;" href="http://localhost:3000/tasks/delete/${tasks_l[i].id}">Eliminar</button></td>
                        </tr>
                        `
                    }
                       pagHTML += `</table>
                  </div>
                </div>

            </div>

            <div class="w3-container w3-margin-8">
                <ul class="w3-ul"></ul>
            </div>
            <footer class="w3-container w3-teal">
                <p>&copy Gestor de tarefas</p>
            </footer>
        </div>
    </body>
    </html>
    `
    return pagHTML
}