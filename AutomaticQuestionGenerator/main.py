import aqgFunction


# Main Function
def main(text):
    # Create AQG object
    aqg = aqgFunction.AutomaticQuestionGenerator()

    # inputTextPath = "input file path -- ?? ../DB/db.txt"
    # readFile = open(inputTextPath, 'r+', encoding="utf8")
    #readFile = open(inputTextPath, 'r+', encoding="utf8", errors = 'ignore')

    inputText = text
    #inputText = '''I am Dipta. I love codding. I build my carrier with this.'''

    questionList = aqg.aqgParse(inputText)
    # aqg.display(questionList)
    print("q list")
    print(questionList)
    #aqg.DisNormal(questionList)

    return questionList


# Call Main Function
if __name__ == "__main__":
    main()

