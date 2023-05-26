import requests

class GitHubProfile:
    
    def __init__(self):
        self.url_base = 'https://api.github.com/users/cesarmayta'
        data_perfil = requests.get(self.url_base).json()
        self.nombre = data_perfil['name']
        self.biografia = data_perfil['bio']
        self.imagen = data_perfil['avatar_url']
        self.ubicacion = data_perfil['location']
        self.twitter = data_perfil['twitter_username']
        self.github = data_perfil['html_url']
        