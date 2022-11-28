from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import json, requests
## Setup
app = FastAPI()
app.add_middleware(CORSMiddleware,
                   allow_methods=["GET","POST"],
                   allow_origins=["localhost", "127.0.0.1"]
                   )
data = './data/feds.json'
## End Setup

## Helper functions
def getJS():
    with open(data, 'r') as f:
        return json.loads(f.read())
def setJS(newjs):
    with open(data, 'w') as f:
        f.write(json.dumps(newjs))
def getfeds(instance = ''):
    #TODO
    url = "{}/api/v1/instance/peers".format(instance)
    res = requests.get(url).json()
    #print(f'[-] Result: {res}')
    return res

def check_cache(instance = ''):
    js = getJS()
    if instance in js['instances'].keys():
        return js['instances'][instance]
    else:
        return None

## End Helper functions
@app.post('/query_fed')
def query_fed(fed : str):
    cache_check = check_cache(fed) 
    if cache_check:
        return {'status':'cached', 'fed_obj':cache_check} 
    else:
        js = getJS()
        print(js)
        new_item = getfeds(fed)
        js['instances'][fed] = new_item
        setJS(js)
        return {'status':'uncached but found', 'fed_obj':new_item}
