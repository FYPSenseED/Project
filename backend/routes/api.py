from fastapi import APIRouter, UploadFile, File
from utils.audio_processing import extract_audio
from utils.frame_extraction import extract_frames
from utils.empathy_score import calculate_empathy_score

router = APIRouter()

@router.post("/upload/")
async def upload_video(file: UploadFile = File(...)):
    video_path = f"temp/{file.filename}"
    with open(video_path, "wb") as f:
        f.write(await file.read())

    audio_path = extract_audio(video_path)
    frames = extract_frames(video_path)
    score = calculate_empathy_score(audio_path, frames)
    
    return {"empathy_score": score}
