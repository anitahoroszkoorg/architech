from sqlalchemy.orm import Session

from . import models, schemas


# def get_user(db: Session, user_id: int):
#     return db.query(models.User).filter(models.User.id == user_id).first()
#
#
def get_single_user(db: Session, user_id: int):
    return db.query(models.User).filter(models.User.id == user_id).first()


def get_users(db: Session, skip: int = 0, limit: int = 100):
    return db.query(models.User).offset(skip).limit(limit).all()


def delete_user(db: Session, user_id):
    db.query(models.User).filter(models.User.id == user_id).delete()
    db.commit()


def create_user(db: Session, user: schemas.User):
    db_user = models.User(
        first_name=user.first_name,
        last_name=user.last_name,
        age=user.age,
        city=user.city,
        is_active=user.is_active,
    )
    db.add(db_user)
    db.commit()
    db.refresh(db_user)
    return db_user


def update(db: Session, user: schemas.User, user_id):
    a_user = db.query(models.User).filter(models.User.id == user_id).one()
    for key, value in dict(user).items():
        if value is not None:
            setattr(a_user, key, value)
    db.commit()
    db.refresh(a_user)
    return a_user


def get_nip_info_from_db(db: Session, nip: str):
    try:
        return db.query(models.NipInfo).filter(models.NipInfo.nip == nip).first().result
    except Exception:
        return None


def save_gus_response(db, nip):
    nip_info = models.NipInfo(
        nip=nip,
    )
    db.add(nip_info)
    db.commit()
    db.refresh(nip_info)
