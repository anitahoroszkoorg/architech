from typing import Optional

from pydantic import BaseModel


class User(BaseModel):
    is_active: bool
    first_name: str
    last_name: str
    city: str
    age: int

    class Config:
        orm_mode = True

class UserResponse(BaseModel):
    is_active: bool
    first_name: str
    last_name: str
    city: str
    age: int
    id:int
    class Config:
        orm_mode = True


class UserUpdate(BaseModel):
    __annotations__ = {k: Optional[v] for k, v in User.__annotations__.items()}
