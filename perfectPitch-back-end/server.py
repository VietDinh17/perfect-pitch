from flask import Flask, render_template, request, jsonify
from werkzeug import secure_filename
import subprocess
import os

app = Flask(__name__) 

# @app.route('/upload')
# def upload_file():
#   return render_template('upload.html')

name  = ''

@app.route('/uploader', methods = ['GET', 'POST'])
def uploader_file():
  if request.method == 'POST':
     f = request.files['file']
     f.save(secure_filename(f.filename))
     subprocess.call(['./auto_script.sh'])
     return 'file uploaded successfully'

@app.route('/convert')
def convert_file():
  mydir = os.getcwd()
  path = os.path.abspath("1.png")
  print(path)
  return path




if __name__ == '__main__':
  app.run(debug = True)