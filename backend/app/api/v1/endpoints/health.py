from fastapi import APIRouter

router = APIRouter(tags=["Health"])


@router.get("/health")
def health_check() -> dict:
    """Simple liveness check. Does not touch the database."""
    return {"status": "ok", "service": "resqlink-api"}
