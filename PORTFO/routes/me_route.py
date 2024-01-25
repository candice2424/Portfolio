from models.me_model import Me, MeCreate
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

route_me = APIRouter()


@route_me.post("/me/create", response_model=MeCreate)
async def post_project(me: MeCreate):
    query = text("INSERT INTO me (firstname, lastname, email, phone, address, city, country, birth_date, description) VALUES (:firstname, :lastname, :email, :phone, :address, :city, :country, :birth_date, :description) RETURNING *")
    date = datetime.strptime(
        me.birth_date, "%d/%m/%Y").strftime("%Y-%m-%d")
    values = {
        "firstname": me.firstname,
        "lastname": me.lastname,
        "email": me.email,
        "phone": me.phone,
        "address": me.address,
        "city": me.city,
        "country": me.country,
        "birth_date": date,
        "description": me.description

    }
    with engine.begin() as conn:
        result = conn.execute(query, values)
        new_user = result.fetchone()
        print(values)
        return (values)


@route_me.get("/aboutme")
async def get_me(me: MeCreate):
    query = text(
        "SELECT firstname,lastname,email,phone,address,city,country,birth_date,description FROM me")
    values = {
        "firstname": "Candice",
        "lastname": "coulibaly",
        "email": "c.coulibaly24@icloud.com",
        "phone": "0778461606",
        "address": "23 rue Charles Noël 94290 Villeneuve-le-Roi",
        "city": "Villeneuve-le-Roi",
        "country": "French",
        "birth_date": "24-09-2002",
        "description": "jjs"
    }

    with engine.begin() as conn:
        result = conn.execute(query, values)
        row = result.fetchone()

    return {"message": "Projet récuperé avec succès"}
