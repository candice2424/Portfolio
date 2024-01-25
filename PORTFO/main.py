from fastapi import FastAPI
from routes.project_route import route_project
from routes.me_route import route_me
from fastapi import FastAPI

app = FastAPI()

app.include_router(route_project)
app.include_router(route_me)


@app.get("/")
async def read_root():
    return {"message": "Hello World!"}
