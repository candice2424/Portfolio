from pydantic import BaseModel
from sqlalchemy import Boolean, Column, Integer, String, Date
from sqlalchemy.ext.declarative import declarative_base

Base = declarative_base()


class Projet(Base):
    __tablename__ = "Project"

    id = Column(Integer, primary_key=True, index=True)
    title = Column(String)
    description = Column(String)
    picture = Column(String)
    date_created = Column(Date)
    date_updater = Column(Date)
    enable = Column(String)


class ProjectCreate(BaseModel):

    title: str
    description: str
    picture: str
    date_created: str
    date_update: str


class ProjectRecup(BaseModel):

    title: str
    description: str
    picture: str
    date_created: str
    date_update: str


class ProjectSupp(BaseModel):

    id: int


class ProjectUpdate(BaseModel):

    id: int
    title: str
    description: str
    picture: str
    date_created: str
    date_update: str
