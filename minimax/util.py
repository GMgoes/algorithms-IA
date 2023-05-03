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
# TODO: checkPossibilities and draw functions are similar
def checkPossibilities(vector):
    position = 0
    possibilities = []
    for element in vector:
        if(element == '-'):
            possibilities.append(position)
        position += 1
    return possibilities

def mustEndure(vector):
    return (not(checkHorizontal(vector)) and not(checkVertical(vector)) and not(checkLeandings(vector)) and not(draw(vector)))

def calculateScore(vector):
    score = 0
    if(checkHorizontal(vector)):
        score = 10
    if(checkVertical(vector)):
        score = 10
    if(checkLeandings(vector)):
        score = 10
    return score

def mini(number):
    return number * -1

# List containing the instances (Layers of each move)
listVector = []

def expand(stateVector, player):
    actual_play = stateVector.copy()
    actual_player = player
    if(not mustEndure(actual_play)):
        return 0;
    if(calculateScore(actual_play) > 0):
        if(player):
            return calculateScore(actual_play)
        else:
            return mini(calculateScore(actual_play))
    if(actual_player):
        high_score = -100
        possibilities = checkPossibilities(actual_play)
        for possibility in possibilities:
            copy = actual_play.copy()
            copy[possibility] = 'O'
            score = expand(copy, not player)
            high_score = max(high_score, score)
        return high_score
    else:
        high_score = 100
        possibilities = checkPossibilities(actual_play)
        for possibility in possibilities:
            copy = actual_play.copy()
            copy[possibility] = 'X'
            score = expand(copy, not player)
            high_score = min(high_score, score)
        return high_score
