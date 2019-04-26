import audio_to_midi_melodia as translate
import glob, os
os.chdir(os.getcwd())
for name in glob.glob("*.mp3"):
    print("processing" + name)
    translate.audio_to_midi_melodia(name, os.getcwd() + "/"+name[:-4]+".mid",10,0.25,0.1)


