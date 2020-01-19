from sevlib.sections.shoppintList import ShoppingList

class Severino:

    """
    Este é um cliente cli que se relaciona com um servido node
    """

    def __init__(self):

        """
        Ao iniciar, a aplicação é direcionadar para um estad de prontidão
        """

        self.host = "http://localhost:3000/"

        self.shoppingList = ShoppingList(self.host)
