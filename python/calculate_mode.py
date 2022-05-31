def calculate_mode(ls):
    dictionary = {}

    # Create a dictionary of each item in the ls and their occurrences
    for item in ls:
        if item in dictionary:
            dictionary[item]+=1
        else:
            dictionary[item] = 1

    # Sort the dictionary by key in decending order
    sorted_dictionary = {k: v for k, v in sorted(dictionary.items(), key=lambda item: item[1], reverse=True)}

    # Create a list of lists of each item and how many times they occur
    occurrence_ls = [[k, v] for k, v in sorted_dictionary.items()]
    
    # Set the max occurrence as the first item in the list
    occurrence = int(occurrence_ls[0][1])
    
    mode = []

    # Loop through the lists of lists. If an item occurs more than or equal to what
    # the current highest occurrence is, push that item to the mode list
    for i in range(0, len(occurrence_ls)):
        if(int(occurrence_ls[i][1]) >= occurrence):
            mode.append(occurrence_ls[i][0])
    
    return mode