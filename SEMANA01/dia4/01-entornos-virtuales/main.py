# from flask import Flask, render_template, request, jsonify
import requests

response = requests.get("https://jsonplaceholder.typicode.com/todos/1")

print(response.json())