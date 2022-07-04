import random

def calculateShiny(trID, srID, ppV):
    return trID ^ srID ^ (ppV & 0xFFFF) ^ (ppV >> 16)

tID = 0                 # Trainer ID - 16 bit int
sID = 0                 # Secret ID - 16 bit int
pID = 0                 # Pokemon's Personality ID - 32 bit int
shiny = 65535           # Shiny Value, if shiny < 8 then the Pokemon is Shiny
counter = 0             # How many times trough the loop?
odds = 8                # Shiny odds, shiny < odds = shiny pokemon, defaults to 8 (gens 3-5) or 16 (gens 6-8)

tID = int(input('Trainer ID? 0-65535: '))
sID = int(input('Secret ID? 0-65535: '))
odds = int(input('Shiny Odds? 8 for 1/8192, 16 for 1/4096. Max is 65535: '))

while shiny >= odds :
    pID = random.randrange(0, 0xFFFFFFFF)
    shiny = calculateShiny(tID, sID, pID)
    counter+=1
    print("Encounter: " + str(counter))
    print("Shiny Value: " + str(shiny))
    print("")

print("Shiny!!")
if shiny == 0:
    print("Square Sparkles")