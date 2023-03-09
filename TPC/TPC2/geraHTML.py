import json
import os

def ordCidades(c):
    return c['nome']


f = open("mapa.json", encoding="utf-8")
mapa = json.load(f)
cidades = mapa['cidades']
ligacoes = mapa['ligações']
distritos = {}
cidade_id_nome = {}
cidade_nome_id = {}

cidades.sort(key=ordCidades)

for c in cidades:
    cidade_id_nome[c['id']] = c['nome']
    cidade_nome_id[c['nome']] = c['id']
    if c['distrito'] not in distritos.keys():
        distritos[c['distrito']] = []
        distritos[c['distrito']].append((c['id'],c['nome']))
    else:
        distritos[c['distrito']].append((c['id'],c['nome']))

cidades_ligadas = {}

for lig in ligacoes:
    if (lig['destino'],lig['origem']) not in cidades_ligadas.keys():
        cidades_ligadas[(lig['origem'],lig['destino'])] = lig['distância']

def procuraLigacoes(cidade):
    lista = []
    id_cidade = cidade['id']
    for (id_origem,id_destino) in cidades_ligadas.keys():
        if id_cidade == id_origem:
            lista.append((id_destino,cidades_ligadas[(id_origem,id_destino)]))
        elif id_cidade == id_destino:
            lista.append((id_origem,cidades_ligadas[(id_origem,id_destino)]))
    return lista

lista_distritos = list(distritos.keys())
lista_distritos.sort()

# cria uma nova pasta chamada "arquivos_cidades"
if not os.path.exists("arquivos_cidades"):
    os.mkdir("arquivos_cidades")

if not os.path.exists("index"):
    os.mkdir("index")

#imprimir a parte inicial da página html
paghtml = f"""<!DOCTYPE html> <html>
                    <head>
                        <title>index</title>
                        <meta charset="utf-8"/>
                    </head>
                    <body>
                        <center>
                        <h1>Index Page</h1>
                        <table>
                            <tr>
                                <td>"""

# imprimir cada distrito na página html
for d in lista_distritos:
    paghtml += f"""
                                
                                    <dl>
                                        <dt>
                                            <h2><b>{d}</b></h2>
                                        </dt>
                                    </dl>
                                    <dd>
                                        <ul>"""
    #imprime cada cidade do distrito
    for (id_cidade,cidade) in distritos[d]:
        paghtml += f"""
                <li>
                    <a href={id_cidade}>{cidade}</a> 
                </li>"""

    paghtml += """
                </ul>
            </dd>
        """

# imprimir a parte final da página html
paghtml += f"""</td>
                </tr>
        </table>
        </center>
    </body>
</html>"""


for cidade in cidades:
        cidadespaghtml = f"""<!DOCTYPE html>
                                        <html>
                                                <head>
                                                    <title>cidade</title>
                                                    <meta charset="utf-8"/>
                                                </head>
                                                <body>"""
        lista_ligacoes = procuraLigacoes(cidade)
        cidadespaghtml += f"""<h1>Ligações a partir de {cidade['nome']}</h1>
        <table>
            <tr>
                <td>
                    <dl>
                        <dt>
                            <h2><b>Distrito</b></h2>
                            <p>{cidade['distrito']}</p>
                        </dt>
                    </dl>
                    <p>Quantidade de População:</p>
                    <p>{cidade['população']}</p>
                    <p>Descrição da Cidade:</p>
                    <p>{cidade['descrição']}</p>
                    <dd>
                        <ul>"""
        for (destino, distancia) in lista_ligacoes:
            nome = cidade_id_nome[destino]
            cidadespaghtml += f"""<li>
                            <a href="/{nome}">Cidade de: {nome}</a>
                        </li>
                        <p>Distância entre as cidades:</p>
                        <p>{distancia}</p>"""

        cidadespaghtml += f"""</ul>
                                </dd>
                            </td>
                        </tr>
                    </table>
                </body>"""
        with open(f"arquivos_cidades/{cidade['nome']}.html", "w", encoding="utf-8") as file_cidade:
            file_cidade.write(cidadespaghtml)

with open("index/index.html","w",encoding = "utf-8") as file:
    file.write(paghtml)
