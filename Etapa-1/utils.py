class Utils:
    def somarLista(lista):
        soma = sum(lista)
        return soma
    
    def inverterLista(lista):
        listaR = []
        for i in lista:
            listaR.insert(0, i)
        return listaR
    
    def moverParaTras(lista, n):
        for i in range(n):
            lista.append(lista.pop(0))
        return lista