from util import *

# Initial vector
# TODO: Randomly generate an initial state (Or start the game from the beginning)
# It reads: where is "-" will be an empty position of the vector
vector = [
    'O','O','X',
    'X','-','O',
    '-','-','X',
    ];
# True = O and False = X (we have established that the next player will be O)
player = True;

expand(vector, player)

