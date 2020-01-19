import requests

class ShoppingList:

    """
    Esta classe é responsável pela manipulação da lista de compras
    """

    def __init__(self, host):

        self.host = host

    def parse(self, *args):

        commands = {
            'add' : self.post,
            'get' : self.get,
            'delete' : self.delete
        }

        try:
            commands[args[0]](args[1])

        except:
            commands[args[0]]()

        print()

    def get(self):

        response = requests.get(self.host+'compras')

        print(f'{"id":2}  {"item":16}  {"data":6}')

        for item in response.json():

            print(f"{item['id']:2}  {item['valor']:16}  {item['data']:6}")

    def post(self, value):

        response = requests.post(
            self.host + 'compras',
            data={'valor':value}
        )

        if response.status_code == 200:

            print("Item adicionado com sucesso")



    def delete(self, value):

        response = requests.delete(
            self.host + 'compras',
            data={'valor':value}
        )

        if response.status_code == 200:

            print("Item removido com sucesso")
