from fastapi import FastAPI
from routes.api import router

app = FastAPI(title="SenseEd API")

app.include_router(router)