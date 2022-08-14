from sqlalchemy import Boolean, Column, ForeignKey, Integer, String
from sqlalchemy.orm import relationship
from .database import Base
from sqlalchemy.dialects.postgresql import JSONB

class NipInfo(Base):
    __tablename__ = "nipinfo"

    nip = Column(String, primary_key=True)
    result = Column(JSONB)


class User(Base):
    __tablename__ = "users"
    id = Column(Integer, primary_key=True, index=True, autoincrement=True)
    first_name = Column(String)
    last_name = Column(String)
    age = Column(Integer)
    city = Column(String)
    is_active = Column(Boolean, default=True)

