import subprocess

def extract_audio(video_path: str) -> str:
    audio_path = video_path.replace(".mp4", ".wav")
    subprocess.call(['ffmpeg', '-i', video_path, audio_path])
    return audio_path
import subprocess

def extract_audio(video_path: str) -> str:
    audio_path = video_path.replace(".mp4", ".wav")
    subprocess.call(['ffmpeg', '-i', video_path, audio_path])
    return audio_path
