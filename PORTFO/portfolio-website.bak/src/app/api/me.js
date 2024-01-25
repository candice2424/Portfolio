class Me(Base):
__tablename__ = 'Me'

id = Column(Integer, primary_key=True, index= True )
Prenom = Column(String)
Email = Column(String)
Telephone = Column(int)
Ville = Column(String)
Pays = Column (String)
DatedeNaissance = Column(int)
Description = Column(string)

class Me (BaseModel)

    id = str
    Prenom = str
    Email = str
    Telephone = int
    Ville = str
    Pays = str
    DatedeNaissance = int
    Description = str
        