#!/usr/bin/env python
# -*- coding: utf-8 -*-

# ----------------------------------------------
# Google App Engine Demo
# Playing with Flask in Python
# GET returns number-th position in the container
# POST appends to the container
# ----------------------------------------------

# To run locally, execute this first: export FLASK_APP=main.py
# Then this: flask run

from flask import Flask, jsonify, request
import numpy as np
import cv2
import uuid
import sys
from PIL import Image
from pathlib import Path


# ----------------------------------------------
from PIL import Image
from glob import glob
import os
from os import listdir
from os.path import isfile, join
import random
import shutil

import skimage
# from skimage.transform import rescale, resize, downscale_local_mean
import numpy
import cv2
# import glob


# import tensorflow as tf


import numpy as np
from matplotlib import pyplot as plt
import os

import scipy
from scipy import misc

import imageio
import argparse
import sys

# Will use matplotlib for showing the image
from matplotlib import pyplot as plt


# print("TensorFlow version: " + tf.__version__)


print("SciPy version: " + scipy.__version__)
# ----------------------------------------------


app = Flask(__name__)
container = ['Hello World!', 'Google']


@app.route('/mainpage/')
def mainpage():
    return jsonify(container)


@app.route('/submit', methods=['POST'])
def submit_job():

    # Create a process ID for conversion process.
    process_id = str(uuid.uuid4())

    # print('Hello world!', file=sys.stderr)

    photo_file = request.files['photo']
    photo_file_string = photo_file.read()
    npimg = np.fromstring(photo_file_string, np.uint8)

    # original_filename = photo_file.filename
    # extension = str(Path(original_filename).suffix)
    # new_filename = process_id + extension
    # photo_file.save("./" + new_filename)
    # new_filename = secure_filename(process_id + extension)

    # print(photo_file, file=sys.stderr)
    print(("npimg: " + str(npimg)), file=sys.stderr)

    # r = request
# convert string of image data to uint8
# nparr = np.fromstring(r.data, np.uint8)

    # decode image
# img = cv2.imdecode(nparr, cv2.IMREAD_COLOR)

    response = {"processId": process_id}

    return jsonify(response)


@app.route('/status/<process_id>')
def get_current_status(process_id):

    status = "Generating saliency map..."

    return jsonify([{"processId": process_id, "status": status}])


@app.route('/get/<number>')
def get(number):
    if int(number) > len(container):
        return 'That number is greater than the size of the container'
    else:
        return jsonify(container[int(number)])


@app.route('/post/<word>')
def post(word):
    container.append(word)
    return jsonify(word)


@app.route('/delete/<number>')
def delete(number):
    if int(number) > len(container):
        return 'That number is greater than the size of the container'
    else:
        container.pop(int(number))
        return 'Success'


if __name__ == '__main__':
    app.run(debug=True)
