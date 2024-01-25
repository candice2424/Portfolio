from pydantic import BaseModel
from sqlalchemy import Column, Integer, String, Date
from sqlalchemy.ext.declarative import declarative_base

Base = declarative_base()


class Me(Base):
    __tablename__ = "Me"

    id = Column(Integer, primary_key=True, index=True)
    firstname = Column(String)
    lastname = Column(String)
    email = Column(String)
    phone = Column(String)
    address = Column(String)
    city = Column(String)
    country = Column(String)
    birth_date = Column(Date)
    description = Column(String)


class MeCreate(BaseModel):

    firstname: str
    lastname: str
    email: str
    phone: str
    address: str
    city: str
    country: str
    birth_date: str
    description: str
