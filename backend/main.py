import time

from dotenv import load_dotenv
from fastapi import Depends, FastAPI
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy.orm import Session

from architech import crud, schemas, models
from architech.database import SessionLocal, engine
from architech.gus_client import fetch_data_from_gus

models.Base.metadata.create_all(bind=engine)


def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


app = FastAPI()

origins = ["*"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

load_dotenv()


@app.get("/users/", response_model=list[schemas.UserResponse])
def read_users(skip: int = 0, limit: int = 100, db: Session = Depends(get_db)):
    users = crud.get_users(db, skip=skip, limit=limit)
    return users


@app.post("/users/", response_model=schemas.UserResponse)
def create_user(user: schemas.User, db: Session = Depends(get_db)):
    return crud.create_user(db=db, user=user)


@app.put("/users/{user_id}", response_model=schemas.UserResponse)
async def update_user(user_id: int, user: schemas.UserUpdate, db: Session = Depends(get_db)):
    return crud.update(db=db, user=user, user_id=user_id)


@app.delete("/users/{user_id}")
async def update_user(user_id: int, db: Session = Depends(get_db)):
    return crud.delete_user(db=db, user_id=user_id)


@app.get("/users/{user_id}", response_model=schemas.UserResponse)
async def get_single_user(user_id: int, db: Session = Depends(get_db)):
    return crud.get_single_user(db=db, user_id=user_id)


@app.get("/supplier/")
async def get_single_user():
    return ["Producent", "Dystrybutor/Hurtownia", "Podwykonawca", "Dostawca usług Sprzętowco-Transportowych"]


# {'nip': '1231231'}

@app.post("/nip-info/")
def create_user(nip: schemas.Nip, db: Session = Depends(get_db)):
    time.sleep(1)
    nip_info = crud.get_nip_info_from_db(db=db, nip=nip.nip)
    if not nip_info:
        nip_info = fetch_data_from_gus(db=db, nip=nip.nip)

    return nip_info
