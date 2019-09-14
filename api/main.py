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

from flask import Flask, jsonify
import numpy as np
import cv2
import uuid


app = Flask(__name__)
container = ['Hello World!', 'Google']

@app.route('/mainpage/')
def mainpage():
	return jsonify(container)



@app.route('/submit', methods=['POST'])
def submit_job(process_id):
	# Create an ID for the processing of the photo.
	process_id = uuid.uuid4()

	# r = request
    # convert string of image data to uint8
    # nparr = np.fromstring(r.data, np.uint8)
    
	
	# decode image
    # img = cv2.imdecode(nparr, cv2.IMREAD_COLOR)

	response = [{}]

	return jsonify(response)


@app.route('/status/<process_id>')
def get_current_status(process_id):

	status = "Generating saliency map..."

	return jsonify([{"processId": process_id,"status": status}])

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

