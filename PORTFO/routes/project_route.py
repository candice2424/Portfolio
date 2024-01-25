
from models.project_model import Projet, ProjectCreate, ProjectSupp, ProjectUpdate
from fastapi import HTTPException, APIRouter, UploadFile
from dotenv import load_dotenv
from datetime import datetime
from sqlalchemy import text
from PORTFO.instance import engine
from PIL import Image
import hashlib
import psycopg
import os
import jwt
import json

route_project = APIRouter()


@route_project.post("/projet", response_model=ProjectCreate)
async def post_project(projet: ProjectCreate):
    query = text("INSERT INTO projet (title, description, picture, date_created, date_update) VALUES (:title, :description, :picture, :date_created, :date_update) RETURNING *")
    date = datetime.strptime(
        projet.date_created, "%d/%m/%Y").strftime("%Y-%m-%d")
    values = {
        "title": projet.title,
        "description": projet.description,
        "picture": projet.picture,
        "date_created": date,
        "date_update": projet.date_update,

    }
    with engine.begin() as conn:
        result = conn.execute(query, values)
        new_user = result.fetchone()
        print(values)
        return (values)


@route_project.delete("/projet/delete")
async def delete_project(projet: ProjectSupp):
    query = text("DELETE FROM projet WHERE id=:id")
    values = {"id": projet.id}

    with engine.begin() as conn:
        conn.execute(query, values)

    return {"message": "Projet supprimé avec succès"}


@route_project.post("/projet/update")
async def update_project(projet: ProjectUpdate):

    query = text("UPDATE projet SET title= :title, description= :description, picture= :picture, date_created= :date_created, date_update= :date_update WHERE id=:id")
    date = datetime.strptime(
        projet.date_created, "%d/%m/%Y").strftime("%Y-%m-%d")
    values = {
        "id": projet.id,
        "title": projet.title,
        "description": projet.description,
        "picture": projet.picture,
        "date_created": date,
        "date_update": projet.date_update
    }
    with engine.begin() as conn:
        conn.execute(query, values)

    return {"message": "Projet modifié avec succès"}
