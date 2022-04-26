from flask import Flask, request
import requests

app = Flask(__name__)

@app.route("/members", methods=['POST','GET'])
def members():
    r = requests.get(
        "http://3.211.91.158:8000",
        headers={"query_text": request.json["search_query"]}
    )
    image_paths = ["assets/images/" + x for x in r.text.split(",")]
    image_paths = ["assets/images/white_img.png"] + image_paths + ["assets/images/white_img.png"]
    print("result:", image_paths)
    return {"members": image_paths}


if __name__ == "__main__":
    app.run(debug=True)
