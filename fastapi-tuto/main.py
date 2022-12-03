from fastapi import FastAPI

app = FastAPI()


@app.get("/")
async def index():
    return {"message": "Hello World from FastApi"}


@app.get('/about')
async def about():
    return {
        "about": {
            "team": ["badreddine", "badro"]
        }
    }
