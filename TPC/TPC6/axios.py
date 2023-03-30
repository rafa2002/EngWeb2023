import json
import time
from urllib import request

Pessoas = json.load(open("pessoas.json"))["pessoas"]
for pessoa in Pessoas:
    pessoa["id"] = pessoa["id"]
    pessoa.pop(id)
    request.post("http://localhost:7777/pessoas",data=pessoa)