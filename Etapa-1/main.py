from utils import Utils

class Main:
    # Implementação 1 - somarLista
    # --- Parâmetros ---
    listaTeste1 = [1, 2, 3, 4, 5]
    listaTeste2 = [10, 0, 5, -2, -7, -6]
    listaTeste3 = [20, 50, 80, 120, 90, 320, -1000]
    # ---

    resultado1 = Utils.somarLista(listaTeste1)
    resultado2 = Utils.somarLista(listaTeste2)
    resultado3 = Utils.somarLista(listaTeste3)
    print("--- IMPLEMENTAÇÃO 1 ---")
    print(f"soma A: {resultado1}\nsoma B: {resultado2}\nsoma C: {resultado3}")

    print()

    # Implementação 2 - inverterLista
    # --- Parâmetros ---
    listaTeste1 = [1, 2, 3, 4, 5]
    listaTeste2 = [-10, -5, 0, 3, 2, 1]
    listaTeste3 = [50, 20, -1, 0, -70, 80, 45, -500, 8]
    # ---

    resultado1 = Utils.inverterLista(listaTeste1)
    resultado2 = Utils.inverterLista(listaTeste2)
    resultado3 = Utils.inverterLista(listaTeste3)
    print("--- IMPLEMENTAÇÃO 2 ---")
    print(f"Inversão A: {resultado1}\nInversão B: {resultado2}\nInversão C: {resultado3}")
    
    print()

    # Desafio - moverParaTras
    # --- Parâmetros ---
    listaTeste1 = [1, 2, 3, 4, 5]
    listaTeste2 = [-10, -5, 0, 3, 2, 1]
    listaTeste3 = [50, 20, -1, 0, -70, 80, 45, -500, 8]
    n1 = 3
    n2 = 0
    n3 = 7
    # ---

    resultado1 = Utils.moverParaTras(listaTeste1, n1)
    resultado2 = Utils.moverParaTras(listaTeste2, n2)
    resultado3 = Utils.moverParaTras(listaTeste3, n3)
    print("--- IMPLEMENTAÇÃO 3 ---")
    print(f"Transposição A: {resultado1}\nTransposição B: {resultado2}\nTransposição C: {resultado3}")