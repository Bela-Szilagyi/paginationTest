from flask import Flask, render_template, request, url_for, make_response

app = Flask(__name__)


@app.route('/')
def index():
    page = request.args.get('page')
    if not page:
        page = '0'
    return render_template('index.html', page=page)


if __name__ == '__main__':
    app.run(debug=True)
