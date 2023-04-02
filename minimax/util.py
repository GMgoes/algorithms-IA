def copyVector(listVector, vector, qtde):
    i = 0;
    while i <= qtde:
        copied = vector.copy();
        listVector.append(copied);
        i += 1;
    return listVector;

def checkHorizontal(vector):
    if(vector[0] == vector[1] and vector[1] == vector[2]):
        return True;
    if(vector[3] == vector[4] and vector[4] == vector[5]):
        return True;
    if(vector[6] == vector[7] and vector[7] == vector[8]):
        return True;
    return False;

def checkVertical(vector):
    if(vector[0] == vector[3] and vector[3] == vector[6]):
        return True;
    if(vector[1] == vector[4] and vector[4] == vector[7]):
        return True;
    if(vector[2] == vector[5] and vector[5] == vector[8]):
        return True;
    return False;

def checkLeandings(vector):
    if(vector[0] == vector[4] and vector[4] == vector[8]):
        return True;
    if(vector[2] == vector[4] and vector[4] == vector[6]):
        return True;
    return False;

def draw(vector):
    quantity = 0;
    for element in vector:
        if(element == 'X' or element == 'O'):
            quantity += 1;
    if(quantity == 9):
        return True;
    return False;

""" def calculatePossibility(stateVector):
    possibilities = 0;
    if(draw(stateVector)):
        return 0;
    for element in stateVector:
        if(element == '-'):
            possibilities += 1;
    return possibilities; """

def move(stateVector, player):
    score = 0;
    aux = 0;
    playerTime = player;
    if(draw(stateVector)):
        return 0;
    for element in stateVector:
        if(element == '-'):
            if(playerTime):
                stateVector[aux] = 'X';
                if(checkHorizontal(stateVector) or checkVertical(stateVector) or checkLeandings(stateVector)):
                    score = 10;
            else:
                stateVector[aux] = 'O';
                if(checkHorizontal(stateVector) or checkVertical(stateVector) or checkLeandings(stateVector)):
                    score = -10;
            break;
        aux += 1;
    return score + move(stateVector, not player);
