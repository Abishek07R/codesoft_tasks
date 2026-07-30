# Rule-Based Chatbot

print("=" * 50)
print("🤖 Welcome to Rule-Based Chatbot")
print("Type 'bye' to exit the chatbot.")
print("=" * 50)

while True:
    user = input("\nYou: ").lower()

    if user == "hello" or user == "hi":
        print("Bot: Hello! How can I help you today?")

    elif user == "how are you":
        print("Bot: I'm doing great! Thanks for asking.")

    elif user == "what is your name":
        print("Bot: My name is RuleBot.")

    elif user == "who created you":
        print("Bot: I was created using Python and simple rule-based logic.")

    elif user == "what can you do":
        print("Bot: I can answer simple questions based on predefined rules.")

    elif user == "time":
        from datetime import datetime
        current_time = datetime.now().strftime("%I:%M %p")
        print("Bot: Current time is", current_time)

    elif user == "date":
        from datetime import date
        today = date.today()
        print("Bot: Today's date is", today)

    elif user == "thank you" or user == "thanks":
        print("Bot: You're welcome!")

    elif user == "bye":
        print("Bot: Goodbye! Have a nice day.")
        break

    else:
        print("Bot: Sorry, I don't understand that. Please ask another question.")