class Choice:

    """
    Esta classe é responsável pela apresentação de tratamento de escolhas
    na interface
    """

    def __init__(self, options, callbacks):

        """
        Inicializando as variáveis
        :param str[] options:
        :param function[] callbacks:
        """

        self.n = len(options)

        if len(callbacks) != self.n:

            raise NameError("Listas de tamanhos diferentes")


        self.options = options
        self.callbacks = callbacks



    def choose(self):

        """
        Essa função é responsável por realizar, de fato, a escolha
        :return function or 0:
        """

        for i in range(self.n):

            print(f'{i} - {self.options[i]}')

        op = input("< ")

        if not op.isnumeric():

            return 0

        op = int(op)

        try:

            return self.callbacks[op]

        except:

            return  0